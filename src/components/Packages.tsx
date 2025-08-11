import React from 'react';
import { Check, Download, Star, Heart } from 'lucide-react';

const Packages = () => {
  const packages = [
    {
      name: "Basic Health Checkup",
      price: "₹2,999",
      originalPrice: "₹4,500",
      description: "Essential health screening for general wellness",
      features: [
        "Complete Blood Count (CBC)",
        "Blood Sugar (Fasting & PP)",
        "Lipid Profile",
        "Kidney Function Tests",
        "Liver Function Tests",
        "General Physician Consultation",
        "Health Report & Recommendations"
      ],
      color: "from-blue-500 to-cyan-400",
      popular: false
    },
    {
      name: "Comprehensive Health Package",
      price: "₹5,999",
      originalPrice: "₹8,500",
      description: "Complete health assessment with advanced diagnostics",
      features: [
        "All Basic Package Tests",
        "Thyroid Function Tests",
        "ECG & Chest X-Ray",
        "Vitamin D & B12 Levels",
        "HbA1c (Diabetes Monitoring)",
        "Specialist Consultations",
        "Detailed Health Report",
        "Follow-up Consultation",
        "Diet & Lifestyle Plan"
      ],
      color: "from-purple-500 to-pink-400",
      popular: true
    },
    {
      name: "Executive Health Checkup",
      price: "₹9,999",
      originalPrice: "₹15,000",
      description: "Premium health package for comprehensive wellness",
      features: [
        "All Comprehensive Package Tests",
        "2D Echo Cardiography",
        "Stress Test (TMT)",
        "Ultrasound Abdomen & Pelvis",
        "Tumor Markers Screening",
        "Pulmonary Function Tests",
        "Eye & ENT Examination",
        "Bone Density Test",
        "Nutritionist Consultation",
        "Annual Health Monitoring"
      ],
      color: "from-orange-500 to-yellow-400",
      popular: false
    }
  ];

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Health <span className="text-blue-600">Packages</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully designed health packages that offer comprehensive care 
            at affordable prices with flexible payment options.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up ${
                pkg.popular ? 'ring-4 ring-purple-200 scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute top-6 right-6 bg-gradient-to-r from-purple-500 to-pink-400 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1 animate-pulse">
                  <Star size={16} fill="currentColor" />
                  <span>Most Popular</span>
                </div>
              )}

              {/* Header */}
              <div className={`bg-gradient-to-br ${pkg.color} p-8 text-white relative overflow-hidden`}>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-white/90 mb-6">{pkg.description}</p>
                  
                  <div className="flex items-end space-x-2 mb-4">
                    <span className="text-4xl font-bold">{pkg.price}</span>
                    <span className="text-white/70 line-through text-lg mb-1">{pkg.originalPrice}</span>
                  </div>
                  
                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 inline-block">
                    <span className="text-sm font-medium">
                      Save {Math.round((1 - parseInt(pkg.price.replace('₹', '').replace(',', '')) / parseInt(pkg.originalPrice.replace('₹', '').replace(',', ''))) * 100)}%
                    </span>
                  </div>
                </div>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <Heart className="absolute top-4 right-4 text-white" size={60} />
                  <Heart className="absolute bottom-4 left-4 text-white" size={40} />
                </div>
              </div>

              {/* Features */}
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3 group">
                      <div className={`bg-gradient-to-br ${pkg.color} rounded-full p-1 mt-0.5 group-hover:scale-110 transition-transform duration-300`}>
                        <Check size={12} className="text-white" />
                      </div>
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Action Buttons */}
                <div className="space-y-4">
                  <button className={`w-full bg-gradient-to-r ${pkg.color} text-white py-3 rounded-2xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300`}>
                    Book This Package
                  </button>
                  
                  <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-2xl font-medium hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center space-x-2">
                    <Download size={18} />
                    <span>Download Details</span>
                  </button>
                </div>
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${pkg.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Flexible Payment Options Available
            </h3>
            <p className="text-gray-600 mb-6">
              We offer convenient payment plans and accept all major insurance providers. 
              Contact us to discuss customized packages based on your specific health needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Customize Package
              </button>
              <button className="bg-white text-gray-700 px-8 py-3 rounded-full font-semibold border border-gray-200 hover:border-gray-300 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Talk to Advisor
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;