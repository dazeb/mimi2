import React from 'react';
import { motion } from 'framer-motion';
import { Cat, Star } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section role="region" aria-labelledby="hero-heading" className="relative py-20 px-4 overflow-hidden">
      <h2 id="hero-heading" className="sr-only">Welcome to Mimi & Ashlie Adventure Series</h2>
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/literacy-banner.png" 
          alt="Children with books - literacy background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100/90 via-purple-50/90 to-pink-100/90"></div>
        
        {/* Floating Cartoon Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Books */}
          <div className="absolute top-20 left-1/4 animate-float">
            <div className="w-12 h-16 bg-gradient-to-br from-red-400 to-red-500 rounded-lg shadow-lg transform rotate-12">
              <div className="w-full h-2 bg-red-600 rounded-t-lg"></div>
            </div>
          </div>
          <div className="absolute top-32 right-1/3 animate-float-delayed">
            <div className="w-10 h-14 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg shadow-lg transform -rotate-6">
              <div className="w-full h-2 bg-blue-600 rounded-t-lg"></div>
            </div>
          </div>
          
          {/* Cartoon Clouds */}
          <div className="absolute top-10 right-20 animate-float-slow">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white rounded-full shadow-sm"></div>
              <div className="w-12 h-12 bg-white rounded-full shadow-sm -ml-2"></div>
              <div className="w-10 h-10 bg-white rounded-full shadow-sm -ml-3"></div>
            </div>
          </div>
          
          {/* Magical Sparkles */}
          <div className="absolute top-1/4 left-1/3 animate-twinkle">
            <div className="w-3 h-3 bg-yellow-300 rounded-full shadow-lg"></div>
          </div>
          <div className="absolute top-1/3 right-1/4 animate-twinkle-delayed">
            <div className="w-2 h-2 bg-pink-300 rounded-full shadow-lg"></div>
          </div>
          <div className="absolute bottom-1/3 left-1/5 animate-twinkle">
            <div className="w-4 h-4 bg-purple-300 rounded-full shadow-lg"></div>
          </div>
          
          {/* Cartoon Flowers */}
          <div className="absolute bottom-20 left-10 animate-sway">
            <div className="relative">
              <div className="w-8 h-8 bg-pink-400 rounded-full"></div>
              <div className="absolute top-1 left-1 w-6 h-6 bg-pink-300 rounded-full"></div>
              <div className="absolute top-2 left-2 w-4 h-4 bg-yellow-300 rounded-full"></div>
              <div className="w-2 h-8 bg-green-400 mx-auto"></div>
            </div>
          </div>
          <div className="absolute bottom-16 right-16 animate-sway-delayed">
            <div className="relative">
              <div className="w-6 h-6 bg-purple-400 rounded-full"></div>
              <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-purple-300 rounded-full"></div>
              <div className="absolute top-1 left-1 w-3 h-3 bg-yellow-300 rounded-full"></div>
              <div className="w-1.5 h-6 bg-green-400 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full opacity-80 animate-bounce z-10 shadow-lg">
        <div className="absolute inset-2 bg-yellow-200 rounded-full"></div>
        <div className="absolute inset-4 bg-yellow-100 rounded-full"></div>
      </div>
      <div className="absolute top-32 right-16 w-16 h-16 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full opacity-80 animate-pulse z-10 shadow-lg">
        <div className="absolute inset-2 bg-orange-200 rounded-full"></div>
      </div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-br from-pink-300 to-pink-400 rounded-full opacity-80 animate-bounce delay-300 z-10 shadow-lg">
        <div className="absolute inset-1 bg-pink-200 rounded-full"></div>
      </div>
      <div className="absolute bottom-32 right-12 w-14 h-14 bg-gradient-to-br from-purple-300 to-purple-400 rounded-full opacity-80 animate-pulse delay-150 z-10 shadow-lg">
        <div className="absolute inset-1 bg-purple-200 rounded-full"></div>
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative z-20">
        <div className="flex items-center justify-center mb-8">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Cat className="w-16 h-16 text-purple-600 mr-4 drop-shadow-lg" />
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            The Mimi & Ashlie Adventure Series
          </motion.h1>
          <motion.div
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <Star className="w-16 h-16 text-yellow-400 ml-4 drop-shadow-lg" />
          </motion.div>
        </div>
        
        <motion.p 
          className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Heartwarming adventures of a clever cat and her loving human sister as they discover that
          the biggest adventures can happen right in their own backyard! ✨
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <motion.button 
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            🚀 Start Reading
          </motion.button>
          <motion.button 
            className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg shadow-xl border-2 border-purple-300 hover:bg-purple-50 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            🌟 Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;