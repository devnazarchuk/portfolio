'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import enMessages from '../../messages/en.json';
import deMessages from '../../messages/de.json';

const messages = {
    en: enMessages,
    de: deMessages
};

type ProjectKey = keyof typeof messages.en.projects.items;

interface ProjectCardProps {
    itemKey: ProjectKey;
    github: string;
    live: string;
}

export function ProjectCard({ itemKey, github, live }: ProjectCardProps) {
    const { language } = useLanguage();
    const t = messages[language].projects.items[itemKey];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='bg-[#723bf3]/10 dark:bg-[#723bf3]/20 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-[#723bf3]/20 dark:border-[#723bf3]/30 hover:border-[#723bf3]/40 dark:hover:border-[#723bf3]/50 transition-colors duration-300 max-w-3xl mx-auto w-full'
        >
            <h3 className='text-slate-800 dark:text-slate-50 text-2xl font-bold break-words'>{t.title}</h3>
            <ul className='text-slate-600 dark:text-slate-200 text-md pt-4 list-disc list-inside space-y-2'>
                {t.description.map((item: string, index: number) => (
                    <li key={index} className='hover:text-slate-800 dark:hover:text-slate-50 transition-colors duration-200 break-words'>{item}</li>
                ))}
            </ul>
            <div className='flex flex-wrap gap-2 pt-4'>
                {t.technologies.map((tech: string, index: number) => (
                    <span
                            key={index}
                        className='bg-[#723bf3]/20 dark:bg-[#723bf3]/30 text-[#723bf3] dark:text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-[#723bf3]/30 dark:hover:bg-[#723bf3]/40 transition-colors duration-200 break-words'
                        >
                        {tech}
                    </span>
                    ))}
                </div>
            <div className='flex gap-4 pt-6'>
                <Link
                    href={github}
                    target='_blank'
                    className='text-slate-600 dark:text-slate-200 hover:text-[#723bf3] flex items-center gap-2 transition-colors duration-200'
                    aria-label='View on GitHub'
                >
                    <AiFillGithub size='1.5em' />
                    <span>GitHub</span>
                </Link>
                <Link
                    href={live}
                    target='_blank'
                    className='text-slate-600 dark:text-slate-200 hover:text-[#723bf3] flex items-center gap-2 transition-colors duration-200'
                    aria-label='View live demo'
                >
                    <FiExternalLink size='1.5em' />
                    <span>Live Demo</span>
                </Link>
            </div>
        </motion.div>
    );
}
