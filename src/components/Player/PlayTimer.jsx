import React, { useState, useEffect } from 'react';
import Slider from '@mui/material/Slider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red } from '@mui/material/colors';
const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: red[500],
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});
const PlayTimer = ({ songData }) => {
  return (
    <>
      <div className='w-fit flex gap-4 items-center text-white   '>
        <div className='text-xs'>{songData.currentTime}</div>
        <div className='w-96 p-0 flex items-center'>
          <ThemeProvider theme={theme}>
            <Slider
              valueLabelDisplay="off"
              aria-label="custom thumb label"
              color="primary"
              value={songData.count}
              size="small"
            />
          </ThemeProvider>
        </div>
        <div className='text-xs'>{songData.trackLength}</div>
      </div>
    </>
  );
}

export default PlayTimer;
