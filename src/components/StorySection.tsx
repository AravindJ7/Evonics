import React, { useEffect, useState } from 'react';
import { Heart, ArrowRight, Users, Award, Target } from 'lucide-react';

const StorySection = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = parseInt(entry.target.getAttribute('data-step') || '0');
            setVisibleSteps(prev => [...prev, stepIndex]);
          }
        });
      },
      { threshold: 0.5 }
    );

    const stepElements = document.querySelectorAll('[data-step]');
    stepElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const journeySteps = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "The Challenge",
      description: "Over 1 million Indians live with upper limb amputations, facing daily challenges that limit their independence and quality of life.",
      stat: "1M+",
      statLabel: "Affected Lives",
      image: "/challenge.jpg",
      alt: "Person facing mobility challenges"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Our Vision",
      description: "We envisioned affordable, AI-powered prosthetics that don't just replace limbs—they enhance human capability through advanced technology.",
      stat: "50%",
      statLabel: "Cost Reduction",
      image: "/vision.jpg",
      alt: "Team brainstorming prosthetic design"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Innovation",
      description: "HAMARA integrates EMG control, 5G connectivity, and IoT health monitoring into a 3D-printed, modular design that adapts to each user.",
      stat: "24/7",
      statLabel: "Health Tracking",
      image: "/innovation.jpg",
      alt: "Advanced prosthetic technology demonstration"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Empowerment",
      description: "Today, our users experience newfound independence, performing daily tasks with precision and confidence while staying connected to their health.",
      stat: "95%",
      statLabel: "User Satisfaction",
      image: "/empowerment.jpg",
      alt: "Person using prosthetic arm with confidence"
    }
  ];

  return (
    <section id="story" className="relative section-padding bg-gradient-to-b from-evonics-black-200 to-evonics-black-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center space-x-2 bg-evonics-gold-500/20 border border-evonics-gold-500/30 rounded-full px-6 py-2 text-sm font-medium text-evonics-gold-300 mb-6">
            <Heart className="w-4 h-4" />
            <span>Our Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            From <span className="text-gradient">Challenge</span> to <span className="text-gradient">Change</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            Every innovation begins with understanding human need. Our story is one of 
            empathy, engineering excellence, and the relentless pursuit of accessible healthcare technology.
          </p>
        </div>

        {/* Journey Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-evonics-gold-500 to-evonics-gold-600 transform -translate-x-1/2 hidden lg:block" />

          <div className="space-y-16 lg:space-y-24">
            {journeySteps.map((step, index) => (
              <div
                key={index}
                data-step={index}
                className={`relative transition-all duration-1000 ${
                  visibleSteps.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-evonics-gold-500 to-evonics-gold-600 rounded-2xl flex items-center justify-center text-evonics-black-200">
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-white">
                          {step.title}
                        </h3>
                        <div className="flex items-center space-x-2 text-evonics-gold-400">
                          <span className="text-lg font-semibold">{step.stat}</span>
                          <span className="text-sm text-gray-400">{step.statLabel}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Visual - Clean Image Display */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="card-premium overflow-hidden">
                      <div className="aspect-video relative rounded-xl overflow-hidden">
                        <img 
                          src={step.image} 
                          alt={step.alt}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          loading="lazy"
                        />
                        {/* Subtle overlay for better text contrast (optional) */}
                        <div className="absolute inset-0 bg-gradient-to-t from-evonics-black-400/20 to-transparent" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-evonics-gold-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 hidden lg:block">
                  <div className="w-4 h-4 bg-evonics-gold-400 rounded-full animate-ping" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 lg:mt-24">
          <a
            href="#technology"
            className="inline-flex items-center space-x-2 text-evonics-gold-400 hover:text-evonics-gold-300 transition-colors duration-200 group"
          >
            <span className="text-lg font-medium">Discover Our Technology</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default StorySection;