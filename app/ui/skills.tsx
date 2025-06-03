'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import enMessages from '../../messages/en.json';
import deMessages from '../../messages/de.json';
import { SkillTimeline } from './skillTimeline';

type Messages = {
    skills: {
        title: string;
        subtitle: string;
        coreTechnologies: string;
        viewLearningJourney: string;
        hideLearningJourney: string;
        viewAllTechnologies: string;
        hideAllTechnologies: string;
        stages: {
            [key: string]: {
                title: string;
                date: string;
                technologies: {
                    [key: string]: string;
                };
            };
        };
        categories: {
            [key: string]: {
                title: string;
                description: string;
            };
        };
        learningNote: string;
    };
};

const messages: Record<string, Messages> = {
    en: enMessages as Messages,
    de: deMessages as Messages
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

export function Skills() {
    const { language } = useLanguage();
    const t = messages[language].skills;

    return (
        <motion.div
            variants={blockAnimation}
            initial="hidden"
            whileInView="visible"
            className='pt-44'
        >
            <h2 className='text-[#723bf3] dark:text-[#723bf3] text-4xl font-bold uppercase text-center mb-16'>{t.title}</h2>
            <SkillTimeline />
        </motion.div>
    );
} 