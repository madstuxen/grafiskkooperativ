# Grafiskkooperativ

Static portfolio site for [Grafiskkooperativ](https://grafiskkooperativ.dk) — hosted on GitHub Pages.

## Live site

After Pages is enabled: **https://madstuxen.github.io/grafiskkooperativ/**

## Local preview

```bash
python3 -m http.server 8080
```

Open http://localhost:8080

## Custom domain (later)

When you move DNS from your old host:

1. Add a `CNAME` file in the repo root with your hostname (e.g. `www.grafiskkooperativ.dk`), or configure apex A/AAAA records per [GitHub docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
2. Enable HTTPS in GitHub Pages settings after DNS propagates.

## Structure

- `index.html`, `about.html`, `gallery.html`, `work.html`, `projects.html`
- `assets/` — images (slides, gallery, logos)
- `css/site.css`, `js/` — layout, slideshow, lightbox, mobile nav
