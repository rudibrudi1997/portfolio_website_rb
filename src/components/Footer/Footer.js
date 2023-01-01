import React from "react";
import "./footer.css";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Grid } from "@material-ui/core";
import Xing from "../../pictures/xing_1.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { spacing } from "@mui/system";

const theme1 = createTheme({
  typography: {
    // Tell MUI what the font-size on the html element is.
    fontSize: 16,
    textTransform: "capitalize"
  }
});

const theme3 = createTheme({
  typography: {
    // Tell MUI what the font-size on the html element is.
    fontSize: 12,
    textTransform: "capitalize"
  }
});

const theme2 = createTheme({
  typography: {
    // Tell MUI what the font-size on the html element is.
    fontSize: 28,
    textTransform: "capitalize",
    fontStyle: "italic",
    fontFamily: "Poppins, sans-serif"
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Poppins';
          font-style: italic;
          font-display: swap;
          font-weight: 600;`
    }
  }
});

const Footer = () => {
  return (
    <footer>
      <h4>
        That’s my personal portfolio about me. Here are my social media
        channels:
      </h4>
      <Grid container direction="row" alignItems="center">
        <Grid item>
          <h2>Rudolf Beck</h2>
        </Grid>
        <Grid item>
          <LinkedInIcon sx={{ mx: 5, fontSize: 50, ml: 4, color: "white" }} />
        </Grid>
        <Grid item>
          <img src={Xing} />
        </Grid>
        <Grid item>
          <GitHubIcon sx={{ mx: 2, fontSize: 50, color: "white" }} />
        </Grid>
      </Grid>
      <div className="footer_copyright">
        <ThemeProvider theme={theme3}>
          <Typography align="center" sx={{ mt: 3, color: "#55C4F3" }}>
            2022. Created by Rudolf Beck. All rights reserved.
          </Typography>
        </ThemeProvider>
      </div>
    </footer>
  );
};

export default Footer;
