
import React from 'react';
import { Heart, Mail, Linkedin, Twitter,Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-evonics-black-100 border-t border-evonics-gold-500/20">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="text-2xl lg:text-3xl font-bold mb-4">
                <span className="text-gradient">Evonics</span>
                <span className="text-white ml-2">India</span>
              </div>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Pioneering affordable AI-powered myoelectric prosthetic arms to restore 
                mobility and independence for amputees across India and beyond.
              </p>
            </div>
            
            <div className="flex items-center space-x-2 text-evonics-gold-400">
              <Heart className="w-5 h-5" />
              <span className="text-sm">Built with empathy and engineering excellence</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <nav className="space-y-2">
              {[
                { name: 'Our Story', href: '#story' },
                { name: 'Technology', href: '#technology' },
                { name: 'Team', href: '#team' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-300 hover:text-evonics-gold-400 transition-colors duration-200 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Get in Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:evonicsindia@gmail.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-evonics-gold-400 transition-colors duration-200 group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm">evonicsindia@gmail.com</span>
              </a>
              
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-4 h-4 flex items-center justify-center">
                  <span className="text-xs">🇮🇳</span>
                </div>
                <span className="text-sm">India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 pt-2">
              <button className="w-10 h-10 bg-evonics-gold-500/20 hover:bg-evonics-gold-500/30 rounded-lg flex items-center justify-center text-evonics-gold-400 hover:text-evonics-gold-300 transition-all duration-200 hover:scale-110">
                <Linkedin className="w-4 h-4" />
              </button>
               <button className="w-10 h-10 bg-evonics-gold-500/20 hover:bg-evonics-gold-500/30 rounded-full flex items-center justify-center text-evonics-gold-400 hover:text-evonics-gold-300 transition-colors">
                   <Instagram className="w-4 h-4" />
                </button>
              <a
                href="mailto:evonicsindia@gmail.com"
                className="w-10 h-10 bg-evonics-gold-500/20 hover:bg-evonics-gold-500/30 rounded-lg flex items-center justify-center text-evonics-gold-400 hover:text-evonics-gold-300 transition-all duration-200 hover:scale-110"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-evonics-gold-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 Evonics India. All rights reserved. Empowering lives through technology.
            </div>
            
            <div className="flex items-center space-x-6">
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-2 text-evonics-gold-400 hover:text-evonics-gold-300 transition-colors duration-200 group"
              >
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                <span className="text-sm font-medium">Back to Top</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
