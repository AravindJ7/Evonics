
import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, Zap, Wifi, Activity } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-evonics-black-200 via-evonics-black-300 to-evonics-black-400" />
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-evonics-gold-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto section-padding text-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-evonics-gold-500/20 border border-evonics-gold-500/30 rounded-full px-6 py-2 text-sm font-medium text-evonics-gold-300">
              <Zap className="w-4 h-4" />
              <span>Revolutionary AI-Powered Prosthetics</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-white">Restoring</span>
                <br />
                <span className="text-gradient">Independence</span>
                <br />
                <span className="text-white">with</span> <span className="text-gradient">HAMARA</span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
                Advanced myoelectric prosthetic arms powered by AI, featuring EMG control, 
                5G connectivity, and IoT health tracking. Empowering amputees to reclaim their lives.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#demo"
                className="btn-premium group inline-flex items-center justify-center space-x-2"
              >
                <span>Schedule a Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="inline-flex items-center justify-center space-x-2 px-8 py-4 border border-evonics-gold-500/50 text-evonics-gold-400 rounded-full hover:bg-evonics-gold-500/10 transition-all duration-300 group">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Watch Story</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-evonics-gold-500/20">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-gradient">95%</div>
                <div className="text-sm text-gray-400">User Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-gradient">24/7</div>
                <div className="text-sm text-gray-400">Health Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-gradient">5G</div>
                <div className="text-sm text-gray-400">Connected</div>
              </div>
            </div>
          </div>

          {/* Right Content - Product Showcase */}
          <div className={`relative ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              {/* Main Product Image Placeholder */}
              <div className="relative bg-gradient-to-br from-evonics-black-400/50 to-evonics-black-500/30 backdrop-blur-sm border border-evonics-gold-500/30 rounded-3xl p-8 lg:p-12">
                <div className="aspect-square bg-gradient-to-br from-evonics-gold-500/20 to-evonics-gold-600/10 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  {/* Prosthetic Arm Visualization */}
                  <div className="w-full h-full bg-gradient-to-t from-evonics-gold-500/30 to-transparent rounded-2xl flex items-center justify-center">
                    <div className="text-6xl lg:text-8xl font-bold text-gradient opacity-50">
                      HAMARA
                    </div>
                  </div>
                  
                  {/* Floating Tech Icons */}
                  <div className="absolute top-4 right-4 bg-evonics-gold-500/20 backdrop-blur-sm rounded-full p-3 animate-float">
                    <Wifi className="w-6 h-6 text-evonics-gold-400" />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-evonics-gold-500/20 backdrop-blur-sm rounded-full p-3 animate-float" style={{ animationDelay: '1s' }}>
                    <Activity className="w-6 h-6 text-evonics-gold-400" />
                  </div>
                  <div className="absolute top-1/2 left-4 bg-evonics-gold-500/20 backdrop-blur-sm rounded-full p-3 animate-float" style={{ animationDelay: '2s' }}>
                    <Zap className="w-6 h-6 text-evonics-gold-400" />
                  </div>
                </div>
                
                {/* Glowing Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-evonics-gold-500/10 to-evonics-gold-600/5 rounded-3xl animate-pulse-gold" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-evonics-gold-500/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-evonics-gold-400 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
