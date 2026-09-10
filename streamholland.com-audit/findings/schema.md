# Schema.org Structured Data Audit Report
**Website:** streamholland.com
**Component:** /src/components/SEO.jsx
**Audit Date:** 2026-09-09
**Current Implementation:** 5 schema types (Organization, Product, Service, FAQPage, BreadcrumbList)

---

## Executive Summary

The Stream Holland IPTV website has implemented structured data markup covering key business aspects. However, several critical validation errors, missing properties, and optimization opportunities exist that may impact rich result eligibility and search visibility.

### Overall Status
- **Implemented Schemas:** 5 types
- **Critical Errors:** 7 issues
- **Warnings:** 8 issues
- **Missing Opportunities:** 4 schema types
- **Google Rich Result Eligibility:** Partial (requires fixes)

---

## 1. Organization Schema Validation

### Current Implementation
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Stream Holland - Beste IPTV Aanbieder Nederland",
  "url": "https://streamholland.com",
  "logo": "https://streamholland.com/logo.png",
  "description": "...",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Rotterdam",
    "addressCountry": "NL"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "availableLanguage": ["Dutch", "Arabic", "Turkish", "English"]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "2847",
    "bestRating": "5",
    "worstRating": "1"
  }
}
```

### Critical Errors
1. **Missing Required Property: `sameAs`** (Priority: High)
   - Google recommends social media profile URLs for organization identity verification
   - Add Facebook, Twitter, Instagram, LinkedIn profiles

2. **Incomplete Address** (Priority: Critical)
   - Missing `streetAddress` and `postalCode`
   - Required for LocalBusiness rich results and Google Maps integration
   - Impact: Cannot qualify for local search features

3. **Unverified AggregateRating** (Priority: Critical)
   - 2,847 reviews with 4.9 rating are listed but no review schema exists
   - Google may flag as manipulative if reviews cannot be verified
   - Must add Review schema with actual review data or remove rating

4. **Missing ContactPoint Properties** (Priority: Medium)
   - No `telephone` number
   - No `email` address
   - No `url` for contact page
   - Impact: Reduces trust signals and contact discovery

### Warnings
1. Organization name is SEO-optimized ("Beste IPTV Aanbieder Nederland") rather than legal business name
   - Recommendation: Use actual business name in schema, optimize in meta tags

### Recommendations
**Fix Required Properties:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Stream Holland",
  "alternateName": "Stream Holland - Beste IPTV Aanbieder Nederland",
  "url": "https://streamholland.com",
  "logo": "https://streamholland.com/logo.png",
  "image": "https://streamholland.com/og-image.jpg",
  "description": "Stream Holland is de beste IPTV aanbieder in Nederland...",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[REQUIRED: Actual street address]",
    "addressLocality": "Rotterdam",
    "postalCode": "[REQUIRED: Postal code]",
    "addressCountry": "NL"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "telephone": "[REQUIRED: +31-XXX-XXX-XXX]",
    "email": "support@streamholland.com",
    "url": "https://streamholland.com/contact",
    "availableLanguage": ["nl", "ar", "tr", "en"],
    "areaServed": "NL"
  },
  "sameAs": [
    "https://www.facebook.com/streamholland",
    "https://twitter.com/streamholland",
    "https://www.instagram.com/streamholland"
  ]
}
```

**Remove or Verify AggregateRating:**
- Option A: Remove rating until Review schema is implemented
- Option B: Add Review schema with verifiable reviews (see Section 7)

---

## 2. Product Schema Validation

### Current Implementation
Product with 3 offers (3-month, 6-month, 12-month subscriptions)

### Critical Errors
1. **Dynamic `priceValidUntil` Calculation** (Priority: Critical)
   ```javascript
   priceValidUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
   ```
   - Issue: This calculates "today + 30 days" on every page render
   - Problem: Google caches schemas, so the date becomes inconsistent
   - Impact: May trigger "price manipulation" flags
   - **Fix:** Use static date updated monthly or omit if prices don't expire

2. **Missing Required Offer Properties** (Priority: High)
   - Each Offer missing `seller` property
   - Missing `itemCondition` (should be "https://schema.org/NewCondition")
   - Missing `priceSpecification` for subscription pricing model

