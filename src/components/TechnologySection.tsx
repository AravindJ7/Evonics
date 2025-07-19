import React, { useState, useRef } from 'react';
import { Brain, Wifi, Activity, Cpu, Zap, Shield, Smartphone, Heart, Star, Send, Check } from 'lucide-react';
import Confetti from 'react-dom-confetti';

const TechnologySection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

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
  { label: "Built-in", value: "Rechargeable battery", image: "/battery.png" },
  { label: "Weight", value: "392g(less weight)", image: "/strength.png" },
  { label: "1.0s", value: "Finger opening/closing Time", image: "/time.png" },
  { label: "AI", value: "intergrated", image: "/ai-robot.png" },
];



  const reviews = [
    {
      name: "Dr. Sarah Chen",
      rating: 5,
      comment: "The neural integration is revolutionary. My patients report feeling more connected to their prosthetics than ever before.",
      date: "2 days ago"
    },
    {
      name: "James Rodriguez",
      rating: 4,
      comment: "Incredible technology, though I'd love to see more customization options in future updates.",
      date: "1 week ago"
    },
    {
      name: "Maya Patel",
      rating: 5,
      comment: "The 5G connectivity allows me to monitor my device remotely - a game changer for my active lifestyle!",
      date: "3 weeks ago"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear any previous errors when user types
    if (submitError) setSubmitError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Prepare the data to send to Google Sheets
      const payload = {
        name: formData.name,
        email: formData.email,
        rating: rating,
        feedback: formData.feedback,
        timestamp: new Date().toISOString()
      };

      // Send data to Google Sheets web app
      const response = await fetch(' https://script.google.com/macros/s/AKfycbzd5xpcS88Pjc5D_GBDFZ1GXWxhAO4KeoRzr86wrGjMPDxZIhyIi8ZehSiHYI87btKd/exec ', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      // Show success message
      setIsSubmitting(false);
      setShowSuccess(true);
      
      // Reset form after showing success
      setTimeout(() => {
        setFormData({ name: '', email: '', feedback: '' });
        setRating(0);
        setShowSuccess(false);
      }, 3000);
      
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setIsSubmitting(false);
      setSubmitError('Failed to submit feedback. Please try again later.');
    }
  };

  const confettiConfig = {
    angle: 90,
    spread: 180,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 3000,
    stagger: 3,
    width: "10px",
    height: "10px",
    colors: ["#FFD700", "#FFA500", "#FF8C00", "#FFD700", "#FFA500"]
  };

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
<div className="card-premium py-8 px-4 bg-gray-900 rounded-2xl">
  <h3 className="text-2xl font-bold text-white mb-8 text-center">
    Technical Specifications
  </h3>
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
    {technicalSpecs.map((spec, index) => (
      <div key={index} className="flex flex-col items-center justify-center space-y-3">
        <img
          src={spec.image}
          alt={spec.label}
          className="w-12 h-12 object-contain"
        />
        <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
          {spec.label}
        </div>
        <div className="text-sm text-gray-400">{spec.value}</div>
      </div>
    ))}
  </div>
</div>


        {/* Feedback Section */}
        <div className="mt-16 lg:mt-24">
          <div className="card-premium relative overflow-hidden">
            {/* Confetti effect */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
              <Confetti active={showSuccess} config={confettiConfig} />
            </div>

            {/* Success message overlay */}
            {showSuccess && (
              <div className="absolute inset-0 bg-gradient-to-br from-evonics-gold-500/20 to-evonics-gold-600/10 backdrop-blur-sm flex items-center justify-center z-10">
                <div className="text-center p-8 bg-gray-900/90 rounded-xl border border-evonics-gold-500/50 animate-pop-in">
                  <div className="w-20 h-20 bg-gradient-to-br from-evonics-gold-500 to-evonics-gold-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                  <p className="text-gray-300 mb-4">Your feedback has been submitted successfully.</p>
                  <p className="text-evonics-gold-400 text-sm">We appreciate your contribution!</p>
                </div>
              </div>
            )}

            <h3 className="text-2xl font-bold text-white mb-8 text-center">Share Your Experience</h3>
            
            {/* Error message */}
            {submitError && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-center">
                {submitError}
              </div>
            )}
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Feedback Form */}
              <div className="bg-gradient-to-br from-evonics-gold-500/10 to-evonics-gold-600/5 rounded-xl p-6 border border-evonics-gold-500/20">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-evonics-gold-300 mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/70 border border-evonics-gold-500/30 rounded-lg focus:ring-2 focus:ring-evonics-gold-500 focus:border-transparent text-white placeholder-gray-500 transition-all"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-evonics-gold-300 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/70 border border-evonics-gold-500/30 rounded-lg focus:ring-2 focus:ring-evonics-gold-500 focus:border-transparent text-white placeholder-gray-500 transition-all"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-evonics-gold-300 mb-2">Your Rating</label>
                    <div className="flex space-x-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          className="text-2xl focus:outline-none transition-colors"
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                        >
                          <Star
                            className={`w-8 h-8 ${
                              (hoverRating || rating) >= star
                                ? 'fill-evonics-gold-500 text-evonics-gold-500'
                                : 'text-gray-500'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="feedback" className="block text-sm font-medium text-evonics-gold-300 mb-2">Your Feedback</label>
                    <textarea
                      id="feedback"
                      name="feedback"
                      value={formData.feedback}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800/70 border border-evonics-gold-500/30 rounded-lg focus:ring-2 focus:ring-evonics-gold-500 focus:border-transparent text-white placeholder-gray-500 transition-all"
                      placeholder="Share your thoughts about HAMARA technology..."
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-evonics-gold-500 to-evonics-gold-600 text-white py-3 px-6 rounded-lg font-medium transition-all ${
                      isSubmitting ? 'opacity-80' : 'hover:opacity-90 hover:shadow-lg hover:shadow-evonics-gold-500/20'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Feedback</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
              
              {/* Reviews Display */}
              <div className="bg-gradient-to-br from-evonics-gold-500/10 to-evonics-gold-600/5 rounded-xl p-6 border border-evonics-gold-500/20 overflow-y-auto max-h-[500px]">
                <h4 className="text-xl font-semibold text-white mb-6 text-center">Community Feedback</h4>
                
                {reviews.length > 0 ? (
                  <div className="space-y-6">
                    {reviews.map((review, index) => (
                      <div key={index} className="bg-gray-800/30 p-5 rounded-lg border border-gray-700/50">
                        <div className="flex items-center justify-between mb-3">
                          <h5 className="font-medium text-white">{review.name}</h5>
                          <div className="flex text-evonics-gold-500">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-5 h-5 ${i < review.rating ? 'fill-current' : 'text-gray-500'}`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-300 mb-2">{review.comment}</p>
                        <p className="text-gray-500 text-sm">{review.date}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-400">No reviews yet. Be the first to share your experience!</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;