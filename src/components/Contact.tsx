"use client";

import Link from "next/link";
import { Mail, Calendar, Github, Linkedin, Globe, ArrowUpRight, Download, ChevronDown, X } from "lucide-react";
import { useEffect, useState } from "react";

export function Contact() {
    const [currentYear, setCurrentYear] = useState(2025);
    const [showResumeDropdown, setShowResumeDropdown] = useState(false);
    const [showBookingModal, setShowBookingModal] = useState(false);

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    const socialLinks = [
        {
            name: "GitHub",
            href: "https://github.com/devnazarchuk",
            icon: Github,
        },
        {
            name: "LinkedIn",
            href: "https://linkedin.com/in/devnazarchuk",
            icon: Linkedin,
        },
        {
            name: "Website",
            href: "https://devnazarchuk.vercel.app",
            icon: Globe,
        },
    ];

    const quickLinks = [
        { name: "Work", href: "#work" },
        { name: "Stack", href: "#stack" },
        { name: "About", href: "#about" },
    ];

    return (
        <footer
            id="contact"
            className="relative mt-16 sm:mt-24 border-t border-white/10"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-black"></div>
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
                {/* Main Footer Content */}
                <div className="backdrop-blur-sm bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-12 overflow-hidden relative group hover:border-white/20 transition-all duration-500">
                    {/* Animated gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Grid pattern */}
                    <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] opacity-20"></div>

                    <div className="relative z-10">
                        {/* Heading */}
                        <div className="mb-12 lg:mb-16">
                            <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-none mb-4">
                                <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                                    Let's work
                                </span>
                                <br />
                                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                                    together.
                                </span>
                            </h2>
                            <p className="text-base sm:text-lg text-white/60 max-w-2xl mt-4">
                                Ready to bring your ideas to life. Let's create something amazing together.
                            </p>
                        </div>

                        {/* Contact Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
                            {/* Email */}
                            <div className="group/card bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300">
                                <p className="text-xs uppercase tracking-wider text-white/50 mb-2 sm:mb-3 font-medium">Email</p>
                                <Link
                                    href="mailto:devnazarchuk@gmail.com"
                                    className="inline-flex items-start gap-2 text-base sm:text-lg lg:text-xl font-medium group/link"
                                >
                                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 mt-1 text-purple-400 flex-shrink-0" aria-hidden="true" />
                                    <span className="break-all group-hover/link:text-purple-400 transition-colors">
                                        devnazarchuk@gmail.com
                                    </span>
                                </Link>
                            </div>

                            {/* Schedule */}
                            <div className="group/card bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300">
                                <p className="text-xs uppercase tracking-wider text-white/50 mb-2 sm:mb-3 font-medium">Schedule</p>
                                <button
                                    onClick={() => setShowBookingModal(true)}
                                    className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                                >
                                    <Calendar className="w-4 h-4" aria-hidden="true" />
                                    <span>Book a call</span>
                                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                                </button>
                            </div>

                            {/* Social */}
                            <div className="group/card bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 md:col-span-2 lg:col-span-1">
                                <p className="text-xs uppercase tracking-wider text-white/50 mb-2 sm:mb-3 font-medium">Connect</p>
                                <div className="flex flex-wrap gap-2 sm:gap-3">
                                    {socialLinks.map((social) => {
                                        const Icon = social.icon;
                                        return (
                                            <Link
                                                key={social.name}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group/social relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white/5 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-110"
                                                aria-label={social.name}
                                            >
                                                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white/70 group-hover/social:text-purple-400 transition-colors relative z-10" aria-hidden="true" />
                                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover/social:opacity-100 transition-opacity duration-300"></div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Bottom Section */}
                        <div className="border-t border-white/5 pt-6 sm:pt-8 mt-6 sm:mt-8">
                            <div className="flex flex-col gap-6">
                                {/* Back to top and Resume buttons */}
                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center sm:justify-start">
                                    <button
                                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                        className="group flex items-center justify-center sm:justify-start gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white/60 hover:text-white text-sm font-medium transition-all duration-300"
                                        aria-label="Scroll to top"
                                    >
                                        <span>Back to top</span>
                                        <ArrowUpRight className="w-4 h-4 rotate-315 group-hover:-translate-y-1 transition-transform duration-300" aria-hidden="true" />
                                    </button>

                                    {/* Resume Download with Split Button */}
                                    <div className="relative w-full sm:w-auto">
                                        <div className="inline-flex items-center rounded-full bg-white/5 border border-white/10 overflow-hidden w-full sm:w-auto">
                                            {/* Main download button - downloads default language (currently English, matches site language) */}
                                            <Link
                                                href="/artem_nazarchuk_resume_eng.pdf"
                                                download
                                                className="flex-1 sm:flex-initial inline-flex items-center justify-center sm:justify-start gap-2 px-5 py-2.5 text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 transition-all duration-300"
                                            >
                                                <Download className="w-4 h-4" aria-hidden="true" />
                                                <span>Download Resume</span>
                                            </Link>

                                            {/* Divider */}
                                            <div className="w-px h-5 bg-white/20"></div>

                                            {/* Dropdown toggle button */}
                                            <button
                                                onClick={() => setShowResumeDropdown(!showResumeDropdown)}
                                                className="inline-flex items-center justify-center px-3 py-2.5 hover:bg-white/5 text-white/60 hover:text-white transition-all duration-300"
                                                aria-label="Toggle resume languages"
                                            >
                                                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showResumeDropdown ? 'rotate-180' : ''}`} aria-hidden="true" />
                                            </button>
                                        </div>

                                        {/* Dropdown Menu */}
                                        {showResumeDropdown && (
                                            <div className="absolute bottom-full mb-2 left-0 sm:left-auto right-0 sm:right-0 bg-black/90 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-xl w-full sm:w-48 z-50">
                                                <Link
                                                    href="/artem_nazarchuk_resume_eng.pdf"
                                                    download
                                                    onClick={() => setShowResumeDropdown(false)}
                                                    className="flex items-center justify-between px-4 py-3 hover:bg-white/10 transition-colors text-white/80 hover:text-white"
                                                >
                                                    <span className="text-sm">English 🇬🇧</span>
                                                    <Download className="w-3.5 h-3.5" />
                                                </Link>
                                                <div className="h-px bg-white/10"></div>
                                                <Link
                                                    href="/artem_nazarchuk_resume_de.pdf"
                                                    download
                                                    onClick={() => setShowResumeDropdown(false)}
                                                    className="flex items-center justify-between px-4 py-3 hover:bg-white/10 transition-colors text-white/80 hover:text-white"
                                                >
                                                    <span className="text-sm">Deutsch 🇩🇪</span>
                                                    <Download className="w-3.5 h-3.5" />
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Quick Links and Copyright */}
                                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
                                    {/* Quick Links */}
                                    <nav className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6">
                                        {quickLinks.map((link) => (
                                            <Link
                                                key={link.name}
                                                href={link.href}
                                                className="text-sm text-white/60 hover:text-white transition-colors relative group/nav"
                                            >
                                                {link.name}
                                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-purple-400 to-blue-400 group-hover/nav:w-full transition-all duration-300"></span>
                                            </Link>
                                        ))}
                                    </nav>

                                    {/* Copyright */}
                                    <p className="text-xs sm:text-sm text-white/40 text-center sm:text-right">
                                        © {currentYear} Artem Nazarchuk. Available for freelance & contracts
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Booking Modal */}
            {showBookingModal && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                    onClick={() => setShowBookingModal(false)}
                >
                    <div
                        className="relative w-full max-w-4xl bg-black/90 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-black/40">
                            <h3 className="text-lg font-semibold text-white">Book a Call</h3>
                            <button
                                onClick={() => setShowBookingModal(false)}
                                className="p-2 rounded-full hover:bg-white/10 transition-colors text-white/70 hover:text-white"
                                aria-label="Close modal"
                            >
                                <X className="w-5 h-5" aria-hidden="true" />
                            </button>
                        </div>

                        {/* Cal.com Iframe */}
                        <div className="relative w-full h-[700px] max-h-[80vh] bg-black">
                            <iframe
                                src="https://cal.com/devnazarchuk"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                className="w-full h-full rounded-b-2xl"
                                title="Book a call with Artem Nazarchuk"
                            />
                        </div>
                    </div>
                </div>
            )}

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
        </footer>
    );
}
