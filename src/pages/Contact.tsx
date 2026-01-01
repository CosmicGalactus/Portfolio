import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ email, message });
  };

  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">Get In Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-primary"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-primary h-32"
              placeholder="Your message here..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg hover:bg-secondary transition font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
