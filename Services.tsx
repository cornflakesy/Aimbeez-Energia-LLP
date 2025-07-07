import React from 'react';
import { Home, Building2, Settings, Wrench, Calculator, HeadphonesIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Solar Solutions',
      description: 'Complete solar power systems for homes with premium panels, inverters, and battery storage options.',
      features: [
        'Custom system design for your home',
        'High-efficiency solar panels',
        'Smart inverters with monitoring',
        'Battery backup options',
        'Net metering setup',
        '25-year warranty'
      ],
      image: 'https://images.pexels.com/photos/8853525/pexels-photo-8853525.jpeg?_gl=1*u88obr*_ga*MTUxMzM2Mzc1My4xNzUxNjkzODU1*_ga_8JE65Q40S6*czE3NTE2OTM4NTQkbzEkZzEkdDE3NTE2OTQ3MzkkajckbDAkaDA'
    },
    {
      icon: Building2,
      title: 'Commercial & Industrial Solar',
      description: 'Large-scale solar installations for businesses, factories, and commercial establishments.',
      features: [
        'Mega-watt scale installations',
        'Industrial-grade equipment',
        'Power purchase agreements',
        'Energy management systems',
        'Load forecasting & optimization',
        'Comprehensive maintenance'
      ],
      image: 'https://images.unsplash.com/photo-1542336391-ae2936d8efe4?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      icon: Settings,
      title: 'System Design & Engineering',
      description: 'Professional solar system design and engineering services tailored to your specific requirements.',
      features: [
        'Site assessment & feasibility study',
        'Custom system design',
        'Structural engineering',
        'Electrical design & planning',
        'Permit & documentation',
        '3D modeling & simulation'
      ],
      image: 'https://images.unsplash.com/photo-1564151436289-8fc3f8ea6326?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      icon: Wrench,
      title: 'Installation & Commissioning',
      description: 'Expert installation services by certified technicians ensuring optimal system performance.',
      features: [
        'Certified installation team',
        'Quality installation standards',
        'Safety protocols compliance',
        'System testing & commissioning',
        'Performance verification',
        'Installation warranty'
      ],
      image: 'https://media.licdn.com/dms/image/v2/D4D12AQHdPf_Uy_LNsQ/article-cover_image-shrink_720_1280/B4DZYn5HHjG8AI-/0/1744426005884?e=1756944000&v=beta&t=fzsa7YW28r1N27tRmnF4UJjACht6-l5sqAD2cDmxDEs'
    },
    {
      icon: HeadphonesIcon,
      title: 'Maintenance & Support',
      description: '24/7 monitoring and comprehensive maintenance services to ensure maximum system efficiency.',
      features: [
        '24/7 system monitoring',
        'Preventive maintenance',
        'Performance optimization',
        'Rapid fault detection',
        'Remote diagnostics',
        'Annual health checkups'
      ],
      image: 'https://in2home.co.uk/wp-content/uploads/2024/12/featured-image-clean-solar.jpeg-1-.jpg'
    },
    {
      icon: Calculator,
      title: 'Solar Financing & Subsidies',
      description: 'Complete assistance with solar financing options and government subsidy applications.',
      features: [
        'Government subsidy assistance',
        'Flexible financing options',
        'Loan processing support',
        'Tax benefit guidance',
        'ROI calculations',
        'Payment plan customization'
      ],
      image: 'https://img.saurenergy.com/2018/08/prime-minister-narendra.jpg'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Site Assessment',
      description: 'Our experts visit your location to assess solar potential and energy requirements.',
      image: 'https://images.squarespace-cdn.com/content/v1/5ca0ec9b809d8e4c67c27b3a/1689606224828-EDLXMQM441RUZQTIBBVS/shutterstock_1780391504.jpg?format=2500w'
    },
    {
      step: '02',
      title: 'Custom Design',
      description: 'We create a tailored solar system design optimized for your specific needs.',
      image: 'https://www.residentialsolarpanels.org/wp-content/uploads/2024/12/smart-home-solar-system-design.jpeg'
    },
    {
      step: '03',
      title: 'Proposal & Approval',
      description: 'Detailed proposal with costs, financing options, and government approvals.',
      image: 'https://fundiconnect.co.za/wp-content/uploads/2018/10/28.jpg'
    },
    {
      step: '04',
      title: 'Installation',
      description: 'Professional installation by certified technicians following safety standards.',
      image: 'https://en-media.thebetterindia.com/uploads/2024/06/solar-1-1717589928.jpg'
    },
    {
      step: '05',
      title: 'Commissioning',
      description: 'System testing, grid connection, and performance verification.',
      image: 'https://media.licdn.com/dms/image/v2/D4E12AQEqDpvMgLGIJQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1712056824292?e=2147483647&v=beta&t=W2LlnwQNDtk5TCR7nz1wqj89S_Nh4zhpC1PLHuQb8Z0'
    },
    {
      step: '06',
      title: 'Ongoing Support',
      description: '24/7 monitoring, maintenance, and customer support for optimal performance.',
      image: 'https://knightsenergy.co.ke/wp-content/uploads/2020/12/KNIGHTS-ENERGY-OM-OPERATION-MAINTENANCE-11.jpg'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative bg-gradient-to-br from-blue-900 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Our Solar Services
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive solar energy services from consultation to installation 
              and long-term maintenance support.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Solar Solutions
            </h2>
            <p className="text-xl text-gray-600">
              End-to-end services to power your transition to clean energy
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div key={index} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-8">
                      <div className="flex items-center mb-4">
                        <Icon className="h-8 w-8 text-blue-600 mr-3" />
                        <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Solar Installation Process
            </h2>
            <p className="text-xl text-gray-600">
              A streamlined 6-step process to get your solar system up and running
            </p>
          </div>
          <div className="space-y-8">
            {process.map((step, index) => (
              <motion.div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="lg:w-1/2 mb-8 lg:mb-0">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="rounded-2xl shadow-lg"
                  />
                </div>
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'}`}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="flex items-center mb-6">
                      <div className="bg-blue-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mr-4">
                        {step.step}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8">
            Contact us today for a free consultation and customized solar solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-solar-orange hover:bg-solar-yellow text-solar-blue px-6 py-2.5 rounded-2xl text-base font-extrabold shadow-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center animate-bounce-slow whitespace-nowrap"
            >
              Get Free Consultation
            </a>
            <a
              href="tel:+919876543210"
              className="border-2 border-white hover:bg-white hover:text-solar-blue text-blue px-6 py-2.5 rounded-2xl text-base font-extrabold shadow-bold transition-all duration-300 flex items-center justify-center whitespace-nowrap"
            >
              Call Now: +91 98765 43210
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Services;