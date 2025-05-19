import React from 'react';
import { Home, Search, Library, Menu } from 'lucide-react';

interface MobileNavigationProps {
  onMenuClick: () => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ onMenuClick }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-divider md:hidden z-10">
      <div className="flex justify-around items-center h-16">
        <button className="flex flex-col items-center justify-center text-textSecondary hover:text-white p-2">
          <Home size={24} />
          <span className="text-xs mt-1">Home</span>
        </button>
        <button className="flex flex-col items-center justify-center text-textSecondary hover:text-white p-2">
          <Search size={24} />
          <span className="text-xs mt-1">Search</span>
        </button>
        <button className="flex flex-col items-center justify-center text-textSecondary hover:text-white p-2">
          <Library size={24} />
          <span className="text-xs mt-1">Library</span>
        </button>
        <button 
          onClick={onMenuClick}
          className="flex flex-col items-center justify-center text-textSecondary hover:text-white p-2"
        >
          <Menu size={24} />
          <span className="text-xs mt-1">More</span>
        </button>
      </div>
    </div>
  );
};

export default MobileNavigation;
