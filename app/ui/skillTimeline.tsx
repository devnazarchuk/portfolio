'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaReact, FaGitAlt } from 'react-icons/fa';
import { 
    SiTypescript, SiNextdotjs, SiTailwindcss, SiFramer, SiJavascript, 
    SiHtml5, SiCss3, SiGit, SiVercel, SiEslint, SiPrettier, SiNodedotjs, SiExpress, SiPostgresql, SiPrisma, 
    SiStrapi, SiSanity, SiSass, SiFigma, SiWebpack, SiYarn, 
    SiMongodb, SiExpo, SiFirebase, SiTurborepo, SiNpm, SiReactrouter, SiAxios
} from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
import { useLanguage } from '../context/LanguageContext';
import enMessages from '../../messages/en.json';
import deMessages from '../../messages/de.json';

interface Messages {
    skills: {
        title: string;
        subtitle: string;
        coreTechnologies: string;
        viewLearningJourney: string;
        hideLearningJourney: string;
        viewAllTechnologies: string;
        hideAllTechnologies: string;
        learningNote: string;
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
        technologyRoles: {
            [key: string]: {
                [key: string]: string;
            };
        };
        technologyDescriptions: {
            [key: string]: string;
        };
    };
}

const messages: { [key: string]: Messages } = {
    en: enMessages,
    de: deMessages
};

const stages = [
    {
        key: "foundations",
        technologies: ["HTML5", "CSS3", "JavaScript", "Git", "Figma"],
        icon: "🧱"
    },
    {
        key: "uiux",
        technologies: ["Sass", "Tailwind CSS", "Prettier", "ESLint", "Framer Motion"],
        icon: "🎨"
    },
    {
        key: "react",
        technologies: ["React", "npm", "yarn", "Zustand", "React Router", "Context API", "Custom Hooks"],
        icon: "⚛️"
    },
    {
        key: "nextjs",
        technologies: ["Next.js", "TypeScript", "i18n", "Vercel", "SEO", "Next Image", "Form Handling", "Radix UI"],
        icon: "🌐"
    },
    {
        key: "learning",
        technologies: ["TypeScript", "Express", "REST API", "JWT", "PostgreSQL", "Prisma", "MongoDB", "Strapi", "Sanity", "React Native", "Expo", "Firebase", "Webpack", "Husky", "TurboRepo"],
        icon: "🧪"
    }
];

const mainTechnologies = [
    "React",
    "JavaScript",
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
    "Node.js*",
    "TypeScript*",
    "VSCode",
];

const techIcons: { [key: string]: React.ReactNode } = {
    HTML5: <SiHtml5 className="text-[#E34F26]" />,
    CSS3: <SiCss3 className="text-[#1572B6]" />,
    JavaScript: <SiJavascript className="text-[#F7DF1E]" />,
    Git: <FaGitAlt className="text-[#F05032]" />,
    Figma: <SiFigma className="text-[#F24E1E]" />,
    Sass: <SiSass className="text-[#CC6699]" />,
    "Tailwind CSS": <SiTailwindcss className="text-[#06B6D4]" />,
    Prettier: <SiPrettier className="text-[#F7B93E]" />,
    ESLint: <SiEslint className="text-[#4B32C3]" />,
    "Framer Motion": <SiFramer className="text-[#0055FF]" />,
    React: <FaReact className="text-[#61DAFB]" />,
    npm: <SiNpm className="text-[#CB3837]" />,
    yarn: <SiYarn className="text-[#2C8EBB]" />,
    Zustand: <FaReact className="text-[#764ABC]" />,
    "React Router": <SiReactrouter className="text-[#CA4245]" />,
    "Context API": <FaReact className="text-[#61DAFB]" />,
    "Custom Hooks": <FaReact className="text-[#61DAFB]" />,
    "Next.js": <SiNextdotjs className="text-black dark:text-white" />,
    TypeScript: <SiTypescript className="text-[#3178C6]" />,
    "TypeScript*": <SiTypescript className="text-[#3178C6]" />,
    i18n: <SiNodedotjs className="text-[#339933]" />,
    Vercel: <SiVercel className="text-black dark:text-white" />,
    SEO: <SiNodedotjs className="text-[#339933]" />,
    "Next Image": <SiNextdotjs className="text-black dark:text-white" />,
    "Form Handling": <SiNodedotjs className="text-[#339933]" />,
    "Radix UI": <SiNodedotjs className="text-[#339933]" />,
    Express: <SiExpress className="text-black dark:text-white" />,
    "REST API": <SiNodedotjs className="text-[#339933]" />,
    JWT: <SiNodedotjs className="text-[#339933]" />,
    PostgreSQL: <SiPostgresql className="text-[#336791]" />,
    Prisma: <SiPrisma className="text-[#2D3748]" />,
    MongoDB: <SiMongodb className="text-[#47A248]" />,
    Strapi: <SiStrapi className="text-[#2F2E8B]" />,
    Sanity: <SiSanity className="text-[#F03E2F]" />,
    "React Native": <FaReact className="text-[#61DAFB]" />,
    Expo: <SiExpo className="text-[#000020]" />,
    Firebase: <SiFirebase className="text-[#FFCA28]" />,
    Webpack: <SiWebpack className="text-[#8DD6F9]" />,
    Husky: <SiGit className="text-black dark:text-white" />,
    TurboRepo: <SiTurborepo className="text-[#EF4444]" />,
    "Node.js*": <SiNodedotjs className="text-[#339933]" />,
    VSCode: <TbBrandVscode className="text-[#007ACC]" />,
    Axios: <SiAxios className="text-[#5A29E4]" />
};

