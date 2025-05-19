import { Playlist, Song } from '../types';

// These are placeholder songs with Creative Commons licenses
// In a real app, you would use actual CC-licensed music with proper attribution

const songs: Song[] = [
  {
    id: '1',
    title: 'Dreamy Reflection',
    artist: 'Ambient Waves',
    album: 'Peaceful Moments',
    duration: 187,
    cover: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909',
    audioSrc: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Tours/Enthusiast/Tours_-_01_-_Enthusiast.mp3',
    license: 'CC BY-NC-SA 4.0',
    attribution: 'Tours - "Enthusiast" is licensed under CC BY-NC-SA 4.0'
  },
  {
    id: '2',
    title: 'Ocean Breeze',
    artist: 'Nature Sounds',
    album: 'Coastal Vibes',
    duration: 214,
    cover: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee',
    audioSrc: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Chad_Crouch/Arps/Chad_Crouch_-_Shipping_Lanes.mp3',
    license: 'CC BY-NC 4.0',
    attribution: 'Chad Crouch - "Shipping Lanes" is licensed under CC BY-NC 4.0'
  },
  {
    id: '3',
    title: 'Mountain Echo',
    artist: 'Wilderness',
    album: 'Alpine Journey',
    duration: 198,
    cover: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
    audioSrc: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_01_-_Night_Owl.mp3',
    license: 'CC BY 3.0',
    attribution: 'Broke For Free - "Night Owl" is licensed under CC BY 3.0'
  },
  {
    id: '4',
    title: 'Urban Rhythm',
    artist: 'City Pulse',
    album: 'Downtown',
    duration: 243,
    cover: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a',
    audioSrc: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Chad_Crouch/Arps/Chad_Crouch_-_Shipping_Lanes.mp3',
    license: 'CC BY-NC 4.0',
    attribution: 'Chad Crouch - "Shipping Lanes" is licensed under CC BY-NC 4.0'
  },
  {
    id: '5',
    title: 'Midnight Jazz',
    artist: 'Smooth Quartet',
    album: 'Late Hours',
    duration: 176,
    cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4',
    audioSrc: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Tours/Enthusiast/Tours_-_01_-_Enthusiast.mp3',
    license: 'CC BY-NC-SA 4.0',
    attribution: 'Tours - "Enthusiast" is licensed under CC BY-NC-SA 4.0'
  },
  {
    id: '6',
    title: 'Electric Dreams',
    artist: 'Synth Wave',
    album: 'Neon Lights',
    duration: 210,
    cover: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909',
    audioSrc: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Chad_Crouch/Arps/Chad_Crouch_-_Shipping_Lanes.mp3',
    license: 'CC BY-NC 4.0',
    attribution: 'Chad Crouch - "Shipping Lanes" is licensed under CC BY-NC 4.0'
  },
  {
    id: '7',
    title: 'Forest Whispers',
    artist: 'Nature Sounds',
    album: 'Woodland Tales',
    duration: 228,
    cover: 'https://images.unsplash.com/photo-1448375240586-882707db888b',
    audioSrc: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_01_-_Night_Owl.mp3',
    license: 'CC BY 3.0',
    attribution: 'Broke For Free - "Night Owl" is licensed under CC BY 3.0'
  },
  {
    id: '8',
    title: 'Rainy Day',
    artist: 'Ambient Waves',
    album: 'Weather Moods',
    duration: 195,
    cover: 'https://images.unsplash.com/photo-1534274988757-a28bf1a57c17',
    audioSrc: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Tours/Enthusiast/Tours_-_01_-_Enthusiast.mp3',
    license: 'CC BY-NC-SA 4.0',
    attribution: 'Tours - "Enthusiast" is licensed under CC BY-NC-SA 4.0'
  },
  {
    id: '9',
    title: 'Sunset Drive',
    artist: 'Coastal Highway',
    album: 'Ocean Road',
    duration: 234,
    cover: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d',
    audioSrc: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Chad_Crouch/Arps/Chad_Crouch_-_Shipping_Lanes.mp3',
    license: 'CC BY-NC 4.0',
    attribution: 'Chad Crouch - "Shipping Lanes" is licensed under CC BY-NC 4.0'
  },
  {
    id: '10',
    title: 'Morning Light',
    artist: 'Dawn Chorus',
    album: 'New Day',
    duration: 189,
    cover: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8',
    audioSrc: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_01_-_Night_Owl.mp3',
    license: 'CC BY 3.0',
    attribution: 'Broke For Free - "Night Owl" is licensed under CC BY 3.0'
  },
  {
    id: '11',
    title: 'Digital Horizon',
    artist: 'Tech Beats',
    album: 'Future Sound',
    duration: 205,
    cover: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d',
    audioSrc: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Tours/Enthusiast/Tours_-_01_-_Enthusiast.mp3',
    license: 'CC BY-NC-SA 4.0',
    attribution: 'Tours - "Enthusiast" is licensed under CC BY-NC-SA 4.0'
  },
  {
    id: '12',
    title: 'Starry Night',
    artist: 'Cosmic Dreams',
    album: 'Galaxy View',
    duration: 222,
    cover: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a',
    audioSrc: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Chad_Crouch/Arps/Chad_Crouch_-_Shipping_Lanes.mp3',
    license: 'CC BY-NC 4.0',
    attribution: 'Chad Crouch - "Shipping Lanes" is licensed under CC BY-NC 4.0'
  },
  {
    id: '13',
    title: 'Urban Jungle',
    artist: 'City Pulse',
    album: 'Metropolitan',
    duration: 197,
    cover: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df',
    audioSrc: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_01_-_Night_Owl.mp3',
    license: 'CC BY 3.0',
    attribution: 'Broke For Free - "Night Owl" is licensed under CC BY 3.0'
  },
  {
    id: '14',
    title: 'Desert Wind',
    artist: 'Nomadic Sounds',
    album: 'Dunes',
    duration: 231,
    cover: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0',
    audioSrc: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Tours/Enthusiast/Tours_-_01_-_Enthusiast.mp3',
    license: 'CC BY-NC-SA 4.0',
    attribution: 'Tours - "Enthusiast" is licensed under CC BY-NC-SA 4.0'
  },
  {
    id: '15',
    title: 'Autumn Leaves',
    artist: 'Seasonal Moods',
    album: 'Fall Colors',
    duration: 184,
    cover: 'https://images.unsplash.com/photo-1507371341162-763b5e419408',
    audioSrc: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Chad_Crouch/Arps/Chad_Crouch_-_Shipping_Lanes.mp3',
    license: 'CC BY-NC 4.0',
    attribution: 'Chad Crouch - "Shipping Lanes" is licensed under CC BY-NC 4.0'
  },
  {
    id: '16',
    title: 'Winter Silence',
    artist: 'Seasonal Moods',
    album: 'Snow Covered',
    duration: 219,
    cover: 'https://images.unsplash.com/photo-1483664852095-d6cc6870702d',
    audioSrc: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_01_-_Night_Owl.mp3',
    license: 'CC BY 3.0',
    attribution: 'Broke For Free - "Night Owl" is licensed under CC BY 3.0'
  },
  {
    id: '17',
    title: 'Spring Bloom',
    artist: 'Seasonal Moods',
    album: 'New Growth',
    duration: 193,
    cover: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946',
    audioSrc: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Tours/Enthusiast/Tours_-_01_-_Enthusiast.mp3',
    license: 'CC BY-NC-SA 4.0',
    attribution: 'Tours - "Enthusiast" is licensed under CC BY-NC-SA 4.0'
  },
  {
    id: '18',
    title: 'Summer Heat',
    artist: 'Seasonal Moods',
    album: 'Beach Days',
    duration: 226,
    cover: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    audioSrc: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Chad_Crouch/Arps/Chad_Crouch_-_Shipping_Lanes.mp3',
    license: 'CC BY-NC 4.0',
    attribution: 'Chad Crouch - "Shipping Lanes" is licensed under CC BY-NC 4.0'
  },
  {
    id: '19',
    title: 'Lunar Phase',
    artist: 'Cosmic Dreams',
    album: 'Moon Cycle',
    duration: 212,
    cover: 'https://images.unsplash.com/photo-1532693322450-2cb5c511067d',
    audioSrc: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_01_-_Night_Owl.mp3',
    license: 'CC BY 3.0',
    attribution: 'Broke For Free - "Night Owl" is licensed under CC BY 3.0'
  },
  {
    id: '20',
    title: 'Solar Flare',
    artist: 'Cosmic Dreams',
    album: 'Star System',
    duration: 238,
    cover: 'https://images.unsplash.com/photo-1532693322450-2cb5c511067d',
    audioSrc: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Tours/Enthusiast/Tours_-_01_-_Enthusiast.mp3',
    license: 'CC BY-NC-SA 4.0',
    attribution: 'Tours - "Enthusiast" is licensed under CC BY-NC-SA 4.0'
  },
];

