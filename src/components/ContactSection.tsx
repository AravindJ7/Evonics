import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Calendar, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactSection = () => {
  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: '',
    contactType: 'demo'
  });
  
  // Job application form state
  const [jobFormData, setJobFormData] = useState({
    name: '',
    email: '',
    age: '',
    gender: '',
    experience: '',
    job: '',
    qualification: '',
    position: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isJobSubmitted, setIsJobSubmitted] = useState(false);
  const [showJobForm, setShowJobForm] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('https://script.google.com/macros/s/AKfycbwIumcprgz5yfa6VNXc7wqUGPPcLX86CFuGzkOiWsUYWSRHrbS9TyZ5t1c3Hqc8NS6yNA/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType: 'contactForm'
        }),
      });

      console.log('Contact form submitted:', formData);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);

      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        message: '',
        contactType: 'demo'
      });

    } catch (error) {
      console.error('Error submitting contact form:', error);
    }
  };

  const handleJobSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('https://script.google.com/macros/s/AKfycbz_SSn77TWR0f-vwbx8FFZ1EeeCAdvO3Aem_DKwNwXggCH8LKk1oadS5fRbTv0I8dtzww/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...jobFormData,
          formType: 'jobApplication'
        }),
      });

      console.log('Job application submitted:', jobFormData);
      setIsJobSubmitted(true);
      setTimeout(() => {
        setIsJobSubmitted(false);
        setShowJobForm(false);
      }, 3000);

      setJobFormData({
        name: '',
        email: '',
        age: '',
        gender: '',
        experience: '',
        job: '',
        qualification: '',
        position: ''
      });

    } catch (error) {
      console.error('Error submitting job application:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleJobFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setJobFormData({
      ...jobFormData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative section-padding bg-gradient-to-b from-evonics-black-300 to-evonics-black-200">
      <div className="max-w-7xl mx-auto">
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
          {/* Contact Form Column */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-evonics-black-400/50 to-evonics-black-500/30 backdrop-blur-sm border border-evonics-gold-500/30 rounded-3xl p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-white mb-6">Schedule Your Demo</h3>
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-center py-8 space-y-4"
                >
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto" />
                  <h4 className="text-xl font-bold text-white">Message Sent!</h4>
                  <p className="text-gray-300">We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-300">Full Name *</label>
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
                      <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address *</label>
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
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-300">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-evonics-black-400/50 border border-evonics-gold-500/30 rounded-lg text-white placeholder-gray-400 focus:border-evonics-gold-500 focus:outline-none transition-colors"
                        placeholder="+91 1234567890"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="organization" className="text-sm font-medium text-gray-300">Organization</label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-evonics-black-400/50 border border-evonics-gold-500/30 rounded-lg text-white placeholder-gray-400 focus:border-evonics-gold-500 focus:outline-none transition-colors"
                        placeholder="Your company/institution"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contactType" className="text-sm font-medium text-gray-300">I'm interested in *</label>
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
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
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
                  <button type="submit" className="btn-premium w-full group">
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column - Job Application and Contact Info */}
          <div className="space-y-8">
            {/* Job Application Section */}
            <div className="bg-gradient-to-br from-evonics-gold-500/20 to-evonics-gold-600/10 border border-evonics-gold-500/30 rounded-3xl p-8 lg:p-10">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white">Join Our Team</h3>
                {!showJobForm && !isJobSubmitted && (
                  <button 
                    onClick={() => setShowJobForm(true)}
                    className="btn-premium group"
                  >
                    <span>Apply Now</span>
                    <ChevronDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
                  </button>
                )}
              </div>

              <AnimatePresence>
                {isJobSubmitted ? (
                  <motion.div 
                    key="success-message"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-center py-8 space-y-4"
                  >
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto" />
                    <h4 className="text-xl font-bold text-white">Application Submitted!</h4>
                    <p className="text-gray-300">We'll review your application and get back to you soon.</p>
                  </motion.div>
                ) : showJobForm ? (
                  <motion.form 
                    key="job-form"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    onSubmit={handleJobSubmit} 
                    className="space-y-6 overflow-hidden"
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="text-xl font-semibold text-evonics-gold-400">Application Form</h4>
                      <button 
                        type="button" 
                        onClick={() => setShowJobForm(false)}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <ChevronUp className="w-5 h-5" />
                      </button>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="job-name" className="text-sm font-medium text-gray-300">Full Name *</label>
                        <input
                          type="text"
                          id="job-name"
                          name="name"
                          required
                          value={jobFormData.name}
                          onChange={handleJobFormChange}
                          className="w-full px-4 py-3 bg-evonics-black-400/50 border border-evonics-gold-500/30 rounded-lg text-white placeholder-gray-400 focus:border-evonics-gold-500 focus:outline-none transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="job-email" className="text-sm font-medium text-gray-300">Email Address *</label>
                        <input
                          type="email"
                          id="job-email"
                          name="email"
                          required
                          value={jobFormData.email}
                          onChange={handleJobFormChange}
                          className="w-full px-4 py-3 bg-evonics-black-400/50 border border-evonics-gold-500/30 rounded-lg text-white placeholder-gray-400 focus:border-evonics-gold-500 focus:outline-none transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="age" className="text-sm font-medium text-gray-300">Age *</label>
                        <input
                          type="number"
                          id="age"
                          name="age"
                          required
                          value={jobFormData.age}
                          onChange={handleJobFormChange}
                          className="w-full px-4 py-3 bg-evonics-black-400/50 border border-evonics-gold-500/30 rounded-lg text-white placeholder-gray-400 focus:border-evonics-gold-500 focus:outline-none transition-colors"
                          placeholder="Your age"
                          min="18"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="gender" className="text-sm font-medium text-gray-300">Gender *</label>
                        <select
                          id="gender"
                          name="gender"
                          required
                          value={jobFormData.gender}
                          onChange={handleJobFormChange}
                          className="w-full px-4 py-3 bg-evonics-black-400/50 border border-evonics-gold-500/30 rounded-lg text-white focus:border-evonics-gold-500 focus:outline-none transition-colors"
                        >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                          <option value="prefer-not-to-say">Prefer not to say</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="qualification" className="text-sm font-medium text-gray-300">Qualification *</label>
                      <input
                        type="text"
                        id="qualification"
                        name="qualification"
                        required
                        value={jobFormData.qualification}
                        onChange={handleJobFormChange}
                        className="w-full px-4 py-3 bg-evonics-black-400/50 border border-evonics-gold-500/30 rounded-lg text-white placeholder-gray-400 focus:border-evonics-gold-500 focus:outline-none transition-colors"
                        placeholder="Your educational qualification"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="experience" className="text-sm font-medium text-gray-300">Experience (Years) *</label>
                      <input
                        type="number"
                        id="experience"
                        name="experience"
                        required
                        value={jobFormData.experience}
                        onChange={handleJobFormChange}
                        className="w-full px-4 py-3 bg-evonics-black-400/50 border border-evonics-gold-500/30 rounded-lg text-white placeholder-gray-400 focus:border-evonics-gold-500 focus:outline-none transition-colors"
                        placeholder="Years of relevant experience"
                        min="0"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="job" className="text-sm font-medium text-gray-300">Current/Most Recent Job</label>
                      <input
                        type="text"
                        id="job"
                        name="job"
                        value={jobFormData.job}
                        onChange={handleJobFormChange}
                        className="w-full px-4 py-3 bg-evonics-black-400/50 border border-evonics-gold-500/30 rounded-lg text-white placeholder-gray-400 focus:border-evonics-gold-500 focus:outline-none transition-colors"
                        placeholder="Your current or most recent position"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="position" className="text-sm font-medium text-gray-300">Position Applying For *</label>
                      <input
                        type="text"
                        id="position"
                        name="position"
                        required
                        value={jobFormData.position}
                        onChange={handleJobFormChange}
                        className="w-full px-4 py-3 bg-evonics-black-400/50 border border-evonics-gold-500/30 rounded-lg text-white placeholder-gray-400 focus:border-evonics-gold-500 focus:outline-none transition-colors"
                        placeholder="Which position are you applying for?"
                      />
                    </div>
                    
                    <button type="submit" className="btn-premium w-full group">
                      <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                      Submit Application
                    </button>
                  </motion.form>
                ) : null}
              </AnimatePresence>
            </div>

            {/* Experience Demo Section */}
            {/* <div className="bg-gradient-to-br from-evonics-gold-500/20 to-evonics-gold-600/10 border border-evonics-gold-500/30 rounded-3xl p-8 lg:p-10 text-center">
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
            </div> */}

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-evonics-black-400/50 to-evonics-black-500/30 backdrop-blur-sm border border-evonics-gold-500/30 rounded-3xl p-8 lg:p-10">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-evonics-gold-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-evonics-gold-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a href="mailto:evonicsindia@gmail.com" className="text-white hover:text-evonics-gold-400 transition-colors">
                      Evonicsindia@gmail.com
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

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-evonics-black-400/50 to-evonics-black-500/30 backdrop-blur-sm border border-evonics-gold-500/30 rounded-3xl p-8 lg:p-10">
              <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
              <div className="space-y-3">
                <a href="mailto:evonicsindia@gmail.com?subject=Partnership Inquiry" className="flex items-center space-x-3 p-3 rounded-lg bg-evonics-black-400/30 hover:bg-evonics-gold-500/10 transition-colors group">
                  <div className="w-8 h-8 bg-evonics-gold-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-sm">🤝</span>
                  </div>
                  <span className="text-white group-hover:text-evonics-gold-400 transition-colors">Partnership Opportunities</span>
                </a>

                <a href="mailto:evonicsindia@gmail.com?subject=Investment Information" className="flex items-center space-x-3 p-3 rounded-lg bg-evonics-black-400/30 hover:bg-evonics-gold-500/10 transition-colors group">
                  <div className="w-8 h-8 bg-evonics-gold-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-sm">💼</span>
                  </div>
                  <span className="text-white group-hover:text-evonics-gold-400 transition-colors">Investment Information</span>
                </a>

                <a href="mailto:evonicsindia@gmail.com?subject=Media Inquiry" className="flex items-center space-x-3 p-3 rounded-lg bg-evonics-black-400/30 hover:bg-evonics-gold-500/10 transition-colors group">
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