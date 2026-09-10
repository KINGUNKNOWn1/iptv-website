#!/bin/bash

# Update Contact Information Script
# Replace placeholder contact details with real information before production deployment

echo "🔧 Stream Holland - Contact Information Updater"
echo "================================================"
echo ""
echo "This script will replace placeholder contact information across the entire site."
echo ""

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Error: package.json not found. Run this script from the project root.${NC}"
    exit 1
fi

# Prompt for new contact information
echo -e "${YELLOW}Please enter your REAL contact information:${NC}"
echo ""

read -p "WhatsApp Number (format: +31 6 12345678): " WHATSAPP_NUMBER
read -p "Support Email: " SUPPORT_EMAIL
read -p "Info Email: " INFO_EMAIL
read -p "Privacy Email: " PRIVACY_EMAIL

echo ""
echo -e "${YELLOW}You entered:${NC}"
echo "WhatsApp: $WHATSAPP_NUMBER"
echo "Support Email: $SUPPORT_EMAIL"
echo "Info Email: $INFO_EMAIL"
echo "Privacy Email: $PRIVACY_EMAIL"
echo ""

read -p "Is this correct? (y/n): " CONFIRM

if [ "$CONFIRM" != "y" ] && [ "$CONFIRM" != "Y" ]; then
    echo -e "${RED}❌ Cancelled by user.${NC}"
    exit 1
fi

echo ""
echo -e "${GREEN}✅ Updating contact information...${NC}"
echo ""

# Files to update
FILES=(
    "src/components/Footer.jsx"
    "src/pages/Contact.jsx"
    "src/pages/VeelgesteldeVragen.jsx"
    "src/pages/Privacybeleid.jsx"
    "src/pages/AlgemeneVoorwaarden.jsx"
    "src/pages/Retourbeleid.jsx"
    "src/components/StickyWhatsAppCTA.jsx"
)

# Create backup
BACKUP_DIR="backups/$(date +%Y%m%d_%H%M%S)"
mkdir -p "$BACKUP_DIR"

echo "📦 Creating backups in $BACKUP_DIR..."
for file in "${FILES[@]}"; do
    if [ -f "$file" ]; then
        cp "$file" "$BACKUP_DIR/"
        echo "  ✓ Backed up $file"
    fi
done

echo ""
echo "🔄 Replacing contact information..."

# Replace WhatsApp number
find src -type f \( -name "*.jsx" -o -name "*.js" \) -exec sed -i '' "s/+31 6 12345678/$WHATSAPP_NUMBER/g" {} +
echo "  ✓ WhatsApp number updated"

# Replace emails
find src -type f \( -name "*.jsx" -o -name "*.js" \) -exec sed -i '' "s/support@streamholland\.com/$SUPPORT_EMAIL/g" {} +
echo "  ✓ Support email updated"

find src -type f \( -name "*.jsx" -o -name "*.js" \) -exec sed -i '' "s/info@streamholland\.com/$INFO_EMAIL/g" {} +
echo "  ✓ Info email updated"

find src -type f \( -name "*.jsx" -o -name "*.js" \) -exec sed -i '' "s/privacy@streamholland\.com/$PRIVACY_EMAIL/g" {} +
echo "  ✓ Privacy email updated"

echo ""
echo -e "${GREEN}✅ All contact information updated successfully!${NC}"
echo ""
echo -e "${YELLOW}📋 Next steps:${NC}"
echo "1. Review the changes: git diff"
echo "2. Test the website: npm run dev"
echo "3. Verify all contact links work"
echo "4. Commit changes: git add . && git commit -m 'Update contact information'"
echo ""
echo -e "${YELLOW}💾 Backups saved to: $BACKUP_DIR${NC}"
echo ""
