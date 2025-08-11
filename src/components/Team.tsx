import React from 'react';
import { Star, Award, GraduationCap, Clock } from 'lucide-react';
import d from '../assets/doc.png';
const Team = () => {
  const doctors = [
    {
      name: "Dr. Loknath Tripathy",
      specialty: "General Physician",
      rating: 5.0,
      experience: "15+ Years",
      education: "MBBS, MD Internal Medicine",
      image: d,
      description: "Experienced general physician specializing in comprehensive healthcare and preventive medicine.",
      achievements: ["Board Certified", "Award Winner", "Research Publications"]
    },
    {
      name: "Dr. Priya Sharma",
      specialty: "Cardiologist",
      rating: 4.9,
      experience: "12+ Years",
      education: "MBBS, DM Cardiology",
      image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Expert cardiologist with extensive experience in heart disease treatment and prevention.",
      achievements: ["Heart Specialist", "Research Expert", "Community Leader"]
    },
    {
      name: "Dr. Rajesh Kumar",
      specialty: "Neurologist",
      rating: 4.8,
      experience: "10+ Years",
      education: "MBBS, DM Neurology",
      image: "https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Specialized neurologist focused on brain and nervous system disorders with compassionate care.",
      achievements: ["Neuro Specialist", "Published Author", "Medical Innovator"]
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Meet Our <span className="text-blue-600">Expert Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our highly qualified medical professionals are dedicated to providing exceptional healthcare 
            with expertise, compassion, and personalized attention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Doctor Image */}
              <div className="relative overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="text-yellow-500" size={16} fill="currentColor" />
                  <span className="text-sm font-semibold text-gray-800">{doctor.rating}</span>
                </div>
              </div>

              {/* Doctor Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {doctor.name}
                </h3>
                
                <div className="flex items-center space-x-2 mb-3">
                  <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {doctor.specialty}
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {doctor.description}
                </p>

                {/* Doctor Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="text-blue-500" size={18} />
                    <span className="text-sm text-gray-700">{doctor.education}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="text-green-500" size={18} />
                    <span className="text-sm text-gray-700">{doctor.experience} Experience</span>
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">Achievements:</h4>
                  <div className="flex flex-wrap gap-2">
                    {doctor.achievements.map((achievement, i) => (
                      <span
                        key={i}
                        className="bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 px-2 py-1 rounded-lg text-xs font-medium"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-2 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                    Book Appointment
                  </button>
                  <button className="bg-gray-100 text-gray-700 p-2 rounded-full hover:bg-gray-200 transition-colors duration-300">
                    <Award size={18} />
                  </button>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-in-up">
          {[
            { number: "15+", label: "Expert Doctors" },
            { number: "5000+", label: "Patients Served" },
            { number: "24/7", label: "Emergency Care" },
            { number: "4.8★", label: "Average Rating" }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;