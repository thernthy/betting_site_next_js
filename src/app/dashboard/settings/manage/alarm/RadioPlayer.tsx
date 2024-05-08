import React, { useState, useRef } from 'react';
import { IconButton, Slider, Typography } from '@mui/material/';
import { PlayArrow, Pause, VolumeUp } from '@mui/icons-material/';
import ReactPlayer from 'react-player';

const SoundPlay: React.FC = () => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5);
  const [handleValumShow, setHandleValumShow] = useState<boolean>(false);
  const [speed, setSpeed] = useState<number>(1.0);
  const [duration, setDuration] = useState<number>(0);
  const [played, setPlayed] = useState<number>(0);

  const playerRef = useRef<ReactPlayer | null>(null);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleVolumeChange = (event: any, newValue: number | number[]) => {
    setVolume(newValue as number);
  };

  const handleSpeedChange = (event: any, newValue: number | number[]) => {
    setSpeed(newValue as number);
  };

  const handleDuration = (duration: number) => {
    setDuration(duration);
  };

  const handleProgress = (state: any) => {
    setPlayed(state.played);
    if (duration && state.played === duration) {
      setPlaying(false);
    }
  };

  const handleShshowingVolum = () => {
    setHandleValumShow(!handleValumShow);
  };

  const handleSeek = (event: any, newValue: number | number[]) => {
    setPlayed(newValue as number);
    if (playerRef.current) {
         playerRef.current.seekTo(newValue as number);
     }
  };

  const calculateStep = () => {
    return duration ? (duration - played < 1 ? 1 : 0.1) : 0;
  };

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };
  
  const handleCovertMaxValue  = (number:number) => {
    const minutes = Math.floor(number / 60);
    const remainingSeconds = Math.floor(number % 60);
    const value =  `${minutes}.${remainingSeconds.toString().padStart(2, '0')}`;
    return parseFloat(value)
  }

  return (
    <>
      <div className='flex flex-row items-center justify-start gap-1 bg-gray-100 rounded-full px-1 py-1.5 w-full relative'>
        <div className='bg-sky-600 rounded-full text-white'>
          <IconButton onClick={handlePlayPause}>{playing ? <Pause /> : <PlayArrow />}</IconButton>
        </div>
        <div className='text-sm mr-5 w-14'>
          <Typography variant="body2">{duration ? `${formatDuration(duration * played)}/${formatDuration(duration)}` : "0:00/0:00"}</Typography> 
        </div>
        <div className='flex flex-row items-center delay-100 transition-all mr-5'>
        {handleCovertMaxValue(duration)}
          <Slider
            value={played}
            min={0}
            max={handleCovertMaxValue(duration) || 0}
            step={0.01}
            onChange={(event, value) => handleSeek(event, Number(value))}
            sx={{ color: 'rgb(2 132 199)' }}
            aria-labelledby="progress-slider"
            valueLabelDisplay="auto"
            valueLabelFormat={(value) => formatDuration(value)}
            style={{ width: '50px' }}
          />
        </div>
        <div className='flex flex-row items-center delay-100 transition-all bg-gray-50 rounded-full px-2  py-1 absolute right-0'>
          
          <Slider
            value={volume}
            min={0}
            max={1}
            step={0.1}
            onChange={handleVolumeChange}
            sx={{ color: 'rgb(2 132 199)' }}
            aria-labelledby="continuous-slider"
            style={{ display: handleValumShow ? 'none' : 'block', width: '50px', margin: '0 20px', }}
          />
          <VolumeUp onMouseEnter={handleShshowingVolum} style={{ fontSize: '1.2rem', color: 'rgb(2 132 199)', }} />
        </div>
      </div>
      <ReactPlayer
        ref={playerRef}
        url={'/assets/sound/airport-call-157168.mp3'}
        playing={playing}
        volume={volume}
        playbackRate={speed}
        onDuration={handleDuration}
        onProgress={handleProgress}
        muted={!playing} // Mute the player if not playing
        style={{ display: 'none' }} // Hide the player
      />
    </>
  );
};

export default SoundPlay;
