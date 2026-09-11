# 🔧 Environment Variables Guide

Complete guide to all environment variables used in Stream Holland website.

## 📝 Current Status

| Variable | Current Value | Status | Priority |
|----------|--------------|--------|----------|
| VITE_API_URL | http://localhost:3002 | ⏳ Local only | 🔴 HIGH |
| VITE_WHATSAPP_NUMBER | 31612345678 | ⚠️ Placeholder | 🔴 HIGH |
| VITE_SUPPORT_EMAIL | support@streamholland.com | ⚠️ Placeholder | 🟡 MEDIUM |
| VITE_GA_MEASUREMENT_ID | G-XXXXXXXXXX | ⚠️ Placeholder | 🟡 MEDIUM |
| VITE_DOMAIN | streamholland.com | ⚠️ Placeholder | 🟡 MEDIUM |

---

## 🔴 HIGH PRIORITY (Update Immediately)

### 1. VITE_API_URL

**Current:** `http://localhost:3002`
**Production:** `https://YOUR-RENDER-APP.onrender.com`

**Purpose:** Analytics backend API for email collection

**How to Update:**

1. Deploy backend to Render (see `docs/deployment/BACKEND_DEPLOYMENT.md`)
2. Get your Render URL
3. Add to Vercel:
   ```
   Settings → Environment Variables → Add
   Name: VITE_API_URL
   Value: https://streamholland-analytics-api.onrender.com
   ```

4. Redeploy frontend

**Files Using This:**
- `src/components/EmailCollectionModal.jsx` (line 34)

---

### 2. VITE_WHATSAPP_NUMBER

**Current:** `31612345678` (fake)
**Production:** Your real WhatsApp Business number

**Purpose:** WhatsApp links across the site

**Format:** International format without + (e.g., `31612345678` for Netherlands)

**How to Update:**

1. Get WhatsApp Business number: https://business.whatsapp.com
2. Update in code:
   ```bash
   # Find all occurrences
   grep -r "31612345678" src/
   ```

3. Files to update:
   - `src/components/Hero.jsx` (Contact button)
   - `src/components/Pricing.jsx` (WhatsApp redirect, line 19)
   - `src/components/Footer.jsx` (Contact info)
   - `src/pages/Contact.jsx` (Contact page)

4. OR use environment variable (better):
   - Add to Vercel: `VITE_WHATSAPP_NUMBER = 31XXXXXXXXX`
   - Update code to use `import.meta.env.VITE_WHATSAPP_NUMBER`

**Example Code Update:**
```javascript
// Before:
window.open(`https://wa.me/31612345678?text=${message}`)

// After:
const phone = import.meta.env.VITE_WHATSAPP_NUMBER || '31612345678';
window.open(`https://wa.me/${phone}?text=${message}`)
```

---

## 🟡 MEDIUM PRIORITY (Update Before Launch)

### 3. VITE_SUPPORT_EMAIL

**Current:** `support@streamholland.com`
**Production:** Your real support email

**Purpose:** Customer support contact

**Files Using This:**
- `src/components/Footer.jsx`
- `src/pages/Contact.jsx`
- `src/components/EmailCollectionModal.jsx` (privacy link)

**How to Setup Email:**

**Option 1: Custom Domain Email (Recommended)**
- Setup with Google Workspace: https://workspace.google.com
- Or Zoho Mail (Free): https://www.zoho.com/mail
- Cost: €5-6/month per user

**Option 2: Gmail Alias**
- Use yourname+support@gmail.com
- Free, but less professional

---

### 4. VITE_GA_MEASUREMENT_ID

**Current:** `G-XXXXXXXXXX` (placeholder)
**Production:** Your Google Analytics 4 ID

**Purpose:** Track visitors, conversions, behavior

**How to Setup:**

1. **Create Google Analytics Account**
   - Go to: https://analytics.google.com
   - Click "Start measuring"
   - Account name: Stream Holland
   - Property name: Stream Holland Website

2. **Get Measurement ID**
   - Complete setup
   - Copy ID (format: G-XXXXXXXXXX)

3. **Add to Vercel**
   ```
   Settings → Environment Variables → Add
   Name: VITE_GA_MEASUREMENT_ID
   Value: G-ABC123XYZ (your real ID)
   ```

4. **Verify Installation**
   - Use Google Tag Assistant: https://tagassistant.google.com
   - Or check Real-Time reports in GA4

**Files Using This:**
- `index.html` (line 13-32 - Google Analytics script)

---

### 5. VITE_DOMAIN & VITE_SITE_URL

**Current:**
- `VITE_DOMAIN = streamholland.com`
- `VITE_SITE_URL = https://streamholland.com`

