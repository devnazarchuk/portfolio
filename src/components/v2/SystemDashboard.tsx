'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Database, Activity, Monitor, Box, Globe } from 'lucide-react';

export const SystemDashboard: React.FC = () => {
    const [stats, setStats] = useState({ cpu: 12, temp: 42 });
    const [cpuHistory, setCpuHistory] = useState<number[]>(new Array(20).fill(15));
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            const nextCpu = Math.floor(Math.random() * (25 - 5 + 1) + 5);
            setStats({
                cpu: nextCpu,
                temp: Math.floor(Math.random() * (48 - 38 + 1) + 38)
            });
            setCpuHistory(prev => [...prev.slice(1), nextCpu]);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current || (window.matchMedia('(pointer: coarse)').matches)) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;
        cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
        if (cardRef.current) {
            cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
        }
    };

    // Generate SVG path for the CPU history
    const generatePath = () => {
        const width = 100;
        const height = 40;
        const step = width / (cpuHistory.length - 1);

        return cpuHistory.map((val, i) => {
            const x = i * step;
            // Map val (0-100) to height (35-5)
            const y = 35 - (val / 100) * 30;
            return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
        }).join(' ');
    };

    return (
        <div className="relative perspective-container h-full min-h-[450px] flex items-center justify-center p-4">
            {/* Decorative Blur Elements */}
            <div className="absolute -z-10 -top-10 -right-10 w-64 h-64 opacity-20 rounded-full blur-3xl" style={{ backgroundColor: 'var(--accent)' }}></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 opacity-10 rounded-full blur-3xl" style={{ backgroundColor: 'var(--accent)' }}></div>

            <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="tilt-card relative w-full h-full glass border border-[var(--glass-border)] rounded-lg backdrop-blur-md p-6 flex flex-col gap-4 overflow-hidden shadow-2xl transition-transform duration-200 ease-out"
                style={{ boxShadow: '0 25px 50px -12px var(--accent-glow)' }}
            >
                {/* Header of the widget */}
                <div className="flex justify-between items-center border-b border-black/5 dark:border-slate-800 pb-4 mb-2">
                    <div className="flex items-center gap-2">
                        <Monitor style={{ color: 'var(--accent)' }} size={20} />
                        <span className="font-mono text-sm text-[var(--foreground)]">AN-DEV-NODE-01</span>
                    </div>
                    <div className="flex gap-2 text-[10px] items-center font-mono text-zinc-600">
                        <span className="animate-pulse text-[var(--accent)]">●</span>
                        SYSTEM_ONLINE
                    </div>
                </div>

                {/* Live Metrics Grid - REPLACED WITH CANDIDATE SUMMARY */}
                <div className="bg-black/5 dark:bg-slate-950/50 border border-black/5 dark:border-slate-800 p-4 rounded relative group hover:border-[var(--accent)] transition-colors">
                    <div className="text-[10px] font-mono text-zinc-500 mb-2 uppercase tracking-tighter">CANDIDATE_SUMMARY</div>

                    <div className="space-y-3">
                        <div className="flex justify-between items-center text-xs font-mono">
                            <span className="text-zinc-400">ROLE:</span>
                            <span className="text-[var(--foreground)] font-bold">Full-Stack Dev</span>
                        </div>
                        <div className="flex justify-between items-center text-xs font-mono">
                            <span className="text-zinc-400">FOCUS:</span>
                            <span className="text-[var(--foreground)]">Next.js / Performance / i18n</span>
                        </div>
                        <div className="flex justify-between items-center text-xs font-mono">
                            <span className="text-zinc-400">LANGUAGES:</span>
                            <div className="flex gap-1">
                                <span className="bg-black/10 dark:bg-slate-800 text-[var(--foreground)] dark:text-slate-200 px-1 rounded text-[10px]">UA</span>
                                <span className="bg-black/10 dark:bg-slate-800 text-[var(--foreground)] dark:text-slate-200 px-1 rounded text-[10px]">EN</span>
                                <span className="bg-black/10 dark:bg-slate-800 text-[var(--foreground)] dark:text-slate-200 px-1 rounded text-[10px]">DE (B1/B2)</span>
                            </div>
                        </div>
                    </div>

                    {/* Decorative mini-graph */}
                    <div className="mt-4 h-1 w-full bg-black/10 dark:bg-slate-800 overflow-hidden relative">
                        <div className="absolute top-0 left-0 h-full w-2/3 bg-[var(--accent)] animate-pulse"></div>
                    </div>
                </div>

                {/* Docker Containers List */}
                <div className="mt-2 flex-grow">
                    <div className="text-[10px] font-mono text-zinc-500 dark:text-slate-500 mb-3 uppercase tracking-wider">DEPLOYED_MODULES</div>
                    <div className="space-y-2">
                        {[
                            { name: 'noventa-bakery-prod', status: 'STABLE', icon: Globe },
                            { name: 'bagnet-fight-club', status: 'ONLINE', icon: Activity },
                            { name: 'sneaker-store-mvp', status: 'DEPLOYED', icon: Box }
                        ].map((container, idx) => (
                            <div key={idx} className="flex items-center justify-between p-2 bg-black/5 dark:bg-slate-800/30 rounded border border-black/5 dark:border-slate-800/50 group hover:bg-black/10 dark:hover:bg-slate-800/50 transition-colors">
                                <div className="flex items-center gap-3">
                                    <container.icon size={14} className="text-slate-500 group-hover:text-[var(--accent)] transition-colors" />
                                    <span className="text-xs font-mono text-zinc-600 dark:text-slate-300">{container.name}</span>
                                </div>
                                <span className="text-[9px] border px-1 rounded uppercase font-bold" style={{ color: 'var(--accent)', borderColor: 'var(--accent)' }}>
                                    {container.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scanline overlay for depth */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03] blueprint-bg"></div>
            </div>
        </div>
    );
};
