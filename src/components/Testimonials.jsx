import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    { name: "Sarah L.", comment: "AITripPlanner made planning my Europe trip so easy! The AI-generated itinerary was spot-on.", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQeitT1f5FcSxOWPcPs0DSY1yHIn7CyA6kGg&s" },
    { name: "Mike T.", comment: "I was skeptical at first, but the personalized recommendations were amazing. Best vacation ever!", avatar: "https://as1.ftcdn.net/v2/jpg/01/88/77/70/1000_F_188777023_l0BzfxSZL3QfXa24dHX3SbxZUBOx0chb.jpg" },
    { name: "Emily R.", comment: "This app saved me hours of research. The AI understood exactly what kind of trip I wanted.", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgvOd70wR7A3K0r60X0EeBVBef4hrHWXLoTg&s" },
  ];

  return (
    <section className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <h3 className="font-semibold">{testimonial.name}</h3>
              </div>
              <p className="text-gray-600 italic">{testimonial.comment}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
