import React from 'react';
import { Home, Search, Library, PlusSquare, Heart, Music } from 'lucide-react';
import { playlists } from '../data/songs';
import { usePlayer } from '../context/PlayerContext';

const Sidebar: React.FC = () => {
  const { currentPlaylist, setCurrentPlaylist } = usePlayer();

  return (
    <aside className="bg-black w-64 flex-shrink-0 h-full overflow-y-auto hidden md:block">
      <div className="p-6">
        <div className="flex items-center gap-2 text-white mb-8">
          <Music size={32} className="text-primary" />
          <span className="text-xl font-bold">Musicify</span>
        </div>
        
        <nav>
          <ul className="space-y-2 mb-6">
            <li>
              <a href="#" className="flex items-center gap-4 text-textPrimary hover:text-white transition-colors p-2 rounded-md hover:bg-secondary/20">
                <Home size={24} />
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-4 text-textPrimary hover:text-white transition-colors p-2 rounded-md hover:bg-secondary/20">
                <Search size={24} />
                <span>Search</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-4 text-textPrimary hover:text-white transition-colors p-2 rounded-md hover:bg-secondary/20">
                <Library size={24} />
                <span>Your Library</span>
              </a>
            </li>
          </ul>
          
          <div className="pt-4 border-t border-divider">
            <div className="flex items-center gap-2 text-textPrimary hover:text-white transition-colors p-2 rounded-md hover:bg-secondary/20 cursor-pointer">
              <PlusSquare size={24} />
              <span>Create Playlist</span>
            </div>
            <div className="flex items-center gap-2 text-textPrimary hover:text-white transition-colors p-2 rounded-md hover:bg-secondary/20 cursor-pointer">
              <Heart size={24} />
              <span>Liked Songs</span>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-divider">
            <h3 className="text-textSecondary text-sm uppercase font-bold mb-4">Playlists</h3>
            <ul className="space-y-2">
              {playlists.map(playlist => (
                <li key={playlist.id}>
                  <button 
                    onClick={() => setCurrentPlaylist(playlist.id)}
                    className={`w-full text-left p-2 rounded-md hover:bg-secondary/20 transition-colors ${currentPlaylist === playlist.id ? 'text-primary' : 'text-textSecondary hover:text-white'}`}
                  >
                    {playlist.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