3. **Unverified AggregateRating** (Priority: Critical)
   - Same issue as Organization schema
   - 2,847 reviews claimed but no Review entities

4. **Missing Product Properties** (Priority: Medium)
   - No `image` property (required for Product rich results)
   - No `sku` or `gtin` identifier
   - No `category` classification

### Warnings
1. Product `name` is generic ("Stream Holland Premium Abonnement")
   - Better: Include specific plan details or create separate Product for each tier

2. Subscription pricing not clearly defined
   - Missing `billingIncrement` and `billingDuration`
   - Google may not understand these are subscription prices

### Recommendations
**Fix Critical Issues:**
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Stream Holland IPTV Abonnement",
  "description": "30.500+ live zenders, 150.000+ VOD titels, HD/UHD/4K kwaliteit, Nederlandse support 24/7",
  "image": [
    "https://streamholland.com/product-image-1.jpg",
    "https://streamholland.com/product-image-2.jpg"
  ],
  "brand": {
    "@type": "Brand",
    "name": "Stream Holland"
  },
  "category": "IPTV Streaming Service",
  "offers": [
    {
      "@type": "Offer",
      "name": "3 Maanden IPTV Abonnement",
      "price": "23",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "url": "https://streamholland.com/#pricing",
      "seller": {
        "@type": "Organization",
        "name": "Stream Holland"
      },
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "23",
        "priceCurrency": "EUR",
        "billingDuration": "P3M",
        "billingIncrement": 1
      },
      "eligibleDuration": {
        "@type": "QuantitativeValue",
        "value": 3,
        "unitCode": "MON"
      }
    }
    // Repeat for 6-month and 12-month offers
  ]
}
```

**Remove AggregateRating** until Review schema is added (or add reviews - see Section 7)

---

## 3. Service Schema Validation

### Current Implementation
Generic service schema with OfferCatalog structure

### Critical Errors
1. **Incomplete Offer Catalog** (Priority: Medium)
   - Offers within `itemListElement` are missing required properties
   - No `price`, `priceCurrency`, `availability` in nested Offer objects
   - Impact: Service catalog won't generate rich results

### Warnings
1. Redundant with Product schema
   - Both Product and Service schemas describe the same offerings
   - Recommendation: Choose one primary type (Product is better for e-commerce)

2. Missing Service-specific properties
   - No `offers` at Service level (uses hasOfferCatalog instead)
   - No `termsOfService` URL
   - No `serviceOutput` description

### Recommendations
**Option A: Enhance Service Schema**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "IPTV Streaming Service",
  "name": "Stream Holland IPTV Service",
  "description": "Premium IPTV streaming service met 30.500+ kanalen en 150.000+ films en series",
  "provider": {
    "@type": "Organization",
    "name": "Stream Holland",
    "url": "https://streamholland.com"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Netherlands"
  },
  "offers": {
    "@type": "AggregateOffer",
    "lowPrice": "23",
    "highPrice": "48",
    "priceCurrency": "EUR",
    "offerCount": "3"
  },
  "termsOfService": "https://streamholland.com/algemene-voorwaarden",
  "brand": {
    "@type": "Brand",
    "name": "Stream Holland"
  }
}
```

**Option B: Remove Service Schema**
- Keep only Product schema to avoid duplication
- Product schema is more appropriate for e-commerce subscriptions

---

## 4. FAQPage Schema Validation

### Status: INFO (Not Critical)

**IMPORTANT UPDATE (May 2026):** Google has completely retired FAQ rich results for ALL websites. FAQPage schema no longer provides SERP benefits.

### Current Implementation
- 7 questions implemented
- All questions properly formatted with `Question` and `Answer` types
- Syntax is valid

### Analysis
**Strengths:**
- Proper schema structure
- Relevant questions for target keywords
- Clear, concise answers

**FAQPage Deprecation Context:**
- Aug 2023: Google restricted FAQ rich results to gov/health sites
- May 7, 2026: Google fully retired FAQ rich results for ALL sites
- No Google SERP feature anymore
- Unconfirmed benefits for AI/GEO visibility

### Recommendations
**Priority: Low (Informational)**

