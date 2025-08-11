import React from 'react';
import { Stethoscope, Activity, Clock, Users, FlaskConical, Heart, Brain, Eye,HeartPulse,   Pill, Droplets, Thermometer, Syringe,} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "General Check-ups",
      description: "Comprehensive health assessments and routine medical examinations for all ages.",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: FlaskConical,
      title: "Lab Diagnostics",
      description: "Advanced laboratory testing with accurate results and quick turnaround times.",
      color: "from-green-500 to-emerald-400"
    },
    {
      icon: Activity,
      title: "Emergency Care",
      description: "24/7 emergency medical services with rapid response and expert treatment.",
      color: "from-red-500 to-pink-400"
    },
    {
      icon: Users,
      title: "Specialty Consultations",
      description: "Expert consultations across multiple medical specialties with experienced physicians.",
      color: "from-pink-500 to-rose-400"
    },
    {
      icon: Clock,
      title: "Preventive Care",
      description: "Preventive healthcare services including vaccinations, health screenings, and wellness programs.",
      color: "from-indigo-500 to-blue-400"
    },
    {
      icon: Stethoscope,
      title: "Internal Medicine",
      description: "Comprehensive care for adult patients with chronic and acute conditions.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Thermometer,
      title: "Infectious Disease Treatment",
      description: "Diagnosis and treatment for bacterial, viral, and parasitic infections.",
      color: "from-green-500 to-emerald-400"
    },
    {
      icon: HeartPulse,
      title: "Rheumatic Heart Disease",
      description: "Long-term management and monitoring of rheumatic heart conditions.",
      color: "from-red-500 to-pink-400"
    },
    {
      icon: Syringe,
      title: "Chronic Pain Treatment",
      description: "Targeted therapies and interventions to manage persistent pain.",
      color: "from-purple-600 to-fuchsia-400"
    },
    {
      icon: Pill,
      title: "Gastric Troubles",
      description: "Solutions for indigestion, acid reflux, and other gastrointestinal issues.",
      color: "from-yellow-500 to-amber-400"
    },
    {
      icon: Droplets,
      title: "Diabetes Management",
      description: "Holistic care plans to manage blood sugar levels effectively.",
      color: "from-cyan-500 to-teal-400"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare services delivered with expertise, compassion, and cutting-edge medical technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up border border-gray-100 hover:border-transparent"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-all duration-500`} />
              
              {/* Content */}
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all duration-500`}>
                  <service.icon 
                    size={28} 
                    className="text-white group-hover:text-white transition-colors duration-500" 
                  />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-white transition-colors duration-500">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-500 leading-relaxed">
                  {service.description}
                </p>

                {/* Learn More Button */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full hover:bg-white/30 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
              <button className="bg-gradient-to-r from-red-500 to-pink-400 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Emergency: Call Now
              </button>
              <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
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