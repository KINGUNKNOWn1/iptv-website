const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 3002;

// Initialize SQLite database
const db = new Database('analytics.db');

// Create tables
db.exec(`
  CREATE TABLE IF NOT EXISTS visitors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    visitor_id TEXT UNIQUE NOT NULL,
    first_seen DATETIME DEFAULT CURRENT_TIMESTAMP,
    last_seen DATETIME DEFAULT CURRENT_TIMESTAMP,
    total_visits INTEGER DEFAULT 1
  );

  CREATE TABLE IF NOT EXISTS page_views (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    visitor_id TEXT NOT NULL,
    page_url TEXT NOT NULL,
    referrer TEXT,
    user_agent TEXT,
    ip_address TEXT,
    country TEXT,
    device_type TEXT,
    browser TEXT,
    os TEXT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    visitor_id TEXT NOT NULL,
    event_name TEXT NOT NULL,
    event_data TEXT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE INDEX IF NOT EXISTS idx_visitor_id ON page_views(visitor_id);
  CREATE INDEX IF NOT EXISTS idx_timestamp ON page_views(timestamp);
  CREATE INDEX IF NOT EXISTS idx_page_url ON page_views(page_url);
`);

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.static('public'));

// Rate limiting
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

// Helper function to parse user agent
function parseUserAgent(userAgent) {
  const ua = userAgent || '';

  // Device type
  let deviceType = 'Desktop';
  if (/mobile/i.test(ua)) deviceType = 'Mobile';
  else if (/tablet|ipad/i.test(ua)) deviceType = 'Tablet';

  // Browser
  let browser = 'Other';
  if (/chrome/i.test(ua) && !/edg/i.test(ua)) browser = 'Chrome';
  else if (/safari/i.test(ua) && !/chrome/i.test(ua)) browser = 'Safari';
  else if (/firefox/i.test(ua)) browser = 'Firefox';
  else if (/edg/i.test(ua)) browser = 'Edge';

  // OS
  let os = 'Other';
  if (/windows/i.test(ua)) os = 'Windows';
  else if (/mac/i.test(ua)) os = 'MacOS';
  else if (/linux/i.test(ua)) os = 'Linux';
  else if (/android/i.test(ua)) os = 'Android';
  else if (/ios|iphone|ipad/i.test(ua)) os = 'iOS';

  return { deviceType, browser, os };
}

