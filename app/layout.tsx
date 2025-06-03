import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: {
        default: 'Artem Nazarchuk | Frontend Developer',
        template: '%s | Artem Nazarchuk',
    },
    description: 'Frontend developer specializing in React, Next.js, and TypeScript. Building fast, scalable, and accessible web applications.',
    keywords: ['frontend', 'developer', 'react', 'next.js', 'typescript', 'portfolio', 'artem nazarchuk'],
    authors: [{ name: 'Artem Nazarchuk' }],
    creator: 'Artem Nazarchuk',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://artemnazarchuk.com',
        title: 'Artem Nazarchuk | Frontend Developer',
        description: 'Frontend developer specializing in React, Next.js, and TypeScript. Building fast, scalable, and accessible web applications.',
        siteName: 'Artem Nazarchuk',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Artem Nazarchuk | Frontend Developer',
        description: 'Frontend developer specializing in React, Next.js, and TypeScript. Building fast, scalable, and accessible web applications.',
        creator: '@devnazarchuk',
    },
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider>
                    <LanguageProvider>{children}</LanguageProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
