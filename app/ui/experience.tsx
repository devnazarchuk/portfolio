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
        key: 'depity'
    },
    { 
        key: 'freelance'
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
                        itemKey={experience.key as 'depity' | 'freelance'}
                    />
                ))}
            </div>
        </motion.div>
    );
} 