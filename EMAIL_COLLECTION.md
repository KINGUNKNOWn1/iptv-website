# Email Collection System

## How It Works

When a customer clicks "Passer la commande" (Place Order) on any pricing plan:

1. **Email Modal Opens** - A beautiful modal appears asking for their email
2. **Email Validation** - The email is validated before submission
3. **Email Stored** - Email is saved locally in browser (and ready for backend)
4. **WhatsApp Redirect** - Customer is redirected to WhatsApp with their email included in the message

## Features

✅ **Email Validation** - Only valid email addresses accepted
✅ **Local Storage** - Emails saved in browser localStorage
✅ **WhatsApp Integration** - Email included in WhatsApp message
✅ **Beautiful UI** - Professional modal with brand colors
✅ **GDPR Compliant** - Privacy notice included
✅ **Easy Export** - Export leads as CSV or JSON

## Customer Flow

```
Click "Passer la commande"
    ↓
Email Modal Opens
    ↓
Enter Email Address
    ↓
Click "Doorgaan naar WhatsApp"
    ↓
Email Saved + WhatsApp Opens
    ↓
Customer completes order via WhatsApp
```

## Export Collected Emails

Open browser console (F12) and run:

### View All Leads
```javascript
viewLeads()
// Shows table of all collected emails
```

### Get Count
```javascript
getLeadsCount()
// Returns: "Total leads: 42"
```

### Export as CSV
```javascript
exportLeadsToCSV()
// Downloads: streamholland-leads-2026-09-10.csv
```

### Export as JSON
```javascript
exportLeadsToJSON()
// Downloads: streamholland-leads-2026-09-10.json
```

### Clear All Leads (⚠️ Careful!)
```javascript
clearLeads()
// Requires confirmation before clearing
```

## CSV Format

The exported CSV contains:
```
Email,Plan,Timestamp,Source
jouw@email.nl,IPTV Premium - 3 maanden,2026-09-10T13:45:22.123Z,pricing_page
example@test.com,IPTV Premium - 12 maanden,2026-09-10T14:12:33.456Z,pricing_page
```

## Backend Integration (Optional)

To send emails to your backend server, update `EmailCollectionModal.jsx`:

```javascript
// Uncomment and update this section (line ~48):
await fetch('https://your-backend.com/api/leads', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(newLead)
});
```

## Data Structure

Each lead is stored with:
```javascript
{
  email: "customer@example.com",
  plan: "IPTV Premium - 12 maanden",
  timestamp: "2026-09-10T13:45:22.123Z",
  source: "pricing_page"
}
```

## Privacy & GDPR

The modal includes:
- Clear explanation of email usage
- Link to privacy policy
- "No spam" guarantee
- Minimal data collection

## WhatsApp Message Format

When customer submits email, WhatsApp message includes:

```
Ik wil het IPTV Premium 12 maanden abonnement bestellen

E-mail: customer@example.com
```

## Testing

1. Go to http://localhost:3001/prijzen
2. Click any "Passer la commande" button
3. Enter test email: test@example.com
4. Click "Doorgaan naar WhatsApp"
5. Check browser console: `viewLeads()`

## Files Added

- `src/components/EmailCollectionModal.jsx` - Modal component
- `src/utils/exportLeads.js` - Export utilities
- Updated: `src/components/Pricing.jsx` - Integrated modal
- Updated: `src/main.jsx` - Imported export utilities

## Next Steps (Optional)

1. **Backend Integration** - Send emails to your server
2. **Email Marketing** - Connect to Mailchimp/SendGrid
3. **Analytics** - Track conversion rates
4. **CRM Integration** - Auto-add to customer database
5. **Email Automation** - Send welcome emails

---

**Note**: Emails are currently stored in browser localStorage. For production, set up backend endpoint to save to database.