**Production:** Your actual domain

**Purpose:**
- Sitemap generation
- Open Graph tags
- Canonical URLs
- Schema.org markup

**How to Update:**

**Option 1: Keep Vercel Domain**
```
VITE_DOMAIN = iptv-website-phi.vercel.app
VITE_SITE_URL = https://iptv-website-phi.vercel.app
```

**Option 2: Custom Domain (Recommended)**
1. Buy domain: streamholland.nl
   - Transip: https://www.transip.nl (~€8.99/year)
   - Or Versio: https://www.versio.nl (~€7.99/year)

2. Connect to Vercel:
   - Vercel → Settings → Domains
   - Add streamholland.nl
   - Follow DNS instructions

3. Update env vars:
   ```
   VITE_DOMAIN = streamholland.nl
   VITE_SITE_URL = https://streamholland.nl
   ```

**Files Using This:**
- `public/sitemap.xml`
- `public/robots.txt`
- Meta tags in all pages
- Schema.org structured data

---

## 🟢 LOW PRIORITY (Optional)

### 6. VITE_GTM_ID

**Current:** Not set
**Production:** Google Tag Manager ID (optional)

**Purpose:** Manage tracking tags without code changes

**When to Use:**
- If you plan to add multiple tracking tools
- Facebook Pixel, LinkedIn Insight, etc.

**Setup:**
1. Go to: https://tagmanager.google.com
2. Create account
3. Get GTM ID (format: GTM-XXXXXXX)
4. Add to Vercel

---

### 7. Payment Integration Variables

**Not Currently Used** - Add when integrating payments

**Mollie (Recommended for Netherlands):**
```
VITE_MOLLIE_API_KEY = test_xxxxx (frontend)
MOLLIE_SECRET_KEY = live_xxxxx (backend only!)
```

**Stripe:**
```
VITE_STRIPE_PUBLISHABLE_KEY = pk_test_xxxxx
STRIPE_SECRET_KEY = sk_test_xxxxx (backend only!)
```

**Setup:**
- Mollie: https://www.mollie.com/dashboard/signup
- Stripe: https://stripe.com

---

## 📋 Complete Environment Variables Checklist

### Local Development (.env.local)

Create `.env.local` file in project root:

```bash
# Analytics Backend
VITE_API_URL=http://localhost:3002

# Contact Info (update these!)
VITE_WHATSAPP_NUMBER=31612345678
VITE_SUPPORT_EMAIL=support@streamholland.com
VITE_INFO_EMAIL=info@streamholland.com

# Analytics
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Domain
VITE_DOMAIN=localhost:5173
VITE_SITE_URL=http://localhost:5173

# Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_COOKIE_CONSENT=false
```

### Production (Vercel Dashboard)

**Add these in Vercel:**
```
Settings → Environment Variables

✅ VITE_API_URL = https://streamholland-analytics-api.onrender.com
✅ VITE_WHATSAPP_NUMBER = 31XXXXXXXXX
✅ VITE_SUPPORT_EMAIL = support@streamholland.nl
✅ VITE_GA_MEASUREMENT_ID = G-ABC123XYZ
✅ VITE_DOMAIN = streamholland.nl
✅ VITE_SITE_URL = https://streamholland.nl
```

