# Deployment Guide: Vercel

This guide provides step-by-step instructions to deploy the Portfolio Website to Vercel.

## 1. Prerequisites
- A GitHub account with the project repository pushed.
- A Vercel account (connected to GitHub).

## 2. Deployment Steps

### Method A: Vercel Dashboard (Recommended)
1.  Go to [vercel.com/new](https://vercel.com/new).
2.  Import the `Portfolio-Website` repository.
3.  **Configure Project**:
    - **Framework Preset**: Next.js
    - **Root Directory**: `./` (default)
    - **Build Command**: `npm run build`
    - **Output Directory**: `.next` (default)
4.  **Environment Variables**:
    - No specific variables are strictly required for the static build, but if you add analytics or contact form backends later, add them here.
5.  Click **Deploy**.

### Method B: Vercel CLI
1.  Install Vercel CLI: `npm i -g vercel`
2.  Run `vercel` in the project root.
3.  Follow the prompts to link and deploy.

## 3. Post-Deployment
- Vercel automatically sets up **Preview Deployments** for every Pull Request.
- Every push to `main` will trigger a **Production Deployment**.
- You can connect a custom domain in the **Settings > Domains** section of your Vercel project.

## 4. Troubleshooting
- If the build fails, ensure `npm run build` works locally.
- Check the **Build Logs** in the Vercel dashboard for specific error messages.
