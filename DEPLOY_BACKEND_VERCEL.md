# 🚀 DEPLOY BACKEND TO VERCEL - 3 MINUTES

Your backend API is now serverless Vercel functions! Just need to set up the FREE database.

---

## ✅ WHAT'S DONE:
- ✅ `/api/health` endpoint created
- ✅ `/api/leads` endpoint created (saves emails)
- ✅ Code pushed to GitHub
- ✅ Upstash Redis client installed

---

## 📋 STEP 1: Create FREE Upstash Redis Database (2 minutes)

**Browser should be open at:** https://console.upstash.com

### 1.1 Sign Up / Login
- Click **"Sign in with GitHub"** (easiest)
- Or create account with email

### 1.2 Create Database
- Click **"Create Database"** button
- **Name:** streamholland-leads
- **Type:** Regional
- **Region:** Europe (eu-central-1) - closest to Netherlands
- **Eviction:** ✅ **No Eviction** (keep all data)
- Click **"Create"**

### 1.3 Copy Credentials
After database is created, you'll see:

```
REST API
UPSTASH_REDIS_REST_URL: https://xxxxx.upstash.io
UPSTASH_REDIS_REST_TOKEN: AxxxxxxxxxxxxxxxxxxxxxxxxxxxQ==
```

**COPY BOTH VALUES!** You need them for next step.

---

## 📋 STEP 2: Add Credentials to Vercel (1 minute)

**Browser should be open at:** https://vercel.com/dashboard

### 2.1 Go to Project Settings
1. Click your **"iptv-website"** project
2. Click **"Settings"** tab (top menu)
3. Click **"Environment Variables"** (left sidebar)

### 2.2 Add Redis URL
- Click **"Add"** button
- **Name:** `UPSTASH_REDIS_REST_URL`
- **Value:** Paste the URL you copied (starts with https://)
- **Environments:** ✅ Production ✅ Preview ✅ Development
- Click **"Save"**

### 2.3 Add Redis Token
- Click **"Add"** button again
- **Name:** `UPSTASH_REDIS_REST_TOKEN`
- **Value:** Paste the token you copied (long string with ==)
- **Environments:** ✅ Production ✅ Preview ✅ Development
- Click **"Save"**

### 2.4 Add API URL (for frontend to use)
- Click **"Add"** button again
- **Name:** `VITE_API_URL`
- **Value:** `https://iptv-website-phi.vercel.app`
- **Environments:** ✅ Production ✅ Preview ✅ Development
- Click **"Save"**

---

## 📋 STEP 3: Deploy to Production

Now redeploy so the new API functions and environment variables are live:

### Option A: Automatic (via CLI)
```bash
vercel --prod --yes
```

### Option B: Manual (via Dashboard)
1. Go to **"Deployments"** tab
2. Find latest deployment
3. Click **three dots (...)** → **"Redeploy"**
4. Check ✅ **"Use existing Build Cache"**
5. Click **"Redeploy"**

**Wait 1-2 minutes for deployment...**

---

## 📋 STEP 4: Test Your API

### 4.1 Test Health Endpoint
Open in browser:
```
https://iptv-website-phi.vercel.app/api/health
```

Should see:
```json
{
  "status": "ok",
  "timestamp": "2026-09-11T09:15:23.456Z",
  "service": "Stream Holland Analytics API"
}
```

### 4.2 Test on Live Site
1. Go to: https://iptv-website-phi.vercel.app
2. Scroll to pricing section
3. Click **"Nu bestellen"** on any plan
4. Enter a test email: `test@example.com`
5. Click **"Doorgaan naar WhatsApp"**

**Should:**
- Save email to Redis database ✅
- Redirect to WhatsApp ✅

### 4.3 Verify Email Was Saved
Open in browser:
```
https://iptv-website-phi.vercel.app/api/leads
```

Should see:
```json
{
  "leads": [
    {
      "id": "lead_1726048523456_abc123",
      "email": "test@example.com",
      "plan": "IPTV Premium - 12 maanden",
      "source": "pricing_page",
      "createdAt": "2026-09-11T09:15:23.456Z"
    }
  ],
  "total": 1
}
```

---

## 🎉 SUCCESS!

**Your Backend is LIVE:**
- ✅ Health check: `https://iptv-website-phi.vercel.app/api/health`
- ✅ Save lead: `POST https://iptv-website-phi.vercel.app/api/leads`
- ✅ Get all leads: `GET https://iptv-website-phi.vercel.app/api/leads`

**Database:**
- ✅ Upstash Redis (FREE tier)
- ✅ 10,000 commands per day
- ✅ No eviction (keeps all data)

---

## 📊 View Your Leads

Anytime you want to see collected emails:

```bash
open https://iptv-website-phi.vercel.app/api/leads
```

Or check Upstash dashboard:
```bash
open https://console.upstash.com
```

Click your database → **Data Browser** → See all `lead:*` keys

---

## 🔧 TROUBLESHOOTING

### API returns 500 error?
**Check:** Environment variables are set correctly in Vercel
**Fix:** Go to Settings → Environment Variables → Verify:
- `UPSTASH_REDIS_REST_URL` is correct
- `UPSTASH_REDIS_REST_TOKEN` is correct
- Redeploy after fixing

### Email not saving?
**Check:** Browser console for errors (F12)
**Check:** `VITE_API_URL` is set to production domain
**Fix:** Update and redeploy

### CORS error?
**Check:** You're using the production domain (not localhost)
**Fix:** API already has CORS enabled for all origins (`*`)

---

## 🚀 NEXT STEPS

Now that backend is deployed:

1. **Test email collection** on live site ✅
2. **Start building backlinks** (see `docs/seo/DAILY_ACTION_CHECKLIST.md`)
3. **Monitor leads** via `/api/leads` endpoint

**Backlink Building:**
```bash
open docs/seo/DAILY_ACTION_CHECKLIST.md
```

First action: Create Google Business Profile (30 min, highest SEO value!)

---

**Time to Complete:** 3 minutes
**Cost:** FREE (Vercel + Upstash free tiers)
**Result:** Fully working email collection backend!

**READY? Follow Steps 1-4 above! 🚀**