**For All Environments:** ✅ Production ✅ Preview ✅ Development

---

## 🔒 Security Best Practices

### ✅ DO

- Use `VITE_` prefix for client-side variables (exposed to browser)
- Keep secret keys in backend only (no VITE_ prefix)
- Use environment-specific values (different for dev/prod)
- Commit `.env.example`, NOT `.env.local` or `.env.production`

### ❌ DON'T

- Never commit `.env` files with real values
- Never expose secret API keys in frontend
- Never hardcode sensitive data
- Don't use same values for dev and production

---

## 🔍 How to Check Current Values

### In Browser Console

```javascript
// Check if variable is loaded
console.log(import.meta.env.VITE_API_URL)
console.log(import.meta.env.VITE_GA_MEASUREMENT_ID)
```

### In Vercel Dashboard

1. Go to: https://vercel.com/dashboard
2. Click your project
3. Settings → Environment Variables
4. View all configured variables

---

## 🛠️ Troubleshooting

### Problem: Environment Variable Not Working

**Symptoms:**
- `import.meta.env.VITE_XXX` returns `undefined`
- Old value still showing

**Solutions:**

1. **Check Variable Name**
   - Must start with `VITE_`
   - Correct: `VITE_API_URL`
   - Wrong: `API_URL`

2. **Rebuild Application**
   - Environment vars are baked in at build time
   - Change requires rebuild
   ```bash
   npm run build
   # Or redeploy on Vercel
   ```

3. **Check Vercel Environment**
   - Variable set for correct environment?
   - Production ✅ Preview ✅ Development ✅

4. **Clear Cache**
   ```bash
   rm -rf node_modules/.vite
   npm run dev
   ```

### Problem: Different Value in Dev vs Production

**Expected Behavior:**
- Dev: Uses `.env.local`
- Production: Uses Vercel environment variables

**Check:**
```javascript
console.log('Environment:', import.meta.env.MODE)
// 'development' or 'production'
```

---

## 📝 Quick Reference

### Add New Environment Variable

**Step 1: Add to `.env.example`** (for documentation)
```
VITE_NEW_VARIABLE=example_value
```

**Step 2: Add to `.env.local`** (for local dev)
```
VITE_NEW_VARIABLE=your_local_value
```

**Step 3: Add to Vercel**
1. Vercel Dashboard → Settings → Environment Variables
2. Click "Add"
3. Name: `VITE_NEW_VARIABLE`
4. Value: `your_production_value`
5. Environments: All ✅
6. Save

**Step 4: Use in Code**
```javascript
const myVar = import.meta.env.VITE_NEW_VARIABLE;
console.log(myVar); // your_production_value
```

**Step 5: Redeploy**
```bash
vercel --prod
```

---

## 🎯 Next Steps

### Immediate (Before Production Launch)

- [ ] Deploy backend to Render
- [ ] Update VITE_API_URL with Render URL
- [ ] Update VITE_WHATSAPP_NUMBER with real number
- [ ] Setup Google Analytics and add real ID
- [ ] Update email addresses

### Soon (Within 2 Weeks)

- [ ] Register custom domain
- [ ] Update VITE_DOMAIN and VITE_SITE_URL
- [ ] Setup professional email addresses
- [ ] Configure Google Tag Manager (optional)

### Later (When Ready)

- [ ] Add payment integration variables
- [ ] Add cookie consent variables
- [ ] Add A/B testing variables

---

## 📞 Need Help?

**Environment Variables Not Working?**
1. Check this guide first
2. Review `.env.example` for format
3. Verify Vercel dashboard settings
4. Check browser console for errors

**Resources:**
- Vite Env Docs: https://vitejs.dev/guide/env-and-mode.html
- Vercel Env Docs: https://vercel.com/docs/environment-variables

---

Last Updated: 2026-09-10
