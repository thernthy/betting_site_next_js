
import * as React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
const theme = createTheme({
  components: {
    MuiSwitch: {
      styleOverrides: {
        root: {
          borderRadius: 999, // Rounded border
        },
        switchBase: {
          padding: 6, // Adjust the padding
          '&.Mui-checked + .MuiSwitch-track': {
            backgroundColor: 'rgb(167 243 208)', // Change the track color when checked
          },
          '&.Mui-checked .MuiSwitch-thumb': {
            backgroundColor: 'rgb(52 211 153)', // Change the background color of the thumb when checked
          },
          '.MuiSwitch-thumb': {
            marginTop: '2px', // Adjust thumb position if needed
          },

        },
      },
    },
  },
});

const SwitchComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <Switch />
    </ThemeProvider>
  );
};

export default SwitchComponent;
