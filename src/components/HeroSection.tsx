@@ .. @@
         {/* Background Image */}
         <div className="absolute inset-0 z-0">
           <img 
             src="/literacy-banner.png" 
             alt="Children with books - literacy background" 
             className="w-full h-full object-cover opacity-20"
           />
-          <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 via-orange-50/80 to-red-50/80"></div>
+          <div className="absolute inset-0 bg-gradient-to-br from-sky-100/90 via-purple-50/90 to-pink-100/90"></div>
+          
+          {/* Floating Cartoon Elements */}
+          <div className="absolute inset-0 overflow-hidden pointer-events-none">
+            {/* Floating Books */}
+            <div className="absolute top-20 left-1/4 animate-float">
+              <div className="w-12 h-16 bg-gradient-to-br from-red-400 to-red-500 rounded-lg shadow-lg transform rotate-12">
+                <div className="w-full h-2 bg-red-600 rounded-t-lg"></div>
+              </div>
+            </div>
+            <div className="absolute top-32 right-1/3 animate-float-delayed">
+              <div className="w-10 h-14 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg shadow-lg transform -rotate-6">
+                <div className="w-full h-2 bg-blue-600 rounded-t-lg"></div>
+              </div>
+            </div>
+            
+            {/* Cartoon Clouds */}
+            <div className="absolute top-10 right-20 animate-float-slow">
+              <div className="flex items-center">
+                <div className="w-8 h-8 bg-white rounded-full shadow-sm"></div>
+                <div className="w-12 h-12 bg-white rounded-full shadow-sm -ml-2"></div>
+                <div className="w-10 h-10 bg-white rounded-full shadow-sm -ml-3"></div>
+              </div>
+            </div>
+            
+            {/* Magical Sparkles */}
+            <div className="absolute top-1/4 left-1/3 animate-twinkle">
+              <div className="w-3 h-3 bg-yellow-300 rounded-full shadow-lg"></div>
+            </div>
+            <div className="absolute top-1/3 right-1/4 animate-twinkle-delayed">
+              <div className="w-2 h-2 bg-pink-300 rounded-full shadow-lg"></div>
+            </div>
+            <div className="absolute bottom-1/3 left-1/5 animate-twinkle">
+              <div className="w-4 h-4 bg-purple-300 rounded-full shadow-lg"></div>
+            </div>
+            
+            {/* Cartoon Flowers */}
+            <div className="absolute bottom-20 left-10 animate-sway">
+              <div className="relative">
+                <div className="w-8 h-8 bg-pink-400 rounded-full"></div>
+                <div className="absolute top-1 left-1 w-6 h-6 bg-pink-300 rounded-full"></div>
+                <div className="absolute top-2 left-2 w-4 h-4 bg-yellow-300 rounded-full"></div>
+                <div className="w-2 h-8 bg-green-400 mx-auto"></div>
+              </div>
+            </div>
+            <div className="absolute bottom-16 right-16 animate-sway-delayed">
+              <div className="relative">
+                <div className="w-6 h-6 bg-purple-400 rounded-full"></div>
+                <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-purple-300 rounded-full"></div>
+                <div className="absolute top-1 left-1 w-3 h-3 bg-yellow-300 rounded-full"></div>
+                <div className="w-1.5 h-6 bg-green-400 mx-auto"></div>
+              </div>
+            </div>
+          </div>
         </div>
         
         {/* Decorative Elements */}
-        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-200 rounded-full opacity-20 animate-bounce z-10"></div>
+        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full opacity-80 animate-bounce z-10 shadow-lg">
+          <div className="absolute inset-2 bg-yellow-200 rounded-full"></div>
+          <div className="absolute inset-4 bg-yellow-100 rounded-full"></div>
+        </div>
-        <div className="absolute top-32 right-16 w-16 h-16 bg-orange-200 rounded-full opacity-20 animate-pulse z-10"></div>
+        <div className="absolute top-32 right-16 w-16 h-16 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full opacity-80 animate-pulse z-10 shadow-lg">
+          <div className="absolute inset-2 bg-orange-200 rounded-full"></div>
+        </div>
-        <div className="absolute bottom-20 left-20 w-12 h-12 bg-red-200 rounded-full opacity-20 animate-bounce delay-300 z-10"></div>
+        <div className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-br from-pink-300 to-pink-400 rounded-full opacity-80 animate-bounce delay-300 z-10 shadow-lg">
+          <div className="absolute inset-1 bg-pink-200 rounded-full"></div>
+        </div>
-        <div className="absolute bottom-32 right-12 w-14 h-14 bg-amber-200 rounded-full opacity-20 animate-pulse delay-150 z-10"></div>
+        <div className="absolute bottom-32 right-12 w-14 h-14 bg-gradient-to-br from-purple-300 to-purple-400 rounded-full opacity-80 animate-pulse delay-150 z-10 shadow-lg">
+          <div className="absolute inset-1 bg-purple-200 rounded-full"></div>
+        </div>