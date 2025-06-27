'use client';

import { useLanguage } from '../context/LanguageContext';
import enMessages from '../../messages/en.json';
import deMessages from '../../messages/de.json';
import { FaReact } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import { BiStore, BiGlobe } from 'react-icons/bi';
import { MdOutlineSpeed, MdOutlineAccessibility, MdOutlineTranslate, MdOutlineWork } from 'react-icons/md';

const messages = {
    en: enMessages,
    de: deMessages
};

const techIcons: Record<string, React.ReactNode> = {
    'React': <FaReact className="text-[#61DAFB]" />,
    'Next.js': <SiNextdotjs className="text-[#000000]" />,
    'TypeScript': <SiTypescript className="text-[#3178C6]" />,
    'Tailwind CSS': <SiTailwindcss className="text-[#06B6D4]" />,
    'Zustand': <BiStore className="text-[#764ABC]" />,
    'Vercel': <SiNextdotjs className="text-[#000000]" />,
    'Accessibility': <MdOutlineAccessibility className="text-[#4A90E2]" />,
    'Barrierefreiheit': <MdOutlineAccessibility className="text-[#4A90E2]" />,
    'Performance': <MdOutlineSpeed className="text-[#4CAF50]" />,
    'i18n': <MdOutlineTranslate className="text-[#4A90E2]" />,
    'Agile': <MdOutlineWork className="text-[#4A90E2]" />,
    'Responsive': <FaReact className="text-[#4A90E2]" />,
    'SEO': <BiGlobe className="text-[#4A90E2]" />
};

interface ExperienceCardProps {
    itemKey: 'depity' | 'freelance';
}

export function ExperienceCard({ itemKey }: ExperienceCardProps) {
    const { language } = useLanguage();
    const t = messages[language].experience.items[itemKey];

    if (!t) {
        return (
            <div className="bg-red-100 text-red-800 p-4 rounded">
                Translation not found for experience: {itemKey}
            </div>
        );
    }

    return (
        <div className="bg-white/20 dark:bg-black/20 backdrop-blur-sm border border-[#723bf3]/30 dark:border-[#723bf3]/40 p-6 rounded-xl shadow-lg">
            <div className="flex justify-between items-start mb-4 max-[425px]:flex-col max-[425px]:gap-2">
                <div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">{t.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400">{t.company}</p>
                </div>
                <span className="text-sm font-semibold text-slate-600 dark:text-slate-300 max-[425px]:ml-0">{t.period}</span>
            </div>
            <ul className="list-disc list-inside space-y-2 mb-4">
                {t.description.map((item, index) => (
                    <li key={index} className="text-slate-700 dark:text-slate-300">{item}</li>
                ))}
            </ul>
            <div className="flex flex-wrap gap-2">
                {t.tech.map((item) => (
                    <span
                        key={item}
                        className="bg-[#723bf3]/10 dark:bg-[#723bf3]/20 backdrop-blur-sm border border-[#723bf3]/30 dark:border-[#723bf3]/40 text-[#723bf3] dark:text-[#723bf3] px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5"
                    >
                        {techIcons[item] || null}
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
}
