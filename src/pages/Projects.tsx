import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, link }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-primary text-white text-sm rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-secondary transition"
        >
          View Project →
        </a>
      )}
    </div>
  );
};

export const Projects: React.FC = () => {
  const projects = [
    {
      title: 'MyManager Task App',
      description: 'A full-stack task management application with user authentication and real-time updates',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      link: 'https://manager-prakhar.vercel.app/',
    },
    {
      title: 'Portfolio Website',
      description: 'Modern responsive portfolio showcasing projects and skills',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    },
  ];

  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
