# 🚀 Google Quick Start (5 Minutes)

Fastest way to get your site connected to Google services.

---

## Step 1: Google Analytics 4 (2 minutes)

1. **Create GA4 Account:**
   - Go to https://analytics.google.com
   - Click "Start measuring"
   - Account name: `IPTV4K`
   - Property name: `IPTV4K Website`
   - Choose "Web" platform
   - Website URL: `https://iptv-website-phi.vercel.app`

2. **Get Measurement ID:**
   - Copy the ID that starts with `G-XXXXXXXXXX`

3. **Add to Website:**
   - Open `index.html` (lines 33-40)
   - Replace **BOTH** instances of `G-XXXXXXXXXX` with your real ID:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR-REAL-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-YOUR-REAL-ID');
</script>
```

4. **Test:**
   - Deploy website
   - Visit your site
   - Check GA4 Realtime report → Should see "1 user right now"

✅ **Done! GA4 tracking visitors.**

---

## Step 2: Google Search Console (3 minutes)

1. **Add Property:**
   - Go to https://search.google.com/search-console
   - Click "Add property" → "URL prefix"
   - Enter: `https://iptv-website-phi.vercel.app`

2. **Get Verification Code:**
   - Choose "HTML tag" method
   - Copy the code:
   ```html
   <meta name="google-site-verification" content="ABC123XYZ456..." />
   ```

3. **Add to Website:**
   - Open `index.html` (line 43)
   - Replace `your-verification-code-here` with your code:

```html
<meta name="google-site-verification" content="YOUR-REAL-CODE" />
```

4. **Verify:**
   - Deploy website
   - Go back to Search Console
   - Click "Verify"

✅ **Done! Search Console verified.**

---

## Step 3: Submit Sitemap (30 seconds)

**Quick Method:**
Visit this URL in your browser (replace with your domain):

```
https://www.google.com/ping?sitemap=https://iptv-website-phi.vercel.app/sitemap.xml
```

**Or in Search Console:**
1. Go to Sitemaps (left menu)
2. Enter: `sitemap.xml`
3. Click Submit

✅ **Done! Google is crawling your site.**

---

## What to Edit in index.html

**Lines 34 & 39:** Replace `G-XXXXXXXXXX` (2 places)
```html
<!-- Replace with your GA4 Measurement ID -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR-ID"></script>
...
gtag('config', 'G-YOUR-ID');
```

**Line 43:** Replace `your-verification-code-here`
```html
<!-- Replace with your Search Console code -->
<meta name="google-site-verification" content="YOUR-CODE" />
```

---

## Test Everything Works

### GA4 Test:
1. Visit your website
2. Go to https://analytics.google.com → Realtime
3. See: "1 user right now" ✅

### Search Console Test:
1. Go to https://search.google.com/search-console
2. See: "Ownership verified" ✅
3. Wait 24 hours for initial data

---

## Quick Links

- **GA4 Dashboard:** https://analytics.google.com
- **Search Console:** https://search.google.com/search-console
- **Full Guide:** See `GOOGLE-SETUP-GUIDE.md`

---

## Next Steps (Optional - Do Later)

- **Google Business Profile:** Local visibility (30 min)
- **Google Tag Manager:** Advanced tracking (30 min)
- **Link GA4 & Search Console:** Better insights (5 min)

See `GOOGLE-SETUP-GUIDE.md` for detailed instructions.

---

**Time Required:** 5 minutes
**Status:** Essential for launch
**Result:** Google tracks visitors & indexes your site

✅ **You're all set!** Deploy and watch the data come in. 🚀
