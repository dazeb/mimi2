@@ .. @@
                   <motion.div
                     whileHover={{ scale: 1.1, rotate: 5 }}
                     transition={{ type: "spring", stiffness: 300 }}
                   >
-                    <Cat className="w-24 h-24 text-orange-600 mx-auto mb-4" />
+                    <div className="relative mx-auto mb-4">
+                      <div className="w-24 h-24 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full mx-auto relative overflow-hidden shadow-xl">
+                        {/* Cat face */}
+                        <div className="absolute inset-2 bg-gradient-to-br from-gray-200 to-gray-400 rounded-full">
+                          {/* Eyes */}
+                          <div className="absolute top-6 left-4 w-3 h-3 bg-green-400 rounded-full">
+                            <div className="absolute top-0.5 left-0.5 w-2 h-2 bg-green-500 rounded-full">
+                              <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white rounded-full"></div>
+                            </div>
+                          </div>
+                          <div className="absolute top-6 right-4 w-3 h-3 bg-green-400 rounded-full">
+                            <div className="absolute top-0.5 left-0.5 w-2 h-2 bg-green-500 rounded-full">
+                              <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white rounded-full"></div>
+                            </div>
+                          </div>
+                          {/* Nose */}
+                          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-2 h-1.5 bg-pink-400 rounded-full"></div>
+                          {/* Mouth */}
+                          <div className="absolute top-11 left-1/2 transform -translate-x-1/2">
+                            <div className="w-1 h-2 bg-gray-600 rounded-full"></div>
+                          </div>
+                          {/* Whiskers */}
+                          <div className="absolute top-9 left-1 w-4 h-0.5 bg-gray-600 rounded-full transform -rotate-12"></div>
+                          <div className="absolute top-11 left-1 w-4 h-0.5 bg-gray-600 rounded-full transform rotate-12"></div>
+                          <div className="absolute top-9 right-1 w-4 h-0.5 bg-gray-600 rounded-full transform rotate-12"></div>
+                          <div className="absolute top-11 right-1 w-4 h-0.5 bg-gray-600 rounded-full transform -rotate-12"></div>
+                        </div>
+                        {/* Ears */}
+                        <div className="absolute -top-2 left-3 w-4 h-4 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full transform rotate-45"></div>
+                        <div className="absolute -top-2 right-3 w-4 h-4 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full transform rotate-45"></div>
+                      </div>
+                      {/* Explorer hat */}
+                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-gradient-to-br from-brown-400 to-brown-600 rounded-full">
+                        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-12 h-4 bg-brown-500 rounded-full"></div>
+                      </div>
+                    </div>
                   </motion.div>
                   <h4 className="text-2xl font-bold text-gray-800 mb-3">Mimi</h4>
                   <p className="text-gray-600 leading-relaxed">
@@ -54,7 +95,32 @@
                   <motion.div
                     whileHover={{ scale: 1.1, rotate: -5 }}
                     transition={{ type: "spring", stiffness: 300 }}
                   >
-                    <User className="w-24 h-24 text-amber-600 mx-auto mb-4" />
+                    <div className="relative mx-auto mb-4">
+                      <div className="w-24 h-24 bg-gradient-to-br from-peach-200 to-peach-400 rounded-full mx-auto relative overflow-hidden shadow-xl">
+                        {/* Face */}
+                        <div className="absolute inset-2 bg-gradient-to-br from-peach-100 to-peach-300 rounded-full">
+                          {/* Eyes */}
+                          <div className="absolute top-6 left-5 w-2 h-2 bg-brown-600 rounded-full"></div>
+                          <div className="absolute top-6 right-5 w-2 h-2 bg-brown-600 rounded-full"></div>
+                          {/* Nose */}
+                          <div className="absolute top-9 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-pink-400 rounded-full"></div>
+                          {/* Smile */}
+                          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-4 h-2 border-b-2 border-brown-600 rounded-full"></div>
+                        </div>
+                        {/* Hair/Pigtails */}
+                        <div className="absolute -top-1 left-2 w-6 h-6 bg-gradient-to-br from-brown-400 to-brown-600 rounded-full"></div>
+                        <div className="absolute -top-1 right-2 w-6 h-6 bg-gradient-to-br from-brown-400 to-brown-600 rounded-full"></div>
+                        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-gradient-to-br from-brown-400 to-brown-600 rounded-full"></div>
+                      </div>
+                      {/* Adventure backpack */}
+                      <div className="absolute top-4 right-0 w-8 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg">
+                        <div className="absolute top-1 left-1 w-6 h-2 bg-green-500 rounded-full"></div>
+                        <div className="absolute bottom-1 left-1 w-6 h-6 bg-green-500 rounded"></div>
+                      </div>
+                    </div>
                   </motion.div>
                   <h4 className="text-2xl font-bold text-gray-800 mb-3">Ashlie</h4>
                   <p className="text-gray-600 leading-relaxed">