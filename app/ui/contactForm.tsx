'use client';

import { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

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
                message: 'Please enter your name.'
            });
            return false;
        }
        if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            setStatus({
                type: 'error',
                message: 'Please enter a valid email address.'
            });
            return false;
        }
        if (!formData.title.trim()) {
            setStatus({
                type: 'error',
                message: 'Please enter a subject.'
            });
            return false;
        }
        if (!formData.message.trim() || formData.message.length < 10) {
            setStatus({
                type: 'error',
                message: 'Please enter a message (minimum 10 characters).'
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
                message: 'Email service configuration is missing. Please contact the administrator.'
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
                message: 'Your message has been sent successfully. I will get back to you soon!'
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
                message: 'There was an error sending the message. Please try again later or contact me directly at devnazarchuk@gmail.com'
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
            className={`w-full max-w-lg bg-fuchsia-800/50 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-slate-700 ${className}`}
            noValidate
        >
            <div className='flex flex-col gap-4'>
                <div>
                    <label htmlFor='name' className='block text-slate-200 mb-2'>
                        Name
                    </label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className='w-full p-3 bg-fuchsia-700 text-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-teal-400'
                        aria-label='Your name'
                        placeholder='John Doe'
                    />
                </div>

                <div>
                    <label htmlFor='email' className='block text-slate-200 mb-2'>
                        Email
                    </label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className='w-full p-3 bg-fuchsia-700 text-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-teal-400'
                        aria-label='Your email address'
                        placeholder='john@example.com'
                    />
                </div>

                <div>
                    <label htmlFor='title' className='block text-slate-200 mb-2'>
                        Subject
                    </label>
                    <input
                        type='text'
                        id='title'
                        name='title'
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className='w-full p-3 bg-fuchsia-700 text-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-teal-400'
                        aria-label='Message subject'
                        placeholder='Project Collaboration'
                    />
                </div>

                <div>
                    <label htmlFor='message' className='block text-slate-200 mb-2'>
                        Message
                    </label>
                    <textarea
                        id='message'
                        name='message'
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className='w-full p-3 bg-fuchsia-700 text-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-teal-400'
                        aria-label='Your message'
                        placeholder='Hello! I would like to discuss...'
                    />
                </div>

                <button
                    type='submit'
                    disabled={isLoading}
                    className={`mt-4 bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-semibold py-2 px-4 rounded-lg transition-all ${
                        isLoading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    aria-label={isLoading ? 'Sending message...' : 'Send message'}
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
                            Sending...
                        </span>
                    ) : (
                        'Send Message 🚀'
                    )}
                </button>

                {status.type && (
                    <div
                        className={`mt-4 p-4 rounded-lg ${
                            status.type === 'success'
                                ? 'bg-green-500/20 text-green-400'
                                : 'bg-red-500/20 text-red-400'
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