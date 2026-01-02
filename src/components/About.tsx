import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export const About: React.FC = () => {
  const { isDark } = useTheme();
  const skills = [
    'React',
    'TypeScript',
    'Node.js',
    'MongoDB',
    'Express',
    'Tailwind CSS',
    'Vite',
    'REST APIs',
    'Framer Motion',
    'Three.js',
    'Git',
    'Docker',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className={`min-h-screen py-20 px-4 transition-colors duration-300 ${
      isDark
        ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-indigo-900'
        : 'bg-gradient-to-br from-gray-50 via-white to-indigo-50'
    }`}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              I'm a passionate full-stack developer with a focus on building scalable, user-friendly web applications.
              With expertise in modern JavaScript frameworks and backend technologies, I craft digital solutions
              that make an impact.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I love collaborating with teams, learning new technologies, and turning ideas into reality.
              When I'm not coding, you can find me exploring new tools or contributing to open source projects.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Skills</h3>
            <motion.div
              className="flex flex-wrap gap-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 text-white rounded-lg text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
