'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import enMessages from '../../messages/en.json';
import deMessages from '../../messages/de.json';
import { FaGithub, FaLinkedin, FaFilePdf, FaBars, FaTimes } from 'react-icons/fa';

const messages = {
    en: enMessages,
    de: deMessages
};

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { language, toggleLanguage } = useLanguage();
    const t = messages[language].nav;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-sm shadow-sm' : ''}`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Left section: Logo */}
                    <div className="text-2xl font-bold text-[#723bf3]">
                        AN
                    </div>

                    {/* Center section: Navigation Links (Desktop) */}
                    <nav className="hidden md:flex items-center gap-8">
                        <button onClick={() => scrollToSection('about')} className="text-[#723bf3] hover:text-[#723bf3]/80 transition-colors">
                            {t.about}
                        </button>
                        <button onClick={() => scrollToSection('skills')} className="text-[#723bf3] hover:text-[#723bf3]/80 transition-colors">
                            {t.skills}
                        </button>
                        <button onClick={() => scrollToSection('experience')} className="text-[#723bf3] hover:text-[#723bf3]/80 transition-colors">
                            {t.experience}
                        </button>
                        <button onClick={() => scrollToSection('projects')} className="text-[#723bf3] hover:text-[#723bf3]/80 transition-colors">
                            {t.projects}
                        </button>
                        <button onClick={() => scrollToSection('contact')} className="text-[#723bf3] hover:text-[#723bf3]/80 transition-colors">
                            {t.contact}
                        </button>
                        <button
                            onClick={toggleLanguage}
                            className="text-[#723bf3] hover:text-[#723bf3]/80 transition-colors"
                        >
                            {language === 'en' ? 'DE' : 'EN'}
                        </button>
                    </nav>

                    {/* Right section: Social Links & Language Button */}
                    <div className="flex items-center gap-4">
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-[#723bf3] hover:text-[#723bf3]/80 transition-colors">
                            <FaGithub size={24} />
                        </a>
                        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-[#723bf3] hover:text-[#723bf3]/80 transition-colors">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-[#723bf3] hover:text-[#723bf3]/80 transition-colors">
                            <FaFilePdf size={24} />
                        </a>
                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-[#723bf3] hover:text-[#723bf3]/80 transition-colors"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu - Only Navigation Links */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/80 dark:bg-black/80 backdrop-blur-md"
                    >
                        <div className="container mx-auto px-4 py-4">
                            <nav className="flex flex-col gap-4">
                                <button onClick={() => scrollToSection('about')} className="text-[#723bf3] hover:text-[#723bf3]/80 transition-colors">
                                    {t.about}
                                </button>
                                <button onClick={() => scrollToSection('skills')} className="text-[#723bf3] hover:text-[#723bf3]/80 transition-colors">
                                    {t.skills}
                                </button>
                                <button onClick={() => scrollToSection('experience')} className="text-[#723bf3] hover:text-[#723bf3]/80 transition-colors">
                                    {t.experience}
                                </button>
                                <button onClick={() => scrollToSection('projects')} className="text-[#723bf3] hover:text-[#723bf3]/80 transition-colors">
                                    {t.projects}
                                </button>
                                <button onClick={() => scrollToSection('contact')} className="text-[#723bf3] hover:text-[#723bf3]/80 transition-colors">
                                    {t.contact}
                                </button>
                                <button
                                    onClick={toggleLanguage}
                                    className="block text-muted hover:text-text-primary transition-colors"
                                >
                                    {language === 'en' ? 'DE' : 'EN'}
                                </button>
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
} 