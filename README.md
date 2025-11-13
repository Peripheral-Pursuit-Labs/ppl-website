# Peripheral Pursuit Labs Website

Official website for Peripheral Pursuit Labs - a software development studio specializing in native iOS applications, web applications, and API development.

🌐 **Live Site:** [https://ppl.dev](https://ppl.dev)

## Structure

- `index.html` - Main landing page (root)
- `privacy/index.html` - Privacy policy (served at /privacy)
- `terms/index.html` - Terms of service (served at /terms)
- `de-dictionary/index.html` - DE Dictionary product page (served at /de-dictionary)
- `de-dictionary-privacy/index.html` - DE Dictionary privacy policy (served at /de-dictionary-privacy)
- `de-dictionary-support/index.html` - DE Dictionary support page (served at /de-dictionary-support)
- `css/style.css` - Custom styles with dark/light theme support
- `js/theme.js` - Theme toggle functionality

**Note:** Pages use directory-based structure for clean URLs without .html extensions. All asset paths (CSS, JS, favicon) use absolute paths (e.g., `/css/style.css`) to work correctly from subdirectories.

## Features

- Dark mode by default with light/dark toggle
- Purple branding (#9b87f5)
- Mobile-responsive design using Skeleton CSS
- Smooth scrolling navigation
- Contact form integration with Formspree

## Deployment

This site is designed for GitHub Pages deployment. Simply push to the `main` branch and enable GitHub Pages in repository settings.

## Local Development

Since the site uses absolute paths for clean URLs, you need to run a local web server (not just open files directly):

```bash
# Python 3 (recommended)
python3 -m http.server 8000

# Then visit http://localhost:8000
```

Opening HTML files directly with `file://` won't work correctly due to absolute path references.

## License

© 2025 Peripheral Pursuit Labs LLC. All rights reserved.
