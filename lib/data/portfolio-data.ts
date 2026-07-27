// Portfolio Data
export const personalInfo = {
  name: "Roby Tanama",
  initials: "RT",
  title: "Co-Founder & CTO @ TrieTech · Full-Stack Engineer",
  tagline: "builds fast, accessible, and beautiful web experiences",
  description: "production-ready, industry-grade web applications",
  status: "Open to consulting & opportunities",
  location: "Bukit Merah, Singapore",
  education: "NUS alumnus",
  avatar: "/images/roby-avatar.jpg",
  social: {
    github: "https://github.com/tanamaroby",
    linkedin: "https://www.linkedin.com/in/tanamaroby/",
    twitter: "https://x.com/SCourtest",
    email: "tanamaroby@gmail.com"
  }
};

export const stats = [
  { label: "Years Experience", value: "6+" },
  { label: "Projects Shipped", value: "20+" },
  { label: "Happy Clients", value: "10+" },
  { label: "Bugs Fixed", value: "∞" }
];

export const roles = [
  "Full-Stack Dev",
  "SaaS Builder",
  "UI/UX Enthusiast",
  "Open Source",
  "Entrepreneur",
  "Team Lead"
];

export const featuredProjects = [
  {
    id: "love-letter",
    title: "love-letter",
    tagline: "Social Media Platform",
    description: "Full-stack social media app with real-time presence, instant notifications, and PWA support",
    image: "/images/projects/love-letter.jpg",
    featured: true,
    tags: ["Next.js", "TypeScript", "Supabase", "Prisma", "Tailwind CSS", "ShadCN UI", "Docker"],
    href: "/work/love-letter",
    github: "https://github.com/tanamaroby/love-letter",
    demo: null
  },
  {
    id: "trivial",
    title: "Trivial",
    tagline: "ERP / Workflow Platform",
    description: "Comprehensive ERP with visual node-based flow editor and real-time notifications",
    image: "/images/projects/trivial.jpg",
    featured: true,
    tags: ["Next.js", "TypeScript", "ShadCN UI", "Tailwind CSS", "Supabase"],
    href: "/work/trivial",
    github: null,
    demo: null
  },
  {
    id: "yogapets",
    title: "YogaPets",
    tagline: "Pet-Caring Platform",
    description: "Platform for pet owners and caretakers with employment matching system",
    image: "/images/projects/yogapets.jpg",
    featured: false,
    tags: ["PostgreSQL", "Full-Stack", "Database Design"],
    href: "/work/yogapets",
    github: null,
    demo: null
  }
];

export const allProjects = [
  ...featuredProjects,
  {
    id: "aether",
    title: "Aether",
    tagline: "Multiplayer Platformer",
    description: "Award-winning Unity multiplayer platformer with fog-of-war mechanic",
    image: "/images/projects/aether.jpg",
    featured: false,
    award: "1st Place — NUS CS3247 STePS 2020",
    tags: ["Unity", "C#", "Multiplayer", "Game Dev"],
    href: "/work/aether",
    github: null,
    demo: null
  },
  {
    id: "savenus",
    title: "SaveNUS",
    tagline: "Budget Management App",
    description: "Meal budget management with smart planning algorithm",
    image: "/images/projects/savenus.jpg",
    featured: false,
    tags: ["Java", "JavaFX", "CI/CD"],
    href: "/work/savenus",
    github: null,
    demo: null
  },
  {
    id: "radomir",
    title: "Radomir",
    tagline: "Task Manager Bot",
    description: "CLI-based chatbot for task and deadline management",
    image: "/images/projects/radomir.jpg",
    featured: false,
    tags: ["Java", "JavaFX", "CLI"],
    href: "/work/radomir",
    github: null,
    demo: null
  }
];

