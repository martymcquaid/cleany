import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500">
          <p className="text-gray-600 italic">"Fantastic service! Our carpets look brand new. Highly recommend!"</p>
          <div className="mt-4 flex items-center">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop" alt="Client" className="rounded-full h-16 w-16 mr-4"/>
            <div>
              <h4 className="text-lg font-semibold">Sarah Johnson</h4>
              <p className="text-gray-500">Belfast, NI</p>
            </div>
          </div>
        </div>
        <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500">
          <p className="text-gray-600 italic">"Prompt and professional. The team did a great job on our office carpets."</p>
          <div className="mt-4 flex items-center">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop" alt="Client" className="rounded-full h-16 w-16 mr-4"/>
            <div>
              <h4 className="text-lg font-semibold">Michael Carter</h4>
              <p className="text-gray-500">Derry, NI</p>
            </div>
          </div>
        </div>
        <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500">
          <p className="text-gray-600 italic">"Great attention to detail. Our carpets have never looked better!"</p>
          <div className="mt-4 flex items-center">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop" alt="Client" className="rounded-full h-16 w-16 mr-4"/>
            <div>
              <h4 className="text-lg font-semibold">Emily Davis</h4>
              <p className="text-gray-500">Lisburn, NI</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;