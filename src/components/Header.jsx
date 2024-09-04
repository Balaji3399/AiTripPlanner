import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className={`text-white p-4 fixed w-full z-10 ${isScrolled || isMenuOpen? 'bg-white shadow-md ': 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <img src="/logo.svg" className="text-2xl font-bold" />
        <nav className="hidden md:flex space-x-6 ">
          <a href="#" className="text-[black] font-bold hover:">Home</a>
          <a href="#" className="text-[black] font-bold hover">How it Works</a>
          <a href="#" className="text-[black] font-bold hover">Testimonials</a>
          <a href="#" className="text-[black] font-bold hover">Contact</a>
        </nav>
        <Button className="hidden md:flex">Sign In</Button>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
          {isMenuOpen ? <X />  : <Menu />}
        </button>
      </div>
      {isMenuOpen && (
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col space-y-2 mt-4 md:hidden"
        >
          <a href="#" className=" text-[black] hover:">Home</a>
          <a href="#" className="text-[black] hover">How it Works</a>
          <a href="#" className="text-[black] hover">Testimonials</a>
          <a href="#" className="text-[black] hover">Contact</a>
          <Button className="w-[100px]" >Sign In</Button>
        </motion.nav>
      )}
    </header>
  );
};

export default Header;