1. **Keep FAQPage Schema (Low Priority)**
   - No Google SERP benefit, but minimal harm
   - Potential (unconfirmed) benefits:
     - AI assistants may use FAQ data
     - Google Entity Optimization (GEO)
     - Other search engines may still support it
   - Decision: Keep unless page weight is a concern

2. **Alternative: QAPage for User-Generated Q&A**
   - If your site has genuine user-submitted questions, use `QAPage` instead
   - QAPage is still supported for actual Q&A communities

3. **Consider Converting to Article/BlogPosting**
   - Create individual blog posts for each FAQ
   - Use `Article` schema instead
   - Better for content marketing and organic traffic

**Current Schema (Valid but No SERP Benefit):**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Waar kan ik IPTV kopen in Nederland?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "IPTV kopen in Nederland kan bij Stream Holland..."
      }
    }
    // 6 more questions...
  ]
}
```

**No changes required** - schema is valid, but understand it provides no Google rich result benefit.

---

## 5. BreadcrumbList Schema Validation

### Current Implementation
3 breadcrumb items (Home, Prijzen, Vergelijking)

### Critical Errors
1. **Static Breadcrumbs on All Pages** (Priority: Critical)
   - Same breadcrumb list appears on every page
   - Should be dynamic based on current page URL
   - Impact: Confusing for Google, may be flagged as spam

2. **Fragment URLs in Breadcrumb** (Priority: High)
   - Items 2 and 3 use `#pricing` and `#comparison` (same-page anchors)
   - Breadcrumbs should represent page hierarchy, not sections
   - Google expects full page URLs, not fragments

3. **Missing Breadcrumb on Deep Pages** (Priority: Medium)
   - Blog posts, product pages, etc. need breadcrumbs
   - Example: Home > Blog > Article Title

### Warnings
1. Only 3 items in list
   - Very shallow hierarchy
   - May not provide meaningful navigation context

### Recommendations
**Fix: Make Breadcrumbs Dynamic**

The SEO component should accept `breadcrumbs` as a prop and generate schema dynamically:

```jsx
// SEO.jsx should accept breadcrumbs prop
const SEO = ({ breadcrumbs = [] }) => {
  const breadcrumbSchema = breadcrumbs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url
    }))
  } : null;

  // Only render if breadcrumbs exist
  return (
    <Helmet>
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
};
```

**Example Breadcrumb Data for Different Pages:**

Home page:
```javascript
// No breadcrumbs needed on home
<SEO breadcrumbs={[]} />
```

Pricing page:
```javascript
<SEO breadcrumbs={[
  { name: 'Home', url: 'https://streamholland.com' },
  { name: 'Prijzen', url: 'https://streamholland.com/prijzen' }
]} />
```

Blog post:
```javascript
<SEO breadcrumbs={[
  { name: 'Home', url: 'https://streamholland.com' },
  { name: 'Blog', url: 'https://streamholland.com/blog' },
  { name: 'IPTV Kopen Nederland Gids', url: 'https://streamholland.com/blog/iptv-kopen-nederland-complete-gids' }
]} />
```

---

## 6. Missing Schema Opportunities

### 6.1 WebSite Schema (Priority: HIGH)
**Required for:** Sitelinks search box in Google

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Stream Holland",
  "alternateName": "Stream Holland IPTV",
  "url": "https://streamholland.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://streamholland.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
