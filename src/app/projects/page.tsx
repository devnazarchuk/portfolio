"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { projects } from "@/data/projects";
import { Contact } from "@/components/Contact";

export default function ProjectsPage() {
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
                            All
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                            Projects
                        </span>
                    </h1>
                    <p className="text-lg text-white/60 max-w-2xl">
                        A collection of web applications, platforms, and tools I've built. Each project represents real-world solutions with production-ready code.
                    </p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="relative max-w-7xl mx-auto px-4 sm:px-6 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {projects.map((project) => (
                        <Link
                            key={project.slug}
                            href={`/projects/${project.slug}`}
                            className="group bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300"
                        >
                            <article>
                                {/* Project Image */}
                                <div className="relative aspect-[16/9] overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/10">
                                        <project.icon className="w-3.5 h-3.5 text-purple-400" />
                                        <span className="text-xs text-white/90">{project.label}</span>
                                    </div>
                                </div>

                                {/* Project Details */}
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold tracking-tight text-white mb-2 group-hover:text-purple-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-white/70 leading-relaxed mb-4">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    {project.technologies && (
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.technologies.slice(0, 3).map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2.5 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-white/80"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.technologies.length > 3 && (
                                                <span className="px-2.5 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-white/80">
                                                    +{project.technologies.length - 3}
                                                </span>
                                            )}
                                        </div>
                                    )}

                                    {/* View Project Link */}
                                    <div className="inline-flex items-center gap-2 text-sm text-purple-400 group-hover:text-purple-300 transition-colors">
                                        <span>View details</span>
                                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>

                {/* Call to Action */}
                {/* <div className="mt-16 text-center">
                    <div className="inline-block bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                        <h3 className="text-2xl font-semibold tracking-tight text-white mb-3">
                            Interested in working together?
                        </h3>
                        <p className="text-white/60 mb-6 max-w-md mx-auto">
                            I'm available for freelance projects and contract work. Let's build something amazing.
                        </p>
                        <Link
                            href="/#contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                        >
                            <span>Get in touch</span>
                            <ArrowUpRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div> */}
                <Contact />
            </section>

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
