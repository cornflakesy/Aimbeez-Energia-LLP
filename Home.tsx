import * as React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Users, Award, CheckCircle, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  const stats = [
    { number: '5000+', label: 'Happy Customers', icon: Users },
    { number: '50MW+', label: 'Installed Capacity', icon: Zap },
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '99%', label: 'Customer Satisfaction', icon: Shield },
  ];

  const services = [
    {
      title: 'Residential Solar',
      description: 'Complete solar solutions for homes with premium quality panels and inverters',
      image: 'https://images.pexels.com/photos/8853525/pexels-photo-8853525.jpeg?_gl=1*u88obr*_ga*MTUxMzM2Mzc1My4xNzUxNjkzODU1*_ga_8JE65Q40S6*czE3NTE2OTM4NTQkbzEkZzEkdDE3NTE2OTQ3MzkkajckbDAkaDA.',
    },
    {
      title: 'Commercial Solar',
      description: 'Large-scale solar installations for businesses and industries',
      image: 'https://images.unsplash.com/photo-1542336391-ae2936d8efe4?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Solar Maintenance',
      description: 'Comprehensive maintenance and monitoring services for optimal performance',
      image: 'https://in2home.co.uk/wp-content/uploads/2024/12/featured-image-clean-solar.jpeg-1-.jpg',
    },
  ];
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Guwahati',
      rating: 5,
      text: 'Excellent service and professional installation. Our electricity bills have reduced by 80%!',
    },
    {
      name: 'Priya Bordoloi',
      location: 'Rangia',
      rating: 5,
      text: 'AIMBEEZ ENERGIA LLP provided the best solar solution for our factory. Highly recommended!',
    },
    {
      name: 'Amit Bora',
      location: 'Jorhat',
      rating: 5,
      text: 'Professional team, quality products, and excellent after-sales support.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative bg-gradient-to-br from-solar-blue via-blue-800 to-green-700 text-white overflow-hidden animate-hero-fade-in">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?_gl=1*qyrlf7*_ga*MTUxMzM2Mzc1My4xNzUxNjkzODU1*_ga_8JE65Q40S6*czE3NTE2OTM4NTQkbzEkZzEkdDE3NTE2OTM5NjkkajEyJGwwJGgw)',
            backgroundBlendMode: 'overlay'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-40">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6 drop-shadow-xl max-w-4xl mx-auto whitespace-normal">
              Power Your Future with <span className="text-solar-orange animate-pulse">Clean Energy</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 leading-relaxed font-semibold max-w-xl mx-auto text-center">
              <span className="shiny-text">India's leading solar energy company</span>
            </p>
            <div className="flex flex-row justify-center gap-6 w-full max-w-md mx-auto mt-2">
              <Link
                to="/contact"
                className="bg-solar-orange hover:bg-solar-yellow text-solar-blue px-6 py-2.5 rounded-2xl text-base font-extrabold shadow-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center animate-bounce-slow whitespace-nowrap"
              >
                Get Free Quote
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white hover:bg-white hover:text-solar-blue text-blue px-6 py-2.5 rounded-2xl text-base font-extrabold shadow-bold transition-all duration-300 flex items-center justify-center whitespace-nowrap"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-white py-20 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div key={index} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="text-center group animate-bounce-slow">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-solar-yellow/20 rounded-full mb-6 group-hover:bg-solar-yellow group-hover:text-solar-blue transition-all duration-300 shadow-bold">
                    <Icon className="h-10 w-10 text-solar-blue group-hover:text-solar-orange" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-extrabold text-solar-blue mb-3 drop-shadow-lg">{stat.number}</div>
                  <div className="text-solar-orange font-bold text-lg">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-solar-yellow/10 py-24 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-extrabold text-solar-blue mb-6 drop-shadow-xl">
              Our Solar Solutions
            </h2>
            <p className="text-2xl text-solar-blue/80 max-w-3xl mx-auto font-semibold">
              Comprehensive solar energy services tailored to meet your specific needs, 
              from consultation to installation and maintenance.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="bg-white rounded-3xl shadow-bold overflow-hidden hover:shadow-2xl transition-shadow duration-300 group animate-fade-in-up">
                <div className="h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-extrabold text-solar-blue mb-4">{service.title}</h3>
                  <p className="text-solar-blue/80 mb-6 font-medium">{service.description}</p>
                  <Link
                    to="/services"
                    className="text-solar-orange hover:text-solar-blue font-bold flex items-center transition-colors duration-200"
                  >
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Why Choose AIMBEEZ ENERGIA LLP?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We are committed to providing the highest quality solar solutions 
                with unmatched customer service and support.
              </p>
              <div className="space-y-4">
                {[
                  'Premium Quality Solar Panels & Equipment',
                  'Expert Installation & Engineering Team',
                  '25+ Years Product Warranty',
                  'Complete Government Subsidy Assistance',
                  '24/7 Customer Support & Monitoring',
                  'Competitive Pricing & Flexible Payment Options'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5ca0ec9b809d8e4c67c27b3a/1689606224828-EDLXMQM441RUZQTIBBVS/shutterstock_1780391504.jpg?format=2500w"
                alt="Solar Installation Team"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.location}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Switch to Solar Energy?
          </h2>
          <p className="text-xl mb-8">
            Get a free consultation and quote today. Join thousands of satisfied customers 
            who have made the switch to clean, renewable energy.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 inline-flex items-center"
          >
            Get Your Free Quote Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;