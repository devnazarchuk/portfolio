import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
    variable: '--font-montserrat',
    subsets: ['latin-ext'],
    style: ['normal', 'italic'],
});

export const metadata: Metadata = {
    title: 'Artem Nazarchuk',
    description: 'Welcome to my portfolio, showcasing my web development and design skills.',
    keywords: ['Artem Nazarchuk', 'personal website', 'portfolio', 'web development'],
    authors: { name: 'Artem Nazarchuk', url: 'https://devnazarchuk.vercel.app' },
    icons: {
        icon: '/logo.png',
        apple: '/logo.png',
    },
    openGraph: {
        title: 'Artem Nazarchuk - Web Developer',
        description: 'Welcome to my portfolio. Explore my work and skills in web development.',
        url: 'https://devnazarchuk.vercel.app',
        siteName: 'Artem Nazarchuk',
        images: [
            {
                url: '/preview.png',
                width: 1911,
                height: 877,
                alt: 'Preview of Artem Nazarchuk website',
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${montserrat.className} antialiased`}>{children}</body>
        </html>
    );
}
