"use client";

import Link from "next/link";
import { Download, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showResumeDropdown, setShowResumeDropdown] = useState(false);

    return (
        <header className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-6">
            <nav className="flex items-center justify-between border-b border-white/10 pb-4">
                <Link href="/" className="inline-flex items-center gap-2">
                    <svg
                        className="md:w-14 md:h-14 w-[36px] h-[36px]"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                        strokeWidth="2"
                        style={{ width: "36px", height: "36px" }}
                    >
                        <path d="M24 8 L40 36 H8 Z" fill="currentColor"></path>
                    </svg>
                    <span className="sm:text-base text-sm font-medium tracking-tight">
                        Artem Nazarchuk
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-6">
                    <Link
                        href="/#work"
                        className="text-sm text-white/70 hover:text-white tracking-tight transition-colors"
                    >
                        Work
                    </Link>
                    <Link
                        href="/#stack"
                        className="text-sm text-white/70 hover:text-white tracking-tight"
                    >
                        Stack
                    </Link>
                    <Link
                        href="/#about"
                        className="text-sm text-white/70 hover:text-white tracking-tight"
                    >
                        About
                    </Link>
                    <Link
                        href="/#contact"
                        className="text-sm text-white/70 hover:text-white tracking-tight"
                    >
                        Contact
                    </Link>
                </div>

                <div className="flex items-center gap-2">
                    {/* Desktop Resume Dropdown */}
                    <div className="hidden sm:block relative">
                        <div className="inline-flex items-center rounded-full bg-white/10 border border-white/10 shadow-sm overflow-hidden">
                            {/* Main download button - downloads default language (currently English, matches site language) */}
                            <Link
                                href="/artem_nazarchuk_resume_eng.pdf"
                                download
                                className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium tracking-tight text-white hover:bg-white/5 transition-all"
                                aria-label="Download Resume (English)"
                            >
                                <Download className="w-4 h-4" aria-hidden="true" />
                                <span>Resume</span>
                            </Link>

                            {/* Divider */}
                            <div className="w-px h-5 bg-white/20"></div>

                            {/* Dropdown toggle button */}
                            <button
                                onClick={() => setShowResumeDropdown(!showResumeDropdown)}
                                className="inline-flex items-center justify-center px-2 py-1.5 hover:bg-white/5 transition-all"
                                aria-label="Toggle resume languages"
                            >
                                <ChevronDown className={`w-3.5 h-3.5 text-white transition-transform duration-300 ${showResumeDropdown ? 'rotate-180' : ''}`} aria-hidden="true" />
                            </button>
                        </div>

                        {/* Dropdown Menu */}
                        {showResumeDropdown && (
                            <div className="absolute top-full mt-2 right-0 bg-white/95 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden shadow-xl w-48 z-50">
                                <Link
                                    href="/artem_nazarchuk_resume_eng.pdf"
                                    download
                                    onClick={() => setShowResumeDropdown(false)}
                                    className="flex items-center justify-between px-4 py-3 hover:bg-black/5 transition-colors text-neutral-900"
                                >
                                    <span className="text-sm font-medium">English 🇬🇧</span>
                                    <Download className="w-3.5 h-3.5" />
                                </Link>
                                <div className="h-px bg-black/10"></div>
                                <Link
                                    href="/artem_nazarchuk_resume_de.pdf"
                                    download
                                    onClick={() => setShowResumeDropdown(false)}
                                    className="flex items-center justify-between px-4 py-3 hover:bg-black/5 transition-colors text-neutral-900"
                                >
                                    <span className="text-sm font-medium">Deutsch 🇩🇪</span>
                                    <Download className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        )}
                    </div>
                    <button
                        type="button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden inline-flex items-center justify-center rounded-full p-2 border border-white/10 bg-white/5 hover:bg-white/10"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="w-4 h-4" aria-hidden="true" /> : <Menu className="w-4 h-4" aria-hidden="true" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="md:hidden mt-3 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md shadow-sm overflow-hidden">
                    <div className="px-4 py-3 grid gap-2">
                        <Link
                            href="/#work"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-sm text-white/90 tracking-tight py-1.5 hover:text-white transition-colors"
                        >
                            Work
                        </Link>
                        <Link
                            href="/#stack"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-sm text-white/90 tracking-tight py-1.5 hover:text-white transition-colors"
                        >
                            Stack
                        </Link>
                        <Link
                            href="/#about"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-sm text-white/90 tracking-tight py-1.5 hover:text-white transition-colors"
                        >
                            About
                        </Link>
                        <Link
                            href="/#contact"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-sm text-white/90 tracking-tight py-1.5 hover:text-white transition-colors"
                        >
                            Contact
                        </Link>
                    </div>
                    <div className="border-t border-white/10 px-4 py-3">
                        {/* Mobile Resume Download - Split Button with Light Styling */}
                        <div className="relative">
                            <div className="inline-flex items-center rounded-full bg-white/90 border border-white/20 overflow-hidden w-full shadow-sm">
                                {/* Main download button - downloads default language (currently English, matches site language) */}
                                <Link
                                    href="/artem_nazarchuk_resume_eng.pdf"
                                    download
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-neutral-900 hover:bg-black/5 transition-all"
                                >
                                    <Download className="w-4 h-4" aria-hidden="true" />
                                    <span>Download Resume</span>
                                </Link>

                                {/* Divider */}
                                <div className="w-px h-5 bg-black/10"></div>

                                {/* Dropdown toggle button */}
                                <button
                                    onClick={() => setShowResumeDropdown(!showResumeDropdown)}
                                    className="inline-flex items-center justify-center px-3 py-2.5 hover:bg-black/5 text-neutral-900 transition-all"
                                    aria-label="Toggle resume languages"
                                >
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showResumeDropdown ? 'rotate-180' : ''}`} aria-hidden="true" />
                                </button>
                            </div>

                            {/* Dropdown Menu for Mobile */}
                            {showResumeDropdown && (
                                <div className="absolute bottom-full mb-2 left-0 right-0 bg-white/95 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden shadow-xl z-50">
                                    <Link
                                        href="/artem_nazarchuk_resume_eng.pdf"
                                        download
                                        onClick={() => {
                                            setShowResumeDropdown(false);
                                            setIsMenuOpen(false);
                                        }}
                                        className="flex items-center justify-between px-4 py-3 hover:bg-black/5 transition-colors text-neutral-900"
                                    >
                                        <span className="text-sm font-medium">English 🇬🇧</span>
                                        <Download className="w-3.5 h-3.5" />
                                    </Link>
                                    <div className="h-px bg-black/10"></div>
                                    <Link
                                        href="/artem_nazarchuk_resume_de.pdf"
                                        download
                                        onClick={() => {
                                            setShowResumeDropdown(false);
                                            setIsMenuOpen(false);
                                        }}
                                        className="flex items-center justify-between px-4 py-3 hover:bg-black/5 transition-colors text-neutral-900"
                                    >
                                        <span className="text-sm font-medium">Deutsch 🇩🇪</span>
                                        <Download className="w-3.5 h-3.5" aria-hidden="true" />
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
