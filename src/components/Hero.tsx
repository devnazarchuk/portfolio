import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Cpu, Check } from "lucide-react";
import { getGitHubStats, calculateExperience, calculateProjects } from "@/lib/stats";

export async function Hero() {
    const yearsOfExperience = calculateExperience(2022);
    const numberOfProjects = calculateProjects(yearsOfExperience, 5);
    const githubStats = await getGitHubStats("devnazarchuk");

    return (
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 mt-10 sm:mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                {/* Left Content */}
                <div className="lg:col-span-7">
                    <h1 className="leading-none text-white tracking-tight">
                        <span className="block text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] font-semibold">
                            <span
                                data-letter
                                style={{ display: "inline-block", transform: "translateY(0px)", opacity: 1 }}
                                className="tracking-tighter"
                            >
                                Artem
                            </span>
                            <span className="block"></span>
                            <span
                                data-letter
                                style={{ display: "inline-block", transform: "translateY(0px)", opacity: 1 }}
                                className="tracking-tighter"
                            >
                                Nazarchuk
                            </span>
                        </span>
                    </h1>
                    <p className="sm:mt-5 sm:text-3xl leading-relaxed max-w-2xl text-base text-white/70 tracking-tight mt-4">
                        I build web systems the way most people don't like to: slowly at first, correctly from the start. My focus is on practical systems that survive real usage — handling load, scale, bad input, and real constraints.
                    </p>

                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                        <Link
                            href="#work"
                            className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-tight text-neutral-900 bg-white hover:bg-white/90 border border-white/10"
                        >
                            <ArrowRight className="w-4 h-4" aria-hidden="true" />
                            <span>View Work</span>
                        </Link>
                        <Link
                            href="mailto:devnazarchuk@gmail.com"
                            className="inline-flex items-center justify-center gap-2 hover:bg-white/15 text-sm font-medium text-white tracking-tight bg-white/10 border-white/10 border rounded-full pt-3 pr-5 pb-3 pl-5 shadow-sm backdrop-blur"
                        >
                            <Mail className="w-4 h-4" aria-hidden="true" />
                            <span>devnazarchuk@gmail.com</span>
                        </Link>
                    </div>

                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="flex items-start gap-3 border-t border-white/10 pt-4">
                            <MapPin className="w-[18px] h-[18px] text-white/50 mt-0.5" aria-hidden="true" />
                            <div>
                                <p className="text-sm font-medium tracking-tight text-white">
                                    Based in Germany
                                </p>
                                <p className="text-xs text-white/60 mt-0.5">
                                    Open to remote work
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 border-t border-white/10 pt-4">
                            <Cpu className="w-[18px] h-[18px] text-white/50 mt-0.5" aria-hidden="true" />
                            <div>
                                <p className="text-sm font-medium tracking-tight text-white">
                                    AI Systems + Frontend
                                </p>
                                <p className="text-xs text-white/60 mt-0.5">
                                    RAG, agents, benchmarks
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 border-t border-white/10 pt-4">
                            <Check className="w-[18px] h-[18px] text-white/50 mt-0.5" aria-hidden="true" />
                            <div>
                                <p className="text-sm font-medium tracking-tight text-white">
                                    Currently available
                                </p>
                                <p className="text-xs text-white/60 mt-0.5">
                                    Starting mid‑September
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="lg:col-span-5">
                    <div className="relative aspect-[4/5] sm:aspect-[5/6] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.35)] bg-white/5 rounded-3xl border border-white/10">
                        <Image
                            src="/assets/portrait.jpg"
                            alt="Artem Nazarchuk"
                            fill
                            className="object-cover grayscale"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority
                            fetchPriority="high"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                        {/* Stats Overlay */}
                        <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-3">
                            <div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/15 p-3 shadow-lg">
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="w-2 h-2 rounded-full bg-white/50"></div>
                                    <div className="text-lg font-semibold tracking-tight text-white">
                                        {yearsOfExperience}+
                                    </div>
                                </div>
                                <p className="text-[11px] text-white/70">years exp</p>
                            </div>
                            <div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/15 p-3 shadow-lg">
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="w-2 h-2 rounded-full bg-white/50"></div>
                                    <div className="text-lg font-semibold tracking-tight text-white">
                                        {numberOfProjects}+
                                    </div>
                                </div>
                                <p className="text-[11px] text-white/70">projects</p>
                            </div>
                            <div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/15 p-3 shadow-lg">
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="w-2 h-2 rounded-full bg-white/50"></div>
                                    <div className="text-lg font-semibold tracking-tight text-white">
                                        {githubStats.commits}+
                                    </div>
                                </div>
                                <p className="text-[11px] text-white/70">commits</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
