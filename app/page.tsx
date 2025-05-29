'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { AiFillFilePdf, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { blockAnimation, textAnimation } from './lib/animation';
import { experienceData, projectsData } from './lib/data';
import { Cursor } from './ui/cursor';
import { ExperienceCard } from './ui/experienceCard';
import { Link as UiLink } from './ui/link';
import { ProjectCard } from './ui/projectCard';
import { ContactForm } from './ui/contactForm';

export default function Home() {
    const [activeLink, setActiveLink] = useState<'about' | 'experience' | 'projects' | 'contact'>('about');
    const about = useRef<HTMLDivElement | null>(null);
    const experience = useRef<HTMLDivElement | null>(null);
    const projects = useRef<HTMLDivElement | null>(null);
    const contact = useRef<HTMLDivElement | null>(null);

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
        <div className='max-w-7xl mx-auto px-4 flex max-lg:flex-col max-lg:px-10 '>
            <Cursor />
            <div className='fixed max-lg:static flex flex-col gap-20 h-screen justify-center'>
                <div>
                    <motion.h1
                        custom={1}
                        variants={textAnimation}
                        initial='hidden'
                        whileInView='visible'
                        className='text-slate-200 font-bold text-5xl'
                    >
                        Artem Nazarchuk
                    </motion.h1>
                    <motion.p
                        custom={2}
                        variants={textAnimation}
                        initial='hidden'
                        whileInView='visible'
                        className='text-slate-200 text-xl pt-2'
                    >
                        Frontend Developer
                    </motion.p>
                    <motion.p
                        custom={3}
                        variants={textAnimation}
                        initial='hidden'
                        whileInView='visible'
                        className='text-slate-400 pt-2 max-w-96'
                    >
                        I build fast, scalable, and accessible web applications using React, Next.js, and TypeScript. Passionate about clean code, user-centric design, and continuous learning.
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
                        about
                    </UiLink>
                    <UiLink
                        isActive={activeLink === 'experience'}
                        onClick={() => {
                            setActiveLink('experience');
                            scrollToSection(experience);
                        }}
                    >
                        experience
                    </UiLink>
                    <UiLink
                        isActive={activeLink === 'projects'}
                        onClick={() => {
                            setActiveLink('projects');
                            scrollToSection(projects);
                        }}
                    >
                        projects
                    </UiLink>
                    <UiLink
                        isActive={activeLink === 'contact'}
                        onClick={() => {
                            setActiveLink('contact');
                            scrollToSection(contact);
                        }}
                    >
                        contact
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
                        className='text-slate-400 hover:text-slate-100'
                        aria-label='GitHub Profile'
                    >
                        <AiFillGithub size='2em' />
                    </Link>
                    <Link
                        href='https://www.linkedin.com/in/devnazarchuk/'
                        target='_blank'
                        className='text-slate-400 hover:text-slate-100'
                        aria-label='LinkedIn Profile'
                    >
                        <AiFillLinkedin size='2em' />
                    </Link>
                    <Link
                        href='/artem_nazarchuk_resume.pdf'
                        target='_blank'
                        className='text-slate-400 hover:text-slate-100'
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
                        className='text-slate-400 hover:text-slate-100'
                    >
                        <MdEmail size='2em' />
                    </button>
                </motion.div>
            </div>

            <div className='w-80 h-80 opacity-60 rounded-full bg-fuchsia-600 shadow-2xl shadow-teal-600 fixed top-0 left-0 pointer-events-none -z-10 blur-3xl'></div>
            <div className='w-80 h-80 opacity-60 rounded-full bg-fuchsia-600 shadow-2xl shadow-teal-600 fixed bottom-0 right-0 pointer-events-none -z-10 blur-3xl'></div>

            <div className='pl-[600px] max-xl:pl-[500px] max-lg:pl-0'>
                <motion.div
                    variants={blockAnimation}
                    initial='hidden'
                    whileInView='visible'
                    ref={about}
                    className='pt-40'
                >
                    <h2 className='text-slate-100 text-4xl font-bold uppercase text-center'>About me</h2>
                    <p className='text-slate-300 text-md pt-10'>
                        Since 2022, I have been deeply engaged in frontend development, starting from HTML and CSS fundamentals and advancing to modern JavaScript frameworks. I enjoy solving complex UI challenges and optimizing performance and accessibility.
                    </p>
                    <p className='text-slate-300 text-md pt-6'>
                        Currently, I am a Computer Science student and a freelance developer, working on real-world projects that emphasize scalability, reusability, and multilingual support. I aim to collaborate on impactful projects and grow as a developer.
                    </p>
                </motion.div>
                <motion.div
                    variants={blockAnimation}
                    initial='hidden'
                    whileInView='visible'
                    className='flex flex-col gap-5 pt-44'
                    ref={experience}
                >
                    <h2 className='text-slate-100 text-4xl font-bold uppercase text-center'>Experience</h2>
                    {experienceData.map((experience) => (
                        <ExperienceCard key={experience.id} {...experience} />
                    ))}
                </motion.div>
                <motion.div
                    variants={blockAnimation}
                    initial='hidden'
                    whileInView='visible'
                    className='pt-44 pb-16'
                    ref={projects}
                >
                    <h2 className='text-slate-100 text-4xl font-bold uppercase text-center'>Projects</h2>
                    <div className='flex flex-col gap-10 pt-10'>
                        {projectsData.map((project) => (
                            <ProjectCard key={project.id} {...project} />
                        ))}
                    </div>
                    <div className='pt-10 text-center'>
                        <a
                            className='text-slate-100 text-2xl hover:text-teal-300 hover:underline'
                            href='https://github.com/devnazarchuk?tab=repositories'
                        >
                            More of my projects
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
                    <h2 className='text-slate-100 text-4xl font-bold uppercase text-center'>Contact Me</h2>
                    <p className='text-slate-300 text-md pt-6 text-center'>
                        Feel free to reach out for collaborations or questions! 📩
                    </p>

                    <ContactForm className='mt-10' />
                </motion.div>
            </div>
        </div>
    );
}
