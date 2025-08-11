import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Patel",
      location: "MVP Colony",
      rating: 5,
      text: "Exceptional care and service at SK Clinics. Dr. Loknath Tripathy is incredibly knowledgeable and compassionate. The staff is friendly and the facilities are top-notch. Highly recommended!",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150",
      date: "2 weeks ago"
    },
    {
      name: "Priya Sharma",
      location: "Visakhapatnam",
      rating: 5,
      text: "The 24/7 emergency service saved my father's life. The quick response and professional treatment we received was outstanding. Forever grateful to the entire team at SK Clinics.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      date: "1 month ago"
    },
    {
      name: "Vikram Kumar",
      location: "MVP Colony",
      rating: 4,
      text: "Great diagnostic services with accurate results delivered on time. The lab technicians are skilled and the equipment is modern. Very satisfied with the comprehensive health checkup.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
      date: "3 weeks ago"
    },
    {
      name: "Anita Reddy",
      location: "Visakhapatnam",
      rating: 5,
      text: "SK Clinics provides excellent healthcare services. The doctors are experienced and take time to explain everything clearly. The location is convenient and parking is available.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
      date: "1 week ago"
    },
    {
      name: "Suresh Babu",
      location: "MVP Colony",
      rating: 5,
      text: "Outstanding medical care and customer service. The health packages are comprehensive and reasonably priced. Dr. Tripathy's expertise and caring approach make all the difference.",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150",
      date: "2 months ago"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            What Our <span className="text-blue-600">Patients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from our valued patients who have trusted us with their healthcare needs
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="bg-pink rounded-3xl p-8 md:p-12 shadow-2xl"
            >
              <div className="flex items-center justify-center mb-8">
                <Quote className="text-blue-500 opacity-20" size={60} />
              </div>

              <div className="text-center">
                <div className="flex justify-center items-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={24}
                      className={`${
                        i < testimonials[currentIndex].rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      } transition-colors duration-300`}
                    />
                  ))}
                </div>

                <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-medium">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                  />
                  <div className="text-left">
                    <h4 className="text-xl font-bold text-gray-800">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-600">{testimonials[currentIndex].location}</p>
                    <p className="text-sm text-gray-500">{testimonials[currentIndex].date}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:scale-110 transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:scale-110 transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center items-center space-x-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-blue-400'
              }`}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:scale-105">
            <div className="text-4xl font-bold text-blue-600 mb-2">4.8★</div>
            <div className="text-gray-600 font-medium">Average Rating</div>
            <div className="text-sm text-gray-500 mt-2">Based on 33+ reviews</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:scale-105">
            <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
            <div className="text-gray-600 font-medium">Patient Satisfaction</div>
            <div className="text-sm text-gray-500 mt-2">Highly satisfied patients</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:scale-105">
            <div className="text-4xl font-bold text-purple-600 mb-2">1000+</div>
            <div className="text-gray-600 font-medium">Happy Patients</div>
            <div className="text-sm text-gray-500 mt-2">Served with care</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
