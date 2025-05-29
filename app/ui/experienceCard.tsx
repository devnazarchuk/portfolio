import { motion } from 'framer-motion';
import { blockAnimation } from '../lib/animation';

interface ExperienceCardProps {
    title: string;
    company: string;
    period: string;
    description: string[];
}

export const ExperienceCard = ({ title, company, period, description }: ExperienceCardProps) => {
    return (
        <motion.div
            variants={blockAnimation}
            initial='hidden'
            whileInView='visible'
            className='bg-fuchsia-800/50 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-slate-700'
        >
            <div className='flex justify-between items-start'>
                <div>
                    <h3 className='text-slate-100 text-2xl font-bold'>{title}</h3>
                    <p className='text-slate-300 text-lg'>{company}</p>
                </div>
                <p className='text-slate-400'>{period}</p>
            </div>
            <ul className='text-slate-300 text-md pt-4 list-disc list-inside'>
                {description.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </motion.div>
    );
};
