import * as React from 'react';
import { Users, Target, Award, Lightbulb, Heart, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Continuously advancing solar technology and solutions for better efficiency and performance.'
    },
    {
      icon: Heart,
      title: 'Commitment',
      description: 'Dedicated to providing exceptional service and long-term customer relationships.'
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'Contributing to a cleaner environment through renewable energy adoption.'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Using only premium components and maintaining the highest installation standards.'
    }
  ];

  const team = [
    {
      name: 'Kamal Jain',
      position: 'Chief Executive Officer',
      image: 'https://kcsonsgroup.com/assets/img/gallery/achive1.png',
      experience: '20+ years in renewable energy sector'
    },
    {
      name: 'Pritam Dutta',
      position: 'Chief Technology Officer',
      image: 'https://miro.medium.com/v2/resize:fit:2000/1*rupxSxU5pKa_HDZ7zYGdqg.jpeg',
      experience: '15+ years in solar engineering'
    },
    {
      name: 'Pankaj Ray',
      position: 'Head of Operations',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQHilyp8qjJjVA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710479884831?e=1756944000&v=beta&t=dM1Z9bvf5ROBzGixOrLUPLgVd_Fky8pIC7iJy4115eo',
      experience: '12+ years in project management'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative bg-gradient-to-br from-blue-900 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              About AIMBEEZ ENERGIA LLP
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              Leading India towards a sustainable energy future with innovative solar solutions 
              and unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Company Story */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Founded in 2009, AIMBEEZ ENERGIA LLP began with a simple yet powerful vision: 
                  to make clean, renewable energy accessible to every Indian household and business. 
                  What started as a small team of passionate engineers has grown into one of India's 
                  most trusted solar energy companies.
                </p>
                <p>
                  Over the years, we have successfully installed over 50MW of solar capacity across 
                  residential, commercial, and industrial sectors. Our commitment to quality, 
                  innovation, and customer satisfaction has earned us the trust of over 5,000 
                  satisfied customers nationwide.
                </p>
                <p>
                  Today, we continue to lead the solar revolution in India, helping families and 
                  businesses reduce their carbon footprint while saving significantly on electricity costs.
                </p>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <img
                src="https://green.org/wp-content/uploads/2024/01/Solar-Energy-Success-Stories-in-Developing.jpg"
                alt="Solar installation"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <Target className="h-12 w-12 text-blue-600 mr-4" />
                <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To accelerate India's transition to renewable energy by providing world-class 
                solar solutions that are reliable, affordable, and accessible to all. We strive 
                to create a sustainable future while empowering our customers with energy independence.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <Globe className="h-12 w-12 text-green-600 mr-4" />
                <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be India's most trusted and innovative solar energy company, leading the way 
                towards a cleaner, greener future. We envision a world where every home and 
                business is powered by clean, renewable solar energy.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Values */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                    <Icon className="h-10 w-10 text-blue-600 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Leadership Team */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600">
              Meet the experienced professionals driving our vision forward
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Achievements */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-xl text-blue-200">
              Recognition and milestones that make us proud
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">ISO 9001:2015</h3>
              <p className="text-blue-200">Quality Management Certified</p>
            </div>
            <div className="text-center">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">5000+</h3>
              <p className="text-blue-200">Satisfied Customers</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">50MW+</h3>
              <p className="text-blue-200">Solar Capacity Installed</p>
            </div>
            <div className="text-center">
              <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">15+</h3>
              <p className="text-blue-200">States Covered</p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;