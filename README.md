# Portfolio Website - Rebuild

Rebuild a responsive portfolio website using Next.js 16, TypeScript, and Tailwind CSS. Showcasing projects, experience, and blog posts with smooth animations and a clean design.

![Next.js](https://img.shields.io/badge/Next.js-16.2-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwindcss)

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── experience/        # Experience page
│   ├── work/              # Projects page
│   ├── blog/              # Blog page
│   ├── contact/           # Contact page
│   └── layout.tsx         # Root layout
├── components/
│   ├── sections/          # Page sections
│   │   ├── hero-section.tsx
│   │   ├── about-section.tsx
│   │   ├── experience-section.tsx
│   │   └── ...
│   ├── navigation.tsx     # Navigation component
│   ├── footer.tsx         # Footer component
│   └── ui/                # Reusable UI components
├── lib/
│   ├── data/             # Data and content
│   │   ├── portfolio-data.ts
│   │   └── changelog-data.ts
│   └── utils.ts          # Utility functions
├── public/               # Static assets
│   └── images/          # Image files
└── package.json         # Dependencies
```

## Built With

- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[ShadCN UI](https://ui.shadcn.com/)** - Re-usable component library

## Customization

### Update Personal Information

Edit `lib/data/portfolio-data.ts`:

```typescript
export const personalInfo = {
  name: "Your Name",
  initials: "YN",
  title: "Your Title",
  // ... other fields
};
```

### Add Projects

Add new projects to the `featuredProjects` or `allProjects` array in `portfolio-data.ts`:

```typescript
{
  id: "project-id",
  title: "Project Name",
  tagline: "Short description",
  description: "Detailed description",
  image: "/images/projects/project.jpg",
  tags: ["Next.js", "TypeScript"],
  href: "/work/project-id",
  // ... other fields
}
```

### Modify Theme Colors

Update Tailwind configuration in `app/globals.css`:

```css
:root {
  --primary: 222.2 47.4% 11.2%;
  /* ... other colors */
}
```

---

Made with ❤️ by [Roby Tanama](https://github.com/tanamaroby)
