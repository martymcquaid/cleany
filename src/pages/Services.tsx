import React from 'react';

const Services: React.FC = () => {
  return (
<div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
    <h2 className="text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 via-green-500 to-blue-500 bg-clip-text text-transparent">Our Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      <div className="p-10 bg-gradient-to-br from-white to-gray-100 rounded-3xl shadow-xl hover:shadow-2xl transform transition duration-500 hover:scale-105">
        <img src="https://images.unsplash.com/photo-1598300051086-0a6d7b2c95c4?w=400&h=200&fit=crop" alt="Residential Cleaning" className="rounded-t-3xl mb-6"/>
        <h3 className="text-3xl font-semibold mb-4 text-blue-700">Residential Cleaning</h3>
        <p className="text-gray-700 mb-6">Our expert team ensures your home carpets are immaculate, using eco-friendly methods for a fresh and clean environment.</p>
        <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white text-lg font-semibold px-6 py-3 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">Learn More</button>
      </div>
      <div className="p-10 bg-gradient-to-br from-white to-gray-100 rounded-3xl shadow-xl hover:shadow-2xl transform transition duration-500 hover:scale-105">
        <img src="https://images.unsplash.com/photo-1560185008-5f0bbf298cc4?w=400&h=200&fit=crop" alt="Commercial Cleaning" className="rounded-t-3xl mb-6"/>
        <h3 className="text-3xl font-semibold mb-4 text-blue-700">Commercial Cleaning</h3>
        <p className="text-gray-700 mb-6">Tailored cleaning services for offices and businesses, designed to meet your specific needs with utmost precision.</p>
        <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white text-lg font-semibold px-6 py-3 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">Learn More</button>
      </div>
      <div className="p-10 bg-gradient-to-br from-white to-gray-100 rounded-3xl shadow-xl hover:shadow-2xl transform transition duration-500 hover:scale-105">
        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=200&fit=crop" alt="Stain Removal" className="rounded-t-3xl mb-6"/>
        <h3 className="text-3xl font-semibold mb-4 text-blue-700">Stain Removal</h3>
        <p className="text-gray-700 mb-6">Specialized in removing tough stains, our advanced techniques restore your carpets to their original beauty.</p>
        <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white text-lg font-semibold px-6 py-3 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">Learn More</button>
      </div>
    </div>
  </div>
  );
};

export default Services;