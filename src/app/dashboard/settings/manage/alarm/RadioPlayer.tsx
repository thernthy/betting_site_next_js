

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
      <Grid container spacing={2} alignItems="center">
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
      </Grid>
  );
};

export default SoundPlay;
