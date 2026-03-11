# Complete Deployment & Update Guide

This guide walks you through deploying your frontend to Vercel and keeping it updated.

---

## 📋 Table of Contents

1. [Initial Setup](#initial-setup)
2. [Deploy to Vercel](#deploy-to-vercel)
3. [Update Your Website](#update-your-website)
4. [Troubleshooting](#troubleshooting)

---

## 🔧 Initial Setup

### Step 1: Copy all project files

Your `/frontend-vercel` folder is ready! It contains:
- ✅ All React components
- ✅ Optimized Vite configuration
- ✅ Vercel deployment config
- ✅ All styling with Tailwind CSS

### Step 2: Install Dependencies

```bash
cd frontend-vercel
npm install
```

This installs all required packages (React, Tailwind, UI components, etc.)

### Step 3: Create `.env.local` file

```bash
# Copy the example file
cp .env.example .env.local
```

Edit `.env.local`:
```
VITE_API_URL=http://localhost:3000
```

**Note**: For local development, the backend runs on `localhost:3000`. This file is **never** pushed to Git.

### Step 4: Test Locally

```bash
npm run dev
```

Visit `http://localhost:3000` - your site should load!

---

## 🚀 Deploy to Vercel

### Best Method: GitHub + Vercel (Auto-Deploy)

#### 1. Create GitHub Repository

```bash
cd frontend-vercel

# Initialize Git
git init

# Create .gitignore (if not exists - already created)
# It excludes: node_modules, dist, .env.local, etc.

# Add all files
git add .

# Commit
git commit -m "Initial commit: Frontend ready for Vercel"

# Add GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/the-prompt-content-frontend.git

# Push
git push -u origin main
```

#### 2. Connect to Vercel

1. Go to **[Vercel.com](https://vercel.com)**
2. Click **"New Project"**
3. Click **"Import Git Repository"**
4. Select your GitHub repository: `the-prompt-content-frontend`
5. **Root Directory**: Select `frontend-vercel` (or ensure it applies)
6. Click **"Deploy"**

**Vercel will:**
- ✅ Detect Vite project
- ✅ Run `npm install`
- ✅ Run `npm run build`
- ✅ Deploy to `https://your-project.vercel.app`

#### 3. Add Environment Variables to Vercel

1. After deployment, go to **Project Settings**
2. Click **"Environment Variables"**
3. Add:
   - **Name**: `VITE_API_URL`
   - **Value**: `https://api.your-domain.com` (your backend URL)
   - **Select**: Production, Preview

4. Click **"Add"** and **re-deploy**

**To redeploy:**
- Go to **Deployments**
- Click **"..." on latest deployment**
- Select **"Redeploy"**

---

## 🔄 Update Your Website

### Workflow for Making Changes:

#### 1. Edit locally
```bash
cd frontend-vercel

# Edit files in src/components/, src/pages/, etc.
# Example: Edit src/pages/Home.tsx
```

#### 2. Test changes
```bash
npm run dev
```
- Visit `http://localhost:3000`
- Test your changes

#### 3. Commit & Push
```bash
git add .
git commit -m "Update: [describe your changes]"
git push origin main
```

#### 4. Vercel auto-deploys
- GitHub notifies Vercel
- Vercel builds & deploys automatically
- New version live in 1-5 minutes
- Check **Vercel Dashboard → Deployments** to monitor

---

## 📝 Common Updates

### Update a Component
```bash
# Edit component
nano src/components/ui/button.tsx

# Test
npm run dev

# Deploy
git add .
git commit -m "Update button component"
git push
```

### Update Environment Variables
```bash
# For local testing, edit .env.local
VITE_API_URL=https://new-backend-url.com

# For production, update in Vercel Dashboard:
# Settings → Environment Variables → VITE_API_URL → Save
# Then redeploy in Deployments
```

### Update Dependencies
```bash
# Check outdated packages
npm outdated

# Update a specific package
npm update package-name

# Or update all (use with caution)
npm update

# Test
npm run build

# Commit
git add package*.json
git commit -m "Update dependencies"
git push
```

---

## 🧪 Testing Before Deploying

```bash
# Always run production build locally first
npm run build
npm run preview

# Visit http://localhost:4173 and test
```

---

## 🌍 Connect Custom Domain (Optional)

1. **Buy domain** on GoDaddy, Namecheap, etc.
2. **In Vercel Dashboard:**
   - Go to **Project Settings → Domains**
   - Add your domain
   - Follow DNS configuration instructions
3. **Update DNS** at your domain registrar with Vercel's nameservers
4. **Wait** 24-48 hours for DNS propagation

---

## 📊 Monitor Your Deployment

### View Logs
- **Vercel Dashboard** → **Deployments** → click deployment → **Runtime Logs**

### Check Performance
- **Vercel Dashboard** → **Analytics**

### View Builds
- **Vercel Dashboard** → **Deployments** → see history and status

---

## 🚨 Troubleshooting

### Issue: "Cannot reach backend API"

**Check 1:** Is backend running?
```bash
# Test in your terminal
curl https://api.your-domain.com/health
```

**Check 2:** Is environment variable set?
- Vercel Dashboard → Project Settings → Environment Variables
- Verify `VITE_API_URL` is set
- Redeploy

**Check 3:** Check browser console
- Open DevTools (F12)
- Check Console tab for errors
- Check Network tab for API calls

---

### Issue: "Module not found"

```bash
# Solution
npm install
npm run build

# If persists, clear cache
rm -rf node_modules dist
npm install
```

---

### Issue: "Build failed on Vercel"

1. **Check build logs:**
   - Vercel Dashboard → Deployments → click failed build → Runtime Logs
   
2. **Test locally:**
   ```bash
   npm run build
   ```

3. **Common fixes:**
   - Missing environment variables
   - TypeScript errors
   - Import path issues

---

### Issue: "Blank page after deployment"

1. **Check HTML:** Open DevTools → check if elements are rendering
2. **Check Console:** Look for JavaScript errors
3. **Check API:** Is `VITE_API_URL` correct?
4. **Redeploy:** Force rebuild in Vercel

---

## 🎯 Best Practices

✅ **DO:**
- Test locally before pushing
- Write meaningful commit messages
- Keep `.env.local` secret (in `.gitignore`)
- Use preview deployments (Vercel provides for each push)
- Monitor Vercel dashboard for errors

❌ **DON'T:**
- Commit `.env.local` or secrets
- Push broken builds
- Delete deployments without backup
- Change production environment variables without testing

---

## 📱 Preview URLs

Vercel creates preview URLs for PRs:
- `https://your-project-123abc.vercel.app` (Preview)
- `https://your-project.vercel.app` (Production)

Perfect for testing before merging!

---

## 🔗 Quick Links

- [Vercel Dashboard](https://vercel.com/dashboard)
- [Project Deployments](https://vercel.com/dashboard/project)
- [Environment Variables Setup](https://vercel.com/docs/environment-variables)
- [Vite Docs](https://vitejs.dev/guide/)

---

## 💡 Pro Tips

1. **Speed up deployments**: Commit often, keep commits small
2. **Debug faster**: Use Vercel's runtime logs
3. **Test PRs**: Use Vercel preview URLs (automatic for GitHub PRs)
4. **Monitor performance**: Check Vercel Analytics

---

**Your website is now live on Vercel! 🎉**

Keep updating and iterate quickly! Every `git push` automatically deploys your changes.
