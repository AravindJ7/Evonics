
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import StorySection from '../components/StorySection';
import TechnologySection from '../components/TechnologySection';
import TeamSection from '../components/TeamSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-evonics-black-200">
      <Header />
      <HeroSection />
      <StorySection />
      <TechnologySection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
