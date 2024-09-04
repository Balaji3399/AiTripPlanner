// import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Zap, Plane } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    { icon: <MapPin size={40} />, title: "Choose Your Destination", description: "Tell us where you want to go." },
    { icon: <Calendar size={40} />, title: "Set Your Dates", description: "Let us know when you plan to travel." },
    { icon: <Zap size={40} />, title: "AI Magic", description: "Our AI creates a personalized itinerary." },
    { icon: <Plane size={40} />, title: "Enjoy Your Trip", description: "Experience your dream vacation!" },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-purple-600 mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
