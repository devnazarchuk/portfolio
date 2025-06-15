import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
};

export const metadata: Metadata = {
    metadataBase: new URL('https://devnazarchuk.vercel.app'),
    title: {
        default: 'Artem Nazarchuk – Frontend Developer Portfolio',
        template: '%s | Artem Nazarchuk',
    },
    description: 'Portfolio of Artem Nazarchuk, a frontend developer skilled in React, Next.js, Tailwind CSS, and modern web development.',
    keywords: ['frontend', 'developer', 'react', 'next.js', 'typescript', 'portfolio', 'artem nazarchuk', 'web developer germany'],
    authors: [{ name: 'Artem Nazarchuk' }],
    creator: 'Artem Nazarchuk',
    publisher: 'Artem Nazarchuk',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'Jp6W1AyvdYhdy-PmYZDgX-RdRGFdxbVDGMNd5Y3yvdg',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://devnazarchuk.vercel.app',
        title: 'Artem Nazarchuk – Frontend Developer Portfolio',
        description: 'Portfolio of Artem Nazarchuk, a frontend developer skilled in React, Next.js, Tailwind CSS, and modern web development.',
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
        title: 'Artem Nazarchuk – Frontend Developer Portfolio',
        description: 'Portfolio of Artem Nazarchuk, a frontend developer skilled in React, Next.js, Tailwind CSS, and modern web development.',
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
    category: 'portfolio',
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
