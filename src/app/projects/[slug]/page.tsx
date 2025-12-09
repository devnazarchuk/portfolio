"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ExternalLink, CheckCircle2, Lightbulb } from "lucide-react";
import { Header } from "@/components/Header";
import { projects, getProjectBySlug } from "@/data/projects";
import { notFound } from "next/navigation";

interface ProjectPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

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

                <div className="relative z-10 max-w-5xl mx-auto">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to projects</span>
                    </Link>

                    {/* Project Header */}
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-white/10">
                            <project.icon className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                            <p className="text-sm text-white/60">{project.label}</p>
                            <p className="text-sm text-white/40">{project.year}</p>
                        </div>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
                        <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                            {project.title}
                        </span>
                    </h1>

                    <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl mb-8">
                        {project.fullDescription}
                    </p>

                    {/* CTA Button */}
                    {project.link && (
                        <Link
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                        >
                            <ExternalLink className="w-4 h-4" />
                            <span>Visit Live Site</span>
                        </Link>
                    )}
                </div>
            </section>

            {/* Project Image */}
            <section className="relative max-w-6xl mx-auto px-4 sm:px-6 mb-20">
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 1200px) 100vw, 1200px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
            </section>

            {/* Technologies */}
            <section className="relative max-w-5xl mx-auto px-4 sm:px-6 mb-16">
                <h2 className="text-2xl font-bold tracking-tight text-white mb-6">Technologies Used</h2>
                <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 font-medium hover:bg-white/10 transition-colors"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </section>

            {/* Features */}
            {project.features && project.features.length > 0 && (
                <section className="relative max-w-5xl mx-auto px-4 sm:px-6 mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <CheckCircle2 className="w-6 h-6 text-green-400" />
                        <h2 className="text-2xl font-bold tracking-tight text-white">Key Features</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300"
                            >
                                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                <p className="text-white/80 text-sm leading-relaxed">{feature}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Challenges */}
            {project.challenges && project.challenges.length > 0 && (
                <section className="relative max-w-5xl mx-auto px-4 sm:px-6 mb-20">
                    <div className="flex items-center gap-3 mb-6">
                        <Lightbulb className="w-6 h-6 text-yellow-400" />
                        <h2 className="text-2xl font-bold tracking-tight text-white">Challenges & Solutions</h2>
                    </div>
                    <div className="space-y-4">
                        {project.challenges.map((challenge, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300"
                            >
                                <Lightbulb className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                                <p className="text-white/80 text-sm leading-relaxed">{challenge}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* More Projects */}
            <section className="relative max-w-6xl mx-auto px-4 sm:px-6 pb-20">
                <h2 className="text-2xl font-bold tracking-tight text-white mb-8">More Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projects
                        .filter((p) => p.slug !== project.slug)
                        .slice(0, 3)
                        .map((relatedProject) => (
                            <Link
                                key={relatedProject.slug}
                                href={`/projects/${relatedProject.slug}`}
                                className="group bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300"
                            >
                                <div className="relative aspect-video overflow-hidden">
                                    <Image
                                        src={relatedProject.image}
                                        alt={relatedProject.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                </div>
                                <div className="p-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <relatedProject.icon className="w-4 h-4 text-purple-400" />
                                        <span className="text-xs text-white/60">{relatedProject.label}</span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors mb-2">
                                        {relatedProject.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-sm text-purple-400">
                                        <span>View project</span>
                                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                </div>
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
