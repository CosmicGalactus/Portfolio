import React from 'react';

export const About: React.FC = () => {
  const skills = [
    'React',
    'TypeScript',
    'Node.js',
    'MongoDB',
    'Express',
    'Tailwind CSS',
    'Vite',
    'REST APIs',
  ];

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-800 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              I'm a passionate full-stack developer with a focus on building scalable, user-friendly web applications.
              With expertise in modern JavaScript frameworks and backend technologies, I craft digital solutions
              that make an impact.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I love collaborating with teams, learning new technologies, and turning ideas into reality.
              When I'm not coding, you can find me exploring new tools or contributing to open source.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