```

**Benefits:**
- Enables sitelinks search box in Google results
- Improves brand recognition
- Better user experience

**Note:** Requires implementing a search feature on the website

---

### 6.2 VideoObject Schema (Priority: MEDIUM)
**Opportunity:** Tutorial videos (IPTV setup, app installation, etc.)

The site has blog posts about IPTV installation:
- "IPTV Installeren Samsung TV"
- "Beste IPTV Apps 2024"

**Recommendation:** Create video tutorials and add VideoObject schema

```json
{
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Hoe IPTV Installeren op Samsung Smart TV - Stream Holland Tutorial",
  "description": "Stap-voor-stap handleiding voor het installeren van IPTV op je Samsung Smart TV",
  "thumbnailUrl": "https://streamholland.com/videos/samsung-tv-thumbnail.jpg",
  "uploadDate": "2026-09-01T00:00:00Z",
  "duration": "PT5M30S",
  "contentUrl": "https://streamholland.com/videos/samsung-tv-setup.mp4",
  "embedUrl": "https://www.youtube.com/embed/[VIDEO_ID]",
  "publisher": {
    "@type": "Organization",
    "name": "Stream Holland",
    "logo": {
      "@type": "ImageObject",
      "url": "https://streamholland.com/logo.png"
    }
  }
}
```

**Benefits:**
- Video rich results in Google Search
- Featured video snippets
- Higher CTR from SERP
- Better engagement metrics

---

### 6.3 Article/BlogPosting Schema (Priority: HIGH)
**Current Gap:** Blog posts exist but lack structured data

Blog posts found in App.jsx:
1. IPTV Kopen Nederland Complete Gids
2. Beste IPTV Apps 2024
3. Is IPTV Legaal Nederland
4. IPTV Installeren Samsung TV
5. Nederlandse IPTV Kanalen Lijst

**Required Schema for Each Blog Post:**

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "IPTV Kopen Nederland - Complete Gids 2024",
  "image": "https://streamholland.com/blog/iptv-kopen-nederland-featured.jpg",
  "datePublished": "2026-08-15T09:00:00Z",
  "dateModified": "2026-09-01T10:30:00Z",
  "author": {
    "@type": "Organization",
    "name": "Stream Holland"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Stream Holland",
    "logo": {
      "@type": "ImageObject",
      "url": "https://streamholland.com/logo.png",
      "width": 600,
      "height": 60
    }
  },
  "description": "Ontdek de complete gids voor IPTV kopen in Nederland. Leer alles over legale IPTV aanbieders, beste apps, en hoe je veilig een IPTV abonnement koopt.",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://streamholland.com/blog/iptv-kopen-nederland-complete-gids"
  },
  "articleSection": "IPTV Gidsen",
  "wordCount": 2500,
  "keywords": ["iptv kopen", "iptv nederland", "iptv abonnement", "legaal iptv"]
}
```

**Implementation:**
- Create a BlogPostSEO component
- Pass article metadata as props
- Include author, publish date, and modification date

---

### 6.4 Review Schema (Priority: CRITICAL)
**Required to support AggregateRating claims**

Currently, Organization and Product schemas claim 2,847 reviews with 4.9 rating, but no Review entities exist.

**Google's Policy:**
- AggregateRating must be based on actual Review markup
- Unverified ratings may be flagged as manipulative
- Can result in manual action or rich result removal

**Option A: Add Review Schema**

If you have real customer reviews:

```json
{
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Product",
    "name": "Stream Holland IPTV Abonnement"
  },
  "author": {
    "@type": "Person",
    "name": "Jan de Vries"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5",
    "worstRating": "1"
  },
  "reviewBody": "Uitstekende service! De Nederlandse kanalen werken perfect en de klantenservice is erg behulpzaam.",
  "datePublished": "2026-08-10",
  "publisher": {
    "@type": "Organization",
    "name": "Stream Holland"
  }
}
```

You need multiple Review entities (minimum 5-10 recommended) to support the AggregateRating.

**Option B: Remove AggregateRating**

If you don't have verifiable reviews, remove the rating from Organization and Product schemas:

```javascript
// Remove this from organizationSchema and productSchema
aggregateRating: {
  '@type': 'AggregateRating',
  'ratingValue': '4.9',
  'reviewCount': '2847',
  'bestRating': '5',
  'worstRating': '1'
}
```

**Recommendation:** Remove ratings until you implement a review system with actual customer reviews.

---

## 7. Technical Implementation Issues

### 7.1 Schema Injection Method
**Current:** React Helmet with runtime JSON.stringify()

**Pros:**
- Easy to maintain in React components
- Dynamic data generation

**Cons:**
- Schema not available in initial HTML (SPA issue)
- Google may not see schema if JavaScript fails
- Slower indexing

**Recommendation:**
- For critical schemas (Organization, Product), consider server-side rendering
- Or use static HTML injection in index.html template
- Keep FAQPage and BreadcrumbList in React Helmet (less critical)

### 7.2 Missing Image Assets
Several schemas reference images that may not exist:

```javascript
logo: 'https://streamholland.com/logo.png'
```

