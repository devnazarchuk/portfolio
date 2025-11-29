'use client';

import React, { useState, useRef, useCallback } from 'react';
import { ExternalLink, ShoppingCart, Camera, Layout } from 'lucide-react';
import { projects, Project } from '../../data/projects';
import Link from 'next/link';
import Image from 'next/image';

const TiltCard: React.FC<{ project: Project; inspectLabel: string }> = ({ project, inspectLabel }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotate, setRotate] = useState({ x: 0, y: 0 });
    const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

    const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current || (window.matchMedia('(pointer: coarse)').matches)) return;
        const card = cardRef.current.getBoundingClientRect();
        const centerX = card.left + card.width / 2;
        const centerY = card.top + card.height / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;
        const rotateX = (-mouseY / (card.height / 2)) * 10;
        const rotateY = (mouseX / (card.width / 2)) * 10;
        const glareX = ((e.clientX - card.left) / card.width) * 100;
        const glareY = ((e.clientY - card.top) / card.height) * 100;
        setRotate({ x: rotateX, y: rotateY });
        setGlare({ x: glareX, y: glareY, opacity: 0.2 });
    }, []);

    const onMouseLeave = useCallback(() => {
        setRotate({ x: 0, y: 0 });
        setGlare(prev => ({ ...prev, opacity: 0 }));
    }, []);

    return (
        <div className="perspective-1000 w-full" onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
            <div
                ref={cardRef}
                style={{
                    transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                    transition: 'transform 0.1s ease-out',
                    transformStyle: 'preserve-3d'
                }}
                className="group relative glass rounded-xl overflow-hidden border border-[var(--glass-border)] shadow-2xl hover:border-[var(--accent)]/30"
            >
                <div
                    style={{
                        background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, var(--accent) 0%, transparent 70%)`,
                        opacity: glare.opacity * 0.5,
                    }}
                    className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300"
                />

                <div className="h-48 overflow-hidden relative">
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                        priority={project.slug === 'bagnet-fighting-club'} // Priority for the first project to improve LCP
                    />
                    <div className="absolute top-4 right-4 bg-zinc-900/90 dark:bg-black/80 px-3 py-1 rounded-full text-[10px] font-mono flex items-center gap-2 border border-[var(--accent)]/30 backdrop-blur-md" style={{ color: 'var(--accent)' }}>
                        <project.icon size={10} />
                        PROD_NODE
                    </div>
                </div>

                <div className="p-6">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--accent)] transition-colors tracking-tight text-[var(--foreground)] uppercase">
                        {project.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-500 text-sm mb-4 line-clamp-2 font-light leading-relaxed">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.slice(0, 4).map(tech => (
                            <span key={tech} className="text-[9px] uppercase tracking-widest font-mono bg-black/5 dark:bg-white/5 text-zinc-500 dark:text-zinc-400 px-2 py-0.5 rounded border border-black/5 dark:border-white/5 group-hover:border-[var(--accent)]/20 group-hover:text-[var(--accent)] transition-colors">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <Link
                        href={project.link || '#'}
                        target="_blank"
                        className="w-full py-2 bg-background border border-black/5 dark:border-white/5 hover:bg-[var(--accent)] hover:text-black hover:border-[var(--accent)] transition-all rounded-lg flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--foreground)] group-hover:text-black"
                    >
                        <ExternalLink size={14} />
                        {inspectLabel}
                    </Link>
                </div>
            </div>
        </div>
    );
};

interface ProjectGridProps {
    lang: 'EN' | 'DE' | 'UA';
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ lang }) => {
    const primaryProjects = projects.slice(0, 2);
    const archivedProjects = projects.slice(2);

    return (
        <div className="space-y-12 max-w-5xl mx-auto">
            {/* Primary Nodes - First 2 Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {primaryProjects.map((project) => (
                    <ProjectCardWrapper key={project.slug} project={project} lang={lang} />
                ))}
            </div>

            {/* Archived Nodes - The rest in a compact list */}
            <div className="pt-8 border-t border-black/5 dark:border-white/5">
                <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-zinc-700"></span>
                    ARCHIVED_NODES / MINOR_SYSTEMS
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    {archivedProjects.map((project) => (
                        <div key={project.slug} className="group flex items-center gap-4 p-4 rounded-lg border border-black/5 dark:border-white/5 bg-background hover:bg-black/10 dark:hover:bg-white/[0.05] hover:border-[var(--accent)]/20 transition-all">

                            <div className="h-10 w-10 relative overflow-hidden rounded bg-black/50 flex-shrink-0">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={40}
                                    height={40}
                                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all"
                                />
                            </div>

                            <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-bold text-zinc-500 dark:text-zinc-400 group-hover:text-[var(--foreground)] transition-colors truncate">
                                    <ProjectTitle project={project} lang={lang} />
                                </h4>
                                <p className="text-[10px] text-zinc-600 dark:text-zinc-400 font-mono truncate">
                                    {project.technologies.slice(0, 3).join(' / ')}
                                </p>
                            </div>

                            <Link
                                href={project.link || '#'}
                                target="_blank"
                                className="text-zinc-600 hover:text-[var(--accent)] transition-colors p-2"
                            >
                                <ExternalLink size={14} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Helper component to extract title logic for cleaner code
const ProjectTitle: React.FC<{ project: Project; lang: 'EN' | 'DE' | 'UA' }> = ({ project, lang }) => {
    let title = project.title;
    if (project.slug === 'daria-polupenko-photography') {
        if (lang === 'DE') title = 'Daria Polupenko Fotografie';
        if (lang === 'UA') title = 'Портфоліо Дар\'ї Полупенко';
    } else if (project.slug === 'portfolio-website') {
        if (lang === 'DE') title = 'Portfolio-Website';
        if (lang === 'UA') title = 'Сайт-портфоліо';
    } else if (project.slug === 'internal-dashboards') {
        if (lang === 'DE') title = 'Interne Dashboards';
        if (lang === 'UA') title = 'Внутрішні дашборди';
    } else if (project.slug === 'ai-enhanced-web-apps') {
        if (lang === 'DE') title = 'KI-gestützte Web-Apps';
        if (lang === 'UA') title = 'Веб-додатки з ШІ';
    }
    return <>{title}</>;
};

const ProjectCardWrapper: React.FC<{ project: Project; lang: 'EN' | 'DE' | 'UA' }> = ({ project, lang }) => {
    // Logic for Primary Projects Titles & Descriptions
    let title = project.title;
    let description = project.description;

    if (project.slug === 'bagnet-fighting-club') {
        if (lang === 'DE') title = 'Bagnet Fighting Club - Plattform';
        if (lang === 'UA') title = 'Bagnet Fighting Club - Веб-платформа';

        if (lang === 'DE') description = 'Vollständige Full-Stack-Anwendung mit Shop, CMS und Blog für eine ukrainische Sportorganisation.';
        if (lang === 'UA') description = 'Повнофункціональна веб-платформа з магазином, CMS та блогом для української спортивної організації.';
    } else if (project.slug === 'noventa-bakery') {
        if (lang === 'DE') title = 'Noventa Bäckerei Website';
        if (lang === 'UA') title = 'Сайт пекарні Noventa';

        if (lang === 'DE') description = 'Mehrsprachige E-Commerce-Website für eine deutsche Traditionsbäckerei (gegr. 1928).';
        if (lang === 'UA') description = 'Мультимовний інтернет-магазин для німецької пекарні з історією з 1928 року.';
    }

    const inspectLabel = lang === 'DE' ? 'Knoten prüfen' : lang === 'UA' ? 'Перевірити вузол' : 'Inspect Node';

    return (
        <TiltCard
            project={{ ...project, title, description }}
            inspectLabel={inspectLabel}
        />
    );
};
