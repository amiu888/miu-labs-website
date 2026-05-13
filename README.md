# Miu Labs Website — SnaptabAI

Marketing website for [SnaptabAI](https://miulabs.app), the AI-powered receipt scanning and bill splitting iOS app by Miu Labs.

**Live site:** https://miulabs.app  
**GitHub:** https://github.com/amiu888/miu-labs-website

---

## Stack

- [Next.js 16](https://nextjs.org) — React framework (static export)
- TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) (Base UI variant)
- [lucide-react](https://lucide.dev)
- Hosted on [Cloudflare Pages](https://pages.cloudflare.com)

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page — hero, features, how it works, download CTA |
| `/privacy` | Privacy Policy |
| `/support` | Support FAQ + contact |

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deployment

The site is deployed to **Cloudflare Pages** using `wrangler` CLI directly (not the Cloudflare Git integration — see note below).

### Prerequisites

- Node.js 22+
- `wrangler` CLI (installed automatically via `npx`)
- Cloudflare account with the `miu-labs-website` Pages project created

### Deploy

```bash
# 1. Build the static site
npm run build

# 2. Deploy the out/ directory to Cloudflare Pages
npx wrangler pages deploy out --project-name=miu-labs-website
```

Wrangler will prompt you to log in to Cloudflare on first use. After that it uses cached credentials.

Each deploy outputs a unique preview URL like:
```
https://xxxxxxxx.miu-labs-website.pages.dev
```

The production domain `miulabs.app` is set as a custom domain on the Pages project and updates automatically after each deploy.

### Why not the Cloudflare Git integration?

Cloudflare Pages auto-detects Next.js from `package.json` and runs `opennextjs-cloudflare` as a deploy adapter — even when the framework preset is set to "None" in the dashboard. That adapter requires `output: 'standalone'` but this site uses `output: 'export'` (fully static). The Git integration consistently fails as a result.

The `wrangler pages deploy` CLI approach bypasses Cloudflare's build system entirely: we build locally and upload the pre-built `out/` folder directly.

---

## Custom Domain

`miulabs.app` is configured as a custom domain on the Cloudflare Pages project. Since the domain is already on Cloudflare DNS, the DNS record was added automatically.

To update URLs (e.g. App Store link), search for `apps.apple.com` in the codebase and replace with the real URL.

---

## Things to Update Before Launch

- [ ] Replace App Store URL — search `apps.apple.com` in the code
- [ ] Add real app screenshot to replace the icon placeholder in the hero
- [ ] Update contact emails if different from `support@miulabs.com` / `privacy@miulabs.com`
