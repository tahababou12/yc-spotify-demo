export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: number;
  cover: string;
  audioSrc: string;
  license: string;
  attribution: string;
}

export interface Playlist {
  id: string;
  name: string;
  description: string;
  cover: string;
  songs: Song[];
}

export interface PlayerState {
  currentSong: Song | null;
  isPlaying: boolean;
  progress: number;
  volume: number;
}
