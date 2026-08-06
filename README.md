# Roby Tanama - Portfolio Website

A modern, multi-page portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Multi-page Architecture**: Clean separation of content across dedicated pages
- **Responsive Design**: Fully responsive across all devices
- **Dark Mode**: Beautiful dark theme optimized for readability
- **Smooth Animations**: Framer Motion animations for enhanced UX
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Type-Safe**: Built with TypeScript for robust development
- **Modern UI**: Using ShadCN UI components with Tailwind CSS

## 📁 Project Structure

```
├── app/
│   ├── about/           # About page
│   ├── blog/            # Blog listing and articles
│   ├── changelog/       # Site changelog
│   ├── contact/         # Contact page
│   ├── experience/      # Professional experience
│   ├── work/            # Portfolio index and project pages
│   ├── layout.tsx       # Root layout with navigation and footer
│   ├── page.tsx         # Homepage
│   └── globals.css      # Global styles and theme
├── components/
│   ├── sections/        # Page sections (Hero, Stats, Projects, etc.)
│   ├── ui/              # Reusable UI components (ShadCN)
│   ├── navigation.tsx   # Global navigation component
│   └── footer.tsx       # Global footer component
└── lib/
    └── data/            # Portfolio data and content
```

## Pages Overview

### Home (/)
- Hero section with name, title, and CTAs
- Stats showcase (experience, projects, clients)
- Featured projects preview
- Tech stack/skills overview
- Recent blog posts
- Call-to-action section

### Work (/work)
- Portfolio index with all projects
- Filterable by technology
- Individual project pages (/work/[slug])

### About (/about)
- Personal story and background
- Professional journey
- Skills and expertise
- Work philosophy

### Experience (/experience)
- Professional timeline
- Education
- Key achievements

### Blog (/blog)
- Article listing
- Individual article pages
- Topic filtering

### Contact (/contact)
- Contact form
- Social links
- Availability status

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: ShadCN UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)
## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📝 Content Management

All portfolio content is managed in `/lib/data/portfolio-data.ts`. Update this file to:

- Add/remove projects
- Update personal information
- Modify social links
- Add blog posts
- Update skills and experience

## 🎯 Next Steps

### Immediate Priorities:
1. Add real project images to `/public/images/projects/`
2. Build out individual project pages with detailed case studies
3. Complete About, Experience, and Blog pages
4. Implement contact form functionality
5. Add project GitHub repository links

### Content Needed:
- High-quality project screenshots
- Detailed project descriptions
- Blog article content (MDX format)
- Professional photos/avatar
- Client testimonials (with permission)

## 🔧 Development Notes

- The site uses dark mode by default (configured in `layout.tsx`)
- Navigation is sticky and responsive
- All pages use consistent layout with header and footer
- Animations are triggered on scroll using Framer Motion's viewport detection

## 📦 Key Dependencies

```json
{
  "next": "^16.2.12",
  "react": "^19.x",
  "typescript": "^5.x",
  "tailwindcss": "^4.x",
  "framer-motion": "^11.x",
  "lucide-react": "latest"
}
```

## 📄 License

© 2026 Roby Tanama. All rights reserved.

---

Built with ❤️ using Next.js, ShadCN & Framer Motion
