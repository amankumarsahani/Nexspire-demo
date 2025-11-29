# Deployment Guide: demo.nexspiresolutions.co.in

## What's Been Done
✅ Created `public/CNAME` file with `demo.nexspiresolutions.co.in`
✅ Updated `vite.config.js` to use `base: '/'` for custom domain
✅ Verified build includes CNAME file in `dist/`
✅ GitHub Actions workflow is already configured

## Required Steps to Complete Deployment

### 1. Push to GitHub
```bash
cd "e:/Smart Code/Freelance Project/Nexspire-demo"
git add .
git commit -m "Configure custom domain for demo subdomain"
git push origin main
```

### 2. Enable GitHub Pages
1. Go to your GitHub repository settings
2. Navigate to **Pages** (in the left sidebar)
3. Under **Build and deployment** > **Source**, select **GitHub Actions**
4. The workflow will run automatically

### 3. Configure DNS (GoDaddy)
**CRITICAL: You must add a CNAME record in your DNS settings**

1. Log in to your GoDaddy account
2. Go to **My Products** > **DNS** for `nexspiresolutions.co.in`
3. Add a new record:
   - **Type**: CNAME
   - **Name**: `demo` (or `demo.nexspiresolutions.co.in`)
   - **Value**: `<your-github-username>.github.io`
   - **TTL**: 600 seconds (or default)
4. Save the record

### 4. Wait for DNS Propagation
- DNS changes can take 5 minutes to 48 hours to propagate worldwide
- Typically takes 5-30 minutes for most providers
- You can check status at: https://dnschecker.org

### 5. Verify Deployment
Once DNS propagates, visit:
- **http://demo.nexspiresolutions.co.in**
- **https://demo.nexspiresolutions.co.in** (GitHub Pages auto-provisions HTTPS)

## Troubleshooting

### "Site can't be reached"
- DNS hasn't propagated yet. Wait and try again.
- Verify CNAME record is correct in GoDaddy.

### "404 - There isn't a GitHub Pages site here"
- Check that GitHub Actions workflow completed successfully (Actions tab)
- Verify GitHub Pages is enabled in repository settings
- Ensure the CNAME file exists in the deployed `dist` folder

### "Your connection is not private" (SSL)
- GitHub Pages provisions SSL automatically, but it can take a few minutes
- Try again in 10-15 minutes
