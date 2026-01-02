import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

export const Contact: React.FC = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:prakhar@example.com' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/CosmicGalactus' },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
  ];

  return (
    <section className={`min-h-screen py-20 px-4 transition-colors duration-300 ${
      isDark
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900'
        : 'bg-gradient-to-br from-gray-50 via-white to-indigo-50'
    }`}>
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {submitted && (
              <motion.div
                className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-600 text-green-700 dark:text-green-400 rounded-lg"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✨ Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2 font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none ${
                    isDark
                      ? 'bg-gray-800 border-gray-700 text-white focus:border-indigo-500'
                      : 'bg-white border-gray-300 text-gray-900 focus:border-indigo-600'
                  }`}
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2 font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none ${
                    isDark
                      ? 'bg-gray-800 border-gray-700 text-white focus:border-indigo-500'
                      : 'bg-white border-gray-300 text-gray-900 focus:border-indigo-600'
                  }`}
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-300 mb-2 font-semibold">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none h-32 resize-none ${
                    isDark
                      ? 'bg-gray-800 border-gray-700 text-white focus:border-indigo-500'
                      : 'bg-white border-gray-300 text-gray-900 focus:border-indigo-600'
                  }`}
                  placeholder="Your message here..."
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 dark:from-indigo-500 dark:to-purple-500 text-white py-3 rounded-lg font-semibold transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Connect With Me</h3>
            <div className="space-y-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-lg border-2 transition-all duration-300 ${
                      isDark
                        ? 'bg-gray-800/50 border-gray-700 hover:border-indigo-500 hover:bg-gray-800'
                        : 'bg-white/50 border-gray-300 hover:border-indigo-600 hover:bg-white'
                    }`}
                    whileHover={{ x: 10 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    <span className="font-semibold text-gray-900 dark:text-white">{social.label}</span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
