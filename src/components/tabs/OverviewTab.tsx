 const OverviewTab: React.FC = () => {
   return (
     <motion.div
       key="overview"
       initial={{ opacity: 0, x: -20 }}
       animate={{ opacity: 1, x: 0 }}
       exit={{ opacity: 0, x: 20 }}
       transition={{ duration: 0.3 }}
-      role="region"
-      aria-label="Series overview content"
     >
       <motion.h3 
-        className="text-xl font-bold mb-2"
+        className="text-xl font-bold mb-2"
+        id="overview-heading"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 0.2 }}
       >
         <span className="text-purple-700 font-bold">🌟 Series Overview 🌟</span>
       </motion.h3>
       <motion.p 
         className="text-gray-800 leading-relaxed"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay: 0.3 }}
+        aria-describedby="overview-heading"
       >