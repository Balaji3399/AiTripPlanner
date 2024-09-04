// import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <div className="background min-h-screen  flex items-center justify-center p-4 text-black">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Plan Your Dream Trip with AI
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Experience personalized travel planning powered by artificial intelligence.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link to="/create-trip">
          <Button className="text-lg py-2 px-6">
            Get Started , It's Free
          </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
