'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaReact, FaGitAlt, FaLinux, FaServer, FaShieldAlt, FaGlobe, FaAws } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiFramer, SiJavascript, SiHtml5, SiCss3, SiGit, SiVercel, SiEslint, SiPrettier, SiNodedotjs, SiExpress, SiPostgresql, SiPrisma, SiSanity, SiSass, SiFigma, SiWebpack, SiYarn, SiMongodb, SiExpo, SiFirebase, SiTurborepo, SiNpm, SiReactrouter, SiAxios, SiStripe, SiLinux, SiSqlite, SiJest, SiJira, SiDocker, SiGraphql, SiAriakit, SiI18Next, SiGooglesearchconsole, SiAwsorganizations } from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
import { BiServer, BiGlobe, BiWorld, BiSearch, BiAccessibility } from 'react-icons/bi';
import { MdOutlineSecurity, MdOutlineTranslate, MdOutlineSpeed, MdOutlineAccessibility } from 'react-icons/md';
import { GiServerRack, GiNetworkBars, GiWorld } from 'react-icons/gi';
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
        technologies: ["Redux", "PostgreSQL", "MongoDB", "Express.js", "AWS", "GitLab CI/CD", "Testing", "JWT", "Stripe", "Advanced TypeScript"],
        icon: "🧪"
    }
];

