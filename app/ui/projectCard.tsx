'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import enMessages from '../../messages/en.json';
import deMessages from '../../messages/de.json';
import { FaGithub, FaExternalLinkAlt, FaReact, FaGitAlt, FaSass, FaMobile, FaSearch, FaShoppingCart, FaHeart, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiAxios, SiFramer, SiVercel, SiReactrouter } from 'react-icons/si';
import { BiStore, BiCodeAlt, BiGlobe, BiMobileAlt, BiFilterAlt, BiLayer } from 'react-icons/bi';
import { MdOutlineSpeed, MdOutlineAccessibility, MdOutlineTranslate } from 'react-icons/md';

const messages = {
    en: enMessages,
    de: deMessages
};

interface ProjectItem {
    title: string;
    description: string;
    tech: string;
    achievements: string[];
    note?: string;
}

const techIcons: Record<string, React.ReactNode> = {
    // Core Technologies
    'React': <FaReact className="text-[#61DAFB]" />,
    'ReactJS': <FaReact className="text-[#61DAFB]" />,
    'TypeScript': <SiTypescript className="text-[#3178C6]" />,
    'Next.js': <SiNextdotjs className="text-[#000000]" />,
    
    // Styling
    'Tailwind CSS': <SiTailwindcss className="text-[#06B6D4]" />,
    'SCSS': <FaSass className="text-[#CC6699]" />,
    
    // State Management
    'Zustand': <BiStore className="text-[#764ABC]" />,
    'Context API': <BiLayer className="text-[#3178C6]" />,
    
    // Routing & API
    'React Router': <SiReactrouter className="text-[#CA4245]" />,
    'Axios': <SiAxios className="text-[#5A29E4]" />,
    
    // UI & Animation
    'Framer Motion': <SiFramer className="text-[#0055FF]" />,
    'Skeleton UI': <FaDatabase className="text-[#000000]" />,
    
    // Features
    'Responsive UI': <FaMobile className="text-[#4A90E2]" />,
    'Responsive Design': <BiMobileAlt className="text-[#4A90E2]" />,
    'Search': <FaSearch className="text-[#4A90E2]" />,
    'Cart': <FaShoppingCart className="text-[#4A90E2]" />,
    'Wishlist': <FaHeart className="text-[#FF4B4B]" />,
    'Filtering': <BiFilterAlt className="text-[#4A90E2]" />,
    
    // Performance & Optimization
    'Performance': <MdOutlineSpeed className="text-[#4CAF50]" />,
    'Code Splitting': <BiCodeAlt className="text-[#4CAF50]" />,
    'Lazy Loading': <BiCodeAlt className="text-[#4CAF50]" />,
    'Image Optimization': <BiCodeAlt className="text-[#4CAF50]" />,
    
    // Internationalization
    'i18n': <MdOutlineTranslate className="text-[#4A90E2]" />,
    'next-intl': <MdOutlineTranslate className="text-[#4A90E2]" />,
    
    // Accessibility & SEO
    'ARIA': <MdOutlineAccessibility className="text-[#4A90E2]" />,
    'SEO': <BiGlobe className="text-[#4A90E2]" />,
    'WCAG': <MdOutlineAccessibility className="text-[#4A90E2]" />,
    
    // Version Control & Deployment
    'Git': <FaGitAlt className="text-[#F05032]" />,
    'Vercel': <SiVercel className="text-[#000000]" />
};

interface ProjectCardProps {
    itemKey: 'depity' | 'sneakers' | 'pappert';
    github: string;
    demo: string;
}

export function ProjectCard({ itemKey, github, demo }: ProjectCardProps) {
    const { language } = useLanguage();
    const t = messages[language]?.projects?.items?.[itemKey] as ProjectItem | undefined;

    if (!t) {
        return (
            <div className="bg-red-100 text-red-800 p-4 rounded">
                Translation not found for project: {itemKey}
            </div>
        );
    }

    const techList = t.tech.split(' • ');

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white/20 dark:bg-black/20 backdrop-blur-sm border border-[#723bf3]/30 dark:border-[#723bf3]/40 p-6 rounded-xl shadow-lg"
        >
            <div className='flex flex-col gap-4'>
                <h3 className='text-text-primary font-bold text-xl'>{t.title}</h3>
                <p className='text-muted'>{t.description}</p>
                <ul className='list-disc list-inside space-y-2'>
                    {t.achievements.map((achievement, index) => (
                        <li key={index} className='text-muted text-sm'>{achievement}</li>
                    ))}
                </ul>
                {t.note && (
                    <p className='text-muted text-sm italic'>{t.note}</p>
                )}
                <div className='bg-[#723bf3]/10 dark:bg-[#723bf3]/20 p-3 rounded-lg'>
                    <div className='flex flex-wrap gap-3 items-center'>
                        {techList.map((tech, index) => (
                            <div key={index} className='flex items-center gap-2 text-muted text-sm'>
                                {techIcons[tech] || null}
                                <span>{tech}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex gap-4'>
                    {demo && (
                        <a
                            href={demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='text-accent hover:text-accent-hover font-medium flex items-center gap-2'
                        >
                            <FaExternalLinkAlt />
                            {messages[language]?.projects?.viewProject}
                        </a>
                    )}
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='text-accent hover:text-accent-hover font-medium flex items-center gap-2'
                        >
                            <FaGithub />
                            {messages[language]?.projects?.viewCode}
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
