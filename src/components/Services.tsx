import React from 'react';
import p from '../assets/general.png';
import l from '../assets/lab.png';
import e from '../assets/emergency.png';
import s from '../assets/consultation.png';
import pre from '../assets/prevent.png';
import i from '../assets/internal.png';
import inf from '../assets/infec.png';
import h from '../assets/heart.png';

const Services = () => {
  const services = [
    {
      title: "General Check-ups",
      description: "Comprehensive health assessments and routine medical examinations for all ages.",
      image: p
    },
    {
      title: "Lab Diagnostics",
      description: "Advanced laboratory testing with accurate results and quick turnaround times.",
      image: l
    },
    {
      title: "Emergency Care",
      description: "24/7 emergency medical services with rapid response and expert treatment.",
      image: e
    },
    {
      title: "Specialty Consultations",
      description: "Expert consultations across multiple medical specialties with experienced physicians.",
      image: s
    },
    {
      title: "Preventive Care",
      description: "Preventive healthcare services including vaccinations, health screenings, and wellness programs.",
      image: pre
    },
    {
      title: "Internal Medicine",
      description: "Comprehensive care for adult patients with chronic and acute conditions.",
      image: i
    },
    {
      title: "Infectious Disease Treatment",
      description: "Diagnosis and treatment for bacterial, viral, and parasitic infections.",
      image: inf
    },
    {
      title: "Rheumatic Heart Disease",
      description: "Long-term management and monitoring of rheumatic heart conditions.",
      image: h
    }
    // {
    //   title: "Chronic Pain Treatment",
    //   description: "Targeted therapies and interventions to manage persistent pain.",
    //   image: p
    // },
    // {
    //   title: "Gastric Troubles",
    //   description: "Solutions for indigestion, acid reflux, and other gastrointestinal issues.",
    //   image: p
    // }
    // {
    //   title: "Diabetes Management",
    //   description: "Holistic care plans to manage blood sugar levels effectively.",
    //   image: p
    // }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare services delivered with expertise, compassion, and cutting-edge medical technology
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`,
                backgroundImage: `url(${service.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col h-full justify-end bg-black/50 max-w-[300px]">
                <div className="max-w-full">
                  <h3 className="text-xl font-bold text-white mb-2 min-h-[2.5rem]">
                    {service.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                {/* Learn More */}
                <div className="mt-auto opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full hover:bg-white/30">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Need Immediate Medical Attention?
            </h3>
            <p className="text-gray-600 mb-6">
              Our emergency services are available 24/7. Don't hesitate to reach out when you need urgent care.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-gradient-to-r from-red-500 to-pink-400 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105">
                Emergency: Call Now
              </button>
              <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105">
                Schedule Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
