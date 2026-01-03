import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import Background3D from './Background3D';
import { X } from 'lucide-react';

export const Hero: React.FC = () => {
  const { isDark } = useTheme();
  const [showModal, setShowModal] = useState(false);

  const bufferingVariants = {
    animate: {
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1.5,
        repeat: Infinity,
      },
    },
  };

  const nameLetters = 'PRAKHAR'.split('');

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 flex items-center justify-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <Background3D isDark={isDark} />
      </div>

      <div className="text-center max-w-4xl px-4 relative z-10">
        <motion.h1
          className="mb-4 cursor-pointer"
          onClick={() => setShowModal(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div className="inline-block">
            {nameLetters.map((letter, index) => (
              <motion.span
                key={index}
                className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent inline-block"
                variants={bufferingVariants}
                animate="animate"
                initial={{ opacity: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Full-Stack Developer | Building elegant solutions with React, Node.js & modern web technologies
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 dark:from-indigo-500 dark:to-purple-500 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            View My Work
          </button>
          <button className="px-8 py-3 border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 rounded-lg font-semibold hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-all duration-300 transform hover:scale-105">
            Download CV
          </button>
        </motion.div>
      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full shadow-2xl"
              initial={{ scale: 0.5, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.5, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                  Prakhar Srivastava
                </h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4">
                <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold">FULL NAME</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">Prakhar Srivastava</p>
                </motion.div>

                <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold">TITLE</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">Full-Stack Developer</p>
                </motion.div>

                <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold">EXPERTISE</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">React, Node.js, TypeScript</p>
                </motion.div>

                <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-semibold">PASSION</p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">Building amazing digital experiences</p>
                </motion.div>
              </div>

              <motion.button
                className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg font-semibold transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowModal(false)}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
