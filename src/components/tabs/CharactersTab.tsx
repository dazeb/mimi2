import React from 'react';
import { motion } from 'framer-motion';

const CharactersTab: React.FC = () => {
  return (
    <motion.div
      key="characters"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
      role="region"
      aria-label="Character information"
    >
      <motion.h3 
        className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        🌟 Meet Our Characters 🌟
      </motion.h3>
      
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div 
          className="text-center bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-lg border-2 border-purple-200"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.05, rotateY: 5 }}
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative mx-auto mb-4">
              <div className="w-24 h-24 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full mx-auto relative overflow-hidden shadow-xl">
                {/* Cat face */}
                <div className="absolute inset-2 bg-gradient-to-br from-gray-200 to-gray-400 rounded-full">
                  {/* Eyes */}
                  <div className="absolute top-6 left-4 w-3 h-3 bg-green-400 rounded-full">
                    <div className="absolute top-0.5 left-0.5 w-2 h-2 bg-green-500 rounded-full">
                      <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="absolute top-6 right-4 w-3 h-3 bg-green-400 rounded-full">
                    <div className="absolute top-0.5 left-0.5 w-2 h-2 bg-green-500 rounded-full">
                      <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>
                  {/* Nose */}
                  <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-2 h-1.5 bg-pink-400 rounded-full"></div>
                  {/* Mouth */}
                  <div className="absolute top-11 left-1/2 transform -translate-x-1/2">
                    <div className="w-1 h-2 bg-gray-600 rounded-full"></div>
                  </div>
                  {/* Whiskers */}
                  <div className="absolute top-9 left-1 w-4 h-0.5 bg-gray-600 rounded-full transform -rotate-12"></div>
                  <div className="absolute top-11 left-1 w-4 h-0.5 bg-gray-600 rounded-full transform rotate-12"></div>
                  <div className="absolute top-9 right-1 w-4 h-0.5 bg-gray-600 rounded-full transform rotate-12"></div>
                  <div className="absolute top-11 right-1 w-4 h-0.5 bg-gray-600 rounded-full transform -rotate-12"></div>
                </div>
                {/* Ears */}
                <div className="absolute -top-2 left-3 w-4 h-4 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full transform rotate-45"></div>
                <div className="absolute -top-2 right-3 w-4 h-4 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full transform rotate-45"></div>
              </div>
              {/* Explorer hat */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-gradient-to-br from-brown-400 to-brown-600 rounded-full">
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-12 h-4 bg-brown-500 rounded-full"></div>
              </div>
            </div>
          </motion.div>
          <h4 className="text-2xl font-bold text-gray-800 mb-3">🐱 Mimi the Explorer</h4>
          <p className="text-gray-600 leading-relaxed">
            A clever and curious gray cat with a love for exploration and discovery. 
            Mimi is always ready for the next adventure and has a special talent for 
            finding magic in the most ordinary places! 🔍✨
          </p>
        </motion.div>
        
        <motion.div 
          className="text-center bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-xl shadow-lg border-2 border-orange-200"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.05, rotateY: -5 }}
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative mx-auto mb-4">
              <div className="w-24 h-24 bg-gradient-to-br from-peach-200 to-peach-400 rounded-full mx-auto relative overflow-hidden shadow-xl">
                {/* Face */}
                <div className="absolute inset-2 bg-gradient-to-br from-peach-100 to-peach-300 rounded-full">
                  {/* Eyes */}
                  <div className="absolute top-6 left-5 w-2 h-2 bg-brown-600 rounded-full"></div>
                  <div className="absolute top-6 right-5 w-2 h-2 bg-brown-600 rounded-full"></div>
                  {/* Nose */}
                  <div className="absolute top-9 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-pink-400 rounded-full"></div>
                  {/* Smile */}
                  <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-4 h-2 border-b-2 border-brown-600 rounded-full"></div>
                </div>
                {/* Hair/Pigtails */}
                <div className="absolute -top-1 left-2 w-6 h-6 bg-gradient-to-br from-brown-400 to-brown-600 rounded-full"></div>
                <div className="absolute -top-1 right-2 w-6 h-6 bg-gradient-to-br from-brown-400 to-brown-600 rounded-full"></div>
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-gradient-to-br from-brown-400 to-brown-600 rounded-full"></div>
              </div>
              {/* Adventure backpack */}
              <div className="absolute top-4 right-0 w-8 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg">
                <div className="absolute top-1 left-1 w-6 h-2 bg-green-500 rounded-full"></div>
                <div className="absolute bottom-1 left-1 w-6 h-6 bg-green-500 rounded"></div>
              </div>
            </div>
          </motion.div>
          <h4 className="text-2xl font-bold text-gray-800 mb-3">👧 Ashlie the Adventurer</h4>
          <p className="text-gray-600 leading-relaxed">
            Mimi's loving human sister who shares her passion for adventure. 
            Ashlie is creative, kind, and always ready to support Mimi in their 
            exciting journeys together! 🎒🌈
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CharactersTab;