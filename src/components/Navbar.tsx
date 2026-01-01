import React from 'react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">Prakhar</h1>
        <ul className="flex gap-6">
          {['home', 'projects', 'about', 'contact'].map((item) => (
            <li key={item}>
              <button
                onClick={() => onNavigate(item)}
                className={`capitalize transition ${
                  activeSection === item
                    ? 'text-primary font-semibold'
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary'
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
