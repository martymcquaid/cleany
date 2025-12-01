import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
      <form className="space-y-8">
        <div>
          <label htmlFor="name" className="block text-lg font-medium text-gray-700">Full Name</label>
          <input type="text" id="name" name="name" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Your Name" required />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email Address</label>
          <input type="email" id="email" name="email" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="you@example.com" required />
        </div>
        <div>
          <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
          <textarea id="message" name="message" rows={5} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Your message..." required></textarea>
        </div>
        <button type="submit" className="bg-gradient-to-r from-blue-500 to-green-500 text-lg font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;