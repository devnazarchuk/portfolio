import { motion } from 'framer-motion';
import Link from 'next/link';
import { blockAnimation } from '../lib/animation';

interface ProjectCardProps {
    title: string;
    description: string[];
    technologies: string[];
    github: string;
    live: string;
}

export const ProjectCard = ({ title, description, technologies, github, live }: ProjectCardProps) => {
    return (
        <motion.div
            variants={blockAnimation}
            initial='hidden'
            whileInView='visible'
            className='bg-fuchsia-800/50 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-slate-700'
        >
            <h3 className='text-slate-100 text-2xl font-bold'>{title}</h3>
            <ul className='text-slate-300 text-md pt-4 list-disc list-inside'>
                {description.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <div className='flex flex-wrap gap-2 pt-4'>
                {technologies.map((tech, index) => (
                    <span
                        key={index}
                        className='bg-fuchsia-700 text-slate-200 px-3 py-1 rounded-full text-sm'
                    >
                        {tech}
                    </span>
                ))}
            </div>
            <div className='flex gap-4 pt-6'>
                <Link
                    href={github}
                    target='_blank'
                    className='text-slate-300 hover:text-slate-100'
                >
                    GitHub
                </Link>
                <Link
                    href={live}
                    target='_blank'
                    className='text-slate-300 hover:text-slate-100'
                >
                    Live Demo
                </Link>
            </div>
        </motion.div>
    );
};
