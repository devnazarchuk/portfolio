import { MetadataRoute } from 'next';
import enMessages from '../messages/en.json';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://artemnazarchuk.com';
    const projects = Object.keys(enMessages.projects.items);

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        ...projects.map((project) => ({
            url: `${baseUrl}/projects/${project}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        })),
    ];
} 