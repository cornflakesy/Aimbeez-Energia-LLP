import * as React from 'react';
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const offices = [
    {
      city: 'Guwahati (Head Office)',
      address: 'PP Square, 3rd Floor, G.S Road, Guwahati, Assam 781001',
      phone: '+91 99542 01437',
      email: 'info@aimbeezenergia.com'
    }
  ];

  const faqs = [
    {
      question: 'How much can I save with solar panels?',
      answer: 'Most customers save 70-90% on their electricity bills. The exact savings depend on your energy consumption, roof size, and local electricity rates.'
    },
    {
      question: 'What is the warranty on solar panels?',
      answer: 'We provide 25-year performance warranty on solar panels and 5-10 year warranty on inverters and other components.'
    },
    {
      question: 'How long does installation take?',
      answer: 'Residential installations typically take 1-3 days, while commercial projects may take 1-4 weeks depending on the system size.'
    },
    {
      question: 'Do you help with government subsidies?',
      answer: 'Yes, we provide complete assistance with government subsidy applications and help you maximize available incentives.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative bg-gradient-to-br from-blue-900 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              Ready to make the switch to solar? Get in touch with our experts 
              for a free consultation and customized quote.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Contact Form & Info */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get Your Free Solar Quote</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Required
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        <option value="residential">Residential Solar</option>
                        <option value="commercial">Commercial Solar</option>
                        <option value="maintenance">Maintenance & Support</option>
                        <option value="consultation">Consultation</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your solar requirements..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center text-lg font-semibold"
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="h-5 w-5 mr-2" />
                        Quote Sent Successfully!
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Send Quote Request
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-12 lg:mt-0">
              <div className="bg-blue-900 text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-blue-300 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Call Us</h4>
                      <p className="text-blue-200">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-blue-300 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Email Us</h4>
                      <p className="text-blue-200">info@aimbeezenergia.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-300 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Visit Us</h4>
                      <p className="text-blue-200">PP Square, 3rd Floor, G.S Road, Guwahati</p>
                      <p className="text-blue-200">Assam 781001</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-blue-300 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Business Hours</h4>
                      <p className="text-blue-200">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                      <p className="text-blue-200">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-green-50 rounded-2xl p-6 mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Free consultation & quote</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">24/7 customer support</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">25-year warranty</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Government subsidy assistance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Our Location Header and Description */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Location</h2>
        <p className="text-lg text-gray-600">
          Visit our head office or reach out to us for any solar energy queries.
        </p>
      </div>

      {/* Office Location (Centered) */}
      <div className="mt-12 flex justify-center">
        <div className="bg-blue-50 rounded-2xl p-12 shadow-md flex flex-col items-center max-w-xl w-full">
          <div className="flex items-center mb-4">
            <MapPin className="h-6 w-6 text-blue-600 mr-2" />
            <span className="text-lg font-bold text-blue-900">{offices[0].city}</span>
          </div>
          <div className="text-blue-800 mb-2 font-medium text-center">{offices[0].address}</div>
          <div className="flex items-center text-blue-700 mb-1 justify-center">
            <Phone className="h-5 w-5 mr-2" />
            <span>{offices[0].phone}</span>
          </div>
          <div className="flex items-center text-blue-700 justify-center">
            <Mail className="h-5 w-5 mr-2" />
            <span>{offices[0].email}</span>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="flex justify-center mt-8">
        <iframe
          title="AIMBEEZ ENERGIA LLP Guwahati Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114857.9649347596!2d91.6164383!3d26.2785506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a59e9787aaf8b%3A0x4ae0125c662f9605!2sC3%203rd%20FLOOR%2C%20K.C.%20%26%20SONS%2C%20PANCHAM%20TOWER%2C%20GS%20Rd%2C%20South%20Sarania%2C%20Lachit%20Nagar%2C%20Guwahati%2C%20Assam%20781007!5e0!3m2!1sen!2sin!4v1689606224828!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          className="rounded-2xl shadow-lg border-2 border-blue-200 w-full max-w-4xl h-[400px]"
          style={{ border: 0 }}
        ></iframe>
      </div>

      {/* FAQ Section */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions about solar energy</p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;