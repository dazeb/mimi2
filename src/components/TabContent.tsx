import React from 'react';
import { AnimatePresence } from 'framer-motion';
import OverviewTab from './tabs/OverviewTab';
import CharactersTab from './tabs/CharactersTab';
import BooksTab from './tabs/BooksTab';
import ActivitiesTab from './tabs/ActivitiesTab';

interface TabContentProps {
  activeTab: string;
}

const TabContent: React.FC<TabContentProps> = ({ activeTab }) => {
  return (
    <main 
      className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg min-h-[400px]"
      role="tabpanel"
      id={`${activeTab}-panel`}
      aria-labelledby={`${activeTab}-tab`}
      tabIndex={0}
    >
      <AnimatePresence mode="wait">
        {activeTab === 'overview' && <OverviewTab />}
        {activeTab === 'characters' && <CharactersTab />}
        {activeTab === 'books' && <BooksTab />}
        {activeTab === 'activities' && <ActivitiesTab />}
      </AnimatePresence>
    </main>
  );
};

export default TabContent;