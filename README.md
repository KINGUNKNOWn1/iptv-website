# Holland IPTV Website

Een moderne, premium IPTV website gebouwd met React, Tailwind CSS, en Framer Motion. Deze website is geoptimaliseerd voor Dutch IPTV services met ondersteuning voor meerdere talen (Nederlands, Turks, Arabisch).

## ✨ Features

### Frontend Features
- 🎨 **Modern Design** - Glassmorphism effecten, gradient animaties, en responsive layout
- 🚀 **Premium Animations** - Smooth transitions en micro-interactions met Framer Motion
- 📱 **Fully Responsive** - Geoptimaliseerd voor mobile, tablet, en desktop
- 🌙 **Dark Theme** - Professioneel navy/blue kleurenschema
- ⚡ **Performance** - Gebouwd met Vite voor snelle load times

### Sections
1. **Navigation** - Sticky header met smooth scroll en mobile menu
2. **Hero Section** - Eye-catching hero met floating cards en trust badges
3. **Features** - 6 key features met animated cards
4. **Devices** - Multi-device compatibility showcase
5. **Pricing** - 3 subscription tiers met WhatsApp integration
6. **Comparison Table** - Competitive analysis table
7. **How It Works** - 3-step process visualization
8. **Reviews** - Customer testimonials met 4.9/5 rating
9. **FAQ** - Accordion-style frequently asked questions
10. **Footer** - Complete footer met contact info en floating WhatsApp button

### Admin Dashboard
- 📊 Statistics overview
- 👥 User management (structure ready)
- 💳 Subscription management (structure ready)
- ⚙️ Settings panel (structure ready)

## 🛠️ Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## 📋 Prerequisites

- Node.js (v25.9.0 or higher)
- npm (v11.12.1 or higher)
- At least **2-3GB free disk space**

## 🚀 Installation

### Step 1: Free Up Disk Space (IMPORTANT!)

Before installing dependencies, ensure you have enough disk space:

```bash
# Check available disk space
df -h .

# If needed, free up space by:
# - Emptying Trash
# - Removing old node_modules folders
# - Cleaning npm cache: npm cache clean --force
# - Removing unused Docker images: docker system prune -a
```

### Step 2: Install Dependencies

```bash
cd iptv-website
npm install
```

If you encounter `ENOSPC` errors, you need to free up more disk space before proceeding.

### Step 3: Start Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## 📁 Project Structure

```
iptv-website/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── Devices.jsx
│   │   ├── Pricing.jsx
│   │   ├── Comparison.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Reviews.jsx
│   │   ├── FAQ.jsx
│   │   ├── Footer.jsx
│   │   └── admin/
│   │       └── AdminDashboard.jsx
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── package.json          # Dependencies
├── tailwind.config.js    # Tailwind configuration
├── vite.config.js        # Vite configuration
└── README.md            # This file
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: { ... },  // Main brand colors
  navy: { ... },     // Background colors
}
```

### WhatsApp Number

Replace the phone number in all components:
- Search for: `31612345678`
- Replace with: Your actual WhatsApp number

Example locations:
- `src/components/Navigation.jsx`
- `src/components/Hero.jsx`
- `src/components/Pricing.jsx`
- `src/components/Footer.jsx`

### Content

All text content is in Dutch. To customize:
1. Open the relevant component file
2. Edit the text strings
3. Update the arrays (features, pricing plans, reviews, etc.)

### Animations

Animations are configured in:
- `tailwind.config.js` - Custom keyframes
- Components using `framer-motion` - Motion variants

## 🔧 Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components are fully responsive with mobile-first design.

## 🎭 Admin Dashboard

Access the admin dashboard by importing and using the component:

```jsx
import AdminDashboard from './components/admin/AdminDashboard';

// Use in your routing or as a separate page
<AdminDashboard />
```

**Note**: Currently a static demo. You'll need to integrate with a backend API for full functionality.

## 🔐 Next Steps (Recommended)

1. **Backend Integration**
   - Set up a Node.js/Express backend
   - Add authentication (JWT)
   - Create API endpoints for orders, users, subscriptions

2. **Payment Integration**
   - Integrate iDEAL/Bancontact payment gateway
   - Add payment confirmation flow

3. **Database**
   - Set up MongoDB or PostgreSQL
   - Create schemas for users, subscriptions, orders

4. **Authentication**
   - Add login/register functionality
   - Implement protected routes
   - Add admin authentication

5. **Email Notifications**
   - Send order confirmations
   - Send login credentials
   - Send renewal reminders

## 📞 WhatsApp Integration

The site uses direct WhatsApp links for customer communication:

```
https://wa.me/{phone}?text={message}
```

Benefits:
- No form backend needed
- Instant communication
- High conversion rates
- Easy customer support

## 🚨 Common Issues

### Disk Space Error
```
npm warn tar TAR_ENTRY_ERROR ENOSPC: no space left on device
```
**Solution**: Free up at least 2-3GB of disk space before running `npm install`

### Port Already in Use
```
Port 3000 is already in use
```
**Solution**: Either kill the process using port 3000 or change the port in `vite.config.js`

### Module Not Found
```
Cannot find module 'framer-motion'
```
**Solution**: Run `npm install` again to ensure all dependencies are installed

## 📊 Performance Optimization

- Images are lazy-loaded
- Animations use GPU acceleration
- CSS is purged in production
- Code splitting with Vite
- Optimized for Core Web Vitals

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is proprietary software for Holland IPTV.

## 👨‍💻 Development

For development questions or support, contact the development team.

---

**Built with ❤️ for Holland IPTV**
