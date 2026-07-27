# Roby Tanama - Portfolio Website

A modern, responsive portfolio website built with Next.js 16, TypeScript, and Tailwind CSS. Showcasing projects, experience, and blog posts with smooth animations and a clean, professional design.

![Next.js](https://img.shields.io/badge/Next.js-16.2-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwindcss)

## ✨ Features

- **Modern Stack**: Built with Next.js 16, React, TypeScript, and Tailwind CSS
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Framer Motion for polished interactions
- **Dark Mode Ready**: Supports light and dark themes
- **SEO Optimized**: Pre-rendered pages for better search engine visibility
- **Fast Performance**: Optimized images and lazy loading
- **Type-Safe**: Full TypeScript support throughout

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm installed
- Git for version control

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

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

## 🛠️ Built With

- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[ShadCN UI](https://ui.shadcn.com/)** - Re-usable component library

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler check
```

## 🎨 Customization

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

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify

### Deploy to Other Platforms

The project can be deployed to any platform that supports Node.js:
- AWS Amplify
- Google Cloud Platform
- Heroku
- Railway
- Digital Ocean

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Roby Tanama**
- Website: [tanamaroby.com](https://tanamaroby.com)
- GitHub: [@tanamaroby](https://github.com/tanamaroby)
- LinkedIn: [tanamaroby](https://www.linkedin.com/in/tanamaroby/)
- Twitter: [@SCourtest](https://x.com/SCourtest)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/portfolio/issues).

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

Made with ❤️ by [Roby Tanama](https://github.com/tanamaroby)
