import React from 'react';

const Contact: React.FC = () => {
  return (
<div className="min-h-screen bg-cover bg-center relative" style={{backgroundImage: "url('https://images.unsplash.com/photo-1593642532400-2682810df593?w=1920&h=1080&fit=crop')"}}>
  <div className="absolute inset-0 bg-gradient-to-b from-blue-500/50 to-green-500/50"></div>
  <div className="relative z-10 max-w-5xl mx-auto py-32 px-8 sm:px-10 lg:px-12">
    <h2 className="text-5xl font-bold text-center mb-12 text-white">Get In Touch</h2>
    <form className="bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-2xl space-y-8">
      <div>
        <label htmlFor="name" className="block text-lg font-medium text-gray-800">Full Name</label>
        <input type="text" id="name" name="name" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-green-500 focus:border-green-500 transition-all duration-300" placeholder="Your Name" required />
      </div>
      <div>
        <label htmlFor="email" className="block text-lg font-medium text-gray-800">Email Address</label>
        <input type="email" id="email" name="email" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-green-500 focus:border-green-500 transition-all duration-300" placeholder="you@example.com" required />
      </div>
      <div>
        <label htmlFor="message" className="block text-lg font-medium text-gray-800">Message</label>
        <textarea id="message" name="message" rows={5} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-green-500 focus:border-green-500 transition-all duration-300" placeholder="Your message..." required></textarea>
      </div>
      <button type="submit" className="bg-gradient-to-r from-blue-500 to-green-500 text-lg font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300 text-white">Send Message</button>
    </form>
  </div>
</div>
  );
};

export default Contact;