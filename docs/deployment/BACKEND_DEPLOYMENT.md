# 🚀 Backend Deployment Guide - Render.com

Complete step-by-step guide to deploy your analytics backend to Render.com (FREE tier).

## ⏱️ Time Required: 10-15 minutes

## 📋 Prerequisites

- GitHub account (you have this: KINGUNKNOWn1)
- Repository pushed to GitHub ✅ (completed)
- Backend code ready ✅ (completed - render.yaml configured)

---

## Part 1: Create Render.com Account

### Step 1: Sign Up for Render

1. **Go to Render.com**
   ```
   https://render.com
   ```

2. **Click "Get Started for Free"**
   - Or go directly to: https://dashboard.render.com/register

3. **Sign up with GitHub** (Recommended)
   - Click "Sign Up with GitHub"
   - This will automatically connect your GitHub repositories
   - Authorize Render to access your repositories

   **Alternative:** Sign up with email if preferred

4. **Verify your email** (if using email signup)

---

## Part 2: Deploy Your Backend

### Step 2: Create New Web Service

1. **Go to Render Dashboard**
   ```
   https://dashboard.render.com
   ```

2. **Click "New +" button** (top right)

3. **Select "Web Service"**

4. **Connect Your Repository**
   - You'll see a list of your GitHub repositories
   - Find and click: **iptv-website**
   - Click "Connect"

   **If repository doesn't appear:**
   - Click "Configure GitHub"
   - Grant access to the repository

### Step 3: Configure Web Service

Render will auto-detect your `render.yaml` file. Verify these settings:

**Basic Settings:**
```
Name: streamholland-analytics-api
Region: Frankfurt (EU-Central-1)
Branch: main
Root Directory: (leave empty)
```

**Build & Deploy:**
```
Build Command: cd analytics-backend && npm install
Start Command: cd analytics-backend && npm start
```

**Environment:**
```
Node (auto-detected)
```

**Plan:**
```
Free (select this!)
```

### Step 4: Environment Variables (Auto-configured)

These are already set in `render.yaml`, but verify they exist:

```
PORT = 10000
ALLOWED_ORIGINS = https://iptv-website-phi.vercel.app,https://streamholland.nl
NODE_ENV = production
```

**To manually add/edit variables:**
1. Scroll to "Environment Variables" section
2. Click "Add Environment Variable"
3. Enter key and value
4. Click "Save"

### Step 5: Deploy!

1. **Click "Create Web Service"** (bottom of page)

2. **Wait for deployment** (2-5 minutes)
   - You'll see real-time logs
   - Watch for: "Analytics server running on http://0.0.0.0:10000"
   - Status will change to "Live" when ready

3. **Copy Your API URL**
   - It will look like: `https://streamholland-analytics-api.onrender.com`
   - Or similar name if that's taken
   - **SAVE THIS URL** - you'll need it for Vercel!

---

## Part 3: Verify Deployment

### Step 6: Test Your Backend

1. **Test Health Endpoint**

   Open in browser:
   ```
   https://YOUR-APP-NAME.onrender.com/health
   ```

   You should see:
   ```json
   {
     "status": "ok",
     "timestamp": "2026-09-10T..."
   }
   ```

2. **Test Leads API** (Optional)

   ```
   https://YOUR-APP-NAME.onrender.com/api/leads
   ```

   Should return empty array or existing leads:
   ```json
   {
     "leads": [],
     "total": 0,
     "limit": 100,
     "offset": 0
   }
   ```

### Step 7: Check Logs

1. In Render Dashboard, click on your service
2. Click "Logs" tab
3. You should see:
   ```
   Analytics server running on http://0.0.0.0:10000
   Dashboard: http://0.0.0.0:10000/dashboard.html
   ```

---

## Part 4: Connect to Frontend

### Step 8: Configure Vercel Environment Variable

Now that your backend is live, connect it to your Vercel frontend:

1. **Go to Vercel Dashboard**
   ```
   https://vercel.com/dashboard
   ```

2. **Click on your project:** `iptv-website`

3. **Go to Settings**
   - Click "Settings" tab
   - Click "Environment Variables" in left sidebar

4. **Add New Variable**
   - Click "Add" button

   **Variable 1:**
   ```
   Name: VITE_API_URL
   Value: https://YOUR-RENDER-APP.onrender.com
   (use the URL from Step 5 - WITHOUT trailing slash!)

   Environments: ✅ Production ✅ Preview ✅ Development
   ```

5. **Click "Save"**

### Step 9: Redeploy Frontend

Your environment variables won't take effect until you redeploy:

**Option A: Redeploy via Vercel Dashboard**
1. Go to "Deployments" tab
2. Click "..." on latest deployment
3. Click "Redeploy"

**Option B: Redeploy via Git Push**
```bash
# Make a small change to trigger deployment
git commit --allow-empty -m "chore: Redeploy with backend API URL"
git push origin main
```

**Option C: Redeploy via CLI** (fastest)
```bash
vercel --prod --yes
```

### Step 10: Test Email Collection on Live Site