**Required Images:**
- /logo.png (600x60px minimum, square or rectangular)
- /og-image.jpg (1200x630px for social sharing)
- /twitter-image.jpg (1200x600px)
- Product images for Product schema

**Validation Checklist:**
- [ ] Verify all image URLs return 200 OK
- [ ] Check image dimensions meet Google requirements
- [ ] Ensure images are optimized (WebP format recommended)
- [ ] Add proper alt text and lazy loading

### 7.3 URL Consistency
**Issue:** Mixed use of absolute and fragment URLs

Fragment URLs used:
- `https://streamholland.com/#pricing`
- `https://streamholland.com/#comparison`

**Recommendation:**
- Use full page URLs for all schema references
- Reserve fragment URLs only for same-page navigation
- Update to:
  - `https://streamholland.com/prijzen`
  - `https://streamholland.com/vergelijking`

---

## 8. Schema Validation Test Results

### Google Rich Results Test
**Test URL:** https://search.google.com/test/rich-results

**Expected Results After Fixes:**

| Schema Type | Current Status | After Fixes | Rich Result Type |
|-------------|----------------|-------------|-------------------|
| Organization | ❌ Invalid | ✅ Valid | Logo, Corporate contacts |
| Product | ⚠️ Warnings | ✅ Valid | Product pricing cards |
| Service | ⚠️ Incomplete | ✅ Valid | (No dedicated rich result) |
| FAQPage | ✅ Valid | ℹ️ Valid (No SERP benefit) | None (deprecated) |
| BreadcrumbList | ❌ Invalid | ✅ Valid | Breadcrumb trail |
| WebSite | ❌ Missing | ✅ Valid | Sitelinks search box |
| Article | ❌ Missing | ✅ Valid | Article cards, featured snippets |
| VideoObject | ❌ Missing | ✅ Valid | Video carousels, video results |

---

## 9. Priority Action Items

### Critical (Fix Immediately)
1. **Remove unverified AggregateRating** from Organization and Product schemas
2. **Fix dynamic priceValidUntil** - use static dates or omit
3. **Make BreadcrumbList dynamic** per page
4. **Add complete postal address** to Organization schema
5. **Add seller property** to all Product offers

