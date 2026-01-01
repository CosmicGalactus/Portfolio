import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center pt-16">
      <div className="text-center max-w-4xl px-4">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Hi, I'm <span className="text-primary">Prakhar</span>
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
          A passionate full-stack developer crafting beautiful and functional web experiences
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition">
            View My Work
          </button>
          <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};