interface TechCardProps {
    tech: {
        name: string;
        icon: React.ComponentType<{ size?: number; color?: string; className?: string }>;
        role: string;
        color: string;
    };
}

const TechnologyCard = ({ tech }: TechCardProps) => {
    const Icon = tech.icon;
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
                scale: 1.02,
                backgroundColor: 'rgba(114, 59, 243, 0.1)',
                boxShadow: '0 0 20px rgba(114, 59, 243, 0.2)'
            }}
            className="group flex flex-col p-4 bg-white/5 dark:bg-black/5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 backdrop-blur-sm border border-[#723bf3]/10 dark:border-[#723bf3]/20"
        >
            <div className="flex items-center gap-3 mb-2">
                {Icon && (
                    <Icon
                        size={24}
                        color={tech.color}
                        className="transition-transform duration-300 group-hover:scale-110"
                    />
                )}
                <span className="text-base font-medium text-slate-700 dark:text-slate-200">
                    {tech.name}
                </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
                {tech.role}
            </p>
        </motion.div>
    );
};

export function SkillTimeline() {
    const { language } = useLanguage();
    const t = messages[language].skills;
    const [isExpanded, setIsExpanded] = useState(false);
    const [showAllTech, setShowAllTech] = useState(false);

    const technologyCategories = [
        {
            title: t.categories.frontend.title,
            description: t.technologyDescriptions.frontend,
            technologies: [
                { name: 'HTML5', icon: SiHtml5, role: t.technologyRoles.frontend['HTML5'], color: '#E34F26' },
                { name: 'CSS3', icon: SiCss3, role: t.technologyRoles.frontend['CSS3'], color: '#1572B6' },
                { name: 'SASS / SCSS', icon: SiSass, role: t.technologyRoles.frontend['SASS / SCSS'], color: '#CC6699' },
                { name: 'Tailwind CSS', icon: SiTailwindcss, role: t.technologyRoles.frontend['Tailwind CSS'], color: '#06B6D4' },
                { name: 'JavaScript (ES6+)', icon: SiJavascript, role: t.technologyRoles.frontend['JavaScript (ES6+)'], color: '#F7DF1E' },
                { name: 'TypeScript*', icon: SiTypescript, role: t.technologyRoles.frontend['TypeScript*'], color: '#3178C6' },
                { name: 'React.js', icon: FaReact, role: t.technologyRoles.frontend['React.js'], color: '#61DAFB' },
                { name: 'Next.js', icon: SiNextdotjs, role: t.technologyRoles.frontend['Next.js'], color: '#000000' },
                { name: 'Framer Motion', icon: SiFramer, role: t.technologyRoles.frontend['Framer Motion'], color: '#0055FF' },
                { name: 'Zustand', icon: FaReact, role: t.technologyRoles.frontend['Zustand'], color: '#764ABC' },
                { name: 'React Router', icon: FaReact, role: t.technologyRoles.frontend['React Router'], color: '#61DAFB' },
                { name: 'Context API', icon: FaReact, role: t.technologyRoles.frontend['Context API'], color: '#61DAFB' },
                { name: 'Next Image', icon: SiNextdotjs, role: t.technologyRoles.frontend['Next Image'], color: '#000000' },
                { name: 'Radix UI', icon: SiNodedotjs, role: t.technologyRoles.frontend['Radix UI'], color: '#339933' },
                { name: 'Headless UI', icon: SiNodedotjs, role: t.technologyRoles.frontend['Headless UI'], color: '#339933' },
                { name: 'Figma', icon: SiFigma, role: t.technologyRoles.frontend['Figma'], color: '#F24E1E' },
            ]
        },
        {
            title: t.categories.backend.title,
            description: t.technologyDescriptions.backend,
            technologies: [
                { name: 'Node.js*', icon: SiNodedotjs, role: t.technologyRoles.backend['Node.js*'], color: '#339933' },
                { name: 'Express.js*', icon: SiExpress, role: t.technologyRoles.backend['Express.js*'], color: '#000000' },
                { name: 'REST API*', icon: SiNodedotjs, role: t.technologyRoles.backend['REST API*'], color: '#339933' },
                { name: 'JWT (Authentication)*', icon: SiNodedotjs, role: t.technologyRoles.backend['JWT (Authentication)*'], color: '#000000' },
            ]
        },
        {
            title: t.categories.databases.title,
            description: t.technologyDescriptions.databases,
            technologies: [
                { name: 'PostgreSQL*', icon: SiPostgresql, role: t.technologyRoles.databases['PostgreSQL*'], color: '#336791' },
                { name: 'MongoDB*', icon: SiMongodb, role: t.technologyRoles.databases['MongoDB*'], color: '#47A248' },
                { name: 'Prisma*', icon: SiPrisma, role: t.technologyRoles.databases['Prisma*'], color: '#2D3748' },
            ]
        },
        {
            title: t.categories.cms.title,
            description: t.technologyDescriptions.cms,
            technologies: [
                { name: 'Strapi*', icon: SiStrapi, role: t.technologyRoles.cms['Strapi*'], color: '#2F2E8B' },
                { name: 'Sanity*', icon: SiSanity, role: t.technologyRoles.cms['Sanity*'], color: '#F03E2F' },
            ]
        },
        {
            title: t.categories.mobile.title,
            description: t.technologyDescriptions.mobile,
            technologies: [
                { name: 'React Native*', icon: FaReact, role: t.technologyRoles.mobile['React Native*'], color: '#61DAFB' },
                { name: 'Expo*', icon: SiExpo, role: t.technologyRoles.mobile['Expo*'], color: '#000020' },
                { name: 'Firebase*', icon: SiFirebase, role: t.technologyRoles.mobile['Firebase*'], color: '#FFCA28' },
            ]
        },
        {
            title: t.categories.tooling.title,
            description: t.technologyDescriptions.tooling,
            technologies: [
                { name: 'Git & GitHub', icon: FaGitAlt, role: t.technologyRoles.tooling['Git & GitHub'], color: '#F05032' },
                { name: 'Vercel', icon: SiVercel, role: t.technologyRoles.tooling['Vercel'], color: '#000000' },
                { name: 'Webpack*', icon: SiWebpack, role: t.technologyRoles.tooling['Webpack*'], color: '#8DD6F9' },
                { name: 'Prettier', icon: SiPrettier, role: t.technologyRoles.tooling['Prettier'], color: '#F7B93E' },
                { name: 'ESLint', icon: SiEslint, role: t.technologyRoles.tooling['ESLint'], color: '#4B32C3' },
                { name: 'TurboRepo*', icon: SiTurborepo, role: t.technologyRoles.tooling['TurboRepo*'], color: '#EF4444' },
                { name: 'Husky*', icon: SiGit, role: t.technologyRoles.tooling['Husky*'], color: '#000000' },
            ]
        }
    ];

    return (
        <div className="container mx-auto px-4 py-2">
            {/* Header */}
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">{t.title}</h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    {t.subtitle}
                </p>
            </div>

            {/* Core Technologies */}
            <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6 text-center">{t.coreTechnologies}</h3>
                <div className="flex flex-wrap justify-center gap-4">
                    {mainTechnologies.map((tech) => (
                        <motion.div
                            key={tech}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center gap-2 bg-white/20 dark:bg-black/20 backdrop-blur-sm border border-[#723bf3]/30 dark:border-[#723bf3]/40 px-4 py-2 rounded-full shadow-lg"
                        >
                            {techIcons[tech]}
                            <span className="font-medium">{tech}</span>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Buttons */}
            <div className="text-center mb-12 flex justify-center gap-2 max-[425px]:gap-1">
                <motion.button
                    onClick={() => {
                        setIsExpanded(!isExpanded);
                        setShowAllTech(false);
                    }}
                    className="bg-[#723bf3] text-white px-4 py-2 max-[425px]:px-3 max-[425px]:py-1.5 rounded-full font-medium hover:bg-[#723bf3]/90 transition-colors text-sm max-[425px]:text-xm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {isExpanded ? t.hideLearningJourney : t.viewLearningJourney}
                </motion.button>
                <motion.button
                    onClick={() => {
                        setShowAllTech(!showAllTech);
                        setIsExpanded(false);
                    }}
                    className="bg-[#723bf3] text-white px-4 py-2 max-[425px]:px-3 max-[425px]:py-1.5 rounded-full font-medium hover:bg-[#723bf3]/90 transition-colors text-sm max-[425px]:text-xm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {showAllTech ? t.hideAllTechnologies : t.viewAllTechnologies}
                </motion.button>
            </div>

            {/* All Technologies Grid */}
            {showAllTech && (
                <div className="space-y-16">
                    {technologyCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <h3 className="text-2xl font-bold mb-2 text-center">{t.categories[category.title.toLowerCase()]?.title || category.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-center mb-8">{t.categories[category.title.toLowerCase()]?.description || category.description}</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {category.technologies.map((tech) => (
                                    <TechnologyCard key={tech.name} tech={tech} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                    <p className="text-center text-sm text-slate-500 mt-8">
                        {t.learningNote}
                    </p>
                </div>
            )}

            {/* Timeline */}
            {isExpanded && (
                <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#723bf3]/20 dark:bg-[#723bf3]/30" />
                    <div className="space-y-12">
                        {stages.map((stage, index) => (
                            <motion.div
                                key={stage.key}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative pl-8"
                            >
                                <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-[#723bf3]" />
                                <div className="bg-white/20 dark:bg-black/20 backdrop-blur-sm border border-[#723bf3]/30 dark:border-[#723bf3]/40 p-4 max-[640px]:p-2.5 rounded-xl shadow-lg">
                                    <div className="flex justify-between items-start mb-3 max-[640px]:mb-1.5 max-[640px]:flex-col max-[640px]:gap-1.5">
                                        <div>
                                            <span className="text-2xl mr-2 max-[640px]:text-xl max-[640px]:mr-1.5">{stage.icon}</span>
                                            <h4 className="text-xl font-bold inline text-slate-800 dark:text-white max-[640px]:text-lg">{t.stages[stage.key].title}</h4>
                                        </div>
                                        <span className="text-sm font-semibold text-slate-600 dark:text-slate-300 max-[640px]:ml-8 max-[640px]:text-xs">{t.stages[stage.key].date}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-1.5 max-[640px]:gap-1">
                                        {Object.entries(t.stages[stage.key].technologies).map(([key, value]) => (
                                            <span
                                                key={key}
                                                className="bg-white/20 dark:bg-black/20 backdrop-blur-sm border border-[#723bf3]/30 dark:border-[#723bf3]/40 text-slate-800 dark:text-white px-2.5 py-0.5 max-[640px]:px-2 max-[640px]:py-0.5 rounded-full text-sm max-[640px]:text-xs font-medium flex items-center gap-1.5 max-[640px]:gap-1"
                                            >
                                                {techIcons[key] || null}
                                                {value}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
} 