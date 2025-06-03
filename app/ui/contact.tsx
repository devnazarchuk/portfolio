'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import enMessages from '../../messages/en.json';
import deMessages from '../../messages/de.json';
import { ContactForm } from './contactForm';

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

export function Contact() {
    const { language } = useLanguage();
    const t = messages[language].contact;

    return (
        <motion.div
            variants={blockAnimation}
            initial="hidden"
            whileInView="visible"
            className='pt-44 pb-16 flex flex-col items-center'
        >
            <h2 className='text-[#723bf3] dark:text-[#723bf3] text-4xl font-bold uppercase text-center'>{t.title}</h2>
            <p className='text-slate-600 dark:text-slate-300 text-md pt-6 text-center'>
                {t.subtitle}
            </p>
            <ContactForm className='mt-10' />
        </motion.div>
    );
} 