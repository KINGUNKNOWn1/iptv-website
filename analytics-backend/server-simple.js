const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const rateLimit = require('express-rate-limit');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3002;

// Admin credentials (in production, use environment variables and hashed passwords)
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'iptv2024secure';

// Data file paths
const DATA_DIR = path.join(__dirname, 'data');
const VISITORS_FILE = path.join(DATA_DIR, 'visitors.json');
const PAGEVIEWS_FILE = path.join(DATA_DIR, 'pageviews.json');
const EVENTS_FILE = path.join(DATA_DIR, 'events.json');

// Create data directory if it doesn't exist
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR);
}

// Initialize data files
if (!fs.existsSync(VISITORS_FILE)) {
  fs.writeFileSync(VISITORS_FILE, JSON.stringify([]));
}
if (!fs.existsSync(PAGEVIEWS_FILE)) {
  fs.writeFileSync(PAGEVIEWS_FILE, JSON.stringify([]));
}
if (!fs.existsSync(EVENTS_FILE)) {
  fs.writeFileSync(EVENTS_FILE, JSON.stringify([]));
}

// Helper functions
function readData(file) {
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (error) {
    return [];
  }
}

function writeData(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

function parseUserAgent(userAgent) {
  const ua = userAgent || '';

  let deviceType = 'Desktop';
  if (/mobile/i.test(ua)) deviceType = 'Mobile';
  else if (/tablet|ipad/i.test(ua)) deviceType = 'Tablet';

  let browser = 'Other';
  if (/chrome/i.test(ua) && !/edg/i.test(ua)) browser = 'Chrome';
  else if (/safari/i.test(ua) && !/chrome/i.test(ua)) browser = 'Safari';
  else if (/firefox/i.test(ua)) browser = 'Firefox';
  else if (/edg/i.test(ua)) browser = 'Edge';

  let os = 'Other';
  if (/windows/i.test(ua)) os = 'Windows';
  else if (/mac/i.test(ua)) os = 'MacOS';
  else if (/linux/i.test(ua)) os = 'Linux';
  else if (/android/i.test(ua)) os = 'Android';
  else if (/ios|iphone|ipad/i.test(ua)) os = 'iOS';

  return { deviceType, browser, os };
}

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Session middleware
app.use(session({
  secret: 'iptv-analytics-secret-key-2024',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // Set to true in production with HTTPS
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// Serve static files (only login.html is public)
app.use(express.static('public'));

// Rate limiting
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});

// Authentication middleware
function requireAuth(req, res, next) {
  if (req.session && req.session.isAuthenticated) {
    return next();
  }

  // If requesting HTML page, redirect to login
  if (req.path.endsWith('.html') || req.path === '/') {
    return res.redirect('/login.html');
  }

  // If requesting API, return 401
  return res.status(401).json({ error: 'Unauthorized. Please login.' });
}

// Login route
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    req.session.isAuthenticated = true;
    req.session.username = username;
    res.json({ success: true, message: 'Login successful' });
  } else {
    res.status(401).json({ error: 'Invalid username or password' });
  }
});

// Logout route
app.post('/api/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: 'Logout failed' });
    }
    res.json({ success: true, message: 'Logged out successfully' });
  });
});

// Check authentication status
app.get('/api/auth/status', (req, res) => {
  res.json({
    isAuthenticated: req.session && req.session.isAuthenticated === true,
    username: req.session?.username || null
  });
});

// Track page view
app.post('/api/track', apiLimiter, (req, res) => {
  try {
    const { visitorId, pageUrl, referrer, userAgent, country } = req.body;
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const { deviceType, browser, os } = parseUserAgent(userAgent);

    // Update visitors
    const visitors = readData(VISITORS_FILE);
    const existingVisitor = visitors.find(v => v.visitor_id === visitorId);

    if (existingVisitor) {
      existingVisitor.last_seen = new Date().toISOString();
      existingVisitor.total_visits += 1;
    } else {
      visitors.push({
        visitor_id: visitorId,
        first_seen: new Date().toISOString(),
        last_seen: new Date().toISOString(),
        total_visits: 1
      });
    }
    writeData(VISITORS_FILE, visitors);

    // Add page view
    const pageviews = readData(PAGEVIEWS_FILE);
    pageviews.push({
      visitor_id: visitorId,
      page_url: pageUrl,
      referrer: referrer || null,
      user_agent: userAgent || null,
      ip_address: ip,
      country: country || null,
      device_type: deviceType,
      browser: browser,
      os: os,
      timestamp: new Date().toISOString()
    });
    writeData(PAGEVIEWS_FILE, pageviews);

    res.json({ success: true });
  } catch (error) {
    console.error('Tracking error:', error);
    res.status(500).json({ error: 'Failed to track' });
  }
});

// Track custom event
app.post('/api/event', apiLimiter, (req, res) => {
  try {
    const { visitorId, eventName, eventData } = req.body;
    const events = readData(EVENTS_FILE);

    events.push({
      visitor_id: visitorId,
      event_name: eventName,
      event_data: eventData || {},
      timestamp: new Date().toISOString()
    });

    writeData(EVENTS_FILE, events);
    res.json({ success: true });
  } catch (error) {
    console.error('Event tracking error:', error);
    res.status(500).json({ error: 'Failed to track event' });
  }
});

