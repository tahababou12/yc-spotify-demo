import React from 'react';
import { X, PlusSquare, Heart, Music } from 'lucide-react';
import { playlists } from '../data/songs';
import { usePlayer } from '../context/PlayerContext';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ isOpen, onClose }) => {
  const { currentPlaylist, setCurrentPlaylist } = usePlayer();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="absolute inset-0 bg-black/80" onClick={onClose}></div>
      <div className="absolute right-0 top-0 bottom-0 w-4/5 max-w-xs bg-background overflow-y-auto">
        <div className="p-4">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2 text-white">
              <Music size={24} className="text-primary" />
              <span className="text-lg font-bold">Musicify</span>
            </div>
            <button onClick={onClose} className="text-white p-2">
              <X size={24} />
            </button>
          </div>
          
          <div className="mb-4">
            <div className="flex items-center gap-2 text-textPrimary p-2 rounded-md hover:bg-secondary/20 cursor-pointer">
              <PlusSquare size={20} />
              <span>Create Playlist</span>
            </div>
            <div className="flex items-center gap-2 text-textPrimary p-2 rounded-md hover:bg-secondary/20 cursor-pointer">
              <Heart size={20} />
              <span>Liked Songs</span>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-divider">
            <h3 className="text-textSecondary text-sm uppercase font-bold mb-2">Playlists</h3>
            <ul className="space-y-1">
              {playlists.map(playlist => (
                <li key={playlist.id}>
                  <button 
                    onClick={() => {
                      setCurrentPlaylist(playlist.id);
                      onClose();
                    }}
                    className={`w-full text-left p-2 rounded-md hover:bg-secondary/20 transition-colors ${currentPlaylist === playlist.id ? 'text-primary' : 'text-textSecondary hover:text-white'}`}
                  >
                    {playlist.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
