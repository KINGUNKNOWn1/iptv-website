#!/bin/bash

# Stream Holland - Fly.io Backend Deployment Helper
set -e

echo "🚀 STREAM HOLLAND - FLY.IO DEPLOYMENT"
echo "======================================"
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Step 1: Verify files
echo -e "${BLUE}Step 1: Verifying deployment files...${NC}"
echo ""

if [ ! -f "analytics-backend/fly.toml" ]; then
    echo -e "${RED}❌ Error: analytics-backend/fly.toml not found!${NC}"
    exit 1
fi

if [ ! -f "analytics-backend/Dockerfile" ]; then
    echo -e "${RED}❌ Error: analytics-backend/Dockerfile not found!${NC}"
    exit 1
fi

if [ ! -f "analytics-backend/server.js" ]; then
    echo -e "${RED}❌ Error: analytics-backend/server.js not found!${NC}"
    exit 1
fi

echo -e "${GREEN}✅ fly.toml found${NC}"
echo -e "${GREEN}✅ Dockerfile found${NC}"
echo -e "${GREEN}✅ server.js found${NC}"
echo ""

# Step 2: Check Fly CLI
echo -e "${BLUE}Step 2: Checking Fly CLI...${NC}"
echo ""

if ! command -v flyctl &> /dev/null; then
    echo -e "${RED}❌ Fly CLI not installed${NC}"
    echo ""
    echo "Installing Fly CLI..."
    brew install flyctl
    echo -e "${GREEN}✅ Fly CLI installed!${NC}"
else
    echo -e "${GREEN}✅ Fly CLI already installed${NC}"
fi

echo ""

# Step 3: Login to Fly.io
echo -e "${BLUE}Step 3: Login to Fly.io...${NC}"
echo ""
echo -e "${YELLOW}Opening Fly.io login in your browser...${NC}"
echo ""
echo "This will open a browser window where you can:"
echo "1. Sign up for free (if you don't have an account)"
echo "2. Login with GitHub/Google/Email"
echo ""
echo -e "${YELLOW}Press ENTER when ready to open browser...${NC}"
read -r

# Open browser for login
flyctl auth login

echo ""
echo -e "${GREEN}✅ Logged in!${NC}"
echo ""

# Step 4: Navigate to backend directory
echo -e "${BLUE}Step 4: Deploying backend...${NC}"
echo ""

cd analytics-backend

# Step 5: Launch app (creates app + volume + deploys)
echo -e "${YELLOW}Launching Fly.io app...${NC}"
echo ""
echo "Fly will ask you a few questions:"
echo ""
echo -e "${BLUE}1. App name:${NC} streamholland-analytics (or press ENTER to auto-generate)"
echo -e "${BLUE}2. Region:${NC} Amsterdam (ams) - closest to Netherlands"
echo -e "${BLUE}3. Create PostgreSQL?${NC} ${RED}NO${NC} - we use SQLite"
echo -e "${BLUE}4. Create Redis?${NC} ${RED}NO${NC} - not needed"
echo ""
echo -e "${YELLOW}Press ENTER to continue...${NC}"
read -r

# Launch the app
flyctl launch --now

echo ""
echo -e "${BLUE}Step 5: Creating persistent volume for database...${NC}"
echo ""

# Create volume for SQLite database
flyctl volumes create analytics_data --region ams --size 1

echo ""
echo -e "${GREEN}✅ Volume created!${NC}"
echo ""

# Step 6: Deploy
echo -e "${BLUE}Step 6: Deploying application...${NC}"
echo ""

flyctl deploy

echo ""
echo -e "${GREEN}✅ Deployed!${NC}"
echo ""

# Step 7: Get URL
echo -e "${BLUE}Step 7: Getting your API URL...${NC}"
echo ""

FLY_URL=$(flyctl status --json | grep -o '"hostname":"[^"]*"' | cut -d'"' -f4)

if [ -z "$FLY_URL" ]; then
    echo -e "${YELLOW}⚠️  Could not auto-detect URL. Getting it manually...${NC}"
    flyctl status
    echo ""
    echo -e "${YELLOW}📋 Please copy your app URL from above (looks like: streamholland-analytics.fly.dev)${NC}"
    read -r FLY_URL
fi

FULL_URL="https://${FLY_URL}"

echo ""
echo -e "${GREEN}✅ Your API URL: $FULL_URL${NC}"
echo ""

# Step 8: Test health endpoint
echo -e "${BLUE}Step 8: Testing backend health...${NC}"
echo ""

sleep 5 # Wait for deployment to stabilize

if curl -s "${FULL_URL}/health" | grep -q "ok"; then
    echo -e "${GREEN}✅ Backend is live and healthy!${NC}"
else
    echo -e "${YELLOW}⚠️  Backend might still be starting. Check logs with: flyctl logs${NC}"
fi

echo ""
cd ..

# Step 9: Update Vercel
echo -e "${BLUE}Step 9: Updating Vercel environment variable...${NC}"
echo ""

if ! command -v vercel &> /dev/null; then
    echo -e "${YELLOW}⚠️  Vercel CLI not installed${NC}"
    echo ""
    echo "Please do this manually:"
    echo ""
    echo "1. Go to: https://vercel.com/dashboard"
    echo "2. Click: Your project → Settings → Environment Variables"
    echo "3. Add:"
    echo "   Name: VITE_API_URL"
    echo "   Value: $FULL_URL"
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
        vercel env add VITE_API_URL production "$FULL_URL"
        vercel env add VITE_API_URL preview "$FULL_URL"
        vercel env add VITE_API_URL development "$FULL_URL"
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
echo -e "${BLUE}Backend API:${NC} $FULL_URL"
echo -e "${BLUE}Health check:${NC} $FULL_URL/health"
echo -e "${BLUE}Leads endpoint:${NC} $FULL_URL/api/leads"
echo ""
echo "================================================"
echo -e "${YELLOW}📝 USEFUL COMMANDS:${NC}"
echo "================================================"
echo ""
echo "View logs:"
echo "   cd analytics-backend && flyctl logs"
echo ""
echo "Check status:"
echo "   cd analytics-backend && flyctl status"
echo ""
echo "Open dashboard:"
echo "   cd analytics-backend && flyctl open"
echo ""
echo "Scale app:"
echo "   cd analytics-backend && flyctl scale count 1"
echo ""
echo -e "${GREEN}✅ You're ready for business!${NC}"
echo ""
