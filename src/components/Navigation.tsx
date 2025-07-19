@@ .. @@
       <nav role="navigation" aria-label="Main navigation" className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white shadow-lg">
+      <nav role="navigation" aria-label="Main navigation" className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white shadow-xl relative overflow-hidden">
+        {/* Cartoon Background Pattern */}
+        <div className="absolute inset-0 opacity-10">
+          <div className="absolute top-2 left-10 w-6 h-6 bg-white rounded-full"></div>
+          <div className="absolute top-4 right-20 w-4 h-4 bg-white rounded-full"></div>
+          <div className="absolute bottom-2 left-1/3 w-5 h-5 bg-white rounded-full"></div>
+          <div className="absolute bottom-3 right-1/4 w-3 h-3 bg-white rounded-full"></div>
+        </div>
+        
         <motion.div 
           className="max-w-6xl mx-auto px-4 py-6"
           initial={{ y: -50, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ duration: 0.6, delay: 0.2 }}
         >
           <div className="flex items-center justify-between">
             <motion.div 
               className="flex items-center space-x-3"
               whileHover={{ scale: 1.05 }}
               transition={{ type: "spring", stiffness: 300 }}
             >
-              <Cat className="w-8 h-8" />
+              <motion.div
+                animate={{ rotate: [0, 10, -10, 0] }}
+                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
+              >
+                <Cat className="w-8 h-8 drop-shadow-lg" />
+              </motion.div>
               <h1 className="text-2xl font-bold">The Mimi & Ashlie Adventure Series</h1>
-              <Star className="w-8 h-8" />
+              <motion.div
+                animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
+                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
+              >
+                <Star className="w-8 h-8 drop-shadow-lg" />
+              </motion.div>
             </motion.div>
           </div>
           <motion.p 
-            className="mt-4 text-amber-100 text-center max-w-3xl mx-auto"
+            className="mt-4 text-white text-center max-w-3xl mx-auto text-lg font-medium drop-shadow-md"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.4 }}