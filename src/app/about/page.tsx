"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Sparkles, Calendar, Code2, Briefcase, GraduationCap, Heart, Target, Zap } from "lucide-react";
import { Header } from "@/components/Header";
import { useEffect } from "react";
import { Contact } from "@/components/Contact";

export default function AboutPage() {
    // Smooth scroll to hash on mount
    useEffect(() => {
        if (window.location.hash) {
            const id = window.location.hash.substring(1);
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, []);

    return (
        <div className="bg-black min-h-screen text-white selection:bg-white selection:text-neutral-900">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 px-4 sm:px-6 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-transparent to-black"></div>
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to home</span>
                    </Link>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-6">
                        <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                            About
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                            Me
                        </span>
                    </h1>
                    <p className="text-lg text-white/60 max-w-2xl">
                        Developer, problem solver, and lifelong learner building production-ready web applications.
                    </p>
                </div>
            </section>

            {/* Personal Story Section */}
            <section className="relative max-w-5xl mx-auto px-4 sm:px-6 pb-16">
                <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                        {/* Profile Image */}
                        <div className="lg:col-span-2">
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10">
                                <Image
                                    src="/assets/about-profile.jpg"
                                    alt="Artem Nazarchuk"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent"></div>
                            </div>

                            {/* Quick Stats */}
                            <div className="mt-6 grid grid-cols-2 gap-4">
                                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                                    <div className="text-2xl font-bold text-white">20</div>
                                    <p className="text-xs text-white/60 mt-1">Years Old</p>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                                    <div className="text-2xl font-bold text-white">3+</div>
                                    <p className="text-xs text-white/60 mt-1">Years Coding</p>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                                    <div className="text-2xl font-bold text-white">4</div>
                                    <p className="text-xs text-white/60 mt-1">Languages</p>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                                    <div className="text-2xl font-bold text-white">DE</div>
                                    <p className="text-xs text-white/60 mt-1">Based in</p>
                                </div>
                            </div>
                        </div>

                        {/* Story Content */}
                        <div className="lg:col-span-3 space-y-6">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
                                    My Journey
                                </h2>
                                <div className="space-y-4 text-white/70 leading-relaxed">
                                    <p>
                                        I'm Artem Nazarchuk, a 20-year-old full-stack developer based in Germany with Ukrainian roots. Born in Ukraine, I moved to Germany where I discovered my passion for technology and software development.
                                    </p>
                                    <p>
                                        My journey into programming started in 2022 out of pure curiosity. While working full-time as a baker at Pappert from 2023 to 2025, I spent every evening and weekend teaching myself web development. What began with simple HTML and CSS evolved into building complex full-stack applications with Next.js, databases, and API integrations.
                                    </p>
                                    <p>
                                        In 2025, I completed the AZAV-certified IT Career Hub program and secured my first tech role as a Web Developer Intern at Kunstschule Berlin (September-November 2025). During this internship, I worked on internal tools, optimized page performance by 40%, and implemented automated workflows.
                                    </p>
                                    <p>
                                        Currently, I'm pursuing a B.Sc. in Computer Science at Lutsk National Technical University through distance learning while actively working on freelance projects and building my own web applications. I speak Ukrainian (native), Russian (fluent), English (advanced), and German (B1, working toward B2).
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-black/30 border border-white/10 rounded-xl p-5">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                                            <Heart className="w-5 h-5 text-purple-400" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-white">What I Value</h3>
                                    </div>
                                    <p className="text-sm text-white/70 leading-relaxed">
                                        Clean code, user-first design, and solutions that work in production. I believe in building systems that are maintainable, scalable, and actually solve real problems.
                                    </p>
                                </div>

                                <div className="bg-black/30 border border-white/10 rounded-xl p-5">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                                            <Target className="w-5 h-5 text-blue-400" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-white">My Approach</h3>
                                    </div>
                                    <p className="text-sm text-white/70 leading-relaxed">
                                        I combine technical depth with practical execution. Every project is an opportunity to learn something new while delivering real value to users.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 rounded-xl p-6">
                                <div className="flex items-start gap-3">
                                    <Zap className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-2">Currently</h3>
                                        <p className="text-sm text-white/70 leading-relaxed">
                                            Fully available for freelance projects and full-time opportunities. Pursuing B.Sc. in Computer Science at LNTU (distance learning) while building production web applications. Preparing for German B2 certification and exploring business ideas in parallel. Open to interesting projects, contracts, or Ausbildung opportunities.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expanded Tech Stack Section */}
            <section id="stack" className="relative max-w-7xl mx-auto px-4 sm:px-6 pb-16 scroll-mt-20">
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <Sparkles className="w-6 h-6 text-purple-400" />
                        <h2 className="text-3xl font-bold tracking-tight text-white">Tech Stack & Tools</h2>
                    </div>
                    <p className="text-white/60 max-w-3xl">
                        Technologies and tools I work with to build modern, performant web applications. Each skill represents hands-on experience from real projects.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Frontend Development */}
                    <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300">
                        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                            <Code2 className="w-5 h-5 text-purple-400" />
                            Frontend Development
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="text-sm font-medium text-white/80 mb-2">Core Technologies</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["JavaScript (ES6+)", "TypeScript", "React", "Next.js 14/15"].map((tech) => (
                                        <span key={tech} className="px-3 py-1.5 text-sm rounded-lg bg-white/10 border border-white/10 text-white">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-medium text-white/80 mb-2">Styling & UI</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["Tailwind CSS", "CSS3", "Responsive Design", "Animations"].map((tech) => (
                                        <span key={tech} className="px-3 py-1.5 text-sm rounded-lg bg-white/10 border border-white/10 text-white">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-medium text-white/80 mb-2">3D & Graphics</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["Spline 3D", "Three.js basics"].map((tech) => (
                                        <span key={tech} className="px-3 py-1.5 text-sm rounded-lg bg-white/10 border border-white/10 text-white">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Backend & Infrastructure */}
                    <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300">
                        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                            <Briefcase className="w-5 h-5 text-blue-400" />
                            Backend & Infrastructure
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="text-sm font-medium text-white/80 mb-2">Backend Platforms</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["Supabase", "REST APIs", "Webhooks", "Server Actions"].map((tech) => (
                                        <span key={tech} className="px-3 py-1.5 text-sm rounded-lg bg-white/10 border border-white/10 text-white">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-medium text-white/80 mb-2">Databases</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["PostgreSQL", "MongoDB", "Supabase DB"].map((tech) => (
                                        <span key={tech} className="px-3 py-1.5 text-sm rounded-lg bg-white/10 border border-white/10 text-white">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-medium text-white/80 mb-2">Deployment</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["Vercel", "Git", "GitHub", "CI/CD"].map((tech) => (
                                        <span key={tech} className="px-3 py-1.5 text-sm rounded-lg bg-white/10 border border-white/10 text-white">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* AI & Automation */}
                    <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300">
                        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-purple-400" />
                            AI & Automation
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="text-sm font-medium text-white/80 mb-2">AI Integration</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["OpenAI API", "Gemini API", "Prompt Engineering", "AI Workflows"].map((tech) => (
                                        <span key={tech} className="px-3 py-1.5 text-sm rounded-lg bg-white/10 border border-white/10 text-white">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-medium text-white/80 mb-2">Automation Tools</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["Workflow Automation", "Task Scheduling", "Data Processing"].map((tech) => (
                                        <span key={tech} className="px-3 py-1.5 text-sm rounded-lg bg-white/10 border border-white/10 text-white">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Development Tools */}
                    <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300">
                        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                            <GraduationCap className="w-5 h-5 text-blue-400" />
                            Development Tools
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="text-sm font-medium text-white/80 mb-2">Environment</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["Linux (Arch)", "VS Code", "Git", "Terminal"].map((tech) => (
                                        <span key={tech} className="px-3 py-1.5 text-sm rounded-lg bg-white/10 border border-white/10 text-white">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-medium text-white/80 mb-2">Productivity</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["Obsidian", "Notion", "Figma (basics)", "Documentation"].map((tech) => (
                                        <span key={tech} className="px-3 py-1.5 text-sm rounded-lg bg-white/10 border border-white/10 text-white">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-medium text-white/80 mb-2">Hardware</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["Raspberry Pi", "Self-hosting"].map((tech) => (
                                        <span key={tech} className="px-3 py-1.5 text-sm rounded-lg bg-white/10 border border-white/10 text-white">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expanded Timeline Section */}
            <section id="timeline" className="relative max-w-5xl mx-auto px-4 sm:px-6 pb-20 scroll-mt-20">
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <Calendar className="w-6 h-6 text-blue-400" />
                        <h2 className="text-3xl font-bold tracking-tight text-white">Timeline</h2>
                    </div>
                    <p className="text-white/60 max-w-3xl">
                        My professional journey from production work to web development, combining hands-on experience with continuous learning.
                    </p>
                </div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-blue-500/50 to-purple-500/50"></div>

                    {/* Timeline Items */}
                    <div className="space-y-8">
                        {/* Current - Computer Science LNTU */}
                        <div className="relative pl-20">
                            <div className="absolute left-[26px] top-2 w-4 h-4 rounded-full bg-purple-500 border-4 border-black shadow-lg shadow-purple-500/50"></div>
                            <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.05] hover:border-purple-500/30 transition-all duration-300">
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <p className="text-sm text-purple-400 font-medium mb-1">Sep 2025 — Present</p>
                                        <h3 className="text-xl font-semibold text-white">Computer Science (B.Sc.) — Year 2</h3>
                                        <p className="text-sm text-white/60 mt-1">Lutsk National Technical University — Distance Learning</p>
                                    </div>
                                    <GraduationCap className="w-6 h-6 text-purple-400 flex-shrink-0" />
                                </div>
                                <p className="text-white/70 leading-relaxed mb-4">
                                    Currently in second year of Computer Science degree through distance learning, allowing me to balance formal education with practical development work. Focusing on algorithms, data structures, software engineering, and theoretical foundations while applying knowledge to real projects.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 text-xs rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400">
                                        Year 2 Student
                                    </span>
                                    <span className="px-3 py-1 text-xs rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400">
                                        Distance Learning
                                    </span>
                                    <span className="px-3 py-1 text-xs rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400">
                                        Software Engineering
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Web Developer Intern */}
                        <div className="relative pl-20">
                            <div className="absolute left-[26px] top-2 w-4 h-4 rounded-full bg-blue-500 border-4 border-black shadow-lg shadow-blue-500/50"></div>
                            <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.05] hover:border-blue-500/30 transition-all duration-300">
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <p className="text-sm text-blue-400 font-medium mb-1">Sep 2025 — Nov 2025</p>
                                        <h3 className="text-xl font-semibold text-white">Web Developer Intern</h3>
                                        <p className="text-sm text-white/60 mt-1">Kunstschule Berlin</p>
                                    </div>
                                    <Code2 className="w-6 h-6 text-blue-400 flex-shrink-0" />
                                </div>
                                <p className="text-white/70 leading-relaxed mb-4">
                                    First professional role in tech. Worked on internal tools and UI systems, implemented performance improvements, and developed automation features for educational workflows. Collaborated with designers and backend developers in an agile environment.
                                </p>
                                <ul className="space-y-2 mb-4 text-sm text-white/70">
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-400 mt-1">•</span>
                                        <span>Built responsive UI components with React and Next.js</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-400 mt-1">•</span>
                                        <span>Optimized bundle size and improved page load times by 40%</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-400 mt-1">•</span>
                                        <span>Implemented automated workflows for content management</span>
                                    </li>
                                </ul>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 text-xs rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
                                        React
                                    </span>
                                    <span className="px-3 py-1 text-xs rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
                                        Next.js
                                    </span>
                                    <span className="px-3 py-1 text-xs rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
                                        TypeScript
                                    </span>
                                    <span className="px-3 py-1 text-xs rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
                                        Performance
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Assistant - Bakery */}
                        <div className="relative pl-20">
                            <div className="absolute left-[26px] top-2 w-4 h-4 rounded-full bg-white/60 border-4 border-black"></div>
                            <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300">
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <p className="text-sm text-white/60 font-medium mb-1">Juli 2023 — Aug 2025</p>
                                        <h3 className="text-xl font-semibold text-white">Assistant</h3>
                                        <p className="text-sm text-white/60 mt-1">Pappert Bäckerei, Germany</p>
                                    </div>
                                    <Briefcase className="w-6 h-6 text-white/60 flex-shrink-0" />
                                </div>
                                <p className="text-white/70 leading-relaxed mb-4">
                                    Worked full-time in bakery production while self-teaching web development in parallel. This dual-track period taught me discipline, time management, and the power of consistent effort. Resigned in August 2025 to focus fully on IT career development.
                                </p>
                                <ul className="space-y-2 mb-4 text-sm text-white/70">
                                    <li className="flex items-start gap-2">
                                        <span className="text-white/50 mt-1">•</span>
                                        <span>Maintained full-time work while coding every evening and weekend</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-white/50 mt-1">•</span>
                                        <span>Built first portfolio projects and learned modern web frameworks</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-white/50 mt-1">•</span>
                                        <span>Developed resilience and strong work ethic that transferred to programming</span>
                                    </li>
                                </ul>
                                <div className="bg-black/30 border border-white/10 rounded-lg p-3">
                                    <p className="text-xs text-white/60 italic">
                                        "The hardest part wasn't learning to code — it was finding the energy to code after 8-hour shifts. That discipline became my biggest asset."
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Early Development Journey */}
                        <div className="relative pl-20">
                            <div className="absolute left-[26px] top-2 w-4 h-4 rounded-full bg-white/40 border-4 border-black"></div>
                            <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300">
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <p className="text-sm text-white/60 font-medium mb-1">2022 — 2023</p>
                                        <h3 className="text-xl font-semibold text-white">Self-Taught Development Journey</h3>
                                        <p className="text-sm text-white/60 mt-1">Independent Learning</p>
                                    </div>
                                    <Sparkles className="w-6 h-6 text-white/60 flex-shrink-0" />
                                </div>
                                <p className="text-white/70 leading-relaxed mb-4">
                                    Started learning web development out of curiosity. Began with HTML, CSS, and JavaScript basics, then progressed to modern frameworks and full-stack development. Built numerous practice projects to solidify understanding.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/70">
                                        HTML/CSS
                                    </span>
                                    <span className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/70">
                                        JavaScript
                                    </span>
                                    <span className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/70">
                                        React Basics
                                    </span>
                                    <span className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/70">
                                        Git/GitHub
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Contact />
            <style jsx>{`
                @keyframes gradient {
                    0%, 100% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                }
                .animate-gradient {
                    animation: gradient 8s ease infinite;
                }
            `}</style>
        </div>
    );
}