const mainTechnologies = [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Framer Motion",
    "Git",
    "Vercel",
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
    "React.js": <FaReact className="text-[#61DAFB]" />,
    npm: <SiNpm className="text-[#CB3837]" />,
    yarn: <SiYarn className="text-[#2C8EBB]" />,
    Zustand: <FaReact className="text-[#764ABC]" />,
    "React Router": <SiReactrouter className="text-[#CA4245]" />,
    "Context API": <FaReact className="text-[#61DAFB]" />,
    "Custom Hooks": <FaReact className="text-[#61DAFB]" />,
    "Next.js": <SiNextdotjs className="text-black dark:text-white" />,
    "Next.js (App Router)": <SiNextdotjs className="text-black dark:text-white" />,
    TypeScript: <SiTypescript className="text-[#3178C6]" />,
    "TypeScript*": <SiTypescript className="text-[#3178C6]" />,
    i18n: <MdOutlineTranslate className="text-[#339933]" />,
    Vercel: <SiVercel className="text-black dark:text-white" />,
    SEO: <SiGooglesearchconsole className="text-[#4285F4]" />,
    "Next Image": <SiNextdotjs className="text-black dark:text-white" />,
    "Form Handling": <BiServer className="text-[#339933]" />,
    "Radix UI": <SiNodedotjs className="text-[#161618]" />,
    Express: <SiExpress className="text-black dark:text-white" />,
    "Express.js": <SiExpress className="text-black dark:text-white" />,
    "REST API": <BiServer className="text-[#339933]" />,
    JWT: <MdOutlineSecurity className="text-[#D63AFF]" />,
    PostgreSQL: <SiPostgresql className="text-[#336791]" />,
    Prisma: <SiPrisma className="text-[#2D3748]" />,
    MongoDB: <SiMongodb className="text-[#47A248]" />,
    Stripe: <SiStripe className="text-[#2F2E8B]" />,
    Sanity: <SiSanity className="text-[#F03E2F]" />,
    "React Native": <FaReact className="text-[#61DAFB]" />,
    Expo: <SiExpo className="text-[#000020]" />,
    Firebase: <SiFirebase className="text-[#FFCA28]" />,
    Webpack: <SiWebpack className="text-[#8DD6F9]" />,
    Husky: <SiGit className="text-black dark:text-white" />,
    TurboRepo: <SiTurborepo className="text-[#EF4444]" />,
    "Node.js*": <SiNodedotjs className="text-[#339933]" />,
    "Node.js": <SiNodedotjs className="text-[#339933]" />,
    VSCode: <TbBrandVscode className="text-[#007ACC]" />,
    Axios: <SiAxios className="text-[#5A29E4]" />,
    Docker: <SiDocker className="text-[#2496ED]" />,
    AWS: <FaAws className="text-[#FF9900]" />,
    "AWS (EC2, S3)": <FaAws className="text-[#FF9900]" />,
    GraphQL: <SiGraphql className="text-[#E10098]" />,
    Redux: <FaReact className="text-[#764ABC]" />,
    "GitLab CI/CD": <FaGitAlt className="text-[#FCA326]" />,
    "Testing (Jest, RTL)": <SiJest className="text-[#C21325]" />,
    "Authentication with JWT": <MdOutlineSecurity className="text-[#D63AFF]" />,
    "Advanced TypeScript Patterns": <SiTypescript className="text-[#3178C6]" />,
    "SSR / SSG": <SiNextdotjs className="text-black dark:text-white" />,
    "Code Splitting": <MdOutlineSpeed className="text-[#339933]" />,
    "Lazy Loading": <MdOutlineSpeed className="text-[#339933]" />,
    "Responsive Design": <SiCss3 className="text-[#1572B6]" />,
    "Accessibility (ARIA/WCAG)": <MdOutlineAccessibility className="text-[#4285F4]" />,
    "Internationalization (i18n)": <MdOutlineTranslate className="text-[#339933]" />,
    "RESTful APIs": <BiServer className="text-[#339933]" />,
    "Role-Based Access Control (RBAC)": <FaShieldAlt className="text-[#4285F4]" />,
    SQLite: <SiSqlite className="text-[#003B57]" />,
    "GitHub Actions (CI/CD)": <FaGitAlt className="text-[#2088FF]" />,
    Kanban: <SiJira className="text-[#0052CC]" />,
    "Linux CLI": <FaLinux className="text-[#FCC624]" />
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
                { name: 'Sass', icon: SiSass, role: t.technologyRoles.frontend['Sass'], color: '#CC6699' },
                { name: 'JavaScript (ES6+)', icon: SiJavascript, role: t.technologyRoles.frontend['JavaScript (ES6+)'], color: '#F7DF1E' },
                { name: 'TypeScript', icon: SiTypescript, role: t.technologyRoles.frontend['TypeScript'], color: '#3178C6' },
                { name: 'React.js', icon: FaReact, role: t.technologyRoles.frontend['React.js'], color: '#61DAFB' },
                { name: 'Next.js (App Router)', icon: SiNextdotjs, role: t.technologyRoles.frontend['Next.js (App Router)'], color: '#000000' },
                { name: 'Tailwind CSS', icon: SiTailwindcss, role: t.technologyRoles.frontend['Tailwind CSS'], color: '#06B6D4' },
                { name: 'Framer Motion', icon: SiFramer, role: t.technologyRoles.frontend['Framer Motion'], color: '#0055FF' },
            ]
        },
        {
            title: t.categories.architecture.title,
            description: t.technologyDescriptions.architecture,
            technologies: [
                { name: 'SSR / SSG', icon: SiNextdotjs, role: t.technologyRoles.architecture['SSR / SSG'], color: '#000000' },
                { name: 'Code Splitting', icon: MdOutlineSpeed, role: t.technologyRoles.architecture['Code Splitting'], color: '#339933' },
                { name: 'Lazy Loading', icon: MdOutlineSpeed, role: t.technologyRoles.architecture['Lazy Loading'], color: '#339933' },
                { name: 'Responsive Design', icon: SiCss3, role: t.technologyRoles.architecture['Responsive Design'], color: '#1572B6' },
                { name: 'Accessibility (ARIA/WCAG)', icon: MdOutlineAccessibility, role: t.technologyRoles.architecture['Accessibility (ARIA/WCAG)'], color: '#4285F4' },
                { name: 'SEO', icon: SiGooglesearchconsole, role: t.technologyRoles.architecture['SEO'], color: '#4285F4' },
                { name: 'Internationalization (i18n)', icon: MdOutlineTranslate, role: t.technologyRoles.architecture['Internationalization (i18n)'], color: '#339933' },
                { name: 'RESTful APIs', icon: BiServer, role: t.technologyRoles.architecture['RESTful APIs'], color: '#339933' },
                { name: 'Role-Based Access Control (RBAC)', icon: FaShieldAlt, role: t.technologyRoles.architecture['Role-Based Access Control (RBAC)'], color: '#4285F4' },
            ]
        },
        {
            title: t.categories.tooling.title,
            description: t.technologyDescriptions.tooling,
            technologies: [
                { name: 'Git & GitHub', icon: FaGitAlt, role: t.technologyRoles.tooling['Git & GitHub'], color: '#F05032' },
                { name: 'Zustand', icon: FaReact, role: t.technologyRoles.tooling['Zustand'], color: '#764ABC' },
                { name: 'SQLite', icon: SiSqlite, role: t.technologyRoles.tooling['SQLite'], color: '#003B57' },
                { name: 'Node.js', icon: SiNodedotjs, role: t.technologyRoles.tooling['Node.js'], color: '#339933' },
                { name: 'GitHub Actions (CI/CD)', icon: FaGitAlt, role: t.technologyRoles.tooling['GitHub Actions (CI/CD)'], color: '#2088FF' },
                { name: 'Kanban', icon: SiJira, role: t.technologyRoles.tooling['Kanban'], color: '#0052CC' },
                { name: 'Linux CLI', icon: FaLinux, role: t.technologyRoles.tooling['Linux CLI'], color: '#FCC624' },
                { name: 'Vercel', icon: SiVercel, role: t.technologyRoles.tooling['Vercel'], color: '#000000' },
            ]
        },
        {
            title: t.categories.learning.title,
            description: t.technologyDescriptions.learning,
            technologies: [
                { name: 'Redux*', icon: FaReact, role: t.technologyRoles.learning['Redux*'], color: '#764ABC' },
                { name: 'PostgreSQL*', icon: SiPostgresql, role: t.technologyRoles.learning['PostgreSQL*'], color: '#336791' },
                { name: 'MongoDB*', icon: SiMongodb, role: t.technologyRoles.learning['MongoDB*'], color: '#47A248' },
                { name: 'Express.js*', icon: SiExpress, role: t.technologyRoles.learning['Express.js*'], color: '#000000' },
                { name: 'AWS (EC2, S3)*', icon: FaAws, role: t.technologyRoles.learning['AWS (EC2, S3)*'], color: '#FF9900' },
                { name: 'GitLab CI/CD*', icon: FaGitAlt, role: t.technologyRoles.learning['GitLab CI/CD*'], color: '#FCA326' },
                { name: 'Testing (Jest, RTL)*', icon: SiJest, role: t.technologyRoles.learning['Testing (Jest, RTL)*'], color: '#C21325' },
                { name: 'Authentication with JWT*', icon: MdOutlineSecurity, role: t.technologyRoles.learning['Authentication with JWT*'], color: '#D63AFF' },
                { name: 'Advanced TypeScript Patterns*', icon: SiTypescript, role: t.technologyRoles.learning['Advanced TypeScript Patterns*'], color: '#3178C6' },
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