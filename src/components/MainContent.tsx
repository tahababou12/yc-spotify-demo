import React, { useState } from 'react';
import TopBar from './TopBar';
import PlaylistView from './PlaylistView';
import SearchResults from './SearchResults';
import { playlists } from '../data/songs';
import { usePlayer } from '../context/PlayerContext';
import { Song } from '../types';

const MainContent: React.FC = () => {
  const { currentPlaylist } = usePlayer();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Song[]>([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }
    
    // Search across all playlists
    const results = playlists
      .flatMap(playlist => playlist.songs)
      .filter((song, index, self) => 
        // Remove duplicates
        index === self.findIndex(s => s.id === song.id) &&
        // Match title, artist, or album
        (song.title.toLowerCase().includes(query.toLowerCase()) ||
         song.artist.toLowerCase().includes(query.toLowerCase()) ||
         song.album.toLowerCase().includes(query.toLowerCase()))
      );
    
    setSearchResults(results);
  };

  const currentPlaylistData = currentPlaylist 
    ? playlists.find(p => p.id === currentPlaylist) 
    : playlists[0];

  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-b from-secondary/20 to-background">
      <TopBar onSearch={handleSearch} />
      
      {searchQuery ? (
        <SearchResults results={searchResults} query={searchQuery} />
      ) : (
        currentPlaylistData && <PlaylistView playlist={currentPlaylistData} />
      )}
    </div>
  );
};

export default MainContent;
