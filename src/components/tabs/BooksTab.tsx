import React from 'react';
import { motion } from 'framer-motion';

const BooksTab: React.FC = () => {
  return (
    <motion.div
      key="books"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
      role="region"
      aria-label="Book collection"
    >
      <motion.h3 
        className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-8 text-center"
        id="books-heading"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        📚 Adventure Collection 📚
      </motion.h3>
      
      <div className="grid md:grid-cols-3 gap-6" role="group" aria-labelledby="books-heading">
        {/* Book content would go here */}
        <motion.div
          className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h4 className="text-xl font-bold text-purple-700 mb-3">Book 1: The Magic Garden</h4>
          <p className="text-gray-700">Discover the secrets of friendship in this enchanting tale.</p>
        </motion.div>
        
        <motion.div
          className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h4 className="text-xl font-bold text-blue-700 mb-3">Book 2: Ocean Adventures</h4>
          <p className="text-gray-700">Dive into underwater mysteries with Mimi and Ashlie.</p>
        </motion.div>
        
        <motion.div
          className="bg-gradient-to-br from-pink-100 to-yellow-100 p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h4 className="text-xl font-bold text-pink-700 mb-3">Book 3: Sky High Dreams</h4>
          <p className="text-gray-700">Soar through the clouds on an amazing journey.</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BooksTab;