import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export const Stats: React.FC = () => {
  const { isDark } = useTheme();

  const stats = [
    { number: '50+', label: 'Projects Completed', icon: '🚀' },
    { number: '30+', label: 'Happy Clients', icon: '😊' },
    { number: '3+', label: 'Years Experience', icon: '⭐' },
    { number: '100%', label: 'Satisfaction Rate', icon: '💯' },
  ];

  return (
    <section className={`py-16 px-4 transition-colors duration-300 ${
      isDark
        ? 'bg-gradient-to-r from-indigo-900/20 to-purple-900/20'
        : 'bg-gradient-to-r from-indigo-50 to-purple-50'
    }`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={`text-center p-6 rounded-xl backdrop-blur-sm ${
                isDark
                  ? 'bg-gray-800/50 border border-gray-700'
                  : 'bg-white/50 border border-gray-200'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
