import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500">
          <h3 className="text-2xl font-semibold mb-4">Residential Cleaning</h3>
          <p className="text-gray-600">Expert carpet cleaning for homes, ensuring a fresh and clean environment.</p>
        </div>
        <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500">
          <h3 className="text-2xl font-semibold mb-4">Commercial Cleaning</h3>
          <p className="text-gray-600">Reliable service for offices and businesses, tailored to your needs.</p>
        </div>
        <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500">
          <h3 className="text-2xl font-semibold mb-4">Stain Removal</h3>
          <p className="text-gray-600">Specialized treatment for tough stains, restoring your carpets to their best.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;