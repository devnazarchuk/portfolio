import { Sparkles, Terminal, Activity, Calendar, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Stack() {
    return (
        <section
            id="stack"
            className="max-w-7xl sm:px-6 sm:mt-20 border-t border-white/10 mt-16 mx-auto pt-10 px-4"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* Tech Stack Column */}
                <div className="bg-white/5 border-white/10 border rounded-2xl p-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-white/80" aria-hidden="true" />
                            <h3 className="text-xl font-semibold tracking-tight text-white">
                                Tech Stack
                            </h3>
                        </div>
                        <Link
                            href="/about#stack"
                            className="inline-flex items-center gap-2 text-sm tracking-tight text-white/70 hover:text-white"
                        >
                            <span>View all</span>
                            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                        </Link>
                    </div>

                    <div className="mt-3 space-y-4">
                        <div>
                            <h4 className="text-sm font-medium text-white/80 mb-2">
                                Core Development
                            </h4>
                            <div className="flex flex-wrap gap-2 text-white">
                                {[
                                    "JavaScript (ES6+)",
                                    "React",
                                    "Next.js",
                                    "Tailwind CSS",
                                ].map((item) => (
                                    <span
                                        key={item}
                                        className="px-2.5 py-1 text-xs rounded-md bg-white/10 border border-white/10"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h4 className="text-sm font-medium text-white/80 mb-2">
                                Backend & Infrastructure
                            </h4>
                            <div className="flex flex-wrap gap-2 text-white">
                                {[
                                    "Supabase",
                                    "REST APIs",
                                    "Webhooks",
                                    "Vercel",
                                    "MongoDB",
                                    "PostgreSQL",
                                ].map((item) => (
                                    <span
                                        key={item}
                                        className="px-2.5 py-1 text-xs rounded-md bg-white/10 border border-white/10"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 p-3 bg-black/30 rounded-lg border border-white/10">
                        <p className="text-xs text-white/70 leading-relaxed">
                            <span className="font-medium text-white/80">AI & Tools:</span>{" "}
                            AI API integrations, prompt engineering, workflow automation, Linux (Arch), Git/GitHub, Obsidian, Raspberry Pi.
                        </p>
                    </div>
                </div>

                {/* Timeline Column */}
                <div className="bg-white/5 border-white/10 border rounded-2xl p-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-white/80" aria-hidden="true" />
                            <h3 className="text-xl font-semibold tracking-tight text-white">
                                Timeline
                            </h3>
                        </div>
                        <Link
                            href="/about#timeline"
                            className="inline-flex items-center gap-2 text-sm tracking-tight text-white/70 hover:text-white"
                        >
                            <span>View all</span>
                            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                        </Link>
                    </div>
                    <ol className="mt-3">
                        <li className="relative pl-6 pb-4 border-l border-white/10">
                            <span className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-white"></span>
                            <p className="text-xs text-white/60">Sep 2025 — Nov 2025</p>
                            <p className="text-sm font-medium tracking-tight text-white">
                                Frontend Developer / Contractor — Kunstschule Berlin
                            </p>
                            <p className="text-xs text-white/60 mt-1">
                                Engineered a multi-frontend ecosystem (React/Vite). Integrated Socket.io/Redis features and optimized Python-based local development workflows.
                            </p>
                        </li>
                        <li className="relative pl-6 pb-4 border-l border-white/10">
                            <span className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-white/80"></span>
                            <p className="text-xs text-white/60">Juli 2023 — Aug 2025</p>
                            <p className="text-sm font-medium tracking-tight text-white">
                                Assistant — Pappert Bäckerei
                            </p>
                            <p className="text-xs text-white/60 mt-1">
                                Worked full-time while independently developing technical expertise and project discipline.
                            </p>
                        </li>

                        <li className="relative pl-6 border-l border-white/10">
                            <span className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-white/60"></span>
                            <p className="text-xs text-white/60">2025 — Present</p>
                            <p className="text-sm font-medium tracking-tight text-white">
                                Computer Science (B.Sc.) — Distance Learning
                            </p>
                            <p className="text-xs text-white/60 mt-1">
                                Lutsk National Technical University
                            </p>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    );
}
