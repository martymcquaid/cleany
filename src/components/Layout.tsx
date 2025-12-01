import React from 'react';
import { Link } from 'react-router-dom';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-lg sticky top-0 z-50 backdrop-blur-xl">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-2xl font-bold text-blue-600">Cleany</Link>
            <div className="space-x-4">
              <Link to="/" className="text-lg text-gray-700 hover:text-blue-600">Home</Link>
              <Link to="/services" className="text-lg text-gray-700 hover:text-blue-600">Services</Link>
              <Link to="/testimonials" className="text-lg text-gray-700 hover:text-blue-600">Testimonials</Link>
              <Link to="/contact" className="text-lg text-gray-700 hover:text-blue-600">Contact</Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-gray-800 py-6 text-center text-white">
        <p className="text-sm">© 2023 Cleany. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;