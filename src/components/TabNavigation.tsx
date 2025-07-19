import React from 'react';
import { motion } from 'framer-motion';

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs = ['overview', 'characters', 'books', 'activities'];

  return (
    <nav role="tablist" aria-label="Adventure guide navigation" className="mb-8 relative">
      {/* Decorative background line */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent transform -translate-y-1/2"></div>
      
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 relative z-10">
        {tabs.map((tab, index) => (
          <motion.button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all duration-300 relative overflow-hidden border-2 ${
              activeTab === tab
               ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg border-purple-500 scale-105'
               : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:text-purple-700 border-purple-200 hover:border-purple-300 hover:shadow-md'
            }`}
            whileHover={{ scale: activeTab === tab ? 1.05 : 1.08, y: -3 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            aria-selected={activeTab === tab}
            role="tab"
            aria-controls={`${tab}-panel`}
            id={`${tab}-tab`}
            tabIndex={activeTab === tab ? 0 : -1}
          >
            {/* Sparkle effect for active tab */}
            {activeTab === tab && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-300/30 to-pink-300/30 rounded-full"
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
            <span className="relative z-10 flex items-center gap-1 md:gap-2">
              {tab === 'overview' && '🏠'}
              {tab === 'characters' && '👫'}
              {tab === 'books' && '📚'}
              {tab === 'activities' && '🎨'}
              <span className="hidden sm:inline">{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
            </span>
          </motion.button>
        ))}
      </div>
    </nav>
  );
};

export default TabNavigation;