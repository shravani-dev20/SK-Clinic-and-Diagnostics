import React from 'react';
import { Award, Users, Heart, Shield } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About <span className="text-blue-600">SK Clinics</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated to providing exceptional healthcare services to the Visakhapatnam 
            community with compassion, expertise, and state-of-the-art medical technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-left">
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Commitment to Excellence</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <Heart className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Compassionate Care</h4>
                    <p className="text-gray-600">We treat every patient with dignity, respect, and personalized attention to ensure the best possible outcomes.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-full p-3">
                    <Award className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Expert Medical Team</h4>
                    <p className="text-gray-600">Our highly qualified doctors and medical staff bring years of experience and continuous learning to provide top-tier healthcare.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 rounded-full p-3">
                    <Shield className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Advanced Technology</h4>
                    <p className="text-gray-600">State-of-the-art diagnostic equipment and modern treatment facilities ensure accurate diagnoses and effective treatments.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-100 rounded-full p-3">
                    <Users className="text-cyan-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Community Focus</h4>
                    <p className="text-gray-600">Proudly serving MVP Colony and surrounding areas with accessible, quality healthcare for all community members.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats & Features */}
          <div className="animate-slide-right">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold mb-2">4.8★</div>
                <div className="text-blue-100">Patient Rating</div>
                <div className="text-sm text-blue-200 mt-1">(33 Reviews)</div>
              </div>
              
              <div className="bg-gradient-to-br from-green-500 to-emerald-400 rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-green-100">Emergency Care</div>
                <div className="text-sm text-green-200 mt-1">Always Available</div>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-pink-400 rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold mb-2">10+</div>
                <div className="text-purple-100">Years Experience</div>
                <div className="text-sm text-purple-200 mt-1">Trusted Service</div>
              </div>

              <div className="bg-gradient-to-br from-orange-500 to-yellow-400 rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl font-bold mb-2">1000+</div>
                <div className="text-orange-100">Happy Patients</div>
                <div className="text-sm text-orange-200 mt-1">Served with Care</div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h4 className="text-xl font-bold text-gray-800 mb-4">Prime Location</h4>
              <p className="text-gray-600 mb-4">
                Conveniently located in MVP Colony, Visakhapatnam, beside Tirumala Vijaya Hospital. 
                Our strategic location ensures easy accessibility for patients from all parts of the city.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-4">
                <p className="text-sm text-gray-700">
                  <strong>Address:</strong> MVP Colony, Visakhapatnam<br/>
                  <strong>Landmark:</strong> Beside Tirumala Vijaya Hospital
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;