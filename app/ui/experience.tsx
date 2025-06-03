'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import enMessages from '../../messages/en.json';
import deMessages from '../../messages/de.json';
import { ExperienceCard } from './experienceCard';

const messages = {
    en: enMessages,
    de: deMessages
};

const blockAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
};

const experienceData = [
    { 
        key: 'depity',
        title: 'Frontend Developer Intern',
        company: 'Depity — Personal MVP / Simulated Internship',
        period: '2022 - 2023',
        description: [
            "Developed and deployed a full MVP HR platform for onboarding and role-based access control",
            "Built reusable, mobile-first UIs using React.js, Next.js (App Router), Tailwind CSS",
            "Implemented ARIA-based accessibility, dark/light theme switcher, and multilingual support (next-intl)",
            "Boosted performance using lazy loading, code splitting, and optimized image handling",
            "Simulated Agile workflows: standups, sprints, PR reviews, and retrospectives",
            "Deployed to Vercel with routing, state management, and production-level UX"
        ],
        tech: ["React", "Next.js", "Tailwind CSS", "Accessibility", "Performance", "i18n", "Agile", "Vercel"]
    },
    { 
        key: 'freelance',
        title: 'Freelancer & Indie Developer',
        company: 'Freelance',
        period: '2022 - Present',
        description: [
            "Built and deployed full-stack applications using React.js, Next.js, Tailwind CSS, Zustand, and Vercel",
            "Delivered responsive, performant, and accessible interfaces with scalable architecture",
            "Developed web applications for clients using React, Next.js, and TypeScript",
            "Implemented responsive designs with Tailwind CSS",
            "Integrated APIs and backend services",
            "Optimized application performance and SEO"
        ],
        tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Zustand", "Responsive", "Performance", "SEO", "Vercel"]
    }
];

export function Experience() {
    const { language } = useLanguage();
    const t = messages[language].experience;

    return (
        <motion.div
            variants={blockAnimation}
            initial="hidden"
            whileInView="visible"
            className='pt-44'
        >
            <h2 className='text-[#723bf3] dark:text-[#723bf3] text-4xl font-bold uppercase text-center mb-16'>{t.title}</h2>
            <div className='flex flex-col gap-10'>
                {experienceData.map((experience) => (
                    <ExperienceCard
                        key={experience.key}
                        title={experience.title}
                        company={experience.company}
                        period={experience.period}
                        description={experience.description}
                        tech={experience.tech}
                    />
                ))}
            </div>
        </motion.div>
    );
} 