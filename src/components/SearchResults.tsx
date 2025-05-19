import React from 'react';
import { Play } from 'lucide-react';
import { Song } from '../types';
import { usePlayer } from '../context/PlayerContext';

interface SearchResultsProps {
  results: Song[];
  query: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results, query }) => {
  const { setCurrentSong } = usePlayer();

  if (query === '') {
    return null;
  }

  if (results.length === 0) {
    return (
      <div className="p-6 text-center">
        <p className="text-textSecondary">No results found for "{query}"</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white mb-4">Search Results for "{query}"</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {results.map(song => (
          <div 
            key={song.id}
            className="bg-surface/40 hover:bg-surface/80 transition-colors p-4 rounded-md cursor-pointer group"
            onClick={() => setCurrentSong(song)}
          >
            <div className="relative mb-4">
              <img 
                src={song.cover} 
                alt={song.title} 
                className="w-full aspect-square object-cover rounded-md"
              />
              <button className="absolute bottom-2 right-2 bg-primary text-black rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:scale-105 transform">
                <Play size={20} className="ml-0.5" />
              </button>
            </div>
            <h3 className="text-white font-medium truncate">{song.title}</h3>
            <p className="text-textSecondary text-sm truncate">{song.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
