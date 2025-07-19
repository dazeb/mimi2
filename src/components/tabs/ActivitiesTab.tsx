import React from 'react';
import { motion } from 'framer-motion';

const ActivitiesTab: React.FC = () => {
  return (
    <motion.div
      key="activities"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
      role="region"
      aria-label="Interactive activities"
    >
      <motion.h3 
        className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-8 text-center"
        id="activities-heading"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        🎨 Fun Activities 🎨
      </motion.h3>
      
      <div className="grid md:grid-cols-2 gap-8" role="group" aria-labelledby="activities-heading">
        <motion.div
          className="bg-gradient-to-br from-yellow-100 to-orange-100 p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h4 className="text-xl font-bold text-orange-700 mb-3">🖍️ Coloring Pages</h4>
          <p className="text-gray-700 mb-4">Download and print beautiful coloring pages featuring Mimi and Ashlie's adventures.</p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors">
            Download Pages
          </button>
        </motion.div>
        
        <motion.div
          className="bg-gradient-to-br from-green-100 to-blue-100 p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h4 className="text-xl font-bold text-green-700 mb-3">🧩 Puzzles & Games</h4>
          <p className="text-gray-700 mb-4">Interactive puzzles and games to enhance learning and fun.</p>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors">
            Play Games
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ActivitiesTab;