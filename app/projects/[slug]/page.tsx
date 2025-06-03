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

interface Props {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    const projects = Object.keys(messages.en.projects.items);
    return projects.map((slug) => ({
        slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const project = messages.en.projects.items[params.slug as ProjectKey];
    
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

export default function ProjectPage({ params }: Props) {
    const project = messages.en.projects.items[params.slug as ProjectKey];
    
    if (!project) {
        notFound();
    }

    return (
        <main className="container mx-auto px-4 py-8">
            <ProjectCard 
                itemKey={params.slug as ProjectKey}
                github={project.github}
                live={project.live}
            />
        </main>
    );
} 