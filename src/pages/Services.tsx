import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <h2 className="text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 via-green-500 to-blue-500 bg-clip-text text-transparent">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="p-10 bg-gradient-to-br from-white to-gray-100 rounded-3xl shadow-xl hover:shadow-2xl transform transition duration-500 hover:scale-105">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=200&fit=crop" alt="Residential Cleaning" className="rounded-t-3xl mb-6"/>
          <h3 className="text-3xl font-semibold mb-4 text-blue-700">Residential Cleaning</h3>
          <p className="text-gray-700 mb-6">Our expert team ensures your home carpets are immaculate, using eco-friendly methods for a fresh and clean environment. We offer flexible scheduling and tailored cleaning plans to suit your lifestyle.</p>
          <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white text-lg font-semibold px-6 py-3 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">Learn More</button>
        </div>
        <div className="p-10 bg-gradient-to-br from-white to-gray-100 rounded-3xl shadow-xl hover:shadow-2xl transform transition duration-500 hover:scale-105">
          <img src="https://images.unsplash.com/photo-1585421514281-ef46e9f3f8c4?w=400&h=200&fit=crop" alt="Commercial Cleaning" className="rounded-t-3xl mb-6"/>
          <h3 className="text-3xl font-semibold mb-4 text-blue-700">Commercial Cleaning</h3>
          <p className="text-gray-700 mb-6">Tailored cleaning services for offices and businesses, designed to meet your specific needs with utmost precision. Our team is trained to handle all types of commercial spaces, ensuring a spotless and professional environment.</p>
          <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white text-lg font-semibold px-6 py-3 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">Learn More</button>
        </div>
        <div className="p-10 bg-gradient-to-br from-white to-gray-100 rounded-3xl shadow-xl hover:shadow-2xl transform transition duration-500 hover:scale-105">
          <img src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=400&h=200&fit=crop" alt="Specialized Cleaning" className="rounded-t-3xl mb-6"/>
          <h3 className="text-3xl font-semibold mb-4 text-blue-700">Specialized Cleaning</h3>
          <p className="text-gray-700 mb-6">We offer specialized cleaning services for unique needs, including upholstery, drapery, and more. Our advanced techniques and equipment ensure the highest quality results.</p>
          <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white text-lg font-semibold px-6 py-3 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Services;