import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-transparent text-black p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">AITripPlanner</h3>
          <p>Making your dream trips a reality with the power of AI.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-black hover">Home</a></li>
            <li><a href="#" className="text-black hovetext-purple-200">How it Works</a></li>
            <li><a href="#" className="text-black hover">Testimonials</a></li>
            <li><a href="#" className="text-black hover">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-purple-200"><Twitter /></a>
            <a href="#" className="hover:text-purple-200"><Github /></a>
            <a href="#" className="hover:text-purple-200"><Linkedin /></a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2024 AITripPlanner. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
