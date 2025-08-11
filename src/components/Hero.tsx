import { useEffect, useState } from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import p from '../assets/image1.png';
import heartVideo from '../assets/heart.mp4';

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
        className="absolute inset-0 bg-cover bg-center opacity-130 md:opacity-120"
        style={{
          transform: `translateY(${scrollY * 0.4}px)`,
          backgroundImage: `url(${p})`,
        }}
      />

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-90 md:opacity-80 pointer-events-none"
        src={heartVideo}
        autoPlay
        loop
        muted
        playsInline
        poster={p}
        aria-hidden="true"
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

        {/* Social Media Links right below heading */}
        <div className="flex justify-start space-x-8 mb-12">
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500 transition-colors duration-300 text-3xl"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-600 transition-colors duration-300 text-3xl"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-sky-400 transition-colors duration-300 text-3xl"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-0 animate-slide-up">
          <button
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:from-cyan-300 hover:to-blue-400"
          >
            Book Appointment Now
          </button>
          <button
            onClick={() =>
              document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transform hover:scale-105 transition-all duration-300 border"
          >
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
