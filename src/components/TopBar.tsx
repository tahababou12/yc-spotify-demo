import React, { useState } from 'react';
import { Search, ChevronLeft, ChevronRight, User } from 'lucide-react';

interface TopBarProps {
  onSearch: (query: string) => void;
}

const TopBar: React.FC<TopBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="bg-background/95 backdrop-blur-sm sticky top-0 z-10 px-4 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="hidden md:flex gap-2">
          <button className="bg-black/70 rounded-full p-1">
            <ChevronLeft size={24} className="text-textSecondary" />
          </button>
          <button className="bg-black/70 rounded-full p-1">
            <ChevronRight size={24} className="text-textSecondary" />
          </button>
        </div>
        
        <form onSubmit={handleSearch} className="relative ml-2">
          <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-textSecondary" />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-surface/80 text-white rounded-full py-2 pl-10 pr-4 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </form>
      </div>
      
      <div className="flex items-center gap-2">
        <button className="bg-black rounded-full p-1 flex items-center justify-center">
          <User size={24} className="text-textPrimary" />
        </button>
      </div>
    </div>
  );
};

export default TopBar;
