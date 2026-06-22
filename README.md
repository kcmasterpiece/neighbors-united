# Neighbors United Website

Jekyll-powered multi-section website for a neighborhood awareness group, ready to publish on GitHub Pages.

## Sections Included

1. Landing page: who you are and why you organized
2. Concerns: key issues to share with the broader community
3. Get involved: recommendations and action steps
4. Contact: email, meeting info, and update link

## Customize Content

Edit these files:

- `content/home.md`: landing page text and action buttons
- `content/concerns.md`: concerns section content and cards
- `content/involved.md`: recommendations and involvement details
- `content/contact.md`: contact text and details
- `index.html`: section structure that renders markdown content
- `_layouts/default.html`: shared page layout (header, nav, footer)
- `_config.yml`: site-level settings for GitHub Pages/Jekyll
- `styles.css`: colors, typography, spacing, and layout
- `script.js`: mobile menu and active section behavior

Replace placeholder text like `[Issue Name]` and `neighborsunited@example.com` with your real information.

## Run Locally (Optional)

Use Jekyll for local preview so markdown is rendered exactly the same way as GitHub Pages.

If Ruby and Bundler are installed:

```bash
bundle exec jekyll serve
```

Then open `http://localhost:4000`.

Alternative: push to GitHub and use GitHub Pages as your preview environment.

## Publish on GitHub Pages

1. Push this project to a GitHub repository.
2. In GitHub, go to **Settings > Pages**.
3. Under **Build and deployment**, choose:
	- **Source**: Deploy from a branch
	- **Branch**: `main` (or your default branch)
	- **Folder**: `/ (root)`
4. Save and wait for GitHub to publish.
5. Your site will appear at:
	- `https://<your-github-username>.github.io/<repo-name>/`

If you want this website on a custom domain, configure it in the same Pages settings panel.
