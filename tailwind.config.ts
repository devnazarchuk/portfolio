import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                'text-primary': 'var(--text-primary)',
                'text-secondary': 'var(--text-secondary)',
                accent: 'var(--accent)',
                'accent-hover': 'var(--accent-hover)',
                card: 'var(--card)',
                'card-bg': 'var(--card-bg)',
                muted: 'var(--muted)'
            }
        }
    },
    plugins: []
};

export default config;
