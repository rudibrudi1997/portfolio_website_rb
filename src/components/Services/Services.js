import React from "react";
import './services.css';
import WebIcon from '@mui/icons-material/Web';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import AndroidIcon from '@mui/icons-material/Android';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import { Grid } from "@material-ui/core";
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { spacing } from '@mui/system';

const commonStyles = {
  bgcolor: 'background.paper',
  border: 5,
};

const theme1 = createTheme({
  typography: {
    // Tell MUI what the font-size on the html element is.
    fontSize: 20,
    textTransform: 'capitalize',
  },
});
const theme2 = createTheme({
  typography: {
    // Tell MUI what the font-size on the html element is.
    fontSize: 16,
    textTransform: 'capitalize',
    spacing: 8,
  },
});

const Services = () => {
  return (
    <section id="services" className="service">
    <div className="title">
    <h3>Services</h3>
    </div>
    
    <Grid container direction="row" alignItems="center" justifyContent="center" spacing={1}>
    <Grid item>
    <Box sx={{
        width: 400,
        height: 300,
        backgroundColor: 'white',
        '&:hover': {...commonStyles, 
          backgroundColor: '#07B7EF',
          borderColor: '#093A83'
        },
      }}>
      <WebIcon sx={{ mx: 2, fontSize: 60, marginLeft: 21, marginTop: 5 }}/>
      <ThemeProvider theme={theme1}>
        <Typography align="center" sx={{ m: 2 }}>Responsive Web Design</Typography>
      </ThemeProvider>
      <ThemeProvider theme={theme2}>
        <Typography align="center" sx={{ m: 2 }}>no matter on which device - 
      every website has to be responsive and besides 
      looking good it also has to work well</Typography>
      </ThemeProvider>
    </Box>
    </Grid>
    <Grid item>
    <Box sx={{
        width: 400,
        height: 300,
        backgroundColor: 'white',
        '&:hover': {...commonStyles, 
          backgroundColor: '#07B7EF',
          borderColor: '#093A83'
        },
      }}>
      <DeveloperBoardIcon sx={{ mx: 2, fontSize: 60, marginLeft: 21, marginTop: 5 }}/>
      <ThemeProvider theme={theme1}>
        <Typography align="center" sx={{ m: 2 }}>Programming / Development</Typography>
      </ThemeProvider>
      <ThemeProvider theme={theme2}>
        <Typography align="center" sx={{ m: 2 }}>With the latest frameworks and techniques, every website becomes a masterpiece and makes it independent from the competition.</Typography>
      </ThemeProvider>
    </Box>
    </Grid>
    <Grid item>
    <Box sx={{
        width: 400,
        height: 300,
        backgroundColor: 'white',
        '&:hover': {...commonStyles, 
          backgroundColor: '#07B7EF',
          borderColor: '#093A83'
        },
      }}>
      <ColorLensIcon sx={{ mx: 2, fontSize: 60, marginLeft: 21, marginTop: 5 }}/>
      <ThemeProvider theme={theme1}>
        <Typography align="center" sx={{ m: 2 }}>Color palette</Typography>
      </ThemeProvider>
      <ThemeProvider theme={theme2}>
        <Typography align="center" sx={{ m: 2 }}>A website needs not too few, but also not too many colors. No matter if company or private: every website remains unique.</Typography>
      </ThemeProvider>
    </Box>
    </Grid>
    <Grid item>
    <Box sx={{
        width: 400,
        height: 300,
        backgroundColor: 'white',
        '&:hover': {...commonStyles, 
          backgroundColor: '#07B7EF',
          borderColor: '#093A83'
        },
      }}>
      <AndroidIcon sx={{ mx: 2, fontSize: 60, marginLeft: 21, marginTop: 5 }}/>
      <ThemeProvider theme={theme1}>
        <Typography align="center" sx={{ m: 2 }}>Mobile Development</Typography>
      </ThemeProvider>
      <ThemeProvider theme={theme2}>
        <Typography align="center" sx={{ m: 2 }}>The future lies with small end devices: 
        smartphones. Should the user-friendliness be increased? Thanks to consulting, it can be done.</Typography>
      </ThemeProvider>
    </Box>
    </Grid>
    <Grid item>
    <Box sx={{
        width: 400,
        height: 300,
        backgroundColor: 'white',
        '&:hover': {...commonStyles, 
          backgroundColor: '#07B7EF',
          borderColor: '#093A83'
        },
      }}>
      <DesignServicesIcon sx={{ mx: 2, fontSize: 60, marginLeft: 21, marginTop: 5 }}/>
      <ThemeProvider theme={theme1}>
        <Typography align="center" sx={{ m: 2 }}>Web Design</Typography>
      </ThemeProvider>
      <ThemeProvider theme={theme2}>
        <Typography align="center" sx={{ m: 2 }}>Besides functionality, a website must also look good. With my expertise I can give your website a good look.</Typography>
      </ThemeProvider>
    </Box>
    </Grid>
    <Grid item>
    <Box sx={{
        width: 400,
        height: 300,
        backgroundColor: 'white',
        '&:hover': {...commonStyles, 
          backgroundColor: '#07B7EF',
          borderColor: '#093A83'
        },
      }}>
      <MeetingRoomIcon sx={{ mx: 2, fontSize: 60, marginLeft: 21, marginTop: 5}}/>
      <ThemeProvider theme={theme1}>
        <Typography align="center" sx={{ m: 2 }}>Consulting</Typography>
      </ThemeProvider>
      <ThemeProvider theme={theme2}>
        <Typography align="center" sx={{ m: 2 }}>Do you have any suggestions for improvement regarding their new website. Do not hesitate and hash out their questions: whether exciting or boring.</Typography>
      </ThemeProvider>
    </Box>
    </Grid>
    </Grid>
    
    </section>
  );
}

export default Services;