// Get dashboard stats (protected)
app.get('/api/stats', requireAuth, (req, res) => {
  try {
    const { range = '7' } = req.query;
    const days = parseInt(range);
    const now = new Date();
    const rangeDate = new Date(now - days * 24 * 60 * 60 * 1000);
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const visitors = readData(VISITORS_FILE);
    const pageviews = readData(PAGEVIEWS_FILE);

    // Total stats
    const totalVisitors = visitors.length;
    const totalPageViews = pageviews.length;

    // Today's stats
    const todayPageViews = pageviews.filter(pv => new Date(pv.timestamp) >= today);
    const todayVisitors = new Set(todayPageViews.map(pv => pv.visitor_id)).size;

    // Range stats
    const rangePageViews = pageviews.filter(pv => new Date(pv.timestamp) >= rangeDate);
    const rangeVisitors = new Set(rangePageViews.map(pv => pv.visitor_id)).size;

    // Top pages
    const pageCount = {};
    rangePageViews.forEach(pv => {
      pageCount[pv.page_url] = (pageCount[pv.page_url] || 0) + 1;
    });
    const topPages = Object.entries(pageCount)
      .map(([page_url, views]) => ({ page_url, views }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 10);

    // Top referrers
    const referrerCount = {};
    rangePageViews.forEach(pv => {
      if (pv.referrer && pv.referrer !== '') {
        referrerCount[pv.referrer] = (referrerCount[pv.referrer] || 0) + 1;
      }
    });
    const topReferrers = Object.entries(referrerCount)
      .map(([referrer, count]) => ({ referrer, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);

    // Device stats
    const deviceCount = {};
    rangePageViews.forEach(pv => {
      deviceCount[pv.device_type] = (deviceCount[pv.device_type] || 0) + 1;
    });
    const deviceStats = Object.entries(deviceCount).map(([device_type, count]) => ({
      device_type,
      count
    }));

    // Browser stats
    const browserCount = {};
    rangePageViews.forEach(pv => {
      browserCount[pv.browser] = (browserCount[pv.browser] || 0) + 1;
    });
    const browserStats = Object.entries(browserCount)
      .map(([browser, count]) => ({ browser, count }))
      .sort((a, b) => b.count - a.count);

    // OS stats
    const osCount = {};
    rangePageViews.forEach(pv => {
      osCount[pv.os] = (osCount[pv.os] || 0) + 1;
    });
    const osStats = Object.entries(osCount)
      .map(([os, count]) => ({ os, count }))
      .sort((a, b) => b.count - a.count);

    // Daily views
    const dailyCount = {};
    rangePageViews.forEach(pv => {
      const date = pv.timestamp.split('T')[0];
      if (!dailyCount[date]) {
        dailyCount[date] = { views: 0, visitors: new Set() };
      }
      dailyCount[date].views++;
      dailyCount[date].visitors.add(pv.visitor_id);
    });
    const dailyViews = Object.entries(dailyCount)
      .map(([date, data]) => ({
        date,
        views: data.views,
        visitors: data.visitors.size
      }))
      .sort((a, b) => a.date.localeCompare(b.date));

    // Hourly views for today
    const hourlyCount = {};
    todayPageViews.forEach(pv => {
      const hour = new Date(pv.timestamp).getHours().toString().padStart(2, '0');
      hourlyCount[hour] = (hourlyCount[hour] || 0) + 1;
    });
    const hourlyViews = Object.entries(hourlyCount)
      .map(([hour, views]) => ({ hour, views }))
      .sort((a, b) => a.hour.localeCompare(b.hour));

    res.json({
      total: {
        visitors: totalVisitors,
        pageViews: totalPageViews
      },
      today: {
        visitors: todayVisitors,
        pageViews: todayPageViews.length
      },
      range: {
        visitors: rangeVisitors,
        pageViews: rangePageViews.length,
        days: days
      },
      topPages,
      topReferrers,
      deviceStats,
      browserStats,
      osStats,
      dailyViews,
      hourlyViews
    });
  } catch (error) {
    console.error('Stats error:', error);
    res.status(500).json({ error: 'Failed to get stats' });
  }
});

// Get realtime stats (protected)
app.get('/api/realtime', requireAuth, (req, res) => {
  try {
    const pageviews = readData(PAGEVIEWS_FILE);
    const thirtyMinsAgo = new Date(Date.now() - 30 * 60 * 1000);

    const recentViews = pageviews.filter(pv => new Date(pv.timestamp) >= thirtyMinsAgo);
    const activeNow = new Set(recentViews.map(pv => pv.visitor_id)).size;

    res.json({
      activeNow,
      recentViews: recentViews.slice(-20).reverse()
    });
  } catch (error) {
    console.error('Realtime stats error:', error);
    res.status(500).json({ error: 'Failed to get realtime stats' });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`✅ Analytics server running on http://localhost:${PORT}`);
  console.log(`📊 Dashboard: http://localhost:${PORT}/dashboard.html`);
  console.log(`\n🎯 Open your browser and visit the dashboard!`);
});
