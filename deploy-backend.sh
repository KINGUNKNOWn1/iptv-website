#!/bin/bash

# Stream Holland - One-Click Backend Deployment Helper
# This script does everything except the GitHub OAuth login (which requires your browser)

set -e

echo "🚀 STREAM HOLLAND - BACKEND DEPLOYMENT HELPER"
echo "=============================================="
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Step 1: Verify everything is ready
echo -e "${BLUE}Step 1: Verifying deployment readiness...${NC}"
echo ""

if [ ! -f "render.yaml" ]; then
    echo -e "${RED}❌ Error: render.yaml not found!${NC}"
    exit 1
fi

if [ ! -d "analytics-backend" ]; then
    echo -e "${RED}❌ Error: analytics-backend directory not found!${NC}"
    exit 1
fi

if [ ! -f "analytics-backend/server.js" ]; then
    echo -e "${RED}❌ Error: analytics-backend/server.js not found!${NC}"
    exit 1
fi

echo -e "${GREEN}✅ render.yaml found${NC}"
echo -e "${GREEN}✅ analytics-backend/ found${NC}"
echo -e "${GREEN}✅ server.js found${NC}"
echo ""

# Step 2: Check if changes are pushed to GitHub
echo -e "${BLUE}Step 2: Checking GitHub status...${NC}"
echo ""

if git diff-index --quiet HEAD --; then
    echo -e "${GREEN}✅ All changes committed${NC}"
else
    echo -e "${YELLOW}⚠️  You have uncommitted changes${NC}"
    echo "Do you want to commit them now? (y/n)"
    read -r response
    if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]; then
        git add .
        git commit -m "chore: Prepare for backend deployment"
        git push origin main
        echo -e "${GREEN}✅ Changes pushed to GitHub${NC}"
    fi
fi

echo ""

# Step 3: Open Render.com
echo -e "${BLUE}Step 3: Opening Render.com...${NC}"
echo ""
echo -e "${YELLOW}🌐 Opening Render in your browser...${NC}"
echo ""
open "https://dashboard.render.com/select-repo?type=web"

echo -e "${GREEN}✅ Render.com opened!${NC}"
echo ""
echo "================================================"
echo -e "${YELLOW}⚡ ACTION REQUIRED (You need to do this):${NC}"
echo "================================================"
echo ""
echo "In the browser window that just opened:"
echo ""
echo -e "${BLUE}1.${NC} Click: ${GREEN}'Sign in with GitHub'${NC}"
echo -e "${BLUE}2.${NC} Click: ${GREEN}'Authorize Render'${NC} (GitHub will ask)"
echo ""
echo "After login, Render will show your repositories:"
echo ""
echo -e "${BLUE}3.${NC} Find: ${GREEN}'iptv-website'${NC}"
echo -e "${BLUE}4.${NC} Click: ${GREEN}'Connect'${NC}"
echo ""
echo "Render will detect render.yaml automatically:"
echo ""
echo -e "${BLUE}5.${NC} You'll see: ${GREEN}'Blueprint detected: render.yaml'${NC}"
echo -e "${BLUE}6.${NC} Click: ${GREEN}'Apply Blueprint'${NC}"
echo ""
echo "Render will deploy automatically (2-3 minutes)!"
echo ""
echo "================================================"
echo ""

# Wait for user to complete deployment
echo -e "${YELLOW}Press ENTER when you see your API URL in Render...${NC}"
read -r

echo ""
echo -e "${BLUE}Step 4: Configure Vercel...${NC}"
echo ""

# Get API URL from user
echo -e "${YELLOW}📋 Please paste your Render API URL:${NC}"
echo "(It looks like: https://streamholland-analytics-api.onrender.com)"
echo ""
read -r RENDER_URL

# Validate URL
if [[ ! $RENDER_URL =~ ^https://.*\.onrender\.com$ ]]; then
    echo -e "${RED}❌ Invalid URL format. It should be like: https://xxx.onrender.com${NC}"
    echo -e "${YELLOW}Please run this script again and paste the correct URL${NC}"
    exit 1
fi

echo ""
echo -e "${GREEN}✅ URL validated: $RENDER_URL${NC}"
echo ""

# Remove trailing slash if present
RENDER_URL=${RENDER_URL%/}

echo -e "${BLUE}Step 5: Testing backend health...${NC}"
echo ""

# Test health endpoint
if curl -s "${RENDER_URL}/health" | grep -q "ok"; then
    echo -e "${GREEN}✅ Backend is live and healthy!${NC}"
else
    echo -e "${YELLOW}⚠️  Backend might still be deploying. Check Render dashboard.${NC}"
fi

echo ""
echo -e "${BLUE}Step 6: Updating Vercel environment variable...${NC}"
echo ""

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo -e "${YELLOW}⚠️  Vercel CLI not installed${NC}"
    echo ""
    echo "Please do this manually:"
    echo ""
    echo "1. Go to: https://vercel.com/dashboard"
    echo "2. Click: Your project → Settings → Environment Variables"
    echo "3. Add:"
    echo "   Name: VITE_API_URL"
    echo "   Value: $RENDER_URL"
    echo "   Environments: ✅ Production ✅ Preview ✅ Development"
    echo "4. Click: Save"
    echo "5. Go to Deployments → Redeploy latest"
    echo ""
    echo "Opening Vercel dashboard for you..."
    open "https://vercel.com/dashboard"
else
    echo "Do you want to add VITE_API_URL to Vercel automatically? (y/n)"
    read -r response
    if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]; then
        vercel env add VITE_API_URL production "$RENDER_URL"
        vercel env add VITE_API_URL preview "$RENDER_URL"
        vercel env add VITE_API_URL development "$RENDER_URL"
        echo -e "${GREEN}✅ Environment variable added to Vercel${NC}"
        echo ""
        echo "Redeploying frontend..."
        vercel --prod --yes
        echo -e "${GREEN}✅ Frontend redeployed!${NC}"
    fi
fi

echo ""
echo "================================================"
echo -e "${GREEN}🎉 DEPLOYMENT COMPLETE!${NC}"
echo "================================================"
echo ""
echo "Your URLs:"
echo -e "${BLUE}Frontend:${NC} https://iptv-website-phi.vercel.app"
echo -e "${BLUE}Backend API:${NC} $RENDER_URL"
echo -e "${BLUE}Health check:${NC} $RENDER_URL/health"
echo -e "${BLUE}Leads endpoint:${NC} $RENDER_URL/api/leads"
echo ""
echo "================================================"
echo -e "${YELLOW}📝 NEXT STEPS:${NC}"
echo "================================================"
echo ""
echo "1. Test email collection on your live site"
echo "2. Start building backlinks:"
echo "   - Google Business Profile"
echo "   - Social media profiles"
echo "   - Directory submissions"
echo ""
echo "Open backlink guide:"
echo "   open docs/seo/DAILY_ACTION_CHECKLIST.md"
echo ""
echo -e "${GREEN}✅ You're ready for business!${NC}"
echo ""
