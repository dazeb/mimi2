import React from 'react';
import { motion } from 'framer-motion';
import { Cat, Star, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer role="contentinfo" aria-label="Site footer" className="bg-gradient-to-r from-purple-800 via-pink-700 to-orange-600 text-white py-8 px-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-10 w-8 h-8 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-8 right-20 w-6 h-6 bg-white rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-4 left-1/4 w-10 h-10 bg-white rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-8 right-1/3 w-4 h-4 bg-white rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-4">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Cat className="w-6 h-6 text-yellow-300 mr-2" />
            </motion.div>
            <h3 className="text-lg font-semibold">The Mimi & Ashlie Adventure Series</h3>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Star className="w-6 h-6 text-yellow-300 ml-2" />
            </motion.div>
          </div>
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-4 h-4 text-pink-300 mr-2" />
            <p className="text-gray-100 font-medium">
              Creating magical adventures that inspire imagination and learning
            </p>
            <Heart className="w-4 h-4 text-pink-300 ml-2" />
          </div>
          <div className="flex justify-center space-x-6 text-sm text-gray-200 mb-4">
            <motion.a 
              href="#" 
              className="hover:text-yellow-300 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              📋 Privacy Policy
            </motion.a>
            <motion.a 
              href="#" 
              className="hover:text-yellow-300 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              📜 Terms of Service
            </motion.a>
            <motion.a 
              href="#" 
              className="hover:text-yellow-300 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              📧 Contact Us
            </motion.a>
          </div>
          <p className="text-xs text-gray-300 mt-4">
            © 2025 The Mimi & Ashlie Adventure Series. All rights reserved. ✨
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;