import { LucideIcon, Globe, ShoppingBag, Camera, Code2, Workflow, Bot } from "lucide-react";

export interface Project {
    slug: string;
    image: string;
    icon: LucideIcon;
    label: string;
    title: string;
    description: string;
    fullDescription?: string;
    technologies: string[];
    link?: string;
    github?: string;
    features?: string[];
    challenges?: string[];
    year?: string;
}

export const projects: Project[] = [
    {
        slug: "bagnet-fighting-club",
        image: "/assets/work-rag-platform.webp",
        icon: Globe,
        label: "Web Platform",
        title: "Bagnet Fighting Club",
        description: "Full-stack platform with e-commerce, CMS, and blog for Ukrainian sports organization. Next.js 15, TypeScript, Supabase.",
        fullDescription: "Developed a comprehensive full-stack web application for Bagnet Fighting Club, a Ukrainian sports organization. The platform features a modern, responsive design with complete e-commerce functionality, multilingual content management, and an advanced admin panel.",
        technologies: ["Next.js 15", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "Node.js", "Nodemailer"],
        year: "Aug 2025 - Oct 2025",
        link: "https://bagnet-club.vercel.app",
        features: [
            "Built with Next.js 15 (App Router) and TypeScript for type-safe development",
            "Implemented server-side rendering (SSR) and static site generation (SSG) for optimal performance",
            "Product catalog with dynamic filtering, search, and category navigation",
            "Secure checkout process with order confirmation and email notifications",
            "Designed and implemented PostgreSQL database schema using Supabase",
            "Integrated Nodemailer for transactional emails",
            "Multilingual content management system",
            "Advanced admin panel for content and order management"
        ],
        challenges: [
            "Implementing complex e-commerce workflow with multi-step checkout",
            "Designing scalable database schema for products, orders, and content",
            "Ensuring optimal performance with SSR and SSG strategies"
        ]
    },
    {
        slug: "noventa-bakery",
        image: "/assets/work-agent-orchestrator.webp",
        icon: ShoppingBag,
        label: "E-commerce",
        title: "Noventa Bakery",
        description: "Multilingual e-commerce site for German bakery (est. 1928). Next.js 15, TypeScript, Tailwind, MongoDB + PostgreSQL.",
        fullDescription: "Designed and developed a full-stack web application for a historic German bakery (est. 1928) using Next.js 15, TypeScript, and Tailwind CSS. The platform delivers a modern, mobile-first shopping experience with multi-language support, product catalog, and integrated store locator.",
        technologies: ["Next.js 15", "TypeScript", "MongoDB", "PostgreSQL", "Tailwind CSS", "Clerk", "Leaflet", "Vercel"],
        year: "Mar 2025 - Jun 2025",
        link: "https://noventa-bakery.vercel.app",
        features: [
            "Multi-language support (German/English) with dynamic switching",
            "Product catalog with ratings and reviews system",
            "Secure Clerk authentication with user profiles",
            "Interactive store locator with Leaflet maps",
            "Specialized fitness program module",
            "Mobile-first responsive design",
            "Performance optimization with Turbo and image compression",
            "WCAG-compliant accessibility",
            "Backend architecture combining MongoDB and PostgreSQL",
            "Serverless API routes with JWT-based security"
        ],
        challenges: [
            "Managing dual database architecture (MongoDB + PostgreSQL)",
            "Implementing complex authentication flows with Clerk",
            "Ensuring accessibility compliance while maintaining design"
        ]
    },
    {
        slug: "daria-polupenko-photography",
        image: "/assets/work-code-copilot.webp",
        icon: Camera,
        label: "Portfolio",
        title: "Daria Polupenko Photography",
        description: "Multilingual portfolio with gallery, booking system, and SEO. Next.js 14, TypeScript, Tailwind, EmailJS.",
        fullDescription: "A modern, responsive, and multilingual photography portfolio website built with Next.js 14. Features include dynamic language switching, light/dark theme, interactive booking form, and professional photo gallery with category filtering.",
        technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "React Context", "EmailJS", "Lightbox"],
        year: "Apr 2025",
        link: "https://dariia.vercel.app",
        features: [
            "Dynamic language switching (Ukrainian, English, German)",
            "Light/dark theme toggle with persistent state",
            "Fully responsive design across all devices",
            "Interactive booking form with email notifications via EmailJS",
            "SEO optimization with meta tags and structured data",
            "Professional photo gallery with category filtering",
            "Lightbox viewer for full-screen image viewing",
            "Performance optimized with Next.js Image component",
            "Smooth animations and transitions"
        ],
        challenges: [
            "Implementing tri-lingual support with seamless switching",
            "Optimizing large image files without quality loss",
            "Creating smooth gallery animations and transitions"
        ]
    },
    {
        slug: "portfolio-website",
        image: "/assets/work-data-pipeline.webp",
        icon: Code2,
        label: "Personal Site",
        title: "Portfolio Website",
        description: "Modern technical brand platform showcasing projects and expertise. Next.js, Tailwind CSS, Vercel.",
        fullDescription: "A modern, responsive portfolio website built with Next.js 14, showcasing work as a Frontend Developer. Features beautiful UI with smooth animations, interactive 3D elements, and multilingual capabilities (English/German).",
        technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Spline 3D", "Vercel", "Cal.com"],
        year: "Jun 2025 - Present",
        link: "https://devnazarchuk.vercel.app",
        features: [
            "Interactive 3D background elements with Spline",
            "Smooth scroll animations and page transitions",
            "Project showcase with detailed case studies",
            "Integrated Cal.com booking system",
            "Resume download with multi-language support",
            "Responsive design optimized for all devices",
            "SEO optimized with meta tags",
            "Performance optimized with Next.js 14 features"
        ],
        challenges: [
            "Integrating Spline 3D without impacting performance",
            "Creating smooth animations across different devices",
            "Balancing visual appeal with load time"
        ]
    },
    {
        slug: "internal-dashboards",
        image: "/assets/work-ml-training.webp",
        icon: Workflow,
        label: "SaaS & Tools",
        title: "Internal Dashboards",
        description: "Automation systems, dashboards, and role-based admin panels for workflow optimization.",
        fullDescription: "Suite of internal tools and dashboards for workflow automation and data visualization. Built with React and TypeScript, featuring role-based access control, real-time data updates, and customizable widgets.",
        technologies: ["React", "TypeScript", "Chart.js", "REST APIs", "WebSockets", "Node.js"],
        year: "2024-2025",
        features: [
            "Role-based access control (RBAC) system",
            "Real-time data visualization with Chart.js",
            "Customizable dashboard widgets",
            "Automated workflow triggers and notifications",
            "Export functionality (PDF/CSV)",
            "Mobile-responsive design",
            "WebSocket integration for real-time updates",
            "RESTful API integration"
        ],
        challenges: [
            "Implementing real-time data synchronization",
            "Creating flexible permission system",
            "Optimizing performance with large datasets"
        ]
    },
    {
        slug: "ai-enhanced-web-apps",
        image: "/assets/work-api-architecture.webp",
        icon: Bot,
        label: "AI Integration",
        title: "AI-Enhanced Web Apps",
        description: "Production apps using AI APIs for content generation, automation, and intelligent workflows.",
        fullDescription: "Collection of web applications enhanced with AI capabilities using OpenAI and Google Gemini APIs. Features intelligent content generation, automated workflow suggestions, natural language processing, and smart data analysis for real business use cases.",
        technologies: ["Next.js", "TypeScript", "OpenAI API", "Gemini API", "Vercel", "PostgreSQL"],
        year: "2024-2025",
        features: [
            "AI-powered content generation with GPT-4",
            "Natural language processing for user queries",
            "Automated workflow suggestions based on context",
            "Smart data analysis and insights generation",
            "Context-aware responses with conversation history",
            "API rate limiting and intelligent caching",
            "Error handling and fallback strategies",
            "Cost optimization through smart API usage"
        ],
        challenges: [
            "Managing API costs while maintaining quality",
            "Implementing proper error handling for AI responses",
            "Ensuring response quality and relevance"
        ]
    },
];

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find(project => project.slug === slug);
}
