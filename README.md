## Mog Portfolio

Personal portfolio built with React + Vite.

### Local development

```powershell
git clone https://github.com/MohammedGamalKassem/Mog-portfolio.git
cd Mog-portfolio
npm install
npm run dev
```

### Production build

```powershell
npm run build
npx vite preview
```

### Deploying to GitHub Pages

1. Push to `main`. A GitHub Actions workflow (`.github/workflows/deploy.yml`) installs dependencies, runs `npm run build`, and publishes the `dist` folder to the `gh-pages` environment automatically.
2. Wait for the **Deploy to GitHub Pages** workflow to finish on GitHub.
3. Visit `https://mohammedgamalkassem.github.io/Mog-portfolio/` to see the latest build.

The Vite `base` option is set to `/Mog-portfolio/` so that assets resolve correctly when hosted under the repository subpath.

