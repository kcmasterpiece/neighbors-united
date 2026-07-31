# Neighbors United Website

Jekyll site published at <https://kcmasterpiece.github.io/neighbors-united/>.

## Pages

- Home: `index.html`
- About: `about.md`
- Project Overview: `project-overview.md`
- Key Impacts: `key-impacts.md`
- Get Involved: `get-involved.md`
- Resources: `resources.md`
- Contact: `contact.md`

Shared presentation lives in `_layouts/default.html`, `styles.css`, and `script.js`. Published images and documents are under `content/`.

## Local Preview

Install dependencies with `bundle install`, then run:

```bash
bundle exec jekyll serve --config _config.yml,_config.local.yml
```

Use `_config.local.yml` with `baseurl: ""` for a root-level local preview. This local override and generated `_site/` output are intentionally ignored.
