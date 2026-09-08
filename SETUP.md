# Setup Guide - Holland IPTV Website

## ⚠️ IMPORTANT: Disk Space Issue

Your system currently has **0% free disk space**. You MUST free up space before proceeding.

### Current Status
```
Filesystem: /dev/disk3s5
Size: 228GB
Used: 176GB
Available: 116MB
Capacity: 100%
```

## 🔧 Step 1: Free Up Disk Space

You need at least **2-3GB** of free space to install node_modules. Here's how:

### Option 1: Empty Trash
```bash
# Empty Trash from Finder or use:
rm -rf ~/.Trash/*
```

### Option 2: Clean npm Cache
```bash
npm cache clean --force
```

### Option 3: Remove Old node_modules
```bash
# Find and remove old node_modules folders
find ~ -name "node_modules" -type d -prune

# After reviewing, remove specific ones:
# rm -rf /path/to/old/project/node_modules
```

### Option 4: Clean Docker (if installed)
```bash
docker system prune -a
```

### Option 5: Remove Large Files
```bash
# Find large files (over 100MB)
find ~ -type f -size +100M

# Check your Downloads folder
ls -lhS ~/Downloads | head -20
```

### Option 6: Clean System Storage
1. Open **Apple menu** → **About This Mac** → **Storage** → **Manage**
2. Review and delete:
   - Old iOS backups
   - Unused applications
   - Old system files
   - Cache files

## ✅ Step 2: Verify Free Space

After cleaning, verify you have enough space:

```bash
df -h .
```

You should see at least 2-3GB available.

## 📦 Step 3: Install Dependencies

Once you have enough space:

```bash
cd iptv-website
npm install
```

This will install:
- React & React DOM (~5MB)
- Vite & plugins (~20MB)
- Tailwind CSS & PostCSS (~15MB)
- Framer Motion (~10MB)
- React Icons (~5MB)
- All dependencies (~300MB total for node_modules)

## 🚀 Step 4: Start Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see your website!

## 🎯 Quick Commands

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Customization Checklist

Before going live, update:

- [ ] WhatsApp number in all components (search for `31612345678`)
- [ ] Email address (search for `info@holland-iptv.nl`)
- [ ] Company address in Footer
- [ ] Pricing plans if needed
- [ ] Review content (or use real reviews)
- [ ] Social media links in Footer
- [ ] Meta tags in `index.html`
- [ ] Favicon and logo

## 🔍 File Locations to Update

### WhatsApp Number
- `src/components/Navigation.jsx:57`
- `src/components/Hero.jsx:61`
- `src/components/Pricing.jsx:91`
- `src/components/HowItWorks.jsx:94`
- `src/components/FAQ.jsx:109`
- `src/components/Footer.jsx:93`

### Email & Contact
- `src/components/Footer.jsx:95`
- `.env.example:11`

### Content Arrays
- Features: `src/components/Features.jsx:6-48`
- Pricing: `src/components/Pricing.jsx:8-52`
- Reviews: `src/components/Reviews.jsx:6-50`
- FAQ: `src/components/FAQ.jsx:9-39`

## 🎨 Styling

All styling uses Tailwind CSS. Main config in:
- `tailwind.config.js` - Colors, animations, theme
- `src/index.css` - Custom components and utilities

## 📱 Testing

Test on multiple devices:
- Mobile (< 768px)
- Tablet (768px - 1024px)
- Desktop (> 1024px)

All animations and interactions should work smoothly.

## 🚨 Troubleshooting

### Still Getting ENOSPC Error?
1. Check disk space again: `df -h .`
2. Try installing in smaller chunks:
   ```bash
   npm install react react-dom
   npm install vite @vitejs/plugin-react
   npm install tailwindcss postcss autoprefixer
   npm install framer-motion react-icons
   ```

### Module Not Found Error?
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 Already in Use?
Change port in `vite.config.js`:
```javascript
server: {
  port: 3001, // or any other port
  open: true
}
```

## 📞 Need Help?

If you encounter any issues during setup:
1. Check this guide first
2. Review error messages carefully
3. Ensure all prerequisites are met
4. Contact the development team

---

**Ready to build an amazing IPTV website! 🚀**
