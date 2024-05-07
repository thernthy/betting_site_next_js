

import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { IconButton, Slider, Grid, Typography } from '@mui/material/';
import { PlayArrow, Pause, VolumeUp } from '@mui/icons-material/';

interface SoundPlayProps {
  url?: string; // URL of the sound file
}

const SoundPlay: React.FC<SoundPlayProps> = ({ url }) => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleVolumeChange = (event: any, newValue: number | number[]) => {
    setVolume(newValue as number);
  };

  return (
    <>
      {/* <Grid container spacing={2} alignItems="center">
        <Grid item>
          <IconButton onClick={handlePlayPause}>
            {playing ? <Pause /> : <PlayArrow />}
          </IconButton>
        </Grid>
        <Grid item xs>
          <ReactPlayer url={url? url : ""} playing={playing} volume={volume} />
        </Grid>
        <Grid item>
          <VolumeUp />
        </Grid>
        <Grid item xs>
          <Slider value={volume} min={0} max={1} step={0.01} onChange={handleVolumeChange} aria-labelledby="continuous-slider" />
        </Grid>
      </Grid> */}
      <div className='flex flex-row items-center justify-around gap-1 bg-gray-100 rounded-full px-2 py-1.5'>
        <div className='bg-sky-600 rounded-full text-white'>
          <IconButton onClick={handlePlayPause}>{playing ? <Pause /> : <PlayArrow />}
          </IconButton>
        </div>
        <div>
          0:22/0:30
        </div>
        <div className='w-2/5 mx-3 flex flex-row items-center'>
          <Slider value={volume} min={0} max={1} step={0.01} onChange={handleVolumeChange} aria-labelledby="continuous-slider" />
        </div>
        <div className=''>
           <VolumeUp />
        </div>
      </div>
    </>
  );
};

export default SoundPlay;