export const playlists: Playlist[] = [
  {
    id: 'playlist-1',
    name: 'Ambient Relaxation',
    description: 'Calm and peaceful tracks to help you unwind and relax',
    cover: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad',
    songs: songs.filter(song => 
      song.artist === 'Ambient Waves' || 
      song.artist === 'Nature Sounds' || 
      song.album === 'Peaceful Moments'
    )
  },
  {
    id: 'playlist-2',
    name: 'Urban Beats',
    description: 'Rhythmic tracks inspired by city life and urban landscapes',
    cover: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df',
    songs: songs.filter(song => 
      song.artist === 'City Pulse' || 
      song.album === 'Downtown' || 
      song.album === 'Metropolitan'
    )
  },
  {
    id: 'playlist-3',
    name: 'Cosmic Journey',
    description: 'Explore the universe with these space-themed tracks',
    cover: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564',
    songs: songs.filter(song => 
      song.artist === 'Cosmic Dreams' || 
      song.title.includes('Star') || 
      song.album.includes('Galaxy')
    )
  },
  {
    id: 'playlist-4',
    name: 'Seasonal Moods',
    description: 'Music that captures the essence of each season',
    cover: 'https://images.unsplash.com/photo-1507371341162-763b5e419408',
    songs: songs.filter(song => 
      song.artist === 'Seasonal Moods' || 
      song.title.includes('Spring') || 
      song.title.includes('Summer') || 
      song.title.includes('Autumn') || 
      song.title.includes('Winter')
    )
  },
  {
    id: 'playlist-5',
    name: 'All Songs',
    description: 'Complete collection of all available tracks',
    cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4',
    songs: songs
  }
];

export default songs;
