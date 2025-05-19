import React from 'react';
import { Clock, Play } from 'lucide-react';
import { Playlist, Song } from '../types';
import { usePlayer } from '../context/PlayerContext';

interface PlaylistViewProps {
  playlist: Playlist;
}

const PlaylistView: React.FC<PlaylistViewProps> = ({ playlist }) => {
  const { setCurrentSong, playerState } = usePlayer();
  const { currentSong, isPlaying } = playerState;

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handlePlaySong = (song: Song) => {
    setCurrentSong(song);
  };

  return (
    <div className="pb-24 md:pb-0">
      {/* Playlist Header */}
      <div className="flex flex-col md:flex-row items-center gap-6 p-6">
        <img 
          src={playlist.cover} 
          alt={playlist.name} 
          className="w-48 h-48 object-cover shadow-lg"
        />
        <div>
          <p className="text-textSecondary text-sm uppercase font-bold">Playlist</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mt-2 mb-4">{playlist.name}</h1>
          <p className="text-textSecondary">{playlist.description}</p>
          <p className="text-textSecondary mt-2">{playlist.songs.length} songs</p>
        </div>
      </div>
      
      {/* Song List */}
      <div className="px-6">
        <div className="grid grid-cols-[auto_1fr_auto] md:grid-cols-[16px_4fr_3fr_2fr_1fr] gap-4 text-textSecondary text-sm border-b border-divider py-2 px-4">
          <span className="text-center">#</span>
          <span>Title</span>
          <span className="hidden md:block">Album</span>
          <span className="hidden md:block">License</span>
          <span className="flex items-center justify-end md:justify-center">
            <Clock size={16} />
          </span>
        </div>
        
        <div className="mt-2">
          {playlist.songs.map((song, index) => (
            <div 
              key={song.id}
              onClick={() => handlePlaySong(song)}
              className={`grid grid-cols-[auto_1fr_auto] md:grid-cols-[16px_4fr_3fr_2fr_1fr] gap-4 p-2 rounded-md hover:bg-white/10 cursor-pointer ${currentSong?.id === song.id ? 'bg-white/20' : ''}`}
            >
              <div className="flex items-center justify-center w-6">
                {currentSong?.id === song.id && isPlaying ? (
                  <span className="w-4 h-4 flex items-center justify-center">
                    <span className="block w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  </span>
                ) : (
                  <span className="text-textSecondary group-hover:hidden">{index + 1}</span>
                )}
              </div>
              
              <div className="flex items-center gap-3 min-w-0">
                <img 
                  src={song.cover} 
                  alt={song.title} 
                  className="h-10 w-10 object-cover"
                />
                <div className="truncate">
                  <p className={`font-medium truncate ${currentSong?.id === song.id ? 'text-primary' : 'text-white'}`}>
                    {song.title}
                  </p>
                  <p className="text-textSecondary text-sm truncate">{song.artist}</p>
                </div>
              </div>
              
              <div className="hidden md:flex items-center text-textSecondary truncate">
                {song.album}
              </div>
              
              <div className="hidden md:flex items-center text-textSecondary text-xs truncate">
                {song.license}
              </div>
              
              <div className="flex items-center justify-end md:justify-center text-textSecondary">
                {formatDuration(song.duration)}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Attribution Section */}
      <div className="mt-8 p-6 border-t border-divider">
        <h3 className="text-white font-bold mb-2">Music Attribution</h3>
        <div className="text-textSecondary text-sm space-y-1">
          {Array.from(new Set(playlist.songs.map(song => song.attribution))).map((attribution, index) => (
            <p key={index}>{attribution}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaylistView;
