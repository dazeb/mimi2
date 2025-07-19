import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TabNavigation from './TabNavigation';
import TabContent from './TabContent';

 const InteractiveGuide: React.FC = () => {
   const [activeTab, setActiveTab] = useState('overview');
 }
 
   return (
    <section role="region" aria-labelledby="guide-heading" className="py-16 px-4 bg-white">
       <h2 id="guide-heading" className="sr-only">Interactive Adventure Guide</h2>
       <div className="max-w-6xl mx-auto">
         <motion.div 
           className="text-center mb-12"
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
         >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Interactive Adventure Guide</h2>
+          <h2 className="text-4xl font-bold text-gray-800 mb-4" id="guide-title">Interactive Adventure Guide</h2>
           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
             Explore the magical world of Mimi and Ashlie through our interactive guide
           </p>
         </motion.div>
 
         <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
         <TabContent activeTab={activeTab} />
       </div>
     </section>
   );

export default InteractiveGuide;