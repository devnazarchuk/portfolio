import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    metadataBase: new URL('https://devnazarchuk.vercel.app'),
    title: {
        default: 'Artem Nazarchuk | Frontend Developer',
        template: '%s | Artem Nazarchuk',
    },
    description: 'Frontend developer specializing in React, Next.js, and TypeScript. Building fast, scalable, and accessible web applications.',
    keywords: ['frontend', 'developer', 'react', 'next.js', 'typescript', 'portfolio', 'artem nazarchuk', 'web developer germany'],
    authors: [{ name: 'Artem Nazarchuk' }],
    creator: 'Artem Nazarchuk',
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://devnazarchuk.vercel.app',
        title: 'Artem Nazarchuk | Frontend Developer',
        description: 'Frontend developer specializing in React, Next.js, and TypeScript. Building fast, scalable, and accessible web applications.',
        siteName: 'DevNazarchuk',
        images: [
            {
                url: '/preview.png',
                width: 1200,
                height: 630,
                alt: 'Artem Nazarchuk Portfolio',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Artem Nazarchuk | Frontend Developer',
        description: 'Frontend developer specializing in React, Next.js, and TypeScript. Building fast, scalable, and accessible web applications.',
        creator: '@devnazarchuk',
        images: ['/preview.png'],
    },
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-icon.png',
    },
    manifest: '/site.webmanifest',
    alternates: {
        canonical: 'https://devnazarchuk.vercel.app',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className} suppressHydrationWarning>
                <ThemeProvider>
                    <LanguageProvider>{children}</LanguageProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
