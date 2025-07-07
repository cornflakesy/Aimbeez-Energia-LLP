import React from 'react';
import { Battery, Zap, Shield, Star, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Products = () => {
  const solarPanels = [
    {
      name: 'Premium Monocrystalline Panels',
      efficiency: '22.8%',
      power: '540W - 665W',
      warranty: '25 Years',
      features: ['High efficiency', 'Low temperature coefficient', 'Excellent low light performance', 'Anti-reflective coating'],
      image: 'https://5.imimg.com/data5/CM/VU/MY-8218797/monocrystalline-solar-panel-500x500.jpg',
      price: 'Starting from ₹28/Wp'
    },
    {
      name: 'Polycrystalline Solar Panels',
      efficiency: '19.5%',
      power: '320W - 450W',
      warranty: '25 Years',
      features: ['Cost-effective solution', 'Reliable performance', 'Weather resistant', 'Easy installation'],
      image: 'https://greenonenergy.in/wp-content/uploads/2022/10/165watt.jpg',
      price: 'Starting from ₹22/Wp'
    },
    {
      name: 'Bifacial Solar Panels',
      efficiency: '21.2%',
      power: '450W - 550W',
      warranty: '30 Years',
      features: ['Dual-sided power generation', 'Up to 30% more energy', 'Superior durability', 'Transparent backsheet'],
      image: 'https://amoes.in/wp-content/uploads/2021/04/ezgif.com-gif-maker-3.png',
      price: 'Starting from ₹32/Wp'
    }
  ];

  const inverters = [
    {
      name: 'String Inverters',
      type: 'Grid-Tie',
      capacity: '5kW - 100kW',
      efficiency: '98.5%',
      features: ['MPPT technology', 'WiFi monitoring', 'Weather resistant', 'German engineering'],
      image: 'https://image.made-in-china.com/202f0j00rJKhQEeaOfuZ/Sungrow-Sg8-0-9-0-10RS-Multi-MPPT-String-Inverter-System-on-Grid-12kw-13kw-15kw-in-Stock.webp',
      warranty: '10 Years'
    },
    {
      name: 'Hybrid Inverters',
      type: 'Grid-Tie + Battery',
      capacity: '3kW - 50kW',
      efficiency: '97.8%',
      features: ['Battery backup', 'Smart grid management', 'Mobile app control', 'Load balancing'],
      image: 'https://festonsev.com/wp-content/uploads/2024/03/Three-Phase-10kW-20kW-1-1-1024x575.png',
      warranty: '7 Years'
    },
    {
      name: 'Micro Inverters',
      type: 'Panel-Level',
      capacity: '300W - 500W',
      efficiency: '96.5%',
      features: ['Individual panel optimization', 'Rapid shutdown', 'Long lifespan', 'Easy expansion'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZlGtoZC6HZ3h-NR8jvUE29ABHB8o8euLnpA&s',
      warranty: '25 Years'
    }
  ];

  const batteries = [
    {
      name: 'Lithium-Ion Batteries',
      capacity: '5kWh - 100kWh',
      lifecycle: '6000+ cycles',
      efficiency: '95%',
      features: ['Fast charging', 'Long lifespan', 'Compact design', 'Smart BMS'],
      image: 'https://atlaspot.in/home/public/uploads/all/sR8phAE3KHQuwRzf6fU2BI6ZoBkx8z0KiOXYdpgJ.webp',
      warranty: '10 Years'
    },
    {
      name: 'Tubular Batteries',
      capacity: '100Ah - 500Ah',
      lifecycle: '1500+ cycles',
      efficiency: '85%',
      features: ['Deep discharge capability', 'Low maintenance', 'Cost-effective', 'High reliability'],
      image: 'https://4.imimg.com/data4/MG/AO/MY-13049185/150ah-it-tubular-battery.jpg',
      warranty: '5 Years'
    },
    {
      name: 'Solar Gel Batteries',
      capacity: '50Ah - 300Ah',
      lifecycle: '2000+ cycles',
      efficiency: '90%',
      features: ['Maintenance-free', 'Temperature stable', 'Spill-proof', 'Long service life'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu6vsTf5TcmleLG3qDVJJQhfR39IK4rpozxA&s',
      warranty: '7 Years'
    }
  ];

  const accessories = [
    {
      name: 'Solar Mounting Structures',
      description: 'Galvanized steel mounting systems for rooftop and ground installations',
      features: ['Corrosion resistant', 'Easy installation', 'Wind & snow load rated', 'Modular design']
    },
    {
      name: 'DC & AC Cables',
      description: 'High-quality solar cables designed for outdoor installations',
      features: ['UV resistant', 'Temperature rated', 'Fire retardant', 'Long service life']
    },
    {
      name: 'Monitoring Systems',
      description: 'Advanced monitoring solutions for real-time system performance tracking',
      features: ['Mobile app', 'Web portal', 'Performance analytics', 'Fault detection']
    },
    {
      name: 'Safety Equipment',
      description: 'Complete safety solutions including fuses, breakers, and surge protection',
      features: ['Circuit protection', 'Surge protection', 'Safety switches', 'Compliance certified']
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative bg-gradient-to-br from-blue-900 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Solar Products & Components
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              Premium quality solar panels, inverters, batteries, and accessories 
              from world's leading manufacturers.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Solar Panels Section */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Solar Panels</h2>
            <p className="text-xl text-gray-600">High-efficiency solar panels for maximum energy generation</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {solarPanels.map((panel, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src={panel.image}
                    alt={panel.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{panel.name}</h3>
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-gray-500">Efficiency:</span>
                      <div className="font-semibold text-green-600">{panel.efficiency}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Power:</span>
                      <div className="font-semibold">{panel.power}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Warranty:</span>
                      <div className="font-semibold">{panel.warranty}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Price:</span>
                      <div className="font-semibold text-blue-600">{panel.price}</div>
                    </div>
                  </div>
                  <ul className="space-y-1 mb-6">
                    {panel.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600 text-sm">
                        <Star className="h-3 w-3 text-yellow-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Inverters Section */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Solar Inverters</h2>
            <p className="text-xl text-gray-600">Advanced inverters for optimal power conversion and grid management</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {inverters.map((inverter, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden rounded-t-2xl">
                  <img
                    src={inverter.image}
                    alt={inverter.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Zap className="h-6 w-6 text-yellow-500 mr-2" />
                    <h3 className="text-xl font-bold text-gray-900">{inverter.name}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-gray-500">Type:</span>
                      <div className="font-semibold">{inverter.type}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Capacity:</span>
                      <div className="font-semibold">{inverter.capacity}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Efficiency:</span>
                      <div className="font-semibold text-green-600">{inverter.efficiency}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Warranty:</span>
                      <div className="font-semibold">{inverter.warranty}</div>
                    </div>
                  </div>
                  <ul className="space-y-1 mb-6">
                    {inverter.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600 text-sm">
                        <ChevronRight className="h-3 w-3 text-blue-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Batteries Section */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Solar Batteries</h2>
            <p className="text-xl text-gray-600">Energy storage solutions for backup power and grid independence</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {batteries.map((battery, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden rounded-t-2xl">
                  <img
                    src={battery.image}
                    alt={battery.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Battery className="h-6 w-6 text-green-500 mr-2" />
                    <h3 className="text-xl font-bold text-gray-900">{battery.name}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-gray-500">Capacity:</span>
                      <div className="font-semibold">{battery.capacity}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Lifecycle:</span>
                      <div className="font-semibold">{battery.lifecycle}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Efficiency:</span>
                      <div className="font-semibold text-green-600">{battery.efficiency}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Warranty:</span>
                      <div className="font-semibold">{battery.warranty}</div>
                    </div>
                  </div>
                  <ul className="space-y-1 mb-6">
                    {battery.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600 text-sm">
                        <Shield className="h-3 w-3 text-blue-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors duration-300">
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Accessories Section */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Solar Accessories</h2>
            <p className="text-xl text-gray-600">Complete range of accessories for professional solar installations</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {accessories.map((accessory, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{accessory.name}</h3>
                <p className="text-gray-600 mb-6">{accessory.description}</p>
                <ul className="space-y-2">
                  {accessory.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Need Help Choosing the Right Products?
          </h2>
          <p className="text-xl mb-8">
            Our experts will help you select the perfect solar components for your specific requirements and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Get Product Consultation
            </a>
            <a
              href="/contact"
              className="border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Request Quote
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Products;