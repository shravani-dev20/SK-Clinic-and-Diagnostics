import React, { useEffect, useState } from 'react';
import { Calendar, PhoneCall, ChevronRight } from 'lucide-react';
import p from '../assets/image1.png'; // ✅ make sure 'image.png' is in 'src/assets'

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-950 via-blue-800 to-cyan-800"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 md:opacity-30"
        style={{
          transform: `translateY(${scrollY * 0.4}px)`,
          backgroundImage: `url(${p})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-900/70 to-cyan-800/60" />

      <div className="relative z-10 container mx-auto px-6 py-32 text-white">
        {/* Tagline */}
        <p className="uppercase tracking-widest text-cyan-200 mb-4 text-sm md:text-base font-medium animate-fade-in mt-10">
          Healthcare Clinic Partnership Organizations
        </p>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-3xl mb-6 animate-slide-up">
          Our expertise at <br className="hidden md:block" /> your service
        </h1>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-6xl animate-fade-in-up">
          {/* Service Providers */}
          {/* <div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl p-6 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
            <div className="flex items-center space-x-3 text-lg font-semibold text-white">
              <PhoneCall className="text-cyan-300" size={22} />
              <span>Our Service Providers</span>
            </div>
            <ChevronRight className="mt-6 text-cyan-200" />
          </div> */}

          {/* Appointment */}
          {/* <div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl p-6 hover:scale-[1.02] hover:shadow-xl transition-all duration-300">
            <div className="flex items-center space-x-3 text-lg font-semibold text-white">
              <Calendar className="text-cyan-300" size={22} />
              <span>Book an Appointment</span>
            </div>
            <ChevronRight className="mt-6 text-cyan-200" />
          </div> */}

          {/* Emergency */}
          {/* <div className="bg-gradient-to-br from-green-500 to-teal-400 text-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all">
            <div className="text-lg font-bold mb-1">Have an Emergency?</div>
            <div className="text-sm uppercase tracking-wide">EMERGENCY LINE</div>
            <div className="text-3xl font-extrabold tracking-wide mt-2">1-800-900</div>
          </div>
        */}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-16 animate-slide-up">
          <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:from-cyan-300 hover:to-blue-400">
            Book Appointment Now
          </button>
          <button className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transform hover:scale-105 transition-all duration-300 border border-white/30">
            Meet Our Doctors
          </button>
        </div>

        {/* Floating Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto animate-fade-in-up">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-blue-200">Emergency Care</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl font-bold text-white mb-2">5.0★</div>
            <div className="text-blue-200">Dr. Loknath Tripathy</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
            <div className="text-3xl font-bold text-white mb-2">10+</div>
            <div className="text-blue-200">Years of Service</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
