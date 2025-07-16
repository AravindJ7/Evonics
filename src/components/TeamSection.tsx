import React from 'react';
import { Users, Linkedin, Mail } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  expertise: string;
  bio: string;
  linkedin: string;
  email: string;
}

const TeamSection: React.FC = () => {
  const founders: TeamMember[] = [
    {
      name: "Abishek M",
      role: "Co-Founder & CEO",
      expertise: "AI & Biomedical Engineering",
      bio: "Expert in robotic control systems and IoT integration, pioneering next-generation prosthetic technology.",
      linkedin: "https://www.linkedin.com/in/abishek-madhusudhanan/",
      email: "mailto:abishek0117@gmail.com"
    },
    {
      name: "Rohit",
      role: "Co-Founder & CTO",
      expertise: "Robotics & IoT Systems",
      bio: "Leading innovation in neural interface technology with 8+ years in AI-driven healthcare solutions.",
      linkedin: "https://www.linkedin.com/in/rohith-rramesh",
      email: "mailto:rohithachu089@gmail.com"
    },
    {
      name: "Aruneswar",
      role: "Co-Founder & CPO",
      expertise: "Product Design & UX",
      bio: "Human-centered design specialist focused on creating intuitive, accessible medical devices.",
      linkedin: "https://www.linkedin.com/in/aruneswar-s",
      email: "mailto:saruneswar@gmail.com"
    },
    {
      name: "Archana",
      role: "Co-Founder & CMO",
      expertise: "Healthcare Strategy",
      bio: "Healthcare market strategist with deep understanding of Indian medical device landscape.",
      linkedin: "https://www.linkedin.com/in/archana-karan-",
      email: "mailto:archanak3009@gmail.com"
    },
    {
      name: "Manojkumar sv",
      role: "Co-Founder & COO",
      expertise: "Operations & Manufacturing",
      bio: "Operations excellence leader specializing in scalable manufacturing and quality systems.",
      linkedin: "https://www.linkedin.com/in/manojkumar-sv",
      email: "mailto:svmanojkumar02@gmail.com"
    }
  ];

  return (
    <section id="team" className="relative section-padding bg-gradient-to-b from-evonics-black-200 to-evonics-black-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center space-x-2 bg-evonics-gold-500/20 border border-evonics-gold-500/30 rounded-full px-6 py-2 text-sm font-medium text-evonics-gold-300 mb-6">
            <Users className="w-4 h-4" />
            <span>Our Team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            The <span className="text-gradient">Innovators</span> Behind HAMARA
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            A passionate team of engineers, designers, and healthcare professionals united by 
            the mission to make advanced prosthetics accessible to everyone.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {founders.map((founder, index) => (
            <div key={index} className="card-premium group hover:scale-105 transition-all duration-300">
              <div className="space-y-6">
                {/* Avatar Placeholder */}
                <div className="w-24 h-24 bg-gradient-to-br from-evonics-gold-500 to-evonics-gold-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-evonics-black-200">
                    {founder.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>

                {/* Info */}
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-bold text-white">{founder.name}</h3>
                  <p className="text-evonics-gold-400 font-medium">{founder.role}</p>
                  <p className="text-sm text-gray-400">{founder.expertise}</p>
                </div>

                {/* Bio */}
                <p className="text-gray-300 text-sm leading-relaxed text-center">
                  {founder.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center space-x-4 pt-4 border-t border-evonics-gold-500/20">
                  <a 
                    href={founder.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-evonics-gold-500/20 hover:bg-evonics-gold-500/30 rounded-full flex items-center justify-center text-evonics-gold-400 hover:text-evonics-gold-300 transition-colors"
                    aria-label={`${founder.name}'s LinkedIn profile`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a 
                    href={founder.email} 
                    className="w-10 h-10 bg-evonics-gold-500/20 hover:bg-evonics-gold-500/30 rounded-full flex items-center justify-center text-evonics-gold-400 hover:text-evonics-gold-300 transition-colors"
                    aria-label={`Email ${founder.name}`}
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Values */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
              <span className="text-2xl font-bold text-white">🚀</span>
            </div>
            <h3 className="text-xl font-bold text-white">Innovation</h3>
            <p className="text-gray-300 text-sm">
              Pushing boundaries in AI, robotics, and biomedical engineering to create breakthrough solutions.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto">
              <span className="text-2xl font-bold text-white">❤️</span>
            </div>
            <h3 className="text-xl font-bold text-white">Empathy</h3>
            <p className="text-gray-300 text-sm">
              Understanding user needs deeply and designing solutions that truly make a difference in lives.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto">
              <span className="text-2xl font-bold text-white">🤝</span>
            </div>
            <h3 className="text-xl font-bold text-white">Accessibility</h3>
            <p className="text-gray-300 text-sm">
              Making advanced healthcare technology affordable and accessible to everyone who needs it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;