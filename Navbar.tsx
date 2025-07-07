import * as React from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, ease: 'easeOut' }} className="bg-white/80 backdrop-blur shadow-lg sticky top-0 z-50 border-b border-solar-yellow transition-all duration-300">
      {/* Top Bar */}
      <div className="bg-solar-blue text-white py-2 animate-fade-in-down">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="font-semibold tracking-wide">+91 99542 01437</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="font-semibold tracking-wide">info@aimbeezenergia.com</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span className="font-bold tracking-wider uppercase text-solar-yellow">Leading Solar Energy Solutions Provider</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <img src={logo} alt="AIMBEEZ ENERGIA LLP Logo" className="h-10 w-auto mr-2" />
            <span className="text-2xl font-extrabold text-solar-blue tracking-tight group-hover:text-solar-orange transition-colors duration-300">AIMBEEZ ENERGIA LLP</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-3 py-2 text-base font-semibold tracking-wide transition-all duration-200
                  ${location.pathname === link.path
                    ? 'text-solar-orange after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-solar-yellow after:rounded-full after:animate-underline'
                    : 'text-solar-blue hover:text-solar-orange hover:scale-105'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-solar-yellow text-solar-blue px-6 py-2 rounded-xl font-bold shadow-bold hover:bg-solar-orange hover:text-white transition-all duration-200 animate-bounce-slow"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-solar-blue hover:text-solar-orange hover:bg-solar-yellow/20 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 border-t border-solar-yellow animate-fade-in-down">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 text-lg font-semibold rounded-md transition-all duration-200
                  ${location.pathname === link.path
                    ? 'text-solar-orange bg-solar-yellow/20'
                    : 'text-solar-blue hover:text-solar-orange hover:bg-solar-yellow/10'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center bg-solar-yellow text-solar-blue px-4 py-2 rounded-xl font-bold shadow-bold hover:bg-solar-orange hover:text-white transition-all duration-200 mt-4 animate-bounce-slow"
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;