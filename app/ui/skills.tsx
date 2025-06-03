'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import enMessages from '../../messages/en.json';
import deMessages from '../../messages/de.json';
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiFramer,
    SiFirebase,
    SiGithub,
    SiVercel,
    SiFigma,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiGit,
    SiNpm,
    SiYarn,
    SiWebpack,
    SiJest,
    SiTestinglibrary,
    SiEslint,
    SiPrettier,
    SiNodedotjs,
    SiExpress,
    SiPostgresql,
    SiPrisma,
    SiStrapi,
    SiSanity,
} from 'react-icons/si';
import { FaReact, FaLock } from 'react-icons/fa';
import { SkillTimeline } from './skillTimeline';

type Messages = {
    skills: {
        title: string;
        coreSkills: string;
        currentlyLearning: string;
    };
};

const messages: Record<string, Messages> = {
    en: enMessages as Messages,
    de: deMessages as Messages
};

type CoreSkill = {
    icon: any;
    name: string;
    role: string;
    color: string;
};

type LearningSkill = {
    icon: any;
    name: string;
    focus: string;
    color: string;
};

const coreSkills: CoreSkill[] = [
    { icon: SiNextdotjs, name: 'Next.js', role: 'SSR, SEO, File-based Routing', color: '#000000' },
    { icon: SiReact, name: 'React.js', role: 'Frontend, Components, SPA', color: '#61DAFB' },
    { icon: SiTailwindcss, name: 'Tailwind CSS', role: 'Styling, Responsive Layout', color: '#06B6D4' },
    { icon: SiJavascript, name: 'JavaScript', role: 'Frontend, Backend', color: '#3178C6' },
    { icon: SiFramer, name: 'Framer Motion', role: 'Animations, UX', color: '#000000' },
    { icon: SiGit, name: 'Git', role: 'Version Control', color: '#F05032' },
    { icon: SiGithub, name: 'GitHub', role: 'Collaboration', color: '#181717' },
    { icon: SiVercel, name: 'Vercel', role: 'Deployment', color: '#000000' },
    { icon: SiJest, name: 'Jest', role: 'Testing', color: '#C21325' },
    { icon: SiTestinglibrary, name: 'Testing Library', role: 'Component Testing', color: '#E33332' },
    { icon: SiEslint, name: 'ESLint', role: 'Code Quality', color: '#4B32C3' },
];

const learning: LearningSkill[] = [
    { icon: SiTypescript, name: 'TypeScript', focus: 'Advanced Patterns', color: '#3178C6' },
    { icon: SiNodedotjs, name: 'Node.js', focus: 'Backend Development', color: '#339933' },
    { icon: SiExpress, name: 'Express', focus: 'API Development', color: '#000000' },
    { icon: SiPostgresql, name: 'PostgreSQL', focus: 'Database', color: '#336791' },
    { icon: SiPrisma, name: 'Prisma', focus: 'ORM', color: '#2D3748' },
    { icon: FaLock, name: 'JWT', focus: 'Authentication', color: '#000000' },
    { icon: SiStrapi, name: 'Strapi', focus: 'Headless CMS', color: '#2F2E8B' },
    { icon: SiSanity, name: 'Sanity', focus: 'Content Management', color: '#F03E2F' },
    { icon: FaReact, name: 'React Native', focus: 'Mobile Development', color: '#61DAFB' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
};

const SkillCard = ({ skill, type }: { skill: CoreSkill | LearningSkill, type: 'core' | 'learning' }) => {
    const Icon = skill.icon;
    return (
        <motion.div
            variants={itemVariants}
            whileHover={{
                scale: 1.02,
                backgroundColor: 'rgba(114, 59, 243, 0.1)',
                boxShadow: '0 0 20px rgba(114, 59, 243, 0.2)'
            }}
            className="group flex flex-col p-4 bg-white/5 dark:bg-black/5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 backdrop-blur-sm border border-[#723bf3]/10 dark:border-[#723bf3]/20"
        >
            <div className="flex items-center gap-3 mb-2">
                <Icon
                    size={24}
                    color={skill.color}
                    className="transition-transform duration-300 group-hover:scale-110"
                />
                <span className="text-base font-medium text-slate-700 dark:text-slate-200">
                    {skill.name}
                </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
                {type === 'core' ? (skill as CoreSkill).role : (skill as LearningSkill).focus}
            </p>
        </motion.div>
    );
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