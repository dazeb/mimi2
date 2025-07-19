import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import InteractiveGuide from './components/InteractiveGuide';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>
      
      <Header />
      <Navigation />
      
      <main id="main-content" role="main" aria-label="Main content">
        <HeroSection />
        <InteractiveGuide />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;