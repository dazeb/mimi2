 const BooksTab: React.FC = () => {
   return (
     <motion.div
       key="books"
       initial={{ opacity: 0, x: -20 }}
       animate={{ opacity: 1, x: 0 }}
       exit={{ opacity: 0, x: 20 }}
       transition={{ duration: 0.3 }}
-      role="region"
-      aria-label="Book collection"
     >
       <motion.h3 
-        className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-8 text-center"
+        className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-8 text-center"
+        id="books-heading"
         initial={{ opacity: 0, y: -20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay: 0.2 }}
       >
         📚 Adventure Collection 📚
       </motion.h3>
       
-      <div className="grid md:grid-cols-3 gap-6">
+      <div className="grid md:grid-cols-3 gap-6" role="group" aria-labelledby="books-heading">