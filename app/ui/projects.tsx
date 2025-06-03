'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import enMessages from '../../messages/en.json';
import deMessages from '../../messages/de.json';
import { ProjectCard } from './projectCard';

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

const projectsData = [
    { 
        key: 'depity', 
        github: 'https://github.com/devnazarchuk/depity', 
        demo: 'https://depity.vercel.app/' 
    },
    { 
        key: 'sneakers', 
        github: 'https://github.com/devnazarchuk/react-sneakers-shop', 
        demo: 'https://reactsneakerss.vercel.app/' 
    },
    { 
        key: 'pappert', 
        github: 'https://github.com/devnazarchuk/pappert', 
        demo: 'https://pappert.vercel.app/' 
    }
];

export function Projects() {
    const { language } = useLanguage();
    const t = messages[language].projects;

    return (
        <motion.div
            variants={blockAnimation}
            initial="hidden"
            whileInView="visible"
            className='pt-44'
        >
            <h2 className='text-[#723bf3] dark:text-[#723bf3] text-4xl font-bold uppercase text-center mb-16'>{t.title}</h2>
            <div className='flex flex-col gap-10'>
                {projectsData.map((project) => (
                    <ProjectCard
                        key={project.key}
                        itemKey={project.key}
                        github={project.github}
                        demo={project.demo}
                    />
                ))}
            </div>
        </motion.div>
    );
} 