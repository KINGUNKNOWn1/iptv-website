# IPTV Holland - Deployment Information

## 🌐 Live URLs

### Main Website
- **Production URL**: https://iptv-website-phi.vercel.app
- **Vercel Dashboard**: https://vercel.com/kingunknown22s-projects/iptv-website

### Analytics Backend
- **API URL**: https://analytics-backend-ten.vercel.app
- **Dashboard Login**: https://analytics-backend-ten.vercel.app/login.html
- **Dashboard**: https://analytics-backend-ten.vercel.app/dashboard.html
- **Vercel Dashboard**: https://vercel.com/kingunknown22s-projects/analytics-backend

## 🔐 Analytics Dashboard Credentials

**Username**: `admin`
**Password**: `iptv2024secure`

> **Important**: Change these credentials for production! Update them in `analytics-backend/server-simple.js` lines 12-13.

## 📊 Analytics API Endpoints

Base URL: `https://analytics-backend-ten.vercel.app`

### Public Endpoints (No Auth Required)

#### Track Page View
```bash
POST /api/track
Content-Type: application/json

{
  "visitorId": "v_abc123_1234567890",
  "pageUrl": "https://example.com/page",
  "referrer": "https://google.com",
  "userAgent": "Mozilla/5.0...",
  "country": "NL"
}
```

#### Track Custom Event
```bash
POST /api/event
Content-Type: application/json

{
  "visitorId": "v_abc123_1234567890",
  "eventName": "button_click",
  "eventData": {
    "buttonText": "Koop Nu",
    "page": "/pricing"
  }
}
```

#### Health Check
```bash
GET /health

Response:
{
  "status": "ok",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

### Protected Endpoints (Auth Required)

#### Login
```bash
POST /api/login
Content-Type: application/json

{
  "username": "admin",
  "password": "iptv2024secure"
}

Response:
{
  "success": true,
  "message": "Login successful"
}
```

#### Logout
```bash
POST /api/logout

Response:
{
  "success": true,
  "message": "Logged out successfully"
}
```

#### Check Auth Status
```bash
GET /api/auth/status

Response:
{
  "isAuthenticated": true,
  "username": "admin"
}
```

#### Get Dashboard Stats
```bash
GET /api/stats?range=7

Query Parameters:
- range: Number of days (default: 7)

Response:
{
  "total": {
    "visitors": 1234,
    "pageViews": 5678
  },
  "today": {
    "visitors": 45,
    "pageViews": 123
  },
  "range": {
    "visitors": 234,
    "pageViews": 789,
    "days": 7
  },
  "topPages": [
    { "page_url": "/", "views": 234 },
    { "page_url": "/pricing", "views": 123 }
  ],
  "topReferrers": [
    { "referrer": "https://google.com", "count": 45 }
  ],
  "deviceStats": [
    { "device_type": "Desktop", "count": 123 },
    { "device_type": "Mobile", "count": 89 }
  ],
  "browserStats": [
    { "browser": "Chrome", "count": 145 },
    { "browser": "Safari", "count": 67 }
  ],
  "osStats": [
    { "os": "Windows", "count": 98 },
    { "os": "MacOS", "count": 76 }
  ],
  "dailyViews": [
    { "date": "2024-01-01", "views": 45, "visitors": 23 }
  ],
  "hourlyViews": [
    { "hour": "10", "views": 12 }
  ]
}
```

#### Get Realtime Stats
```bash
GET /api/realtime

Response:
{
  "activeNow": 5,
  "recentViews": [
    {
      "page_url": "/pricing",
      "timestamp": "2024-01-01T12:00:00.000Z",
      "device_type": "Desktop",
      "browser": "Chrome"
    }
  ]
}
```

## 📝 Using the Analytics from JavaScript

The tracking script is automatically loaded on all pages. You can also track custom events:

```javascript
// Track custom event
window.trackAnalytics('purchase', {
  plan: '12-months',
  price: 48,
  currency: 'EUR'
});

// Track signup
window.trackAnalytics('signup', {
  method: 'email'
});

// Track button click (automatic)
// All button and link clicks are tracked automatically

// Track form submission (automatic)
// All form submissions are tracked automatically
```

## 🔧 Development

### Local Development

**Main Website:**
```bash
cd /Users/anassouani/Desktop/iptvholland/iptv-website
npm run dev
# Runs on http://localhost:3001
```

**Analytics Backend:**
```bash
cd /Users/anassouani/Desktop/iptvholland/iptv-website/analytics-backend
npm start
# Runs on http://localhost:3002
# Dashboard: http://localhost:3002/dashboard.html
# Login: http://localhost:3002/login.html
```

### Deploy to Vercel

```bash
# Deploy main website
vercel --prod

# Deploy analytics backend
cd analytics-backend
vercel --prod
```

## 🔒 Security Notes

1. **Change Default Credentials**: Update username/password in `server-simple.js`
2. **Use Environment Variables**: For production, use Vercel environment variables instead of hardcoded credentials
3. **Enable HTTPS**: Vercel provides automatic HTTPS
4. **Session Security**: Sessions expire after 24 hours
5. **Rate Limiting**: 100 requests per 15 minutes per IP
6. **CORS**: Currently set to allow all origins (`*`). Restrict this in production:
   ```javascript
   app.use(cors({
     origin: 'https://iptv-website-phi.vercel.app',
     credentials: true
   }));
   ```

## 📈 SEO Optimization

The website is optimized for the following keywords (from holland-iptv.com analysis):

- iptv kopen
- iptv abonnement kopen
- iptv aanbieders
- iptv nederland
- beste iptv app
- nederlandse iptv
- iptv aanbieder
- iptv legaal

All meta tags, structured data, and content are optimized for these keywords.

## 🎨 Features

### Main Website
- Premium IPTV landing page
- Responsive design (mobile, tablet, desktop)
- Device compatibility showcase (8+ devices)
- Pricing plans (23€, 32€, 48€)
- Channel preview carousel
- WhatsApp contact integration
- SEO optimized
- Analytics tracking

### Analytics Dashboard
- Real-time visitor tracking
- Page view analytics
- Referrer tracking
- Device, browser, OS statistics
- Daily/weekly/monthly reports
- Live visitor count
- Event tracking
- Beautiful charts (Chart.js)
- Password protected
- Session-based authentication

## 📞 Support

For questions or issues:
- Check Vercel deployment logs
- Review browser console for errors
- Check analytics dashboard for tracking issues

## 🚀 Next Steps

1. **Add Custom Domain**: Configure your own domain in Vercel
2. **Update Credentials**: Change admin username/password
3. **Environment Variables**: Move credentials to Vercel environment variables
4. **CORS Configuration**: Restrict CORS to your domain only
5. **Analytics Storage**: Consider upgrading to a database for production (Vercel Postgres, etc.)
6. **Email Notifications**: Add email alerts for important events
7. **Backup System**: Implement regular data backups
8. **Monitoring**: Set up uptime monitoring (Vercel Analytics, UptimeRobot, etc.)

---

Generated on: 2024-01-01
Last Updated: 2024-01-01
