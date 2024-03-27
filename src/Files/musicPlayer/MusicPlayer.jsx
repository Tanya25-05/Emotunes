// MusicPlayer.js
import React, { useState } from 'react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);

  const playPause = () => {
    setIsPlaying(!isPlaying);
  };

  const selectSong = (song) => {
    setCurrentSong(song);
    setIsPlaying(true); // Automatically play the selected song
  };

  return (
    <div className="music-player">
      <div className="player-controls">
        <button onClick={playPause}>{isPlaying ? 'Pause' : 'Play'}</button>
      </div>
      <div className="playlist">
        <h2>Playlist</h2>
        <ul>
          <li onClick={() => selectSong({ title: 'Song 1', artist: 'Artist 1' })}>Song 1 - Artist 1</li>
          <li onClick={() => selectSong({ title: 'Song 2', artist: 'Artist 2' })}>Song 2 - Artist 2</li>
          {/* Add more songs here */}
        </ul>
      </div>
      <div className="currently-playing">
        {currentSong && (
          <>
            <h2>Currently Playing</h2>
            <p>{currentSong.title} - {currentSong.artist}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default MusicPlayer;
