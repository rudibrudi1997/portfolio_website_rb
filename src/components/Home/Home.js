import React from "react";
import "./home.css";
import Imag from "../../pictures/user_2.png";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import Button from "@mui/material/Button";
import { Grid } from "@material-ui/core";
import { spacing } from "@mui/system";
import Xing from "../../pictures/xing_1.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import DesignServicesRoundedIcon from "@mui/icons-material/DesignServicesRounded";
import Box from "@mui/material/Box";
import LI from "../../pictures/linkedin.png";

const commonStyles = {
  bgcolor: "background.paper",
  m: 5,
  border: 5,
  width: "5rem",
  height: "5rem"
};
const theme = createTheme({
  typography: {
    // Tell MUI what the font-size on the html element is.
    fontSize: 16,
    textTransform: "capitalize"
  }
});
const Home = () => {
  return (
    <section className="homes" id="home">
      <div className="content">
        <h4>
          <span>Hello!</span> My name is
        </h4>
        <h1>Rudolf Beck</h1>
        <h3>Junior Web and Frontend Developer</h3>
        <h4>
          Thanks to the study with full interest and do not let it out of sight
        </h4>
        <a href="#about" className="btn">
          About Me
        </a>

        <Grid container direction="row" alignItems="center">
          <Grid item>
            <a href="https://www.linkedin.com/in/rudolf-beck-2a169b224/">
              <LinkedInIcon sx={{ mx: 5, ml: 4, fontSize: 50 }} />
            </a>
          </Grid>
          <Grid item>
            <a href="">
              <img src={Xing} />
            </a>
          </Grid>
          <Grid item>
            <GitHubIcon sx={{ mx: 2, fontSize: 50, ml: 5 }} />
          </Grid>
        </Grid>
      </div>
      <div className="image">
        <img src={Imag} />
      </div>
    </section>
  );
};

export default Home;
