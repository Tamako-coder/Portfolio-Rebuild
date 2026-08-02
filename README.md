# Portfolio Website

A modern, responsive portfolio website built with Next.js 15, featuring an asymmetric creative layout with diagonal backgrounds, smooth animations, and a tight, professional design.

![Next.js](https://img.shields.io/badge/Next.js-15.1-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?logo=tailwindcss)

## ✨ Features

- **Asymmetric Creative Layout** - Diagonal backgrounds and overlapping elements
- **Tight, Modern Design** - Compact spacing optimized for all screen sizes
- **Smooth Animations** - Framer Motion powered transitions
- **Hide-on-Scroll Navigation** - Clean header that hides when scrolling down
- **Responsive Design** - Mobile-first approach with careful attention to mobile spacing
- **Dark Mode** - Beautiful dark theme with subtle gradients
- **4 Project Showcase** - Bento grid layout with image support

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── experience/        # Experience timeline
│   ├── work/              # Projects showcase
│   ├── blog/              # Blog listing
│   ├── contact/           # Contact page (minimal design)
│   └── layout.tsx         # Root layout
├── components/
│   ├── sections/          # Page sections
│   │   ├── hero-section.tsx
│   │   ├── featured-projects-section.tsx
│   │   ├── skills-section.tsx
│   │   └── ...
│   ├── navigation.tsx     # Auto-hide navigation
│   ├── footer.tsx         # Footer component
│   └── ui/                # ShadCN UI components
├── lib/
│   └── data/
│       └── portfolio-data.ts  # All content data
└── public/
    └── images/            # Project images and assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/tanamaroby/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🛠️ Built With

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[ShadCN UI](https://ui.shadcn.com/)** - Re-usable component library
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[React Icons](https://react-icons.github.io/react-icons/)** - Additional icons

## 🎨 Customization

### Update Personal Information

Edit `lib/data/portfolio-data.ts`:

```typescript
export const personalInfo = {
  name: "Your Name",
  initials: "YN",
  title: "Your Title",
  tagline: "Your tagline",
  status: "Your availability status",
  location: "Your Location",
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    email: "your.email@example.com"
  }
};
```

### Add Projects

Add projects to `featuredProjects` or `allProjects` in `portfolio-data.ts`:

```typescript
{
  id: "project-id",
  title: "Project Name",
  tagline: "One-line description",
  description: "Detailed description",
  image: "/images/projects/project.jpg",
  tags: ["Next.js", "TypeScript", "Tailwind"],
  href: "/work/project-id",
  featured: true,
  award: "Optional award text"
}
```

### Customize Colors

Update theme colors in `app/globals.css`:

```css
:root {
  --primary: oklch(0.205 0 0);
  --background: oklch(1 0 0);
  --available: oklch(0.65 0.2 145);
  /* ... other colors */
}
```

## 📄 Pages

- **Home** (`/`) - Hero section with stats, featured projects, skills, and blog preview
- **About** (`/about`) - Personal info with profile image and role badges
- **Work** (`/work`) - All projects with filterable tags
- **Experience** (`/experience`) - Professional timeline with download resume button
- **Blog** (`/blog`) - Blog post listing
- **Contact** (`/contact`) - Minimal contact page with social links

## 🎯 Design Philosophy

- **Tighter layouts** - Reduced padding and spacing for a more compact feel
- **Asymmetric elements** - Diagonal backgrounds and left-aligned headers
- **Bold typography** - Using `font-black` for headers and strong hierarchy
- **Subtle animations** - Smooth transitions without being distracting
- **Mobile-optimized** - Careful attention to spacing on mobile devices

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px)
- Optimized for phones, tablets, and desktops
- Touch-friendly interactive elements