// Track page view
app.post('/api/track', apiLimiter, (req, res) => {
  try {
    const {
      visitorId,
      pageUrl,
      referrer,
      userAgent,
      country
    } = req.body;

    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const { deviceType, browser, os } = parseUserAgent(userAgent);

    // Update or create visitor
    const visitorStmt = db.prepare(`
      INSERT INTO visitors (visitor_id, last_seen, total_visits)
      VALUES (?, CURRENT_TIMESTAMP, 1)
      ON CONFLICT(visitor_id) DO UPDATE SET
        last_seen = CURRENT_TIMESTAMP,
        total_visits = total_visits + 1
    `);
    visitorStmt.run(visitorId);

    // Record page view
    const pageViewStmt = db.prepare(`
      INSERT INTO page_views
      (visitor_id, page_url, referrer, user_agent, ip_address, country, device_type, browser, os)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);
    pageViewStmt.run(
      visitorId,
      pageUrl,
      referrer || null,
      userAgent || null,
      ip,
      country || null,
      deviceType,
      browser,
      os
    );

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

    const stmt = db.prepare(`
      INSERT INTO events (visitor_id, event_name, event_data)
      VALUES (?, ?, ?)
    `);
    stmt.run(visitorId, eventName, JSON.stringify(eventData || {}));

    res.json({ success: true });
  } catch (error) {
    console.error('Event tracking error:', error);
    res.status(500).json({ error: 'Failed to track event' });
  }
});

// Get dashboard stats
app.get('/api/stats', (req, res) => {
  try {
    const { range = '7' } = req.query; // days

    // Total stats
    const totalVisitors = db.prepare('SELECT COUNT(*) as count FROM visitors').get().count;
    const totalPageViews = db.prepare('SELECT COUNT(*) as count FROM page_views').get().count;

    // Today's stats
    const todayVisitors = db.prepare(`
      SELECT COUNT(DISTINCT visitor_id) as count
      FROM page_views
      WHERE DATE(timestamp) = DATE('now')
    `).get().count;

    const todayPageViews = db.prepare(`
      SELECT COUNT(*) as count
      FROM page_views
      WHERE DATE(timestamp) = DATE('now')
    `).get().count;

    // Stats for the selected range
    const rangeVisitors = db.prepare(`
      SELECT COUNT(DISTINCT visitor_id) as count
      FROM page_views
      WHERE timestamp >= datetime('now', '-${parseInt(range)} days')
    `).get().count;

    const rangePageViews = db.prepare(`
      SELECT COUNT(*) as count
      FROM page_views
      WHERE timestamp >= datetime('now', '-${parseInt(range)} days')
    `).get().count;

    // Top pages
    const topPages = db.prepare(`
      SELECT page_url, COUNT(*) as views
      FROM page_views
      WHERE timestamp >= datetime('now', '-${parseInt(range)} days')
      GROUP BY page_url
      ORDER BY views DESC
      LIMIT 10
    `).all();

    // Top referrers
    const topReferrers = db.prepare(`
      SELECT referrer, COUNT(*) as count
      FROM page_views
      WHERE referrer IS NOT NULL
        AND referrer != ''
        AND timestamp >= datetime('now', '-${parseInt(range)} days')
      GROUP BY referrer
      ORDER BY count DESC
      LIMIT 10
    `).all();

    // Device breakdown
    const deviceStats = db.prepare(`
      SELECT device_type, COUNT(*) as count
      FROM page_views
      WHERE timestamp >= datetime('now', '-${parseInt(range)} days')
      GROUP BY device_type
    `).all();

    // Browser breakdown
    const browserStats = db.prepare(`
      SELECT browser, COUNT(*) as count
      FROM page_views
      WHERE timestamp >= datetime('now', '-${parseInt(range)} days')
      GROUP BY browser
      ORDER BY count DESC
    `).all();

    // OS breakdown
    const osStats = db.prepare(`
      SELECT os, COUNT(*) as count
      FROM page_views
      WHERE timestamp >= datetime('now', '-${parseInt(range)} days')
      GROUP BY os
      ORDER BY count DESC
    `).all();

    // Daily views for chart
    const dailyViews = db.prepare(`
      SELECT DATE(timestamp) as date,
             COUNT(*) as views,
             COUNT(DISTINCT visitor_id) as visitors
      FROM page_views
      WHERE timestamp >= datetime('now', '-${parseInt(range)} days')
      GROUP BY DATE(timestamp)
      ORDER BY date ASC
    `).all();

    // Hourly views for today
    const hourlyViews = db.prepare(`
      SELECT strftime('%H', timestamp) as hour,
             COUNT(*) as views
      FROM page_views
      WHERE DATE(timestamp) = DATE('now')
      GROUP BY hour
      ORDER BY hour ASC
    `).all();

    res.json({
      total: {
        visitors: totalVisitors,
        pageViews: totalPageViews
      },
      today: {
        visitors: todayVisitors,
        pageViews: todayPageViews
      },
      range: {
        visitors: rangeVisitors,
        pageViews: rangePageViews,
        days: parseInt(range)
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

// Get realtime stats (last 30 minutes)
app.get('/api/realtime', (req, res) => {
  try {
    const activeNow = db.prepare(`
      SELECT COUNT(DISTINCT visitor_id) as count
      FROM page_views
      WHERE timestamp >= datetime('now', '-30 minutes')
    `).get().count;

    const recentViews = db.prepare(`
      SELECT page_url, timestamp, device_type, browser
      FROM page_views
      WHERE timestamp >= datetime('now', '-30 minutes')
      ORDER BY timestamp DESC
      LIMIT 20
    `).all();

    res.json({
      activeNow,
      recentViews
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
  console.log(`Analytics server running on http://localhost:${PORT}`);
  console.log(`Dashboard: http://localhost:${PORT}/dashboard.html`);
});
