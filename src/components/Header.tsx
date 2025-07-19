 const Header: React.FC = () => {
   return (
-    <div className="w-full h-48 bg-gradient-to-r from-amber-100 to-orange-100 flex items-center justify-center overflow-hidden">
+    <header role="banner" aria-label="Site header" className="w-full h-48 bg-gradient-to-r from-amber-100 to-orange-100 flex items-center justify-center overflow-hidden">
       <img 
         src="https://cdn.dribbble.com/userupload/24818633/file/original-bdac0136c07d4780202c9b19ed7ecf79.jpg?resize=1600x1200" 
         alt="A little girl holding a gray cat - Children's book illustration" 
         className="w-full h-full object-cover object-center opacity-80"
       />
       <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
-    </div>
+    </header>
   );
 };