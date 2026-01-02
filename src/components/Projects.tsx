import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, link, github }) => {
  const { isDark } = useTheme();

  return (
    <motion.div
      className={`rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 h-full ${
        isDark
          ? 'bg-gray-800/80 backdrop-blur-sm border border-gray-700'
          : 'bg-white/80 backdrop-blur-sm border border-gray-200'
      }`}
      whileHover={{ y: -5, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 text-white text-xs rounded-full font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-purple-600 dark:hover:text-purple-400 font-semibold transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-purple-600 dark:hover:text-purple-400 font-semibold transition-colors"
          >
            <Github className="w-4 h-4" />
            Code
          </a>
        )}
      </div>
    </motion.div>
  );
};

export const Projects: React.FC = () => {
  const { isDark } = useTheme();
  const projects = [
    {
      title: 'MyManager Task App',
      description: 'A full-stack task management application with user authentication and real-time updates',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      link: 'https://manager-prakhar.vercel.app/',
      github: 'https://github.com/CosmicGalactus/MyManager',
    },
    {
      title: 'Portfolio Website',
      description: 'Modern responsive portfolio with 3D animations and interactive elements',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Three.js'],
      github: 'https://github.com/CosmicGalactus/Portfolio',
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured e-commerce solution with payment integration and analytics',
      tags: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    },
  ];

  return (
    <section className={`min-h-screen py-20 px-4 transition-colors duration-300 ${
      isDark
        ? 'bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-800'
        : 'bg-gradient-to-br from-white via-indigo-50 to-gray-50'
    }`}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
