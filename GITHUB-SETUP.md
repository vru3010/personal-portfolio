# GitHub Setup Guide

## Prerequisites to Push Your Portfolio to GitHub

Before you can push your portfolio to GitHub, you need to:

1. **Install Git**
   - Download from: https://git-scm.com/download/win
   - Run the installer and follow the setup wizard
   - Accept all default settings
   - Restart your computer after installation

2. **Create a GitHub Account**
   - Go to: https://github.com
   - Click "Sign up"
   - Fill in your details
   - Verify your email address

3. **Configure Git**
   After installing Git, open PowerShell or Command Prompt and run:
   ```
   git config --global user.name "Vrushabh Limbachiya"
   git config --global user.email "vrushabhpatel833@gmail.com"
   ```

## Steps to Upload Your Portfolio to GitHub

Once Git is installed and configured, follow these steps:

### Step 1: Open Terminal/PowerShell
- Navigate to your portfolio folder
- Right-click in the folder and select "Open PowerShell here" OR
- Open PowerShell and navigate with: `cd "C:\Users\Vrush\OneDrive\Desktop\PERSONAL PORTFOLIO"`

### Step 2: Initialize Git Repository
```bash
git init
```

### Step 3: Add All Files
```bash
git add .
```

### Step 4: Create Initial Commit
```bash
git commit -m "Initial commit: Add personal portfolio website"
```

### Step 5: Create Repository on GitHub
1. Go to https://github.com/new
2. Create a new repository named: `personal-portfolio`
3. Add description: "A modern, responsive personal portfolio website"
4. Choose "Public" (so it's visible to employers)
5. Do NOT initialize with README, .gitignore, or license
6. Click "Create repository"

### Step 6: Connect Local Repository to GitHub
Copy and paste this command (replace with your actual username):
```bash
git remote add origin https://github.com/YOUR_USERNAME/personal-portfolio.git
git branch -M main
git push -u origin main
```

### Step 7: Verify Upload
- Go to your repository URL: `https://github.com/YOUR_USERNAME/personal-portfolio`
- You should see all your files there!

## How to Update Your Portfolio (After Initial Upload)

Whenever you make changes:

```bash
# Stage changes
git add .

# Commit with a message
git commit -m "Update: Describe what you changed"

# Push to GitHub
git push origin main
```

## Hosting Your Portfolio Online (Optional)

After uploading to GitHub, you can host it for free:

### Option 1: GitHub Pages
1. Go to your repository Settings
2. Scroll to "GitHub Pages"
3. Select "main" branch as source
4. Your site will be live at: `https://YOUR_USERNAME.github.io/personal-portfolio`

### Option 2: Other Free Hosting
- **Netlify**: netlify.com (drag and drop your folder)
- **Vercel**: vercel.com
- **000WebHost**: 000webhost.com

## Troubleshooting

### "Git command not found"
- Git is not installed. Download and install from: https://git-scm.com/download/win

### "fatal: not a git repository"
- Make sure you're in the portfolio folder
- Run `git init` first

### "Authentication failed"
- Generate a Personal Access Token on GitHub:
  1. Go to GitHub Settings > Developer settings > Personal access tokens
  2. Click "Generate new token"
  3. Give it permission for "repo"
  4. Copy the token
  5. When Git asks for password, paste the token

## File Structure After Upload

Your GitHub repository should look like this:
```
personal-portfolio/
├── index.html
├── styles.css
├── script.js
├── README.md
├── .gitignore
├── assets/
│   └── resume.pdf
└── images/
    ├── profile.jpg
    ├── amazon-clone.jpg
    ├── bridal-blog.jpg
    ├── space-blog.jpg
    └── ai-chatbot.jpg
```

## Important Notes

- Keep your portfolio updated with your latest projects
- Update your resume in the `assets/` folder
- Keep images optimized for web (small file sizes)
- Update GitHub profile with link to your portfolio
- Share your portfolio URL on LinkedIn and resumes

## Next Steps

1. Add profile image to `images/` folder
2. Add resume PDF to `assets/` folder
3. Update project images in `images/` folder
4. Customize colors and content in HTML/CSS as needed
5. Test on mobile devices
6. Push to GitHub following the steps above

---

For more information:
- Git Documentation: https://git-scm.com/doc
- GitHub Help: https://docs.github.com
- GitHub Pages: https://pages.github.com
