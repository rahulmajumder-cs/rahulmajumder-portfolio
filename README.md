# Rahul Majumder - Portfolio Website

A modern, elegant, and highly professional portfolio website for a Computer Science student and aspiring software developer. Designed with a minimalist aesthetic focusing on typography, whitespace, and subtle animations.

## Tech Stack
- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion (Animations)
- Lucide React (Icons)

## Local Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rahulmajumder-cs/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to `http://localhost:5173`

## Production Build

To build the project for production, run:
```bash
npm run build
```
This will generate optimized static files in the `dist` directory.

## Deployment Notes (Netlify)

This project is configured for easy deployment to Netlify via the included `netlify.toml`.

**Netlify Deployment Settings:**
- **Build Command:** `npm run build`
- **Publish Directory:** `dist`
- **Node Version:** Ensure Node 20+ is used (automatically handles Vite and Tailwind v4)

## Remaining Assets
- Please replace `public/assets/profile.jpg` with your actual professional portrait image. The current image is an AI-generated placeholder.

## License
© Rahul Majumder. All rights reserved.
