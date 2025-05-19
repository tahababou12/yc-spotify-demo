import React from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react';
import { usePlayer } from '../context/PlayerContext';

const NowPlaying: React.FC = () => {
  const { playerState, togglePlayPause, nextSong, prevSong, setProgress, setVolume } = usePlayer();
  const { currentSong, isPlaying, progress, volume } = playerState;

  if (!currentSong) {
    return (
      <div className="bg-surface border-t border-divider h-20 px-4 flex items-center justify-center text-textSecondary">
        <p>No track selected</p>
      </div>
    );
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const currentTime = (progress / 100) * currentSong.duration;

  return (
    <div className="bg-surface border-t border-divider h-20 px-4 flex items-center justify-between">
      {/* Song Info */}
      <div className="flex items-center gap-3 w-1/4 min-w-[180px]">
        <img 
          src={currentSong.cover} 
          alt={currentSong.title} 
          className="h-14 w-14 object-cover rounded"
        />
        <div className="truncate">
          <h4 className="text-white text-sm font-medium truncate">{currentSong.title}</h4>
          <p className="text-textSecondary text-xs truncate">{currentSong.artist}</p>
        </div>
      </div>
      
      {/* Player Controls */}
      <div className="flex flex-col items-center justify-center flex-1 max-w-md">
        <div className="flex items-center gap-4 mb-2">
          <button 
            onClick={prevSong}
            className="text-textSecondary hover:text-white transition-colors"
          >
            <SkipBack size={20} />
          </button>
          <button 
            onClick={togglePlayPause}
            className="bg-white rounded-full p-2 text-black hover:scale-105 transition-transform"
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
          </button>
          <button 
            onClick={nextSong}
            className="text-textSecondary hover:text-white transition-colors"
          >
            <SkipForward size={20} />
          </button>
        </div>
        
        <div className="w-full flex items-center gap-2 text-xs">
          <span className="text-textSecondary w-10 text-right">
            {formatTime(currentTime)}
          </span>
          <div className="flex-1 relative">
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={(e) => setProgress(Number(e.target.value))}
              className="w-full h-1 bg-secondary/30 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
            />
            <div 
              className="absolute top-0 left-0 h-1 bg-white rounded-full pointer-events-none" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="text-textSecondary w-10">
            {formatTime(currentSong.duration)}
          </span>
        </div>
      </div>
      
      {/* Volume Control */}
      <div className="hidden md:flex items-center gap-2 w-1/4 justify-end">
        <button className="text-textSecondary hover:text-white transition-colors">
          {volume > 0 ? <Volume2 size={20} /> : <VolumeX size={20} />}
        </button>
        <div className="w-24 relative">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="w-full h-1 bg-secondary/30 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
          />
          <div 
            className="absolute top-0 left-0 h-1 bg-white rounded-full pointer-events-none" 
            style={{ width: `${volume * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default NowPlaying;
