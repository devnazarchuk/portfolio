'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { AiFillFilePdf, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { FiMoon, FiSun, FiGlobe, FiDownload, FiMenu, FiX, FiUser, FiCode, FiBriefcase, FiFolder, FiAward, FiMail } from 'react-icons/fi';
import { textAnimation } from './lib/animation';
import { Link as UiLink } from './ui/link';
import { useTheme } from './context/ThemeContext';
import { useLanguage } from './context/LanguageContext';
import enMessages from '../messages/en.json';
import deMessages from '../messages/de.json';
import dynamic from 'next/dynamic';

const Cursor = dynamic(() => import('./ui/cursor').then(mod => mod.Cursor), { ssr: false });
const About = dynamic(() => import('./ui/about').then(mod => mod.About));
const Skills = dynamic(() => import('./ui/skills').then(mod => mod.Skills));
const Experience = dynamic(() => import('./ui/experience').then(mod => mod.Experience));
const Projects = dynamic(() => import('./ui/projects').then(mod => mod.Projects));
const Certificates = dynamic(() => import('./ui/certificates').then(mod => mod.Certificates));
const Contact = dynamic(() => import('./ui/contact').then(mod => mod.Contact));

const messages = {
    en: enMessages,
    de: deMessages
};

export default function Home() {
    const { language } = useLanguage();
    const t = messages[language];
    const [activeLink, setActiveLink] = useState<'about' | 'skills' | 'experience' | 'projects' | 'certificates' | 'contact'>('about');
    const [isHeaderVisible, setIsHeaderVisible] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const about = useRef<HTMLDivElement | null>(null);
    const skills = useRef<HTMLDivElement | null>(null);
    const experience = useRef<HTMLDivElement | null>(null);
    const projects = useRef<HTMLDivElement | null>(null);
    const certificates = useRef<HTMLDivElement | null>(null);
    const contact = useRef<HTMLDivElement | null>(null);
    const { theme, toggleTheme } = useTheme();
    const { toggleLanguage } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            if (experience.current && projects.current && certificates.current && contact.current && about.current && skills.current) {
                const scrollPosition = window.scrollY + 200;
                const skillsPosition = skills.current.offsetTop;
                const experiencePosition = experience.current.offsetTop;
                const projectsPosition = projects.current.offsetTop;
                const certificatesPosition = certificates.current.offsetTop;
                const contactPosition = contact.current.offsetTop;

                if (scrollPosition < skillsPosition) {
                    setActiveLink('about');
                } else if (scrollPosition < experiencePosition) {
                    setActiveLink('skills');
                } else if (scrollPosition < projectsPosition) {
                    setActiveLink('experience');
                } else if (scrollPosition < certificatesPosition) {
                    setActiveLink('projects');
                } else if (scrollPosition < contactPosition) {
                    setActiveLink('certificates');
                } else {
                    setActiveLink('contact');
                }

                // Show header when scrolled past the initial section and hide when back at the top
                const initialSectionHeight = about.current.offsetHeight;
                const shouldShowHeader = window.scrollY > initialSectionHeight;
                setIsHeaderVisible(shouldShowHeader);
                
                // Close mobile menu when scrolling up to initial section
                if (!shouldShowHeader && isMobileMenuOpen) {
                    setIsMobileMenuOpen(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobileMenuOpen]);

    const scrollToSection = (section: 'about' | 'skills' | 'experience' | 'projects' | 'certificates' | 'contact') => {
        const element = document.getElementById(section);
        if (element) {
            const yOffset = 100;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({
                top: y,
                behavior: 'smooth'
            });
        }
        setActiveLink(section);
        setIsMobileMenuOpen(false);
    };

    const NavigationLinks = () => (
        <>
            <UiLink
                isActive={activeLink === 'about'}
                onClick={() => scrollToSection('about')}
            >
                {t.nav.about}
            </UiLink>
            <UiLink
                isActive={activeLink === 'skills'}
                onClick={() => scrollToSection('skills')}
            >
                {t.nav.skills}
            </UiLink>
            <UiLink
                isActive={activeLink === 'experience'}
                onClick={() => scrollToSection('experience')}
            >
                {t.nav.experience}
            </UiLink>
            <UiLink
                isActive={activeLink === 'projects'}
                onClick={() => scrollToSection('projects')}
            >
                {t.nav.projects}
            </UiLink>
            <UiLink
                isActive={activeLink === 'certificates'}
                onClick={() => scrollToSection('certificates')}
            >
                {t.nav.certificates}
            </UiLink>
            <UiLink
                isActive={activeLink === 'contact'}
                onClick={() => scrollToSection('contact')}
            >
                {t.nav.contact}
            </UiLink>
        </>
    );

    const SocialButtons = () => (
        <>
            <Link
                href='https://github.com/devnazarchuk'
                target='_blank'
                className='text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                aria-label='GitHub Profile'
            >
                <AiFillGithub size='2em' />
            </Link>
            <Link
                href='https://www.linkedin.com/in/devnazarchuk/'
                target='_blank'
                className='text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                aria-label='LinkedIn Profile'
            >
                <AiFillLinkedin size='2em' />
            </Link>
            <Link
                href={language === 'en' ? '/artem_nazarchuk_resume_eng.pdf' : '/artem_nazarchuk_resume_de.pdf'}
                target='_blank'
                className='text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                aria-label='See Resume'
            >
                <AiFillFilePdf size='2em' />
            </Link>
            <button
                aria-label='Copy Email Address'
                onClick={() => {
                    navigator.clipboard.writeText('devnazarchuk@gmail.com');
                    alert('Email copied to clipboard!');
                }}
                className='text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            >
                <MdEmail size='2em' />
            </button>
            <button
                onClick={toggleTheme}
                className='text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            >
                {theme === 'dark' ? <FiSun size='2em' /> : <FiMoon size='2em' />}
            </button>
            <button
                onClick={toggleLanguage}
                className='text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                aria-label={`Switch to ${language === 'en' ? 'German' : 'English'}`}
            >
                <FiGlobe size='2em' />
            </button>
        </>
    );

    return (
        <div className='max-w-7xl mx-auto px-4 flex max-lg:flex-col max-lg:px-10 max-[425px]:px-4 overflow-hidden' suppressHydrationWarning>
            <Cursor />
            
            {/* Desktop Sidebar */}
            <div className='fixed max-lg:hidden flex flex-col gap-20 h-screen justify-center' suppressHydrationWarning>
                <div suppressHydrationWarning>
                    <motion.h1
                        custom={1}
                        variants={textAnimation}
                        initial='hidden'
                        whileInView='visible'
                        className='text-slate-800 dark:text-white font-bold text-5xl'
                    >
                        {t.title}
                    </motion.h1>
                    <motion.p
                        custom={2}
                        variants={textAnimation}
                        initial='hidden'
                        whileInView='visible'
                        className='text-slate-800 dark:text-white text-xl pt-2'
                    >
                        {t.subtitle}
                    </motion.p>
                    <motion.p
                        custom={3}
                        variants={textAnimation}
                        initial='hidden'
                        whileInView='visible'
                        className='text-slate-600 dark:text-slate-300 pt-2 max-w-96'
                    >
                        {t.description}
                    </motion.p>
                </div>
                <motion.nav
                    custom={3}
                    variants={textAnimation}
                    initial='hidden'
                    whileInView='visible'
                    className='flex flex-col gap-6'
                    suppressHydrationWarning
                >
                    <NavigationLinks />
                </motion.nav>
                <motion.div
                    custom={4}
                    variants={textAnimation}
                    initial='hidden'
                    whileInView='visible'
                    className='flex gap-4'
                    suppressHydrationWarning
                >
                    <SocialButtons />
                </motion.div>
            </div>

            {/* Mobile Initial Section */}
            <div className='lg:hidden pt-20 pb-10' suppressHydrationWarning>
                <motion.div
                    custom={1}
                    variants={textAnimation}
                    initial='hidden'
                    whileInView='visible'
                    className='text-center'
                >
                    <h1 className='text-slate-800 dark:text-white font-bold text-4xl mb-4'>{t.title}</h1>
                    <p className='text-slate-800 dark:text-white text-xl mb-4'>{t.subtitle}</p>
                    <p className='text-slate-600 dark:text-slate-300 mb-8'>{t.description}</p>
                    <nav className='flex flex-col gap-4 mb-8' suppressHydrationWarning>
                        <NavigationLinks />
                    </nav>
                    <div className='flex gap-4 justify-center' suppressHydrationWarning>
                        <SocialButtons />
                    </div>
                </motion.div>
            </div>

            {/* Mobile Header */}
            <AnimatePresence>
                {isHeaderVisible && (
                    <motion.header
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        className='fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-lg border-b border-[#723bf3]/20 dark:border-[#723bf3]/30 lg:hidden'
                    >
                        <div className='max-w-7xl mx-auto px-4 py-4'>
                            <div className='flex justify-between items-center'>
                                <h1 className='text-slate-800 dark:text-white font-bold text-xl max-[425px]:hidden'>{t.title}</h1>
                                <div className='flex items-center gap-4 max-[425px]:ml-auto'>
                                    <Link
                                        href='https://github.com/devnazarchuk'
                                        target='_blank'
                                        className='text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                                        aria-label='GitHub Profile'
                                    >
                                        <AiFillGithub size='1.5em' />
                                    </Link>
                                    <button
                                        aria-label='Copy Email Address'
                                        onClick={() => {
                                            navigator.clipboard.writeText('devnazarchuk@gmail.com');
                                            alert('Email copied to clipboard!');
                                        }}
                                        className='text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                                    >
                                        <MdEmail size='1.5em' />
                                    </button>
                                    <button
                                        onClick={toggleTheme}
                                        className='text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                                        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
                                    >
                                        {theme === 'dark' ? <FiSun size='1.5em' /> : <FiMoon size='1.5em' />}
                                    </button>
                                    <button
                                        onClick={toggleLanguage}
                                        className='text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                                        aria-label={`Switch to ${language === 'en' ? 'German' : 'English'}`}
                                    >
                                        <FiGlobe size='1.5em' />
                                    </button>
                                    <button
                                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                        className='text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white p-2'
                                        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                                    >
                                        {isMobileMenuOpen ? <FiX size='1.5em' /> : <FiMenu size='1.5em' />}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.header>
                )}
            </AnimatePresence>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className='fixed top-[60px] left-0 right-0 z-40 bg-white/90 dark:bg-black/90 backdrop-blur-lg border-b border-[#723bf3]/20 dark:border-[#723bf3]/30 lg:hidden'
                    >
                        <div className='max-w-7xl mx-auto px-4 py-4'>
                            <nav className='mt-4'>
                                {/* Navigation in 2 columns */}
                                <div className='grid grid-cols-2 gap-4 mb-4'>
                                    <button
                                        onClick={() => scrollToSection('about')}
                                        className={`text-left p-3 rounded-lg transition-all duration-200 ${
                                            activeLink === 'about' 
                                                ? 'bg-[#723bf3]/10 dark:bg-[#a855f7]/10 text-[#723bf3] dark:text-[#a855f7]' 
                                                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                                        }`}
                                    >
                                        <div className='flex items-center gap-2'>
                                            <FiUser size={16} />
                                            <span className='font-semibold text-sm capitalize'>{t.nav.about}</span>
                                        </div>
                                    </button>
                                    <button
                                        onClick={() => scrollToSection('skills')}
                                        className={`text-left p-3 rounded-lg transition-all duration-200 ${
                                            activeLink === 'skills' 
                                                ? 'bg-[#723bf3]/10 dark:bg-[#a855f7]/10 text-[#723bf3] dark:text-[#a855f7]' 
                                                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                                        }`}
                                    >
                                        <div className='flex items-center gap-2'>
                                            <FiCode size={16} />
                                            <span className='font-semibold text-sm capitalize'>{t.nav.skills}</span>
                                        </div>
                                    </button>
                                    <button
                                        onClick={() => scrollToSection('experience')}
                                        className={`text-left p-3 rounded-lg transition-all duration-200 ${
                                            activeLink === 'experience' 
                                                ? 'bg-[#723bf3]/10 dark:bg-[#a855f7]/10 text-[#723bf3] dark:text-[#a855f7]' 
                                                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                                        }`}
                                    >
                                        <div className='flex items-center gap-2'>
                                            <FiBriefcase size={16} />
                                            <span className='font-semibold text-sm capitalize'>{t.nav.experience}</span>
                                        </div>
                                    </button>
                                    <button
                                        onClick={() => scrollToSection('projects')}
                                        className={`text-left p-3 rounded-lg transition-all duration-200 ${
                                            activeLink === 'projects' 
                                                ? 'bg-[#723bf3]/10 dark:bg-[#a855f7]/10 text-[#723bf3] dark:text-[#a855f7]' 
                                                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                                        }`}
                                    >
                                        <div className='flex items-center gap-2'>
                                            <FiFolder size={16} />
                                            <span className='font-semibold text-sm capitalize'>{t.nav.projects}</span>
                                        </div>
                                    </button>
                                    <button
                                        onClick={() => scrollToSection('certificates')}
                                        className={`text-left p-3 rounded-lg transition-all duration-200 ${
                                            activeLink === 'certificates' 
                                                ? 'bg-[#723bf3]/10 dark:bg-[#a855f7]/10 text-[#723bf3] dark:text-[#a855f7]' 
                                                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                                        }`}
                                    >
                                        <div className='flex items-center gap-2'>
                                            <FiAward size={16} />
                                            <span className='font-semibold text-sm capitalize'>{t.nav.certificates}</span>
                                        </div>
                                    </button>
                                    <button
                                        onClick={() => scrollToSection('contact')}
                                        className={`text-left p-3 rounded-lg transition-all duration-200 ${
                                            activeLink === 'contact' 
                                                ? 'bg-[#723bf3]/10 dark:bg-[#a855f7]/10 text-[#723bf3] dark:text-[#a855f7]' 
                                                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                                        }`}
                                    >
                                        <div className='flex items-center gap-2'>
                                            <FiMail size={16} />
                                            <span className='font-semibold text-sm capitalize'>{t.nav.contact}</span>
                                        </div>
                                    </button>
                                </div>
                                <div className='border-t border-[#723bf3]/20 dark:border-[#723bf3]/30 my-2 pt-4'>
                                    <Link
                                        href='https://www.linkedin.com/in/devnazarchuk/'
                                        target='_blank'
                                        className='flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                                    >
                                        <AiFillLinkedin size='1.5em' />
                                        <span>{t.buttons.linkedin}</span>
                                    </Link>
                                    <Link
                                        href={language === 'en' ? '/artem_nazarchuk_resume_eng.pdf' : '/artem_nazarchuk_resume_de.pdf'}
                                        target='_blank'
                                        className='flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white mt-4'
                                    >
                                        <FiDownload size='1.5em' />
                                        <span>{t.buttons.resume}</span>
                                    </Link>
                                </div>
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className='w-80 h-80 opacity-60 rounded-full bg-[#723bf3] shadow-2xl shadow-[#723bf3] fixed top-0 left-0 pointer-events-none -z-10 blur-3xl' suppressHydrationWarning></div>
            <div className='w-80 h-80 opacity-60 rounded-full bg-[#723bf3] shadow-2xl shadow-[#723bf3] fixed bottom-0 right-0 pointer-events-none -z-10 blur-3xl' suppressHydrationWarning></div>

            <div className='pl-[600px] max-xl:pl-[500px] max-lg:pl-0' suppressHydrationWarning>
                <div id="about" ref={about} suppressHydrationWarning>
                    <About />
                </div>
                <div id="skills" ref={skills} suppressHydrationWarning>
                    <Skills />
                </div>
                <div id="experience" ref={experience} suppressHydrationWarning>
                    <Experience />
                </div>
                <div id="projects" ref={projects} suppressHydrationWarning>
                    <Projects />
                </div>
                <div id="certificates" ref={certificates} suppressHydrationWarning>
                    <Certificates />
                </div>
                <div id="contact" ref={contact} suppressHydrationWarning>
                    <Contact />
                </div>
            </div>
        </div>
    );
}

















