export interface ChangeItem {
  type: "Added" | "Changed" | "Fixed" | "Removed";
  description: string;
}

export interface ChangelogEntry {
  version: string;
  date: string;
  summary: string;
  changes: {
    [category: string]: ChangeItem[];
  };
}

export const changelogData: ChangelogEntry[] = [
  {
    version: "v1.1.0",
    date: "March 3, 2026",
    summary: "Complete portfolio rebuild with modern stack, all core pages implemented, blog system, changelog, and comprehensive content across work, experience, and about sections.",
    changes: {
      "Core Pages": [
        { type: "Added", description: "Homepage — hero section with animated social icons, stats showcase, featured projects preview, complete skills grid organized by category, blog preview section with latest 2 posts, and call-to-action" },
        { type: "Added", description: "Work page — all 6 projects displayed in responsive grid with interactive technology filtering, award badge for Aether (1st Place NUS CS3247 STePS 2020), and 'View More on GitHub' CTA acknowledging 20+ projects on GitHub" },
        { type: "Added", description: "About page — profile card with avatar image, personal story in 4 paragraphs covering background and approach, skills organized in 6 categories (Languages, Frontend, Backend, Database, DevOps, Tools), and work philosophy section with 3 core principles" },
        { type: "Added", description: "Experience page — professional timeline with TrieTech (CTO), One X Tech, GIC, oCap Management entries and NUS education, card-based layout with company links, 'Current' badge for active roles, location pins, achievement bullets, technology badges" },
        { type: "Added", description: "Contact page — full contact form with name, email, subject, message fields and validation, contact information sidebar with email card, location card, availability badge, and social links, form states (default, submitting, success)" },
        { type: "Added", description: "Blog page — 6 blog posts displayed in chronological order covering Supabase, PostgreSQL, ERP, AG Grid, React, Next.js topics" },
        { type: "Added", description: "Changelog page — complete version history from v0.1.0 to v1.1.0, categorized changes with color-coded badges, 'Release History' badge with package icon" },
      ],
    },
  },
  {
    version: "v1.0.0",
    date: "March 2, 2026",
    summary: "Navbar More dropdown, opaque mobile drawer, smarter blog sorting, two new posts on database pooling and Supabase production patterns, avatar load improvement, and a comprehensive SEO pass across all routes.",
    changes: {
      "Navigation": [
        { type: "Changed", description: "Blog and Changelog links compressed into a 'More' dropdown on the desktop navbar — reduces crowding on smaller desktop widths" },
        { type: "Fixed", description: "Mobile drawer background changed from semi-transparent glass to solid bg-background — text is now legible against any page content beneath the menu" },
      ],
      "Blog": [
        { type: "Added", description: "getSortedBlogPosts() utility exported from data/blog.ts — blog list page and homepage preview now always display posts newest-first" },
        { type: "Added", description: "New post: 'Database Connection Pooling in Serverless' — covers Postgres connection exhaustion in serverless, Supabase Supavisor (port 6543 vs 5432), Prisma dual-URL config, and connection monitoring" },
        { type: "Added", description: "New post: 'Supabase in Production' — covers Row-Level Security patterns, multi-tenant RLS with org membership helpers, Realtime Broadcast vs Postgres Changes, Edge Functions, Storage RLS policies, and performance tips" },
      ],
      "SEO & Metadata": [
        { type: "Added", description: "BlogPosting JSON-LD structured data injected in blog/[slug]/layout.tsx — includes headline, datePublished, keywords, author, publisher, and isPartOf WebSite references" },
        { type: "Added", description: "Per-post dynamic Open Graph image at app/blog/[slug]/opengraph-image.tsx — renders post title, author badge, and tag pills at 1200×630 on the edge runtime" },
        { type: "Added", description: "Twitter card metadata (summary_large_image, site, creator) added to /blog and /changelog route layouts" },
        { type: "Added", description: "googleBot directive (max-image-preview: large, max-snippet: -1) added to /blog, /changelog, and blog/[slug] layouts — matches root layout" },
        { type: "Added", description: "openGraph.siteName added to /blog, /changelog, and blog/[slug] metadata for consistent social card rendering" },
        { type: "Fixed", description: "Sitemap blog entries now use actual post.date for lastModified instead of new Date() — ensures Google sees accurate freshness signals" },
        { type: "Removed", description: "Non-standard host field removed from robots.ts" },
      ],
      "Performance": [
        { type: "Changed", description: "Profile photo container in About section now has bg-primary/10 as a branded placeholder shown while the WebP loads; fetchPriority='high' added alongside the existing priority prop" },
      ],
    },
  },
  {
    version: "v0.9.0",
    date: "March 2, 2026",
    summary: "Added /blog section with 4 posts, blog preview on landing page, restructured navbar into section/page groups, updated domain to tanamaroby.com, and improved LCP with next/image priority on profile photo.",
    changes: {
      "New Features": [
        { type: "Added", description: "/blog route — list page at /blog with all posts in reverse-chronological order" },
        { type: "Added", description: "/blog/[slug] — individual post pages rendering structured content blocks (headings, paragraphs, code, lists, callouts)" },
        { type: "Added", description: "4 blog posts: Next.js App Router deep-dive, React performance patterns, AG Grid in production lessons, and modern ERP vs SaaS bespoke analysis" },
        { type: "Added", description: "Blog preview section on landing page — 3 most recent posts in a card grid with a 'View all posts' CTA" },
      ],
      "Navigation": [
        { type: "Changed", description: "Navbar redesigned with two groups: section links (scroll anchors) and page links (Blog, Changelog) separated by a visual divider" },
        { type: "Changed", description: "Mobile drawer now shows 'Sections' and 'Pages' labels to reduce crowding" },
        { type: "Changed", description: "Logo and Hire Me CTA now navigate to /#contact when viewed from non-home pages" },
        { type: "Added", description: "Page links (Blog, Changelog) show active underline indicator based on current pathname" },
      ],
      "SEO & Infrastructure": [
        { type: "Changed", description: "Domain updated sitewide from robytanama.dev to tanamaroby.com (layout.tsx, sitemap.ts, robots.ts, changelog layout, OG image)" },
        { type: "Changed", description: "OG image bottom row now displays tanamaroby.com" },
        { type: "Added", description: "Sitemap expanded with /blog index (priority 0.8) and individual post entries (priority 0.6)" },
        { type: "Added", description: "Blog shortcut added to PWA manifest between Projects and Get in Touch" },
        { type: "Added", description: "Blog route layout with canonical URL, OpenGraph article metadata, and per-post metadata via generateMetadata" },
      ],
      "Performance": [
        { type: "Changed", description: "Profile photo in About section replaced with next/image (fill + priority + sizes=160px) for improved LCP" },
        { type: "Fixed", description: "Lighthouse audit run: Performance 74 (dev mode), Accessibility 100, Best Practices 100, SEO 100" },
      ],
      "Housekeeping": [
        { type: "Removed", description: "Deleted 7 stale image originals from public/: Aether.png, love-letter.png, Radomir.png, Trivial.png, Savenus.jpg, Yogapets.jpg, Roby.jpg (WebP versions retained)" },
        { type: "Fixed", description: "z-[999] arbitrary class in loading.tsx simplified to z-999 (Tailwind CSS v4)" },
      ],
    },
  },
  {
    version: "v0.8.0",
    date: "March 2, 2026",
    summary: "Added dark/light mode toggle, active nav indicator, project tech filtering, Testimonials section, and Vercel Analytics.",
    changes: {
      "UI & UX": [
        { type: "Added", description: "Dark/light mode toggle in navbar — powered by next-themes with mounted-state guard to prevent hydration mismatches; defaults to dark" },
        { type: "Added", description: "Active nav indicator — IntersectionObserver watches each section and highlights the corresponding nav link as you scroll (underline transitions in/out)" },
        { type: "Added", description: "Project tech filtering — filter pill buttons above the projects grid let visitors filter by technology; AnimatePresence handles card enter/exit transitions" },
      ],
      "Content": [
        { type: "Added", description: "Testimonials section — four client testimonials from founders, operators, and product leaders; placed between Projects and Contact" },
      ],
      "Analytics": [
        { type: "Added", description: "Vercel Analytics integrated via @vercel/analytics/react — <Analytics /> injected inside Providers in the root layout" },
      ],
      "Infrastructure": [
        { type: "Added", description: "components/providers.tsx — ThemeProvider wrapper; root layout html element no longer hardcodes className='dark'" },
        { type: "Changed", description: "viewport colorScheme updated from 'dark' to 'dark light'; themeColor media query now returns #ffffff for light mode" },
      ],
    },
  },
  {
    version: "v0.7.0",
    date: "March 2, 2026",
    summary: "SEO & performance: WebP image conversion, WebSite/WebPage JSON-LD @graph, apple-touch-icon meta links, and Twitter card alt text.",
    changes: {
      "Performance": [
        { type: "Changed", description: "All project screenshot images converted to WebP (cwebp -q 85 -resize 1200 0) — original PNGs were up to 5 MB; WebP counterparts are 48–64 KB (97–99% reduction)" },
        { type: "Changed", description: "Profile photo (Roby.jpg) converted to WebP — 77 KB → 24 KB" },
        { type: "Changed", description: "All image paths in projects.tsx and about.tsx updated to reference the new .webp files" },
      ],
      "SEO": [
        { type: "Added", description: "JSON-LD restructured as @graph with WebSite and WebPage schemas alongside the existing Person schema, with @id anchors for cross-referencing" },
        { type: "Added", description: "apple-touch-icon meta links added via Next.js metadata icons.apple (192×192 and 512×512)" },
        { type: "Fixed", description: "Twitter card images array now uses object form { url, alt } so the OG image has correct alt text for accessibility audits" },
      ],
      "Docs": [
        { type: "Changed", description: "Copilot instructions updated: WebP conversion workflow added to 'Adding a Project' section, checklist updated to reference structuredDataJsonLd and new image optimisation item" },
      ],
    },
  },
  {
    version: "v0.6.0",
    date: "March 2, 2026",
    summary: "UI polish: semi-transparent back-to-top button, scroll-driven hero orb parallax, green glow consulting badge, Next.js added to backend skills, and production web apps tagline.",
    changes: {
      "UI & UX": [
        { type: "Changed", description: "Back-to-top button is now semi-transparent (opacity-40) at rest and fades to full opacity on hover, so it no longer obscures page text" },
        { type: "Added", description: "Hero background orbs now move with scroll via Framer Motion useScroll + useTransform — performant transform-only parallax with no layout reflows" },
        { type: "Changed", description: "'Open to consulting' badge now uses the new --available green token with a soft glow (glow-available-sm), making availability clearly visible at a glance" },
        { type: "Changed", description: "Hero description updated to highlight specialization in production-ready, industry-grade web applications" },
      ],
      "Content": [
        { type: "Added", description: "Next.js added to the Backend skills category in the Skills section" },
      ],
    },
  },
  {
    version: "v0.5.0",
    date: "March 2, 2026",
    summary: "New UI polish: custom 404 page, full-screen loading spinner, scroll-progress bar, and back-to-top button.",
    changes: {
      "UI & UX": [
        { type: "Added", description: "Custom 404 page (app/not-found.tsx) — branded with the RT monogram, animated background orbs, gradient 404 heading, and Home / Go Back action buttons" },
        { type: "Added", description: "Full-screen loading spinner (app/loading.tsx) — spinning ring around the RT monogram badge with a pulsing tracking label, shown automatically by Next.js during navigation" },
        { type: "Added", description: "Scroll-progress indicator (components/scroll-progress.tsx) — spring-animated 3px bar fixed at the very top of the viewport, driven by Framer Motion useScroll + useSpring" },
        { type: "Added", description: "Back-to-top button (components/back-to-top.tsx) — floating circular button in the bottom-right corner; appears after 400px of scroll with an animated entrance/exit via Framer Motion AnimatePresence" },
      ],
    },
  },
  {
    version: "v0.4.0",
    date: "March 2, 2026",
    summary: "Maximum SEO and enhanced PWA: dynamic OG image, JSON-LD Person schema, sitemap, robots.txt, rich metadata, and expanded web app manifest with shortcuts.",
    changes: {
      "SEO": [
        { type: "Added", description: "Dynamic OG image (1200×630) generated at the edge via Next.js ImageResponse — branded with name, role, and colour scheme" },
        { type: "Added", description: "JSON-LD Person schema injected in the root layout — includes name, job title, employer (TrieTech), NUS alumni, address, email, and sameAs social links for Google rich results" },
        { type: "Added", description: "app/sitemap.ts — dynamic sitemap.xml covering / and /changelog with lastModified, changeFrequency, and priority" },
        { type: "Added", description: "app/robots.ts — robots.txt with sitemap reference, allow all, and disallow /api/" },
        { type: "Changed", description: "Root layout metadata: richer title (includes CTO / Full-Stack Engineer), expanded keywords (18 terms), creator/publisher fields, canonical URL, granular googleBot directives (max-image-preview large, max-snippet -1), Twitter site/creator handles (@SCourtest), OG image reference, and formatDetection for address and email" },
        { type: "Changed", description: "Changelog route metadata: added canonical URL, OG tags, and robots directive" },
        { type: "Changed", description: "viewport: themeColor now uses media query array (dark + light) instead of a bare string" },
      ],
      "PWA": [
        { type: "Changed", description: "manifest.json: added id, lang, dir, prefer_related_applications, display_override (window-controls-overlay), start_url with ?source=pwa tracking, and expanded categories" },
        { type: "Added", description: "manifest.json: shortcuts for Projects, Contact, and Changelog — appear in the OS home-screen long-press menu" },
      ],
    },
  },
  {
    version: "v0.3.0",
    date: "March 2, 2026",
    summary: "Added love-letter — a full-stack social media platform — to the Projects section.",
    changes: {
      "Projects": [
        { type: "Added", description: "love-letter — full-stack social media web app with real-time notifications, Supabase Realtime presence & broadcast, global chat, personal and admin analytics dashboards, versioned public REST API, and PWA support" },
      ],
    },
  },
  {
    version: "v0.2.0",
    date: "March 2, 2026",
    summary: "Content update: populated all sections with real personal information, added profile photo, project screenshots, and a new Experience timeline section.",
    changes: {
      "New Sections": [
        { type: "Added", description: "Experience section — vertical timeline with 4 roles (TrieTech, One X Tech, GIC, oCap Management) plus NUS education card" },
      ],
      "Real Content": [
        { type: "Changed", description: "Hero — updated subtitle to 'Co-Founder & CTO @ TrieTech · Full-Stack Engineer', real social links (GitHub, LinkedIn, Twitter/X, Email), and real description" },
        { type: "Changed", description: "About — added real profile photo (Roby.jpg), Singapore location, real bio paragraphs, and updated interest tags" },
        { type: "Changed", description: "Skills — replaced all placeholders with full real tech stack across 6 categories (Languages, Frontend, Backend, Database, DevOps & Cloud, Tools & Practices)" },
        { type: "Changed", description: "Projects — replaced placeholder cards with 5 real projects (Trivial, YogaPets, Aether, SaveNUS, Radomir) each with project images, real descriptions, and an award badge for Aether" },
        { type: "Changed", description: "Contact — updated all links to real email (tanamaroby@gmail.com), LinkedIn, GitHub (tanamaroby), and Twitter/X (SCourtest)" },
      ],
      "Navigation": [
        { type: "Added", description: "Experience link added to Navbar between About and Skills" },
      ],
    },
  },
  {
    version: "v0.1.1",
    date: "March 1, 2026",
    summary: "Developer tooling update: added automated 'bump the version' workflow to GitHub Copilot instructions.",
    changes: {
      "Developer Tooling": [
        { type: "Added", description: "'Bump the Version' workflow in Copilot instructions — collates git commits since last release, determines semver bump, and atomically updates data/changelog.ts, CHANGELOG.md, and package.json" },
      ],
    },
  },
  {
    version: "v0.1.0",
    date: "March 1, 2026",
    summary: "Initial public release. Built from the ground up with Next.js 16, Tailwind CSS v4, ShadCN UI, and Framer Motion.",
    changes: {
      "Layout & Navigation": [
        { type: "Added", description: "Sticky glass Navbar with scroll-aware styling, smooth entrance animation, and mobile drawer" },
        { type: "Added", description: "Footer with copyright, attribution, and changelog link" },
      ],
      "Sections": [
        { type: "Added", description: "Hero section — animated background orbs, headline, social links, and CTA buttons" },
        { type: "Added", description: "About section — avatar, stats grid, bio, and interest badges" },
        { type: "Added", description: "Skills section — grouped technical toolkit organized by category" },
        { type: "Added", description: "Projects section — cards with tech badges, featured label, GitHub and demo links" },
        { type: "Added", description: "Contact section — email CTA and social link grid" },
      ],
      "Design System": [
        { type: "Added", description: "Full light / dark color token system via CSS custom properties" },
        { type: "Added", description: "Named theme variables for accent gradients and hero background orbs" },
        { type: "Added", description: "Custom CSS utilities: glass, text-gradient, glow-primary, glow-primary-sm, section-padding" },
      ],
      "Animations": [
        { type: "Added", description: "Framer Motion variants: fadeInUp, fadeIn, slideInLeft, slideInRight, scaleIn, staggerContainer" },
        { type: "Added", description: "Scroll-triggered entrance animations with shared viewportConfig" },
      ],
      "ShadCN UI Components": [
        { type: "Added", description: "Avatar with AvatarFallback" },
        { type: "Added", description: "Badge (secondary variant)" },
        { type: "Added", description: "Button (default, ghost, outline variants)" },
        { type: "Added", description: "Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription" },
        { type: "Added", description: "Separator" },
      ],
      "Infrastructure": [
        { type: "Added", description: "Next.js 16 with TypeScript, Tailwind CSS v4, and ShadCN" },
        { type: "Added", description: "PWA support — manifest.json, Apple touch icon, web-app-manifest images" },
        { type: "Added", description: "Full SEO metadata — Open Graph, Twitter cards, and structured site data" },
        { type: "Added", description: "ESLint, TypeScript strict config, postcss, and VSCode workspace settings" },
        { type: "Changed", description: "Replaced Next.js boilerplate page.tsx with full portfolio composition" },
        { type: "Changed", description: "Rewrote globals.css with complete ShadCN token system and Tailwind v4 @theme inline config" },
      ],
    },
  },
];
