import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export function Work() {
    // Show only first 6 projects
    const recentProjects = projects.slice(0, 6);

    return (
        <section
            id="work"
            className="relative z-10 max-w-7xl sm:px-6 sm:mt-20 border-white/10 border-t mt-16 mr-auto ml-auto pt-10 pr-4 pl-4"
        >
            <div className="flex items-center justify-between">
                <h2 className="text-xl sm:text-2xl tracking-tight text-white">Recent Work</h2>
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-sm tracking-tight text-white/70 hover:text-white"
                >
                    <span>View all</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </Link>
            </div>
            <div className="mt-6 columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
                {recentProjects.map((project) => (
                    <Link
                        key={project.slug}
                        href={`/projects/${project.slug}`}
                        className="group block break-inside-avoid mb-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300"
                    >
                        <article>
                            <div className="relative aspect-[16/9]">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                            </div>
                            <div className="p-4 border-t border-white/10">
                                <div className="flex items-center gap-2 text-xs text-white/60">
                                    <project.icon className="w-4 h-4" aria-hidden="true" />
                                    <span>{project.label}</span>
                                </div>
                                <h3 className="mt-2 text-base font-semibold tracking-tight text-white group-hover:text-purple-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-white/70 mt-1">{project.description}</p>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </section>
    );
}
