import { MetadataRoute } from 'next';
import enMessages from '../messages/en.json';

const baseUrl = 'https://devnazarchuk.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
    const projects = Object.keys(enMessages.projects.items);

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 1,
        },
        ...projects.map((project) => ({
            url: `${baseUrl}/projects/${project}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        })),
    ];
} 