# Vrushabh Limbachiya - Personal Portfolio Website

A modern, responsive, and interactive personal portfolio website built with HTML, CSS, and JavaScript.

## 🎯 Overview

This portfolio website showcases my skills, projects, education, and provides a way for potential employers and clients to get in touch. It's fully responsive and optimized for all devices.

## 📋 Features

### Pages & Sections

1. **Home Section**
   - Visually appealing landing page with profile picture
   - Brief bio and professional tagline
   - Quick action buttons (View Work, Get In Touch)
   - Smooth scrolling navigation

2. **About Page**
   - Detailed bio and professional summary
   - Education timeline (School and University)
   - Technical skills organized by categories
   - Soft skills highlighting
   - Downloadable resume (PDF)

3. **Projects Section**
   - Project cards with images and descriptions
   - Project categories and technologies used
   - Hover effects with project overlays
   - Links to project repositories/live demos

4. **Contact Section**
   - Contact form with validation
   - Fields: Name, Email, Subject, Message
   - Real-time form validation
   - Error messages for invalid inputs
   - Email integration (mailto functionality)
   - Contact information display

### Design Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with attractive color scheme
- **Smooth Animations**: Fade-in effects and smooth transitions
- **Interactive Elements**: Hover effects on buttons, cards, and images
- **Mobile Menu**: Hamburger menu for better mobile experience
- **Sticky Navigation**: Easy access to navigation on scroll
- **Accessibility**: Proper semantic HTML and WCAG compliance

### Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling, Flexbox, Grid, Media Queries
- **JavaScript (ES6)**: Form validation, smooth scrolling, interactivity

## 📁 Project Structure

```
PERSONAL PORTFOLIO/
├── index.html              # Main HTML file (single page)
├── styles.css              # All CSS styles
├── script.js               # JavaScript functionality
├── assets/
│   └── resume.pdf          # Downloadable resume
├── images/
│   ├── profile.jpg         # Profile picture
│   ├── amazon-clone.jpg    # Project image
│   ├── bridal-blog.jpg     # Project image
│   ├── space-blog.jpg      # Project image
│   └── ai-chatbot.jpg      # Project image
├── README.md               # This file
└── .gitignore              # Git ignore file
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime Text, etc.) for editing

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/personal-portfolio.git
cd personal-portfolio
```

2. Open `index.html` in your browser:
   - Double-click the `index.html` file, OR
   - Right-click and select "Open with" your browser, OR
   - Use a local server (recommended):

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (with http-server installed)
http-server
```

3. Navigate to `http://localhost:8000` in your browser

## 💻 Customization

### Update Personal Information

Edit `index.html` to replace:
- Your name in the hero section and navbar
- Bio and description
- Education details
- Skills and soft skills
- Project information

### Update Styles

Modify `styles.css` to:
- Change color scheme (update CSS variables)
- Adjust font sizes and spacing
- Customize responsive breakpoints

### Update Contact Email

In `script.js`, update the email address in the contact form:
```javascript
// Find this line and update the email
const mailtoLink = `mailto:vrushabhpatel833@gmail.com?...`;
```

## 📸 Adding Images

Place images in the `images/` folder:
- `profile.jpg` - Your profile picture (recommended: 200x200px)
- `amazon-clone.jpg` - Project screenshot
- `bridal-blog.jpg` - Project screenshot
- `space-blog.jpg` - Project screenshot
- `ai-chatbot.jpg` - Project screenshot

## 📧 Contact Form

The contact form uses the `mailto:` functionality which:
- Validates all fields in real-time
- Shows helpful error messages
- Opens the default email client when submitted
- Includes the form data in the email

### Form Validation Rules

- **Name**: Minimum 2 characters
- **Email**: Valid email format (example@domain.com)
- **Subject**: Minimum 3 characters
- **Message**: Minimum 10 characters

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Proper color contrast ratios
- Reduced motion preferences respected

## 🎨 Color Scheme

- Primary Color: `#2563eb` (Blue)
- Secondary Color: `#1e40af` (Dark Blue)
- Accent Color: `#f59e0b` (Amber)
- Text Dark: `#1f2937` (Dark Gray)
- Text Light: `#6b7280` (Light Gray)
- Background Light: `#f9fafb`

## 📄 Resume

To add a downloadable resume:
1. Convert your resume to PDF format
2. Place it in the `assets/` folder as `resume.pdf`
3. Update the download link in HTML if needed

## 🔄 GitHub Integration

### Initial Setup

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Add personal portfolio website"

# Add remote repository
git remote add origin https://github.com/yourusername/personal-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Updating Repository

```bash
# Make changes to files

# Stage changes
git add .

# Commit with message
git commit -m "Update portfolio: [describe changes]"

# Push to GitHub
git push origin main
```

## 📈 Performance Optimization

- Minimized CSS and JavaScript
- Optimized images for web
- Smooth animations with GPU acceleration
- Lazy loading ready (can be implemented)

## 🔒 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (Chrome, Safari, Firefox)

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Vrushabh Limbachiya**
- Email: vrushabhpatel833@gmail.com
- Portfolio: [Your Website URL]
- GitHub: [Your GitHub Profile]
- LinkedIn: [Your LinkedIn Profile]

## 🙏 Acknowledgments

- Designed and developed as part of Unified Mentor portfolio project
- Modern web design best practices
- Responsive design patterns
- Interactive elements and animations

## 📞 Contact

Feel free to reach out for any questions or collaboration opportunities!
- Email: vrushabhpatel833@gmail.com
- Website: [Your Portfolio URL]

## ✨ Future Enhancements

- [ ] Add dark mode toggle
- [ ] Implement blog section
- [ ] Add testimonials/reviews
- [ ] Integrate with backend for form submissions
- [ ] Add animation library integration
- [ ] Implement service worker for offline support
- [ ] Add project filtering by technology
- [ ] SEO optimization

---

**Last Updated**: February 2024
**Version**: 1.0.0

Enjoy your portfolio website! 🚀
