import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-cover bg-center relative" style={{backgroundImage: "url('https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=1920&h=1080&fit=crop')"}}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white">
        <h1 className="text-6xl font-bold mb-4">Expert Carpet Cleaning</h1>
        <p className="text-xl mb-8">Professional and reliable service across Northern Ireland.</p>
        <div className="space-x-4">
          <button className="bg-gradient-to-r from-blue-500 to-green-500 text-lg font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300">Get a Free Quote</button>
          <button className="border-2 border-blue-500 text-blue-500 text-lg font-semibold px-8 py-4 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300">Book Now</button>
        </div>
      </div>
    </div>
<div className="bg-white py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-8">About Our Company</h2>
      <p className="text-lg text-gray-700 mb-6">
        Based in Armagh, we offer a wide range of cleaning services tailored to meet the needs of both residential and commercial clients. Our team of experts is dedicated to providing top-notch service and ensuring customer satisfaction.
      </p>
      <p className="text-lg text-gray-700">
        We specialize in carpet cleaning, upholstery cleaning, and more, serving the entire Northern Ireland region with professionalism and care.
      </p>
    </div>
  </div>
};

export default Home;