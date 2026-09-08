# Analytics Backend for IPTV Holland

Complete analytics system with real-time visitor tracking and beautiful dashboard.

## Features

- **Real-time visitor tracking**
- **Page view analytics**
- **Referrer tracking** (know where your visitors come from)
- **Device, Browser & OS statistics**
- **Daily/Weekly/Monthly reports**
- **Live visitor count**
- **Event tracking** (button clicks, form submissions)
- **Beautiful dashboard** with interactive charts

## Installation

```bash
cd analytics-backend
npm install
```

## Usage

### 1. Start the Analytics Server

```bash
npm start
```

The server will run on http://localhost:3002

### 2. Access the Dashboard

Open your browser and go to:
```
http://localhost:3002/dashboard.html
```

### 3. Tracking Script

The tracking script is automatically added to your main website at:
```html
<script src="http://localhost:3002/tracker.js" defer></script>
```

## API Endpoints

### Track Page View
```javascript
POST /api/track
Body: {
  visitorId: string,
  pageUrl: string,
  referrer: string,
  userAgent: string,
  country: string
}
```

### Track Custom Event
```javascript
POST /api/event
Body: {
  visitorId: string,
  eventName: string,
  eventData: object
}
```

### Get Dashboard Stats
```javascript
GET /api/stats?range=7
```

### Get Realtime Stats
```javascript
GET /api/realtime
```

## Dashboard Features

### 📊 Stats Cards
- Total Visitors
- Total Page Views
- Today's Visitors
- Live Active Users

### 📈 Charts
- Daily Visitors & Page Views (Line Chart)
- Traffic Sources (Doughnut Chart)
- Browser Distribution (Bar Chart)
- Operating Systems (Pie Chart)

### 📋 Tables
- Top Pages
- Top Referrers
- Recent Activity

### ⏱️ Time Filters
- 7 Days
- 14 Days
- 30 Days
- 90 Days

## Data Tracked

### Visitor Information
- Unique visitor ID (stored in localStorage)
- First visit timestamp
- Last visit timestamp
- Total number of visits

### Page Views
- Page URL
- Referrer (where they came from)
- Timestamp
- Device type (Desktop/Mobile/Tablet)
- Browser
- Operating System
- IP Address
- User Agent

### Custom Events
- Button clicks
- Form submissions
- Custom tracking via `window.trackAnalytics()`

## Custom Event Tracking

You can track custom events from your website:

```javascript
// Track custom event
window.trackAnalytics('purchase', {
  plan: '12-months',
  price: 48
});

// Track signup
window.trackAnalytics('signup', {
  method: 'email'
});
```

## Database

Uses SQLite (`analytics.db`) for lightweight, file-based storage.

### Tables
- `visitors` - Unique visitor records
- `page_views` - All page view events
- `events` - Custom event tracking

## Production Deployment

For production, update the `ANALYTICS_URL` in `tracker.js` to your production server URL:

```javascript
const ANALYTICS_URL = 'https://your-analytics-server.com';
```

## Security

- Rate limiting (100 requests per 15 minutes per IP)
- CORS enabled for your domain
- No sensitive data collection
- GDPR compliant (no cookies, only localStorage)

## Performance

- Lightweight tracking script (< 2KB)
- Async tracking (doesn't block page load)
- Auto-refresh dashboard every 30 seconds
- Optimized SQLite queries

## Tech Stack

- **Backend**: Node.js + Express
- **Database**: SQLite (better-sqlite3)
- **Frontend**: Vanilla JavaScript + Chart.js
- **Styling**: Modern CSS with gradients

## Support

For issues or questions, contact the development team.

---

Built with ❤️ for IPTV Holland