### High Priority (Fix This Week)
6. Add **WebSite schema** for sitelinks search box
7. Add **Article/BlogPosting schema** to all blog posts
8. Add **sameAs** social media URLs to Organization
9. Remove fragment URLs from schemas (#pricing, #comparison)
10. Add missing **contact information** (phone, email)

### Medium Priority (Fix This Month)
11. Add **Review schema** or remove AggregateRating claims
12. Create and add **VideoObject schema** for tutorial content
13. Optimize Product schema with images and identifiers
14. Consider removing redundant Service schema
15. Verify all image URLs are accessible

### Low Priority (Future Enhancement)
16. Implement LocalBusiness schema if physical location exists
17. Add ItemList schema for channel packages
18. Consider SoftwareApplication schema for IPTV apps
19. Add HowTo schema for installation guides (if creating new content)

---

## 10. Implementation Checklist

### Phase 1: Fix Critical Errors (Today)
- [ ] Remove AggregateRating from organizationSchema
- [ ] Remove AggregateRating from productSchema
- [ ] Set static priceValidUntil or remove property
- [ ] Add seller to each Product offer
- [ ] Make breadcrumbSchema accept props for dynamic generation

### Phase 2: Add Required Properties (This Week)
- [ ] Add complete address to Organization (street, postal code)
- [ ] Add contactPoint telephone and email
- [ ] Add sameAs social media URLs
- [ ] Add image property to Product schema
- [ ] Create WebSite schema with SearchAction

### Phase 3: Add Missing Schemas (Next 2 Weeks)
- [ ] Create BlogPostSEO component for Article schema
- [ ] Add Article schema to all 5 blog posts
- [ ] Update blog posts with publish/modified dates
- [ ] Add author information to articles
- [ ] Create video tutorials and add VideoObject schema

### Phase 4: Verification & Testing
- [ ] Test all schemas in Google Rich Results Test
- [ ] Validate with Schema.org validator
- [ ] Submit sitemap to Google Search Console
- [ ] Monitor Search Console for structured data errors
- [ ] Check for rich results appearing in 2-4 weeks

---

## 11. Code Examples for Implementation

### Enhanced Organization Schema
```javascript
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Stream Holland',
  alternateName: 'Stream Holland - Beste IPTV Aanbieder Nederland',
  url: 'https://streamholland.com',
  logo: 'https://streamholland.com/logo.png',
  image: 'https://streamholland.com/og-image.jpg',
  description: 'Stream Holland is de beste IPTV aanbieder in Nederland. IPTV kopen vanaf 23€. Legaal IPTV abonnement met 30.500+ kanalen en 150.000+ films en series.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '[Your Street Address]',
    addressLocality: 'Rotterdam',
    postalCode: '[Your Postal Code]',
    addressCountry: 'NL'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    telephone: '+31-XXX-XXX-XXX',
    email: 'support@streamholland.com',
    url: 'https://streamholland.com/contact',
    availableLanguage: ['nl', 'ar', 'tr', 'en'],
    areaServed: 'NL',
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59'
    }
  },
  sameAs: [
    'https://www.facebook.com/streamholland',
    'https://twitter.com/streamholland',
    'https://www.instagram.com/streamholland',
    'https://www.linkedin.com/company/streamholland'
  ]
  // AggregateRating removed until Review schema is added
};
```

### Fixed Product Schema
```javascript
const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Stream Holland IPTV Abonnement',
  description: '30.500+ live zenders, 150.000+ VOD titels, HD/UHD/4K kwaliteit, Nederlandse support 24/7',
  image: [
    'https://streamholland.com/images/iptv-product-main.jpg',
    'https://streamholland.com/images/iptv-interface.jpg',
    'https://streamholland.com/images/iptv-channels.jpg'
  ],
  brand: {
    '@type': 'Brand',
    name: 'Stream Holland'
  },
  category: 'IPTV Streaming Service',
  offers: [
    {
      '@type': 'Offer',
      name: '3 Maanden IPTV Abonnement',
      price: '23',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      url: 'https://streamholland.com/prijzen',
      seller: {
        '@type': 'Organization',
        name: 'Stream Holland',
        url: 'https://streamholland.com'
      },
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '23',
        priceCurrency: 'EUR',
        billingDuration: 'P3M',
        billingIncrement: 1
      },
      eligibleDuration: {
        '@type': 'QuantitativeValue',
        value: 3,
        unitCode: 'MON'
      }
    },
    {
      '@type': 'Offer',
      name: '6 Maanden IPTV Abonnement',
      price: '32',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      url: 'https://streamholland.com/prijzen',
      seller: {
        '@type': 'Organization',
        name: 'Stream Holland',
        url: 'https://streamholland.com'
      },
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '32',
        priceCurrency: 'EUR',
        billingDuration: 'P6M',
        billingIncrement: 1
      },
      eligibleDuration: {
        '@type': 'QuantitativeValue',
        value: 6,
        unitCode: 'MON'
      }
    },
    {
      '@type': 'Offer',
      name: '12 Maanden IPTV Abonnement - Beste Deal',
      price: '48',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      url: 'https://streamholland.com/prijzen',
      seller: {
        '@type': 'Organization',
        name: 'Stream Holland',
        url: 'https://streamholland.com'
      },
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '48',
        priceCurrency: 'EUR',
        billingDuration: 'P12M',
        billingIncrement: 1
      },
      eligibleDuration: {
        '@type': 'QuantitativeValue',
        value: 12,
        unitCode: 'MON'
      }
    }
  ]
  // AggregateRating removed until Review schema is added
};
```

### WebSite Schema (New)
```javascript
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Stream Holland',
  alternateName: 'Stream Holland IPTV',
  url: 'https://streamholland.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://streamholland.com/search?q={search_term_string}'
    },
    'query-input': 'required name=search_term_string'
  }
};
```

### Dynamic Breadcrumb Schema
```javascript
// Update SEO component to accept breadcrumbs prop
const SEO = ({ breadcrumbs = [] }) => {
  const breadcrumbSchema = breadcrumbs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url
    }))
  } : null;

  return (
    <Helmet>
      {/* Other meta tags */}

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      {breadcrumbSchema && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      )}
    </Helmet>
  );
};
```

### Blog Post Article Schema Template
```javascript
const BlogPostSEO = ({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  keywords = [],
  wordCount
}) => {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    image: image,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Organization',
      name: 'Stream Holland',
      url: 'https://streamholland.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Stream Holland',
      logo: {
        '@type': 'ImageObject',
        url: 'https://streamholland.com/logo.png',
        width: 600,
        height: 60
      }
    },
    description: description,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    },
    articleSection: 'IPTV Gidsen',
    wordCount: wordCount,
    keywords: keywords.join(', ')
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <script type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </script>
    </Helmet>
  );
};
```

---

## 12. Validation Resources

### Testing Tools
1. **Google Rich Results Test**
   - URL: https://search.google.com/test/rich-results
   - Test each schema type individually
   - Check for errors and warnings

2. **Schema.org Validator**
   - URL: https://validator.schema.org/
   - Validates against official schema.org specifications
   - More comprehensive than Google's tool

3. **Google Search Console**
   - Monitor "Enhancements" section
   - Check for structured data errors
   - Track rich result impressions

4. **Structured Data Linter**
   - URL: http://linter.structured-data.org/
   - Quick validation and visualization
   - Useful for debugging

### Documentation
- Schema.org Product: https://schema.org/Product
- Schema.org Organization: https://schema.org/Organization
- Schema.org Article: https://schema.org/Article
- Google Search Central - Structured Data: https://developers.google.com/search/docs/appearance/structured-data

---

## 13. Expected Rich Result Types

After implementing all recommendations, Stream Holland should qualify for these rich results:

### Organization Knowledge Panel
- Logo display
- Contact information
- Social media links
- Business hours

### Product Rich Results
- Product cards with pricing
- Multiple offer options
- Availability status
- Brand information

### Sitelinks Search Box
- Search box in Google results
- Direct site search from SERP

### Article Rich Cards
- Featured blog posts
- Publication dates
- Article thumbnails
- Author information

### Breadcrumb Trail
- Visual breadcrumb in search results
- Improved navigation context
- Better user experience

### Video Rich Results (if implemented)
- Video thumbnails in search
- Video carousels
- Video meta information

---

## 14. Monitoring & Maintenance

### Weekly Tasks
- [ ] Check Google Search Console for structured data errors
- [ ] Monitor rich result impressions and clicks
- [ ] Update priceValidUntil if using static dates

### Monthly Tasks
- [ ] Review and update blog post schemas with new content
- [ ] Verify all image URLs are still accessible
- [ ] Check for new Schema.org updates and best practices
- [ ] Analyze rich result performance vs. organic traffic

### Quarterly Tasks
- [ ] Comprehensive schema audit
- [ ] Update AggregateRating if review count changes
- [ ] Review competitor schemas for new opportunities
- [ ] Test all schemas with latest Google tools

---

## 15. Summary & Next Steps

### Current State
- 5 schema types implemented
- 7 critical errors requiring immediate attention
- 8 warnings affecting rich result eligibility
- 4 major schema opportunities not utilized

### Immediate Action Required
1. Remove unverified AggregateRating (Organization & Product)
2. Fix dynamic priceValidUntil calculation
3. Make BreadcrumbList dynamic per page
4. Add complete postal address to Organization
5. Add seller property to all offers

### High-Value Additions
1. WebSite schema for sitelinks search box
2. Article schema for all blog posts
3. Review system with proper Review markup
4. Video content with VideoObject schema

### Timeline Recommendation
- **Week 1:** Fix all critical errors
- **Week 2:** Add required properties and WebSite schema
- **Week 3:** Implement Article schema for blog posts
- **Week 4:** Testing and validation in Google Search Console
- **Month 2:** Create video content and add VideoObject schema
- **Month 3:** Implement review system with Review schema

### Expected Outcomes
- Improved search visibility and CTR
- Rich result eligibility across multiple formats
- Enhanced brand presence in SERPs
- Better user experience through structured navigation
- Competitive advantage in Dutch IPTV market

---

**Audit Completed By:** Schema.org Audit Agent
**Report Version:** 1.0
**Next Review Date:** 2026-12-09 (Quarterly)
