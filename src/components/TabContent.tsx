@@ .. @@
 const TabContent: React.FC<TabContentProps> = ({ activeTab }) => {
   return (
-    <div 
+    <main 
       className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg min-h-[400px]"
       role="tabpanel"
       id={`${activeTab}-panel`}
       aria-labelledby={`${activeTab}-tab`}
+      tabIndex={0}
     >
       <AnimatePresence mode="wait">
         {activeTab === 'overview' && <OverviewTab />}
         {activeTab === 'characters' && <CharactersTab />}
         {activeTab === 'books' && <BooksTab />}
         {activeTab === 'activities' && <ActivitiesTab />}
       </AnimatePresence>
-    </div>
+    </main>
   );
 };