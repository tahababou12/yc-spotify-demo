import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { PlayerState, Song } from '../types';

interface PlayerContextType {
  playerState: PlayerState;
  setCurrentSong: (song: Song) => void;
  togglePlayPause: () => void;
  nextSong: () => void;
  prevSong: () => void;
  setProgress: (value: number) => void;
  setVolume: (value: number) => void;
  currentPlaylist: string | null;
  setCurrentPlaylist: (playlistId: string) => void;
}

const defaultPlayerState: PlayerState = {
  currentSong: null,
  isPlaying: false,
  progress: 0,
  volume: 0.7,
};

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const PlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [playerState, setPlayerState] = useState<PlayerState>(() => {
    // Load from localStorage if available
    const savedState = localStorage.getItem('playerState');
    return savedState ? JSON.parse(savedState) : defaultPlayerState;
  });
  
  const [currentPlaylist, setCurrentPlaylist] = useState<string | null>(() => {
    return localStorage.getItem('currentPlaylist');
  });
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  useEffect(() => {
    // Initialize audio element
    audioRef.current = new Audio();
    
    // Set initial volume
    if (audioRef.current) {
      audioRef.current.volume = playerState.volume;
    }
    
    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);
  
  // Update audio source when current song changes
  useEffect(() => {
    if (audioRef.current && playerState.currentSong) {
      audioRef.current.src = playerState.currentSong.audioSrc;
      
      if (playerState.isPlaying) {
        audioRef.current.play().catch(error => {
          console.error('Error playing audio:', error);
        });
      }
    }
  }, [playerState.currentSong]);
  
  // Handle play/pause state changes
  useEffect(() => {
    if (audioRef.current) {
      if (playerState.isPlaying) {
        audioRef.current.play().catch(error => {
          console.error('Error playing audio:', error);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [playerState.isPlaying]);
  
  // Update progress as song plays
  useEffect(() => {
    const updateProgress = () => {
      if (audioRef.current) {
        setPlayerState(prev => ({
          ...prev,
          progress: (audioRef.current?.currentTime || 0) / (audioRef.current?.duration || 1) * 100
        }));
      }
    };
    
    const handleEnded = () => {
      nextSong();
    };
    
    if (audioRef.current) {
      audioRef.current.addEventListener('timeupdate', updateProgress);
      audioRef.current.addEventListener('ended', handleEnded);
    }
    
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('timeupdate', updateProgress);
        audioRef.current.removeEventListener('ended', handleEnded);
      }
    };
  }, []);
  
  // Save state to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('playerState', JSON.stringify(playerState));
  }, [playerState]);
  
  // Save current playlist to localStorage
  useEffect(() => {
    if (currentPlaylist) {
      localStorage.setItem('currentPlaylist', currentPlaylist);
    } else {
      localStorage.removeItem('currentPlaylist');
    }
  }, [currentPlaylist]);
  
  // Update volume when it changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = playerState.volume;
    }
  }, [playerState.volume]);
  
  const setCurrentSong = (song: Song) => {
    setPlayerState({
      ...playerState,
      currentSong: song,
      isPlaying: true,
      progress: 0
    });
  };
  
  const togglePlayPause = () => {
    setPlayerState({
      ...playerState,
      isPlaying: !playerState.isPlaying
    });
  };
  
  const nextSong = () => {
    // This would need to be implemented with playlist logic
    console.log('Next song');
  };
  
  const prevSong = () => {
    // This would need to be implemented with playlist logic
    console.log('Previous song');
  };
  
  const setProgress = (value: number) => {
    if (audioRef.current && playerState.currentSong) {
      const newTime = (value / 100) * audioRef.current.duration;
      audioRef.current.currentTime = newTime;
      
      setPlayerState({
        ...playerState,
        progress: value
      });
    }
  };
  
  const setVolume = (value: number) => {
    setPlayerState({
      ...playerState,
      volume: value
    });
  };
  
  return (
    <PlayerContext.Provider value={{
      playerState,
      setCurrentSong,
      togglePlayPause,
      nextSong,
      prevSong,
      setProgress,
      setVolume,
      currentPlaylist,
      setCurrentPlaylist
    }}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (context === undefined) {
    throw new Error('usePlayer must be used within a PlayerProvider');
  }
  return context;
};
