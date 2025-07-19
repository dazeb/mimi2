@@ .. @@
   return (
     <aside role="complementary" aria-label="Content navigation tabs">
       <div className="flex flex-wrap justify-center gap-4 mb-8">
         {tabs.map((tab, index) => (
           <motion.button
             key={tab}
             onClick={() => onTabChange(tab)}
             className={`px-6 py-3 rounded-full font-medium transition-all duration-200 relative overflow-hidden ${
               activeTab === tab
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-xl'
                : 'bg-white text-gray-800 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-700 border-2 border-purple-200'
             }`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            aria-pressed={activeTab === tab}
            role="tab"
            aria-controls={`${tab}-panel`}
            id={`${tab}-tab`}
           >
            {/* Sparkle effect for active tab */}
            {activeTab === tab && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-300/20 to-pink-300/20 rounded-full"
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
             {tab.charAt(0).toUpperCase() + tab.slice(1)}
           </motion.button>
         ))}
       </div>
     </aside>
   );