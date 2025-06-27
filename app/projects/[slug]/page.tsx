import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProjectCard } from '@/app/ui/projectCard';
import enMessages from '@/messages/en.json';
import deMessages from '@/messages/de.json';

const messages = {
    en: enMessages,
    de: deMessages
};

type ProjectKey = keyof typeof messages.en.projects.items;

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateStaticParams() {
    const projects = Object.keys(messages.en.projects.items);
    return projects.map((slug) => ({
        slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const project = messages.en.projects.items[resolvedParams.slug as ProjectKey];
    
    if (!project) {
        return {
            title: 'Project Not Found',
        };
    }

    return {
        title: `${project.title} | Portfolio`,
        description: project.description[0],
        openGraph: {
            title: project.title,
            description: project.description[0],
            type: 'website',
        },
    };
}

export default async function ProjectPage({ params }: PageProps) {
    const resolvedParams = await params;
    const project = messages.en.projects.items[resolvedParams.slug as ProjectKey];
    
    if (!project) {
        notFound();
    }

    // Default URLs for projects
    const projectUrls = {
        depity: {
            github: 'https://github.com/devnazarchuk/depity',
            demo: 'https://depity.vercel.app'
        },
        sneakers: {
            github: 'https://github.com/devnazarchuk/sneakers-shop',
            demo: 'https://reactsneakerss.vercel.app/'
        },
        pappert: {
            github: 'https://github.com/devnazarchuk/pappert',
            demo: 'https://pappert.vercel.app'
        },
        banking: {
            github: 'https://github.com/devnazarchuk/banking-app',
            demo: 'https://banking-app.vercel.app'
        }
    };

    const urls = projectUrls[resolvedParams.slug as ProjectKey];

    return (
        <main className="container mx-auto px-4 py-8">
            <ProjectCard 
                itemKey={resolvedParams.slug as ProjectKey}
                github={urls.github}
                demo={urls.demo}
            />
        </main>
    );
} 