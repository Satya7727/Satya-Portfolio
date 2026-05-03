# Satya Prakash Yadav — Portfolio

A modern, dark-themed React portfolio built with Vite.

## 🚀 Deploy to Netlify

### Option 1: Drag & Drop (Fastest)
1. Run `npm install` then `npm run build`
2. Go to [netlify.com](https://netlify.com) → **Add new site → Deploy manually**
3. Drag the `dist/` folder into the Netlify UI
4. Done! Your site is live.

### Option 2: GitHub + Netlify (Auto-deploy)
1. Push this folder to a GitHub repo
2. Go to [netlify.com](https://netlify.com) → **Add new site → Import from Git**
3. Connect your GitHub repo
4. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy site**

## 🛠 Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## 📁 Project Structure

```
satya-portfolio/
├── public/
│   └── _redirects          # Netlify SPA routing fix
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .module.css
│   │   ├── Hero.jsx / .module.css
│   │   ├── Skills.jsx / .module.css
│   │   ├── Projects.jsx / .module.css
│   │   ├── Education.jsx / .module.css
│   │   ├── Contact.jsx / .module.css
│   │   └── Footer.jsx / .module.css
│   ├── App.jsx
│   ├── App.module.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```
