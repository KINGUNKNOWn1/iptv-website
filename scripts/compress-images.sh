#!/bin/bash

# Image Compression Script for Stream Holland
# Compresses images in /public folder for optimal web performance

echo "🖼️  Stream Holland - Image Compression Tool"
echo "=========================================="
echo ""

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if imagemagick is installed
if ! command -v convert &> /dev/null && ! command -v magick &> /dev/null; then
    echo -e "${YELLOW}⚠️  ImageMagick not found. Installing via Homebrew...${NC}"
    if command -v brew &> /dev/null; then
        brew install imagemagick
    else
        echo -e "${RED}❌ Homebrew not found. Please install ImageMagick manually:${NC}"
        echo "   macOS: brew install imagemagick"
        echo "   Ubuntu: sudo apt-get install imagemagick"
        exit 1
    fi
fi

# Find all images in public folder
PUBLIC_DIR="public"
BACKUP_DIR="backups/images_$(date +%Y%m%d_%H%M%S)"

if [ ! -d "$PUBLIC_DIR" ]; then
    echo -e "${RED}❌ Public folder not found.${NC}"
    exit 1
fi

# Create backup directory
mkdir -p "$BACKUP_DIR"

echo -e "${BLUE}📦 Creating backups in $BACKUP_DIR...${NC}"
echo ""

# Counter variables
TOTAL_IMAGES=0
COMPRESSED_IMAGES=0
TOTAL_BEFORE=0
TOTAL_AFTER=0

# Compress JPG/JPEG images
echo -e "${GREEN}Processing JPG/JPEG images...${NC}"
for img in $(find "$PUBLIC_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" \)); do
    TOTAL_IMAGES=$((TOTAL_IMAGES + 1))
    
    # Get original size
    SIZE_BEFORE=$(stat -f%z "$img" 2>/dev/null || stat -c%s "$img" 2>/dev/null)
    TOTAL_BEFORE=$((TOTAL_BEFORE + SIZE_BEFORE))
    
    # Backup original
    cp "$img" "$BACKUP_DIR/"
    
    # Compress (quality 80%, progressive, strip metadata)
    if command -v magick &> /dev/null; then
        magick "$img" -quality 80 -sampling-factor 4:2:0 -strip -interlace Plane "$img.tmp"
    else
        convert "$img" -quality 80 -sampling-factor 4:2:0 -strip -interlace Plane "$img.tmp"
    fi
    
    mv "$img.tmp" "$img"
    
    # Get new size
    SIZE_AFTER=$(stat -f%z "$img" 2>/dev/null || stat -c%s "$img" 2>/dev/null)
    TOTAL_AFTER=$((TOTAL_AFTER + SIZE_AFTER))
    
    # Calculate savings
    SAVINGS=$((SIZE_BEFORE - SIZE_AFTER))
    PERCENT=$((100 * SAVINGS / SIZE_BEFORE))
    
    echo -e "  ✓ ${img##*/}: $(numfmt --to=iec $SIZE_BEFORE) → $(numfmt --to=iec $SIZE_AFTER) (${GREEN}-${PERCENT}%${NC})"
    
    COMPRESSED_IMAGES=$((COMPRESSED_IMAGES + 1))
done

# Compress PNG images
echo ""
echo -e "${GREEN}Processing PNG images...${NC}"
for img in $(find "$PUBLIC_DIR" -type f -iname "*.png"); do
    TOTAL_IMAGES=$((TOTAL_IMAGES + 1))
    
    # Get original size
    SIZE_BEFORE=$(stat -f%z "$img" 2>/dev/null || stat -c%s "$img" 2>/dev/null)
    TOTAL_BEFORE=$((TOTAL_BEFORE + SIZE_BEFORE))
    
    # Backup original
    cp "$img" "$BACKUP_DIR/"
    
    # Compress PNG (using pngquant if available, else imagemagick)
    if command -v pngquant &> /dev/null; then
        pngquant --quality=80-90 --force --ext .png "$img"
    else
        if command -v magick &> /dev/null; then
            magick "$img" -strip -quality 85 "$img.tmp"
        else
            convert "$img" -strip -quality 85 "$img.tmp"
        fi
        mv "$img.tmp" "$img"
    fi
    
    # Get new size
    SIZE_AFTER=$(stat -f%z "$img" 2>/dev/null || stat -c%s "$img" 2>/dev/null)
    TOTAL_AFTER=$((TOTAL_AFTER + SIZE_AFTER))
    
    # Calculate savings
    SAVINGS=$((SIZE_BEFORE - SIZE_AFTER))
    if [ $SIZE_BEFORE -gt 0 ]; then
        PERCENT=$((100 * SAVINGS / SIZE_BEFORE))
    else
        PERCENT=0
    fi
    
    echo -e "  ✓ ${img##*/}: $(numfmt --to=iec $SIZE_BEFORE) → $(numfmt --to=iec $SIZE_AFTER) (${GREEN}-${PERCENT}%${NC})"
    
    COMPRESSED_IMAGES=$((COMPRESSED_IMAGES + 1))
done

# Summary
echo ""
echo "=========================================="
echo -e "${GREEN}✅ Compression Complete!${NC}"
echo ""
echo "📊 Summary:"
echo "  Total images: $TOTAL_IMAGES"
echo "  Compressed: $COMPRESSED_IMAGES"
echo "  Size before: $(numfmt --to=iec $TOTAL_BEFORE)"
echo "  Size after: $(numfmt --to=iec $TOTAL_AFTER)"

if [ $TOTAL_BEFORE -gt 0 ]; then
    TOTAL_SAVINGS=$((TOTAL_BEFORE - TOTAL_AFTER))
    TOTAL_PERCENT=$((100 * TOTAL_SAVINGS / TOTAL_BEFORE))
    echo -e "  ${GREEN}Savings: $(numfmt --to=iec $TOTAL_SAVINGS) (-${TOTAL_PERCENT}%)${NC}"
fi

echo ""
echo -e "${YELLOW}💾 Backups saved to: $BACKUP_DIR${NC}"
echo ""
echo -e "${BLUE}📋 Next steps:${NC}"
echo "1. Test images on website: npm run dev"
echo "2. If images look good, commit changes"
echo "3. If quality is too low, restore from backups"
echo ""
