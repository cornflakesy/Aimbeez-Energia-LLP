import * as React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <motion.footer initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-solar-blue text-white animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="AIMBEEZ ENERGIA LLP Logo" className="h-10 w-auto" />
              <span className="text-2xl font-extrabold tracking-tight">AIMBEEZ ENERGIA LLP</span>
            </div>
            <p className="text-solar-yellow/80 leading-relaxed font-medium">
              Leading provider of solar energy solutions, committed to sustainable development 
              and renewable energy adoption across India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-solar-yellow/70 hover:text-white transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-solar-yellow/70 hover:text-white transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-solar-yellow/70 hover:text-white transition-colors duration-200">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-solar-yellow/70 hover:text-white transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-solar-yellow">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/80 hover:text-solar-yellow transition-colors duration-200 font-semibold">Home</Link></li>
              <li><Link to="/about" className="text-white/80 hover:text-solar-yellow transition-colors duration-200 font-semibold">About Us</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-solar-yellow transition-colors duration-200 font-semibold">Services</Link></li>
              <li><Link to="/products" className="text-white/80 hover:text-solar-yellow transition-colors duration-200 font-semibold">Products</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-solar-yellow transition-colors duration-200 font-semibold">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-solar-yellow">Our Services</h3>
            <ul className="space-y-2">
              <li><span className="text-white/80 font-semibold">Solar Panel Installation</span></li>
              <li><span className="text-white/80 font-semibold">System Design & Engineering</span></li>
              <li><span className="text-white/80 font-semibold">Maintenance & Support</span></li>
              <li><span className="text-white/80 font-semibold">Energy Consulting</span></li>
              <li><span className="text-white/80 font-semibold">Government Subsidy Assistance</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-solar-yellow">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-solar-yellow mt-1 flex-shrink-0" />
                <span className="text-white/80 font-semibold">PP Square, 3rd Floor, G.S Road, Guwahati, Assam 781001</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-solar-yellow" />
                <span className="text-white/80 font-semibold">++91 99542 01437</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-solar-yellow" />
                <span className="text-white/80 font-semibold">info@aimbeezenergia.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-solar-yellow/30 mt-10 pt-8 text-center">
          <p className="text-white/60 font-medium">
            © 2024 AIMBEEZ ENERGIA LLP. All rights reserved. | Powering India with Clean Energy
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;