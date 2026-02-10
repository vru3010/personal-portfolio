# Placeholder Image Guide

This file explains how to add images to your portfolio.

## Required Images

### 1. Profile Picture
**File**: `images/profile.jpg`
**Size**: 200x200 pixels (square)
**Purpose**: Your profile picture in the hero section
**How to add**:
- Take a professional headshot photo
- Crop it to square format
- Resize to 200x200 pixels
- Save as `profile.jpg` in the `images/` folder

### 2. Project Images
**Locations**:
- `images/amazon-clone.jpg` - Mini Amazon Clone
- `images/bridal-blog.jpg` - Bridal Blog Website
- `images/space-blog.jpg` - Space Blog
- `images/ai-chatbot.jpg` - AI Chatbot Project

**Size**: Recommended 400x250 pixels (landscape)
**Purpose**: Project previews in the Projects section
**How to add**:
- Take screenshots of your projects
- Resize to 400x250 pixels
- Save with the corresponding names
- Place in the `images/` folder

## Creating Placeholder Images

If you don't have images yet, you can:

### Option 1: Use Online Tools (Free)
- **Unsplash.com**: Free stock photos
- **Pexels.com**: Free professional images
- **Placeholder.com**: Generate placeholder images
- **via.placeholder.com**: Dynamic placeholders

### Option 2: Modify HTML Temporarily
You can use colored divs as placeholders while you create real images:

Replace in `index.html`:
```html
<img src="images/profile.jpg" alt="Vrushabh Limbachiya" class="profile-image">
```

With temporary placeholder:
```html
<div style="width:200px; height:200px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 50%; margin: 0 auto;"></div>
```

### Option 3: Generate with Python
Create a script to generate placeholder images:

```python
from PIL import Image, ImageDraw

# Create profile image
img = Image.new('RGB', (200, 200), color='#667eea')
img.save('images/profile.jpg')
```

## Image Optimization

For better performance:
- Use JPG format for photos
- Use PNG format for graphics with transparency
- Compress images: TinyPNG.com or ImageOptim
- Recommended sizes:
  - Profile: 200x200px
  - Projects: 400x250px
  - Maximum file size: 100KB per image

## Adding Images Step by Step

1. **Prepare your image**
   - Take screenshot or photo
   - Resize to recommended dimensions
   - Compress to reduce file size

2. **Place in correct folder**
   - Save to `images/` folder
   - Use exact filename from HTML

3. **Test in browser**
   - Open index.html in browser
   - Verify images display correctly
   - Check on mobile devices

4. **Update for GitHub**
   - Make sure images are in the portfolio folder
   - They'll be automatically included when you push to GitHub

## Accepted Image Formats

- **JPG/JPEG**: Best for photographs (smaller file size)
- **PNG**: Best for graphics and transparent images
- **WebP**: Modern format for better compression
- **SVG**: For logos and vector graphics

## Tips for Better Images

1. **Profile Picture**
   - Use professional headshot
   - Good lighting
   - Neutral background
   - Smile and look professional
   - Crop to square

2. **Project Screenshots**
   - Show the best parts of your project
   - Include UI and design
   - Consistent size and aspect ratio
   - Highlight key features

3. **General Tips**
   - Keep consistent style
   - Use good quality images
   - Compress for web
   - Test on different devices
   - Use high contrast for visibility

## Troubleshooting Images

**Images not showing?**
1. Check file is in correct folder
2. Verify exact filename matches
3. Check file extension (.jpg, .png, etc.)
4. Clear browser cache (Ctrl+Shift+Delete)
5. Restart browser

**Images look blurry?**
1. Image resolution too low
2. Resize to recommended dimensions
3. Use better quality source image

**Page loads slow?**
1. Images too large
2. File sizes too big
3. Use image compression tools
4. Consider WebP format

## Contact Information

Once you have all your images ready:
1. Place them in the `images/` folder
2. Make sure filenames match exactly
3. Test in browser
4. Push to GitHub
5. Your portfolio will be complete!

---

**Created**: February 2024
**Last Updated**: February 2024
