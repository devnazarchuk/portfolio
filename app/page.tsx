'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { AiFillFilePdf, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { FiMoon, FiSun, FiGlobe, FiDownload } from 'react-icons/fi';
import { blockAnimation, textAnimation } from './lib/animation';
import { experienceData, projectsData } from './lib/data';
import { Cursor } from './ui/cursor';
import { ExperienceCard } from './ui/experienceCard';
import { Link as UiLink } from './ui/link';
import { ProjectCard } from './ui/projectCard';
import { ContactForm } from './ui/contactForm';
import { useTheme } from './context/ThemeContext';
import { useLanguage } from './context/LanguageContext';
import enMessages from '../messages/en.json';
import deMessages from '../messages/de.json';

const messages = {
    en: enMessages,
    de: deMessages
};

export default function Home() {
    const [activeLink, setActiveLink] = useState<'about' | 'experience' | 'projects' | 'contact'>('about');
    const about = useRef<HTMLDivElement | null>(null);
    const experience = useRef<HTMLDivElement | null>(null);
    const projects = useRef<HTMLDivElement | null>(null);
    const contact = useRef<HTMLDivElement | null>(null);
    const { theme, toggleTheme } = useTheme();
    const { language, toggleLanguage } = useLanguage();
    const t = messages[language];

    const scrollToSection = (elementRef: React.RefObject<HTMLElement | null>) => {
        if (elementRef.current) {
            window.scrollTo({
                top: elementRef.current.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (experience.current && projects.current && contact.current && about.current) {
                const scrollPosition = window.scrollY + 200;

                if (scrollPosition >= experience.current.offsetTop && scrollPosition < projects.current.offsetTop) {
                    setActiveLink('experience');
                } else if (scrollPosition >= projects.current.offsetTop && scrollPosition < contact.current.offsetTop) {
                    setActiveLink('projects');
                } else if (scrollPosition >= contact.current.offsetTop) {
                    setActiveLink('contact');
                } else {
                    setActiveLink('about');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='max-w-7xl mx-auto px-4 flex max-lg:flex-col max-lg:px-10 max-[425px]:px-4 overflow-hidden'>
            <Cursor />
            <div className='fixed max-lg:static flex flex-col gap-20 h-screen justify-center'>
                <div>
                    <motion.h1
                        custom={1}
                        variants={textAnimation}
                        initial='hidden'
                        whileInView='visible'
                        className='text-text-primary font-bold text-5xl'
                    >
                        {t.title}
                    </motion.h1>
                    <motion.p
                        custom={2}
                        variants={textAnimation}
                        initial='hidden'
                        whileInView='visible'
                        className='text-text-primary text-xl pt-2'
                    >
                        {t.subtitle}
                    </motion.p>
                    <motion.p
                        custom={3}
                        variants={textAnimation}
                        initial='hidden'
                        whileInView='visible'
                        className='text-muted pt-2 max-w-96'
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
                >
                    <UiLink
                        isActive={activeLink === 'about'}
                        onClick={() => {
                            setActiveLink('about');
                            scrollToSection(about);
                        }}
                    >
                        {t.nav.about}
                    </UiLink>
                    <UiLink
                        isActive={activeLink === 'experience'}
                        onClick={() => {
                            setActiveLink('experience');
                            scrollToSection(experience);
                        }}
                    >
                        {t.nav.experience}
                    </UiLink>
                    <UiLink
                        isActive={activeLink === 'projects'}
                        onClick={() => {
                            setActiveLink('projects');
                            scrollToSection(projects);
                        }}
                    >
                        {t.nav.projects}
                    </UiLink>
                    <UiLink
                        isActive={activeLink === 'contact'}
                        onClick={() => {
                            setActiveLink('contact');
                            scrollToSection(contact);
                        }}
                    >
                        {t.nav.contact}
                    </UiLink>
                </motion.nav>

                <motion.div
                    custom={4}
                    variants={textAnimation}
                    initial='hidden'
                    whileInView='visible'
                    className='flex gap-4'
                >
                    <Link
                        href='https://github.com/devnazarchuk'
                        target='_blank'
                        className='text-muted hover:text-text-primary'
                        aria-label='GitHub Profile'
                    >
                        <AiFillGithub size='2em' />
                    </Link>
                    <Link
                        href='https://www.linkedin.com/in/devnazarchuk/'
                        target='_blank'
                        className='text-muted hover:text-text-primary'
                        aria-label='LinkedIn Profile'
                    >
                        <AiFillLinkedin size='2em' />
                    </Link>
                    <Link
                        href='/artem_nazarchuk_resume.pdf'
                        target='_blank'
                        className='text-muted hover:text-text-primary'
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
                        className='text-muted hover:text-text-primary'
                    >
                        <MdEmail size='2em' />
                    </button>
                    <button
                        onClick={toggleTheme}
                        className='text-muted hover:text-text-primary'
                        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
                    >
                        {theme === 'dark' ? <FiSun size='2em' /> : <FiMoon size='2em' />}
                    </button>
                    <button
                        onClick={toggleLanguage}
                        className='text-muted hover:text-text-primary'
                        aria-label={`Switch to ${language === 'en' ? 'German' : 'English'}`}
                    >
                        <FiGlobe size='2em' />
                    </button>
                </motion.div>
            </div>

            <div className='w-80 h-80 opacity-60 rounded-full bg-[#723bf3] shadow-2xl shadow-[#723bf3] fixed top-0 left-0 pointer-events-none -z-10 blur-3xl'></div>
            <div className='w-80 h-80 opacity-60 rounded-full bg-[#723bf3] shadow-2xl shadow-[#723bf3] fixed bottom-0 right-0 pointer-events-none -z-10 blur-3xl'></div>

            <div className='pl-[600px] max-xl:pl-[500px] max-lg:pl-0'>
                <motion.div
                    variants={blockAnimation}
                    initial='hidden'
                    whileInView='visible'
                    ref={about}
                    className='pt-40'
                >
                    <h2 className='text-[#723bf3] dark:text-[#723bf3] text-4xl font-bold uppercase text-center'>{t.about.title}</h2>
                    <p className='text-slate-600 dark:text-slate-300 text-md pt-10'>
                        {t.about.paragraph1}
                    </p>
                    <p className='text-slate-600 dark:text-slate-300 text-md pt-6'>
                        {t.about.paragraph2}
                    </p>
                    <div className='flex justify-center mt-8'>
                        <div className="relative group">
                            <div className="flex">
                                <Link
                                    href={language === 'en' ? '/artem_nazarchuk_resume.pdf' : '/artem_nazarchuk_resume_de.pdf'}
                                    target='_blank'
                                    className='inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-l-lg transition-colors duration-200'
                                    aria-label={language === 'en' ? 'Download Resume' : 'Lebenslauf herunterladen'}
                                >
                                    <FiDownload size='1.5em' />
                                    <span>{language === 'en' ? 'Download Resume' : 'Lebenslauf herunterladen'}</span>
                                </Link>
                                <button
                                    onClick={(e) => e.preventDefault()}
                                    className='inline-flex items-center justify-center bg-accent hover:bg-accent-hover text-white px-3 py-3 rounded-r-lg transition-colors duration-200 border-l border-white/20'
                                    aria-label="Select resume version"
                                >
                                    <svg 
                                        className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            </div>
                            <div className="absolute left-0 right-0 mt-2 rounded-lg bg-card-bg border border-accent/20 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                <Link
                                    href="/artem_nazarchuk_resume.pdf"
                                    target='_blank'
                                    className='block px-4 py-3 text-text-primary hover:bg-accent/10 transition-colors duration-200'
                                >
                                    English Version
                                </Link>
                                <Link
                                    href="/artem_nazarchuk_resume_de.pdf"
                                    target='_blank'
                                    className='block px-4 py-3 text-text-primary hover:bg-accent/10 transition-colors duration-200'
                                >
                                    Deutsche Version
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    variants={blockAnimation}
                    initial='hidden'
                    whileInView='visible'
                    className='flex flex-col gap-5 pt-44'
                    ref={experience}
                >
                    <h2 className='text-[#723bf3] dark:text-[#723bf3] text-4xl font-bold uppercase text-center'>{t.experience.title}</h2>
                    <div className='flex flex-col gap-10'>
                    {experienceData.map((experience) => (
                            <ExperienceCard
                                key={experience.key}
                                itemKey={experience.key}
                                company={experience.company}
                                period={experience.period}
                            />
                    ))}
                    </div>
                </motion.div>
                <motion.div
                    variants={blockAnimation}
                    initial='hidden'
                    whileInView='visible'
                    className='pt-44 pb-16'
                    ref={projects}
                >
                    <h2 className='text-[#723bf3] dark:text-[#723bf3] text-4xl font-bold uppercase text-center'>{t.projects.title}</h2>
                    <div className='flex flex-col gap-10 pt-10'>
                        {projectsData.map((project) => (
                            <ProjectCard
                                key={project.key}
                                itemKey={project.key}
                                github={project.github}
                                live={project.live}
                            />
                        ))}
                    </div>
                    <div className='pt-10 text-center'>
                        <a
                            className='text-[#723bf3] text-2xl hover:text-[#723bf3]/80 hover:underline'
                            href='https://github.com/devnazarchuk?tab=repositories'
                        >
                            {t.projects.more}
                        </a>
                    </div>
                </motion.div>
                <motion.div
                    variants={blockAnimation}
                    initial='hidden'
                    whileInView='visible'
                    className='pt-44 pb-16 flex flex-col items-center'
                    ref={contact}
                >
                    <h2 className='text-[#723bf3] dark:text-[#723bf3] text-4xl font-bold uppercase text-center'>{t.contact.title}</h2>
                    <p className='text-slate-600 dark:text-slate-300 text-md pt-6 text-center'>
                        {t.contact.subtitle}
                    </p>
                    <ContactForm className='mt-10' />
                </motion.div>
            </div>
        </div>
    );
}