export const skills = {
  languages: ["TypeScript", "JavaScript (ES6+)", "Python", "Java", "C++", "HTML5", "CSS3"],
  frontend: ["React", "Next.js", "Tailwind CSS", "ShadCN UI", "Framer Motion", "Docusaurus"],
  backend: ["Node.js", "Next.js", "Flask", "REST APIs", "JWT", "Auth Middleware", "Edge Functions"],
  database: ["PostgreSQL", "Supabase", "RLS Policies", "Query Optimization"],
  devops: ["Docker", "GitHub Actions", "Vercel", "Heroku", "Google App Engine", "Linux"],
  tools: ["Git", "ESLint", "Prettier", "JSDoc", "Sprint Planning", "CI/CD"]
};

export const blogPosts = [
  {
    id: "supabase-production",
    title: "Supabase in Production: Row-Level Security, Realtime, and Patterns That Actually Scale",
    excerpt: "Deep dive into production-ready Supabase patterns for building scalable applications",
    date: "2026-03-01",
    readTime: "10 min read",
    topics: ["Supabase", "PostgreSQL", "TypeScript"],
    slug: "supabase-rls-realtime-productionpatterns",
    href: "/blog/supabase-rls-realtime-productionpatterns"
  },
  {
    id: "db-pooling",
    title: "Database Connection Pooling in Serverless: Why Your Next.js App Might Be Exhausting Postgres",
    excerpt: "Understanding connection pooling challenges in serverless environments and how to solve them",
    date: "2026-02-25",
    readTime: "7 min read",
    topics: ["PostgreSQL", "Supabase", "Next.js"],
    slug: "database-connection-pooling-serverless",
    href: "/blog/database-connection-pooling-serverless"
  },
  {
    id: "modern-erp",
    title: "The Modern ERP Scene: Why Bespoke Often Beats SaaS for Growing Businesses",
    excerpt: "Exploring when custom-built ERP systems outperform off-the-shelf SaaS solutions",
    date: "2026-02-20",
    readTime: "8 min read",
    topics: ["ERP", "SaaS", "Architecture"],
    slug: "modern-erp-bespoke-vs-saas",
    href: "/blog/modern-erp-bespoke-vs-saas"
  },
  {
    id: "ag-grid-production",
    title: "AG Grid in Production: Lessons from Building Complex Enterprise Tables",
    excerpt: "Best practices for integrating AG Grid in React applications for optimal performance",
    date: "2026-02-15",
    readTime: "12 min read",
    topics: ["AG Grid", "React", "Performance"],
    slug: "ag-grid-production-lessons",
    href: "/blog/ag-grid-production-lessons"
  },
  {
    id: "react-performance",
    title: "React Performance Patterns That Actually Matter in Production",
    excerpt: "Cutting through the noise to focus on performance optimizations that make a real difference",
    date: "2026-02-10",
    readTime: "9 min read",
    topics: ["React", "Performance", "Web Development"],
    slug: "react-performance-patterns",
    href: "/blog/react-performance-patterns"
  },
  {
    id: "nextjs-app-router",
    title: "Next.js App Router: What I've Learned After a Year in Production",
    excerpt: "Honest assessment of Next.js App Router based on real production experience",
    date: "2026-02-05",
    readTime: "11 min read",
    topics: ["Next.js", "React", "Architecture"],
    slug: "nextjs-app-router-deep-dive",
    href: "/blog/nextjs-app-router-deep-dive"
  }
];

export const testimonials = [
  {
    id: 1,
    role: "Operations Director, Manufacturing",
    company: "Confidential",
    content: "Built our workflow automation platform in under 3 months. The node-based flow editor saves us 25+ hours weekly.",
    initials: "OD"
  },
  {
    id: 2,
    role: "CEO & Co-Founder, Logistics & Supply Chain",
    company: "Confidential",
    content: "Delivered a bespoke ERP with inventory management, role-based access, and WhatsApp notifications on time and budget.",
    initials: "CE"
  },
  {
    id: 3,
    role: "Head of Product, Enterprise SaaS",
    company: "Confidential",
    content: "Platform handles thousands of daily transactions flawlessly. Communication and technical decisions were exceptional.",
    initials: "HP"
  },
  {
    id: 4,
    role: "CTO, FinTech",
    company: "Confidential",
    content: "Re-architected our customer portal after two failed agency attempts. Page loads are now 10× faster.",
    initials: "CT"
  }
];
