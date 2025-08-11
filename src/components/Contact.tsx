import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, Calendar } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
  };

  const services = [
    'General Consultation',
    'Health Checkup',
    'Lab Diagnostics',
    'Emergency Care',
    'Cardiology',
    'Neurology',
    'Ophthalmology',
    'Other'
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to take charge of your health? Contact us today to schedule an appointment 
            or learn more about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-slide-left">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-400 rounded-3xl p-8 text-white mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 rounded-full p-3">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-blue-100">
                      1-68-20, Ground Floor, MVP Sector 2,<br />
                      Beside Tirumala Vijaya Hospital, Visakhapatnam
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 rounded-full p-3">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-blue-100">Emergency: +91 98765 43210</p>
                    <p className="text-blue-100">Appointments: +91 98765 43211</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 rounded-full p-3">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-blue-100">info@skclinics.com</p>
                    {/* <p className="text-blue-100">appointments@skclinics.com</p> */}
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 rounded-full p-3">
                    <Clock size={20} className="text-cyan-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-white">Hours</h4>
                    <div className="text-blue-100 text-sm leading-relaxed space-y-1">
                      <p>
                        <span className="font-medium text-cyan-200">Mon - Sat</span><br />
                        09:00 AM - 02:00 PM<br />
                        05:00 PM - 10:00 PM
                      </p>
                      <p className="mt-2">
                        <span className="font-medium text-cyan-200">Sun</span><br />
                        12:00 AM – 10:00 PM
                      </p>
                    </div>
                    <p className="text-blue-200 text-xs mt-2">Emergency services available</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 rounded-2xl p-4 flex items-center justify-center space-x-2">
                    <MessageCircle size={20} />
                    <span>WhatsApp</span>
                  </button>
                  <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 rounded-2xl p-4 flex items-center justify-center space-x-2">
                    <Phone size={20} />
                    <span>Call Now</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-3xl overflow-hidden shadow-lg h-64">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.012616521903!2d83.33249037377944!3d17.74404469243543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39439749db8cdb%3A0xefb90afed120fdaa!2sS%20K%20Clinics%20and%20diagnostics!5e0!3m2!1sen!2sin!4v1754647032809!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="SK Clinics and Diagnostics Location"
              ></iframe>
            </div>
          </div>

          <div className="animate-slide-right">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full p-3">
                  <Calendar className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Book Appointment</h3>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Required *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all duration-300 resize-none"
                    placeholder="Tell us about your health concerns or preferred appointment time"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>

              <div className="mt-6 p-4 bg-blue-50 rounded-2xl">
                <p className="text-sm text-blue-600 text-center">
                  <strong>Emergency?</strong> Call us immediately at +91 98765 43210 for immediate assistance.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-12 border-t border-gray-200 animate-fade-in-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">SK</span>
                </div>
                <h4 className="text-xl font-bold text-gray-800">SK Clinics & Diagnostics</h4>
              </div>
              <p className="text-gray-600">
                Your trusted healthcare partner, providing quality medical services 
                with compassion and excellence.
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800 mb-4">Quick Links</h5>
              <div className="space-y-2">
                {['Home', 'Services', 'Doctors', 'Packages', 'Contact'].map((link) => (
                  <button
                    key={link}
                    className="block text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800 mb-4">Services</h5>
              <div className="space-y-2">
                {['General Medicine', 'Lab Diagnostics', 'Emergency Care', 'Health Checkups', 'Specialist Care'].map((service) => (
                  <p key={service} className="text-gray-600">
                    {service}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600">
              © 2024 SK Clinics & Diagnostics. All rights reserved. | 
              <span className="text-blue-600"> Your Health, Our Priority</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
