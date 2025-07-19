import React from 'react';
import { motion } from 'framer-motion';
import { Cat, Star } from 'lucide-react';

const Navigation: React.FC = () => {
  return (
    <nav role="navigation" aria-label="Main site navigation" className="bg-white/95 backdrop-blur-sm border-b border-purple-100 text-gray-800 shadow-lg sticky top-0 z-50 relative overflow-hidden">
      {/* Cartoon Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-2 left-10 w-4 h-4 bg-purple-300 rounded-full animate-pulse"></div>
        <div className="absolute top-4 right-20 w-3 h-3 bg-pink-300 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-2 left-1/3 w-3 h-3 bg-orange-300 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-3 right-1/4 w-2 h-2 bg-yellow-300 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <motion.div 
        className="max-w-6xl mx-auto px-4 py-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex items-center justify-center md:justify-between">
          <motion.div 
            className="flex items-center space-x-3 group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="p-2 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full shadow-sm"
            >
              <Cat className="w-6 h-6 text-purple-600 drop-shadow-sm" />
            </motion.div>
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent" id="site-title">
              The Mimi & Ashlie Adventure Series
            </h1>
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              className="p-2 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full shadow-sm"
            >
              <Star className="w-6 h-6 text-orange-500 drop-shadow-sm" />
            </motion.div>
          </motion.div>
          
          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <motion.a 
              href="#overview" 
              className="text-gray-600 hover:text-purple-600 font-medium transition-colors duration-200 relative group"
              whileHover={{ y: -2 }}
            >
              🏠 Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
            <motion.a 
              href="#characters" 
              className="text-gray-600 hover:text-purple-600 font-medium transition-colors duration-200 relative group"
              whileHover={{ y: -2 }}
            >
              👫 Characters
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
            <motion.a 
              href="#books" 
              className="text-gray-600 hover:text-purple-600 font-medium transition-colors duration-200 relative group"
              whileHover={{ y: -2 }}
            >
              📚 Books
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
            <motion.a 
              href="#activities" 
              className="text-gray-600 hover:text-purple-600 font-medium transition-colors duration-200 relative group"
              whileHover={{ y: -2 }}
            >
              🎨 Activities
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
            <motion.button 
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-200"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              🚀 Start Reading
            </motion.button>
          </div>
        </div>
        
        <motion.p 
          className="mt-3 text-gray-600 text-center max-w-3xl mx-auto text-sm md:text-base font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          aria-describedby="site-title"
        >
          Heartwarming adventures of a clever cat and her loving human sister as they discover that
          the biggest adventures can happen right in their own backyard! ✨
        </motion.p>
      </motion.div>
    </nav>
  );
};

export default Navigation;