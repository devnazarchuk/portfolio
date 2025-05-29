'use client';

import { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import enMessages from '../../messages/en.json';
import deMessages from '../../messages/de.json';

const messages = {
    en: enMessages,
    de: deMessages
};

interface FormData {
    name: string;
    email: string;
    title: string;
    message: string;
}

interface ContactFormProps {
    className?: string;
}

export const ContactForm = ({ className = '' }: ContactFormProps) => {
    const { language } = useLanguage();
    const t = messages[language].contact;
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        title: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });

    useEffect(() => {
        // Initialize EmailJS
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
        if (!publicKey) {
            console.error('EmailJS public key is missing');
            return;
        }
        emailjs.init(publicKey);
    }, []);

    const validateForm = (): boolean => {
        if (!formData.name.trim()) {
            setStatus({
                type: 'error',
                message: language === 'en' ? 'Please enter your name.' : 'Bitte geben Sie Ihren Namen ein.'
            });
            return false;
        }
        if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            setStatus({
                type: 'error',
                message: language === 'en' ? 'Please enter a valid email address.' : 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
            });
            return false;
        }
        if (!formData.title.trim()) {
            setStatus({
                type: 'error',
                message: language === 'en' ? 'Please enter a subject.' : 'Bitte geben Sie einen Betreff ein.'
            });
            return false;
        }
        if (!formData.message.trim() || formData.message.length < 10) {
            setStatus({
                type: 'error',
                message: language === 'en' ? 'Please enter a message (minimum 10 characters).' : 'Bitte geben Sie eine Nachricht ein (mindestens 10 Zeichen).'
            });
            return false;
        }
        return true;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error message when user starts typing
        if (status.type === 'error') {
            setStatus({ type: null, message: '' });
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setIsLoading(true);
        setStatus({ type: null, message: '' });

        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        // Debug log
        console.log('EmailJS Config:', {
            serviceId,
            templateId,
            publicKey: publicKey ? 'exists' : 'missing'
        });

        if (!serviceId || !templateId || !publicKey) {
            console.error('Missing EmailJS configuration');
            setStatus({
                type: 'error',
                message: language === 'en' 
                    ? 'Email service configuration is missing. Please contact the administrator.'
                    : 'E-Mail-Service-Konfiguration fehlt. Bitte kontaktieren Sie den Administrator.'
            });
            setIsLoading(false);
            return;
        }

        try {
            const templateParams = {
                ...formData,
                time: new Date().toLocaleString(),
                to_email: 'devnazarchuk@gmail.com'
            };

            // Debug log
            console.log('Sending email with params:', templateParams);

            const response = await emailjs.send(
                serviceId,
                templateId,
                templateParams,
                publicKey
            );

            // Debug log
            console.log('EmailJS Response:', response);

            setStatus({
                type: 'success',
                message: language === 'en'
                    ? 'Your message has been sent successfully. I will get back to you soon!'
                    : 'Ihre Nachricht wurde erfolgreich gesendet. Ich werde mich bald bei Ihnen melden!'
            });
            setFormData({ name: '', email: '', title: '', message: '' });
        } catch (error) {
            // Detailed error logging
            console.error('EmailJS Error Details:', {
                error,
                message: error instanceof Error ? error.message : 'Unknown error',
                stack: error instanceof Error ? error.stack : undefined
            });

            setStatus({
                type: 'error',
                message: language === 'en'
                    ? 'There was an error sending the message. Please try again later or contact me directly at devnazarchuk@gmail.com'
                    : 'Beim Senden der Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut oder kontaktieren Sie mich direkt unter devnazarchuk@gmail.com'
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className={`w-full max-w-lg bg-card-bg p-6 rounded-lg shadow-lg ${className}`}
            noValidate
        >
            <div className='flex flex-col gap-4'>
                <div>
                    <label htmlFor='name' className='block text-text-primary mb-2'>
                        {t.form.name}
                    </label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className='w-full p-3 bg-background text-text-primary rounded-lg outline-none focus:ring-2 focus:ring-accent'
                        aria-label={t.form.name}
                        placeholder={t.form.namePlaceholder}
                    />
                </div>

                <div>
                    <label htmlFor='email' className='block text-text-primary mb-2'>
                        {t.form.email}
                    </label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className='w-full p-3 bg-background text-text-primary rounded-lg outline-none focus:ring-2 focus:ring-accent'
                        aria-label={t.form.email}
                        placeholder={t.form.emailPlaceholder}
                    />
                </div>

                <div>
                    <label htmlFor='title' className='block text-text-primary mb-2'>
                        {t.form.subject}
                    </label>
                    <input
                        type='text'
                        id='title'
                        name='title'
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className='w-full p-3 bg-background text-text-primary rounded-lg outline-none focus:ring-2 focus:ring-accent'
                        aria-label={t.form.subject}
                        placeholder={t.form.subjectPlaceholder}
                    />
                </div>

                <div>
                    <label htmlFor='message' className='block text-text-primary mb-2'>
                        {t.form.message}
                    </label>
                    <textarea
                        id='message'
                        name='message'
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className='w-full p-3 bg-background text-text-primary rounded-lg outline-none focus:ring-2 focus:ring-accent'
                        aria-label={t.form.message}
                        placeholder={t.form.messagePlaceholder}
                    />
                </div>

                <button
                    type='submit'
                    disabled={isLoading}
                    className={`mt-4 bg-accent hover:bg-accent-hover text-white font-semibold py-2 px-4 rounded-lg transition-all ${
                        isLoading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    aria-label={isLoading ? t.form.sending : t.form.send}
                >
                    {isLoading ? (
                        <span className='flex items-center justify-center'>
                            <svg
                                className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                            >
                                <circle
                                    className='opacity-25'
                                    cx='12'
                                    cy='12'
                                    r='10'
                                    stroke='currentColor'
                                    strokeWidth='4'
                                />
                                <path
                                    className='opacity-75'
                                    fill='currentColor'
                                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                                />
                            </svg>
                            {t.form.sending}
                        </span>
                    ) : (
                        t.form.send
                    )}
                </button>

                {status.type && (
                    <div
                        className={`mt-4 p-4 rounded-lg ${
                            status.type === 'success'
                                ? 'bg-green-500/20 text-green-600 dark:text-green-400'
                                : 'bg-red-500/20 text-red-600 dark:text-red-400'
                        }`}
                        role='alert'
                    >
                        {status.message}
                    </div>
                )}
            </div>
        </motion.form>
    );
}; 