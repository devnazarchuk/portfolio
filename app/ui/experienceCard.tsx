'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import enMessages from '../../messages/en.json';
import deMessages from '../../messages/de.json';

const messages = {
    en: enMessages,
    de: deMessages
};

type ExperienceKey = keyof typeof messages.en.experience.items;

interface ExperienceCardProps {
    itemKey: ExperienceKey;
    company: string;
    period: string;
}

export function ExperienceCard({ itemKey, company, period }: ExperienceCardProps) {
    const { language } = useLanguage();
    const t = messages[language].experience.items[itemKey];

    const [startYear, endYear] = period.split(' - ');

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='bg-[#723bf3]/10 dark:bg-[#723bf3]/20 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-[#723bf3]/20 dark:border-[#723bf3]/30 hover:border-[#723bf3]/40 dark:hover:border-[#723bf3]/50 transition-colors duration-300 max-w-3xl mx-auto w-full'
        >
            <div className='flex justify-between items-start gap-4'>
                <div className='flex-1 min-w-0'>
                    <h3 className='text-slate-800 dark:text-slate-50 text-2xl font-bold break-words'>{t.title}</h3>
                    <p className='text-slate-600 dark:text-slate-200 text-lg mt-1 break-words'>{company}</p>
                </div>
                <div className='text-[#723bf3] font-medium'>
                    <span className='hidden sm:inline whitespace-nowrap'>{period}</span>
                    <div className='sm:hidden flex flex-col items-end'>
                        <span>{startYear}</span>
                        <span className='text-[#723bf3]/50'>-</span>
                        <span>{endYear}</span>
                    </div>
                </div>
            </div>
            <ul className='text-slate-600 dark:text-slate-200 text-md pt-4 list-disc list-inside space-y-2'>
                {t.description.map((item: string, index: number) => (
                    <li key={index} className='hover:text-slate-800 dark:hover:text-slate-50 transition-colors duration-200 break-words'>{item}</li>
                    ))}
                </ul>
        </motion.div>
    );
}
