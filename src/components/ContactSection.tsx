
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Calendar, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
    contactType: 'demo'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative section-padding bg-gradient-to-b from-evonics-black-300 to-evonics-black-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center space-x-2 bg-evonics-gold-500/20 border border-evonics-gold-500/30 rounded-full px-6 py-2 text-sm font-medium text-evonics-gold-300 mb-6">
            <Mail className="w-4 h-4" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform <span className="text-gradient">Lives</span>?
          </h2>
          <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            Join us in revolutionizing prosthetic technology. Schedule a demo, explore partnerships, 
            or learn how HAMARA can make a difference in your community.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <div className="card-premium">
              <h3 className="text-2xl font-bold text-white mb-6">Schedule Your Demo</h3>
              
              {isSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto" />
                  <h4 className="text-xl font-bold text-white">Message Sent!</h4>
                  <p className="text-gray-300">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-300">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-evonics-black-400/50 border border-evonics-gold-500/30 rounded-lg text-white placeholder-gray-400 focus:border-evonics-gold-500 focus:outline-none transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-300">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-evonics-black-400/50 border border-evonics-gold-500/30 rounded-lg text-white placeholder-gray-400 focus:border-evonics-gold-500 focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="organization" className="text-sm font-medium text-gray-300">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-evonics-black-400/50 border border-evonics-gold-500/30 rounded-lg text-white placeholder-gray-400 focus:border-evonics-gold-500 focus:outline-none transition-colors"
                      placeholder="Hospital, clinic, or organization"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contactType" className="text-sm font-medium text-gray-300">
                      I'm interested in *
                    </label>
                    <select
                      id="contactType"
                      name="contactType"
                      required
                      value={formData.contactType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-evonics-black-400/50 border border-evonics-gold-500/30 rounded-lg text-white focus:border-evonics-gold-500 focus:outline-none transition-colors"
                    >
                      <option value="demo">Scheduling a Demo</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="investment">Investment Information</option>
                      <option value="research">Research Collaboration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-evonics-black-400/50 border border-evonics-gold-500/30 rounded-lg text-white placeholder-gray-400 focus:border-evonics-gold-500 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your needs or questions..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-premium w-full group"
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Primary CTA */}
            <div id="demo" className="card-premium text-center bg-gradient-to-br from-evonics-gold-500/20 to-evonics-gold-600/10 border-evonics-gold-500/40">
              <Calendar className="w-16 h-16 text-evonics-gold-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Experience HAMARA Live</h3>
              <p className="text-gray-300 mb-6">
                See the future of prosthetic technology in action. Schedule a personalized demo 
                with our team and witness how HAMARA can transform lives.
              </p>
              <a
                href="mailto:evonicsindia@gmail.com?subject=Demo Request&body=Hi, I would like to schedule a demo of HAMARA."
                className="btn-premium inline-flex items-center space-x-2 animate-pulse-gold"
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule Demo Now</span>
              </a>
            </div>

            {/* Contact Details */}
            <div className="card-premium">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-evonics-gold-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-evonics-gold-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a 
                      href="mailto:evonicsindia@gmail.com"
                      className="text-white hover:text-evonics-gold-400 transition-colors"
                    >
                      evonicsindia@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-evonics-gold-500/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-evonics-gold-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white">India</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-evonics-gold-500/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-evonics-gold-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Response Time</p>
                    <p className="text-white">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="card-premium">
              <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
              <div className="space-y-3">
                <a 
                  href="mailto:evonicsindia@gmail.com?subject=Partnership Inquiry"
                  className="flex items-center space-x-3 p-3 rounded-lg bg-evonics-black-400/30 hover:bg-evonics-gold-500/10 transition-colors group"
                >
                  <div className="w-8 h-8 bg-evonics-gold-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-sm">🤝</span>
                  </div>
                  <span className="text-white group-hover:text-evonics-gold-400 transition-colors">Partnership Opportunities</span>
                </a>
                
                <a 
                  href="mailto:evonicsindia@gmail.com?subject=Investment Information"
                  className="flex items-center space-x-3 p-3 rounded-lg bg-evonics-black-400/30 hover:bg-evonics-gold-500/10 transition-colors group"
                >
                  <div className="w-8 h-8 bg-evonics-gold-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-sm">💼</span>
                  </div>
                  <span className="text-white group-hover:text-evonics-gold-400 transition-colors">Investment Information</span>
                </a>
                
                <a 
                  href="mailto:evonicsindia@gmail.com?subject=Media Inquiry"
                  className="flex items-center space-x-3 p-3 rounded-lg bg-evonics-black-400/30 hover:bg-evonics-gold-500/10 transition-colors group"
                >
                  <div className="w-8 h-8 bg-evonics-gold-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-sm">📰</span>
                  </div>
                  <span className="text-white group-hover:text-evonics-gold-400 transition-colors">Media & Press</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
