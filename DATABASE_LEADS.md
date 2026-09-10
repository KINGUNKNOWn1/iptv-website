# Email Leads Database System

## ✅ Setup Complete!

Your email collection system is now connected to a **SQLite database** that stores all leads permanently.

## 🚀 Quick Start

### 1. Start the Backend Server

The analytics backend server is already running on **http://localhost:3002**

If you need to start it manually:
```bash
cd analytics-backend
node server.js
```

### 2. Test Email Collection

1. Go to http://localhost:3001/prijzen
2. Click "Passer la commande" on any plan
3. Enter a test email: `test@example.com`
4. Click "Doorgaan naar WhatsApp"
5. Email is now saved in the database!

### 3. View Collected Leads

Open the leads admin page:
**http://localhost:3002/leads.html**

This page shows:
- ✅ Total leads collected
- ✅ Leads collected today
- ✅ Most popular plan
- ✅ Plan breakdown chart
- ✅ Full list of all leads
- ✅ Export to CSV/JSON buttons

## 📊 Database Details

**Database Location**: `analytics-backend/analytics.db` (SQLite)

**Leads Table Schema**:
```sql
CREATE TABLE leads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL,
  plan TEXT NOT NULL,
  source TEXT NOT NULL,
  visitor_id TEXT,
  user_agent TEXT,
  ip_address TEXT,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## 🔌 API Endpoints

### Save Lead (POST)
```bash
POST http://localhost:3002/api/leads
Content-Type: application/json

{
  "email": "customer@example.com",
  "plan": "IPTV Premium - 12 maanden",
  "source": "pricing_page",
  "visitorId": "abc123"
}

Response:
{
  "success": true,
  "leadId": 42
}
```

### Get All Leads (GET)
```bash
GET http://localhost:3002/api/leads?limit=100&offset=0

Response:
{
  "leads": [...],
  "total": 42,
  "limit": 100,
  "offset": 0
}
```

### Get Leads Stats (GET)
```bash
GET http://localhost:3002/api/leads/stats

Response:
{
  "total": 42,
  "today": 5,
  "planBreakdown": [
    { "plan": "IPTV Premium - 12 maanden", "count": 25 },
    { "plan": "IPTV Premium - 6 maanden", "count": 12 },
    { "plan": "IPTV Premium - 3 maanden", "count": 5 }
  ],
  "recentLeads": [...]
}
```

## 📥 Export Leads

### From Admin Page
1. Go to http://localhost:3002/leads.html
2. Click "📥 Export als CSV" or "📄 Export als JSON"
3. File downloads automatically

### From Browser Console
```javascript
// Still works as backup
exportLeadsToCSV()
exportLeadsToJSON()
```

### Direct Database Access
```bash
cd analytics-backend
sqlite3 analytics.db

# View all leads
SELECT * FROM leads;

# Export to CSV
.mode csv
.output leads.csv
SELECT * FROM leads;
.quit
```

## 🔄 How It Works

1. **Customer clicks order button** → Email modal opens
2. **Customer enters email** → Frontend validates email format
3. **Form submitted** → Email sent to backend API: `POST /api/leads`
4. **Backend saves to database** → SQLite stores permanently
5. **Backup to localStorage** → Fallback if backend fails
6. **WhatsApp opens** → Email included in message

## 🛡️ Features

✅ **Persistent Storage** - All leads saved in database, never lost
✅ **Backup System** - Also saves to localStorage as failsafe
✅ **IP Tracking** - Records visitor IP for analytics
✅ **User Agent** - Tracks device/browser info
✅ **Visitor ID** - Links to analytics visitor tracking
✅ **Auto-Refresh** - Admin page refreshes every 30 seconds
✅ **Export Ready** - One-click CSV/JSON export
✅ **CORS Enabled** - Works from any domain
✅ **Rate Limiting** - Prevents spam (100 requests/15min)

## 📁 Files Modified

### Backend (analytics-backend/)
- `server.js` - Added leads table + 3 API endpoints
- `public/leads.html` - Admin page to view leads
- `analytics.db` - SQLite database file (auto-created)

### Frontend (src/)
- `components/EmailCollectionModal.jsx` - Now sends to backend API
- `components/Pricing.jsx` - Integrated email modal

## 🌐 Production Deployment

For production, update the API URL in `EmailCollectionModal.jsx`:

```javascript
// Change from:
const response = await fetch('http://localhost:3002/api/leads', {

// To your production backend:
const response = await fetch('https://your-backend.com/api/leads', {
```

## 📊 Monitoring

**View Real-Time Stats:**
- Analytics Dashboard: http://localhost:3002/dashboard.html
- Leads Page: http://localhost:3002/leads.html

**Database Size:**
```bash
cd analytics-backend
ls -lh analytics.db
```

**Check Logs:**
```bash
# Backend logs (if running in terminal)
cd analytics-backend
node server.js
```

## 🔐 Security Notes

- ✅ Email validation on frontend
- ✅ Rate limiting (100 requests/15min)
- ✅ CORS protection (configurable)
- ✅ SQL injection protection (prepared statements)
- ⚠️ Add authentication for admin page in production!
- ⚠️ Add HTTPS in production
- ⚠️ Backup database regularly

## 💾 Backup Database

```bash
# Create backup
cp analytics-backend/analytics.db analytics-backend/analytics-backup-$(date +%Y%m%d).db

# Restore from backup
cp analytics-backend/analytics-backup-20260910.db analytics-backend/analytics.db
```

## 🆘 Troubleshooting

### Backend not starting?
```bash
cd analytics-backend
npm install
node server.js
```

### Leads not saving?
1. Check backend is running: http://localhost:3002/health
2. Check browser console for errors
3. Check backend terminal for errors
4. Verify CORS is enabled

### Can't see leads in admin page?
1. Verify backend is running
2. Check: http://localhost:3002/api/leads
3. Clear browser cache
4. Check database: `sqlite3 analytics.db "SELECT * FROM leads;"`

---

**Your email collection system is now fully operational! 🎉**

All leads are permanently stored in the database and can be viewed at:
**http://localhost:3002/leads.html**
