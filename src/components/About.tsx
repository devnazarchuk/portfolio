import Image from "next/image";
import Link from "next/link";
import { Handshake } from "lucide-react";

export function About() {
    return (
        <section id="about" className="max-w-7xl sm:px-6 sm:mt-20 border-t border-white/10 mt-16 mx-auto pt-10 px-4">
            <div className="max-w-2xl mx-auto rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03]">
                <div className="relative aspect-[4/3]">
                    <Image
                        src="/assets/about-profile.jpg"
                        alt="About Image"
                        fill
                        className="object-cover"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent"></div>
                </div>
                <div className="p-5">
                    <h3 className="text-xl font-semibold tracking-tight text-white">
                        About
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                        20-year-old full-stack developer from Ukraine, based in Germany. Building production-ready web applications while pursuing Computer Science degree. Available for freelance work and full-time opportunities.
                    </p>
                    <div className="mt-4 grid grid-cols-4 gap-3 text-white">
                        <div>
                            <div className="text-lg tracking-tight">20</div>
                            <p className="text-[11px] text-white/60 mt-0.5">Age</p>
                        </div>
                        <div>
                            <div className="text-lg tracking-tight">3+</div>
                            <p className="text-[11px] text-white/60 mt-0.5">Years</p>
                        </div>
                        <div>
                            <div className="text-lg tracking-tight">DE</div>
                            <p className="text-[11px] text-white/60 mt-0.5">Based</p>
                        </div>
                        <div>
                            <div className="text-lg tracking-tight">✓</div>
                            <p className="text-[11px] text-white/60 mt-0.5">Available</p>
                        </div>
                    </div>
                    <div className="mt-5 p-4 bg-black/30 rounded-xl border border-white/10">
                        <h4 className="text-sm font-medium tracking-tight text-white mb-2">
                            Languages
                        </h4>
                        <p className="text-sm text-white/70">
                            Ukrainian (native) • Russian (fluent) • English (advanced) • German (B1→B2)
                        </p>
                    </div>
                    <div className="mt-5 flex gap-3">
                        <Link
                            href="/about"
                            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium tracking-tight text-white bg-white/10 hover:bg-white/20 border border-white/10 transition-colors"
                        >
                            <span>Learn more</span>
                        </Link>
                        <Link
                            href="#contact"
                            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium tracking-tight text-neutral-900 bg-white hover:bg-white/90 border border-white/10 transition-colors"
                        >
                            <Handshake className="w-4 h-4" aria-hidden="true" />
                            <span>Let's collaborate</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
