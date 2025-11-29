'use client';

import React, { useEffect, useState } from 'react';
import { Laptop, Globe, Search, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../ThemeProvider';

interface StatusBarProps {
    onCmdClick: () => void;
    lang: 'EN' | 'DE' | 'UA';
    onLanguageChange: (lang: 'EN' | 'DE' | 'UA') => void;
}

export const StatusBar: React.FC<StatusBarProps> = ({ onCmdClick, lang, onLanguageChange }) => {
    const [time, setTime] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    useEffect(() => {
        const updateTime = () => {
            setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000 * 60); // Update every minute is enough for HH:MM
        return () => clearInterval(interval);
    }, []);

    return (
        <header className="fixed top-0 w-full z-[110] bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--glass-border)] transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between font-mono text-[10px] tracking-widest uppercase">
                <div className="flex items-center gap-6">
                    <span className="flex items-center gap-2 text-[var(--foreground)]">
                        <Laptop size={14} style={{ color: 'var(--accent)' }} />
                        <span className="hidden sm:inline">SYSTEM_OWNER: </span>ARTEM_NAZARCHUK
                    </span>
                    <span className="hidden lg:flex items-center gap-2 text-[var(--foreground)]">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: 'var(--accent)' }}></span>
                            <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: 'var(--accent)' }}></span>
                        </span>
                        STATUS: ONLINE // READY_FOR_HIRE
                    </span>
                </div>

                <div className="flex items-center gap-4">
                    <span className="hidden xl:block text-zinc-500">LOC: PFUNGSTADT, GERMANY (HESSE)</span>
                    <span className="hidden sm:flex items-center gap-2 text-[var(--foreground)]">
                        <Globe size={14} />
                        {time}
                    </span>

                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="p-1.5 rounded bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-[var(--foreground)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all"
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? <Sun size={12} /> : <Moon size={12} />}
                    </button>

                    {/* Language Switcher */}
                    <div className="flex bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded p-0.5">
                        {(['EN', 'DE', 'UA'] as const).map((l) => (
                            <button
                                key={l}
                                onClick={() => onLanguageChange(l)}
                                className={`px-2 py-0.5 rounded-[2px] text-[8px] font-bold transition-all ${lang === l
                                    ? 'bg-[var(--accent)] text-black'
                                    : 'text-zinc-500 hover:text-[var(--foreground)] hover:bg-black/5 dark:hover:bg-white/5'}`}
                            >
                                {l}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={onCmdClick}
                        className="hidden md:flex items-center gap-1 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-2 py-1 rounded text-[var(--foreground)] hover:border-black/20 dark:hover:border-white/20 transition-colors"
                    >
                        <Search size={10} />
                        <span className="text-[10px]">CMD+I</span>
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="flex md:hidden items-center justify-center p-2 text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Panel */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-12 left-0 w-full bg-[var(--background)]/95 backdrop-blur-xl border-b border-black/10 dark:border-white/10 animate-in slide-in-from-top duration-300">
                    <nav className="flex flex-col p-6 gap-6">
                        <a
                            href="#projects"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-xs font-mono text-zinc-500 hover:text-[var(--accent)] tracking-[0.2em] transition-colors"
                        >
                            01_PROJECTS // NODES
                        </a>
                        <a
                            href="#about"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-xs font-mono text-zinc-500 hover:text-[var(--accent)] tracking-[0.2em] transition-colors"
                        >
                            02_ABOUT // KERNEL
                        </a>
                        <a
                            href="#contact"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-xs font-mono text-zinc-500 hover:text-[var(--accent)] tracking-[0.2em] transition-colors"
                        >
                            03_CONTACT // CORE
                        </a>
                        <div className="h-px bg-black/10 dark:bg-white/10 my-2" />
                        <button
                            onClick={() => {
                                setIsMenuOpen(false);
                                onCmdClick();
                            }}
                            className="flex items-center gap-3 text-xs font-mono text-[var(--accent)] tracking-[0.2em]"
                        >
                            <Search size={16} />
                            CMD_INTERFACE
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
};