1. **Visit your live site:**
   ```
   https://iptv-website-phi.vercel.app
   ```

2. **Click "Nu bestellen" on any pricing plan**

3. **Enter a test email** (use real email to verify)

4. **Click "Doorgaan naar WhatsApp"**

5. **Verify:**
   - Email should be saved to Render backend
   - WhatsApp should open with message
   - Check Render logs for successful POST request

6. **Check Leads in Backend**
   ```
   https://YOUR-RENDER-APP.onrender.com/api/leads
   ```

   Your test email should appear!

---

## 🎉 Success Checklist

- [x] Render account created
- [x] Backend deployed to Render
- [x] Health check returns {"status": "ok"}
- [x] API URL copied
- [x] Vercel environment variable configured
- [x] Frontend redeployed
- [x] Test email collected successfully
- [x] Email appears in /api/leads endpoint

---

## ⚠️ Important Notes

### Free Tier Limitations

**Render Free Tier:**
- ✅ FREE forever
- ✅ 750 hours/month (enough for 24/7)
- ❌ Spins down after 15 minutes of inactivity
- ❌ First request after sleep takes 30-60 seconds

**What This Means:**
- If no one visits your site for 15 minutes, backend goes to sleep
- Next visitor will experience 30-60 second delay on first email submission
- Subsequent requests are instant
- This is acceptable for most use cases

**To Avoid Spin-Down:**
- Upgrade to paid plan: $7/month for always-on
- Or use uptime monitor (see below)

### Keep Your Backend Awake (Optional)

Use a free uptime monitor to ping your backend every 10 minutes:

**UptimeRobot (Recommended - Free):**
1. Go to https://uptimerobot.com
2. Sign up for free account
3. Add new monitor:
   - Type: HTTP(s)
   - URL: `https://YOUR-APP.onrender.com/health`
   - Interval: 5 minutes
4. This keeps your backend awake 24/7 for free!

---

## 🔧 Troubleshooting

### Problem: "Build Failed"

**Check Logs in Render:**
- Look for npm install errors
- Verify Node.js version compatibility

**Solution:**
```bash
# Specify Node version in package.json
"engines": {
  "node": ">=18.0.0"
}
```

### Problem: "Application Failed to Start"

**Check Start Command:**
- Should be: `cd analytics-backend && npm start`
- Verify server.js exists in analytics-backend/

### Problem: "CORS Error" on Frontend

**Check ALLOWED_ORIGINS environment variable:**
```
ALLOWED_ORIGINS = https://iptv-website-phi.vercel.app,https://streamholland.nl
```

Add your actual Vercel URL (no trailing slash)

### Problem: Database Not Persisting

**Render Free Tier uses ephemeral disk:**
- Data persists across deploys
- But may be lost after prolonged inactivity
- For production, upgrade to paid tier or use PostgreSQL

**Recommended for Production:**
- Add PostgreSQL database (free tier available)
- Or upgrade to Render paid plan ($7/month)

### Problem: Email Not Saving

**Check Frontend Logs:**
1. Open browser console (F12)
2. Try submitting email
3. Look for error messages

**Check Backend Logs:**
1. Go to Render Dashboard
2. Click "Logs"
3. Look for POST /api/leads requests

---

## 📊 Monitor Your Backend

### Render Dashboard

**Metrics Available:**
- CPU usage
- Memory usage
- Request count
- Response times
- Error rates

**Access:**
```
https://dashboard.render.com/web/YOUR-SERVICE-ID/metrics
```

### View Saved Leads

**All Leads:**
```
GET https://YOUR-APP.onrender.com/api/leads
```

**Lead Stats:**
```
GET https://YOUR-APP.onrender.com/api/leads/stats
```

Returns:
```json
{
  "total": 5,
  "today": 2,
  "planBreakdown": [
    {"plan": "IPTV Premium - 12 maanden", "count": 3},
    {"plan": "IPTV Premium - 6 maanden", "count": 2}
  ],
  "recentLeads": [...]
}
```

---

## 🔐 Security Considerations

**Already Configured:** ✅
- CORS restrictions
- Rate limiting (100 requests per 15 minutes per IP)
- Input validation
- Secure headers

**Additional Recommendations:**
1. Add authentication for /api/leads endpoint (admin only)
2. Enable HTTPS (automatic with Render)
3. Monitor logs for suspicious activity

---

## 🚀 Next Steps

After successful backend deployment:

1. ✅ Update WhatsApp number in code (from +31612345678)
2. ✅ Setup Google Analytics (real measurement ID)
3. ✅ Configure custom domain (streamholland.nl)
4. ✅ Start backlink building campaign
5. ✅ Add payment integration (Mollie)

See: `docs/QUICK_LINKS.md` for all service links

---

## 📞 Support

**Render Support:**
- Documentation: https://render.com/docs
- Community: https://community.render.com
- Support: support@render.com

**Need Help?**
- Check Render logs first
- Review this guide
- Check `docs/QUICK_LINKS.md` for resources

---

Last Updated: 2026-09-10
Deployment Platform: Render.com (Free Tier)
