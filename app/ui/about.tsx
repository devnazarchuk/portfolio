'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import enMessages from '../../messages/en.json';
import deMessages from '../../messages/de.json';
import { FiDownload } from 'react-icons/fi';
import Link from 'next/link';

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

export function About() {
    const { language } = useLanguage();
    const t = messages[language].about;

    return (
        <motion.div
            variants={blockAnimation}
            initial="hidden"
            whileInView="visible"
            className='pt-40'
        >
            <h2 className='text-[#723bf3] dark:text-[#723bf3] text-4xl font-bold uppercase text-center'>{t.title}</h2>
            <p className='text-slate-600 dark:text-slate-300 text-md pt-10'>
                {t.paragraph1}
            </p>
            <p className='text-slate-600 dark:text-slate-300 text-md pt-6'>
                {t.paragraph2}
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
    );
} 