'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import enMessages from '../../messages/en.json';
import deMessages from '../../messages/de.json';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

type Messages = {
    certificates: {
        title: string;
        subtitle: string;
        items: {
            [key: string]: {
                title: string;
                issuer: string;
                date: string;
                description: string;
                link?: string;
            };
        };
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

export function Certificates() {
    const { language } = useLanguage();
    const t = messages[language].certificates;

    const certs = Object.entries(t.items);

    return (
        <motion.div
            variants={blockAnimation}
            initial="hidden"
            whileInView="visible"
            className='pt-44'
        >
            <h2 className='text-[#723bf3] dark:text-[#723bf3] text-4xl font-bold uppercase text-center mb-16'>{t.title}</h2>
            
            <div className="container mx-auto px-4 py-2">
                <p className="text-slate-600 dark:text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                    {t.subtitle}
                </p>
                
                {certs.length === 1 ? (
                    <div className="flex justify-center">
                        {certs[0][1].link ? (
                            <a
                                href={certs[0][1].link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full max-w-2xl block"
                                aria-label={`View ${certs[0][1].title} certificate`}
                            >
                                <motion.div
                                    key={certs[0][0]}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    whileHover={{
                                        scale: 1.02,
                                        backgroundColor: 'rgba(114, 59, 243, 0.1)',
                                        boxShadow: '0 0 20px rgba(114, 59, 243, 0.2)'
                                    }}
                                    className="w-full bg-white/5 dark:bg-black/5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 backdrop-blur-sm border border-[#723bf3]/10 dark:border-[#723bf3]/20 p-8 cursor-pointer"
                                >
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="flex items-center gap-4">
                                            <FaCertificate className="text-[#723bf3] text-3xl" />
                                            <div>
                                                <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                                                    {certs[0][1].title}
                                                </h3>
                                                <p className="text-base text-slate-600 dark:text-slate-400">
                                                    {certs[0][1].issuer}
                                                </p>
                                            </div>
                                        </div>
                                        <FaExternalLinkAlt className="text-[#723bf3] text-xl" />
                                    </div>
                                    <p className="text-base text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                                        {certs[0][1].description}
                                    </p>
                                    <div className="text-sm text-slate-500 dark:text-slate-500 font-medium">
                                        {certs[0][1].date}
                                    </div>
                                </motion.div>
                            </a>
                        ) : (
                            <motion.div
                                key={certs[0][0]}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                whileHover={{
                                    scale: 1.02,
                                    backgroundColor: 'rgba(114, 59, 243, 0.1)',
                                    boxShadow: '0 0 20px rgba(114, 59, 243, 0.2)'
                                }}
                                className="w-full max-w-2xl bg-white/5 dark:bg-black/5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 backdrop-blur-sm border border-[#723bf3]/10 dark:border-[#723bf3]/20 p-8"
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <div className="flex items-center gap-4">
                                        <FaCertificate className="text-[#723bf3] text-3xl" />
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                                                {certs[0][1].title}
                                            </h3>
                                            <p className="text-base text-slate-600 dark:text-slate-400">
                                                {certs[0][1].issuer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-base text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                                    {certs[0][1].description}
                                </p>
                                <div className="text-sm text-slate-500 dark:text-slate-500 font-medium">
                                    {certs[0][1].date}
                                </div>
                            </motion.div>
                        )}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
                        {certs.map(([key, certificate], index) => (
                            certificate.link ? (
                                <a
                                    key={key}
                                    href={certificate.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                    aria-label={`View ${certificate.title} certificate`}
                                >
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        whileHover={{
                                            scale: 1.02,
                                            backgroundColor: 'rgba(114, 59, 243, 0.1)',
                                            boxShadow: '0 0 20px rgba(114, 59, 243, 0.2)'
                                        }}
                                        className="group bg-white/5 dark:bg-black/5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 backdrop-blur-sm border border-[#723bf3]/10 dark:border-[#723bf3]/20 p-6 cursor-pointer"
                                    >
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <FaCertificate className="text-[#723bf3] text-2xl" />
                                                <div>
                                                    <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                                                        {certificate.title}
                                                    </h3>
                                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                                        {certificate.issuer}
                                                    </p>
                                                </div>
                                            </div>
                                            <FaExternalLinkAlt className="text-[#723bf3] text-lg" />
                                        </div>
                                        
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">
                                            {certificate.description}
                                        </p>
                                        
                                        <div className="text-xs text-slate-500 dark:text-slate-500 font-medium">
                                            {certificate.date}
                                        </div>
                                    </motion.div>
                                </a>
                            ) : (
                                <motion.div
                                    key={key}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{
                                        scale: 1.02,
                                        backgroundColor: 'rgba(114, 59, 243, 0.1)',
                                        boxShadow: '0 0 20px rgba(114, 59, 243, 0.2)'
                                    }}
                                    className="group bg-white/5 dark:bg-black/5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 backdrop-blur-sm border border-[#723bf3]/10 dark:border-[#723bf3]/20 p-6"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <FaCertificate className="text-[#723bf3] text-2xl" />
                                            <div>
                                                <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                                                    {certificate.title}
                                                </h3>
                                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                                    {certificate.issuer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">
                                        {certificate.description}
                                    </p>
                                    
                                    <div className="text-xs text-slate-500 dark:text-slate-500 font-medium">
                                        {certificate.date}
                                    </div>
                                </motion.div>
                            )
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
} 