
import React, { useState } from 'react';
import { Brain, Wifi, Activity, Cpu, Zap, Shield, Smartphone, Heart } from 'lucide-react';

const TechnologySection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "EMG Neural Control",
      subtitle: "Intuitive Mind-to-Movement",
      description: "Advanced electromyography sensors detect muscle signals, translating thoughts into precise prosthetic movements with 99.2% accuracy.",
      specs: ["16-channel EMG sensors", "Real-time signal processing", "Adaptive learning algorithms", "Gesture recognition"],
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "5G Connectivity",
      subtitle: "Always Connected",
      description: "Ultra-low latency 5G integration enables real-time data synchronization, remote monitoring, and instant firmware updates.",
      specs: ["Sub-1ms latency", "Remote diagnostics", "Cloud AI processing", "Global connectivity"],
      color: "from-green-500 to-teal-600"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "IoT Health Monitoring",
      subtitle: "Comprehensive Wellness",
      description: "Integrated sensors continuously monitor vital signs, activity levels, and prosthetic performance for holistic health insights.",
      specs: ["Heart rate monitoring", "Blood oxygen tracking", "Activity analytics", "Health predictions"],
      color: "from-red-500 to-pink-600"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Smart Actuation",
      subtitle: "Precision Engineering",
      description: "High-torque servo motors with force feedback provide natural grip strength and delicate manipulation capabilities.",
      specs: ["15 degrees of freedom", "Force feedback system", "Variable grip strength", "Silent operation"],
      color: "from-orange-500 to-yellow-600"
    }
  ];

  const technicalSpecs = [
    { label: "Battery Life", value: "18+ hours", icon: <Zap className="w-5 h-5" /> },
    { label: "Weight", value: "1.2 kg", icon: <Shield className="w-5 h-5" /> },
    { label: "Response Time", value: "<50ms", icon: <Smartphone className="w-5 h-5" /> },
    { label: "Durability", value: "IP67 Rated", icon: <Heart className="w-5 h-5" /> }
  ];

  return (
    <section id="technology" className="relative section-padding bg-gradient-to-b from-evonics-black-300 to-evonics-black-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center space-x-2 bg-evonics-gold-500/20 border border-evonics-gold-500/30 rounded-full px-6 py-2 text-sm font-medium text-evonics-gold-300 mb-6">
            <Cpu className="w-4 h-4" />
            <span>Advanced Technology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="text-gradient">HAMARA</span> Technology Stack
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge engineering meets human-centered design. Every component of HAMARA 
            is engineered for performance, reliability, and seamless integration.
          </p>
        </div>

        {/* Feature Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 lg:mb-24">
          {/* Feature List */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`card-premium cursor-pointer transition-all duration-300 ${
                  activeFeature === index 
                    ? 'border-evonics-gold-500/60 bg-evonics-gold-500/10' 
                    : 'hover:border-evonics-gold-500/40'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white`}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-evonics-gold-400 text-sm font-medium mb-2">
                      {feature.subtitle}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Active Feature Detail */}
          <div className="space-y-8">
            <div className="card-premium">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-20 h-20 bg-gradient-to-br ${features[activeFeature].color} rounded-3xl flex items-center justify-center text-white`}>
                    {features[activeFeature].icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {features[activeFeature].title}
                    </h3>
                    <p className="text-evonics-gold-400 font-medium">
                      {features[activeFeature].subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  {features[activeFeature].description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-white">Key Specifications</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {features[activeFeature].specs.map((spec, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-evonics-gold-400 rounded-full" />
                        <span className="text-sm text-gray-300">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="card-premium">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Technical Specifications</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalSpecs.map((spec, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="w-16 h-16 bg-evonics-gold-500/20 rounded-2xl flex items-center justify-center text-evonics-gold-400 mx-auto">
                  {spec.icon}
                </div>
                <div>
                  <div className="text-2xl font-bold text-gradient">{spec.value}</div>
                  <div className="text-sm text-gray-400">{spec.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3D Visualization Placeholder */}
        <div className="mt-16 lg:mt-24">
          <div className="card-premium text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Interactive 3D Model</h3>
            <div className="aspect-video bg-gradient-to-br from-evonics-gold-500/20 to-evonics-gold-600/10 rounded-xl flex items-center justify-center relative overflow-hidden">
              <div className="text-4xl lg:text-6xl font-bold text-gradient opacity-30">
                3D Model Coming Soon
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-evonics-gold-500/20 to-transparent animate-pulse" />
            </div>
            <p className="text-gray-300 mt-6">
              Experience HAMARA's modular design in an interactive 3D environment. 
              Explore every component and understand the engineering excellence behind each feature.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
