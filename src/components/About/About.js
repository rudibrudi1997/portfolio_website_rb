import React from "react";
import "./about.css";
import Typography from "@mui/material/Typography";
import GradeIcon from "@mui/icons-material/Grade";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import { Grid } from "@material-ui/core";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const onDownload1 = () => {
  const link = document.createElement("a");
  link.download = `Lebenslauf.pdf`;
  link.href = "./Lebenslauf.pdf";
  link.click();
};

const theme = createTheme({
  typography: {
    // Tell MUI what the font-size on the html element is.
    fontSize: 16,
    textTransform: "capitalize"
  }
});
const About = () => {
  return (
    <section className="about_sec" id="about">
      <div className="title">
        <h3>About Me</h3>
        <ThemeProvider theme={theme}>
          <Typography
            variant="subtitle1"
            gutterBottom
            align="start"
            sx={{ mt: 4, ml: -8, mr: -8, mb: 5 }}
          >
            Since my youth, the development of websites has accompanied me.
            Starting with the scripting languages HTML, CSS and JS I was able to
            deal with different frameworks and other programming languages in my
            studies and apply them well in different projects. Thereby the
            websites were developed to different application areas and with
            different tech stacks.
          </Typography>
        </ThemeProvider>
      </div>
      <Grid
        lg={12}
        container
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Grid item>
          <PersonIcon sx={{ mx: 7, fontSize: 50 }} />
          <ThemeProvider theme={theme}>
            <Typography>Rudolf Beck, 25 years</Typography>
          </ThemeProvider>
        </Grid>
        <Grid item>
          <LocationOnIcon sx={{ mx: 5, fontSize: 50 }} />
          <ThemeProvider theme={theme}>
            <Typography>Rastatt, Germany</Typography>
          </ThemeProvider>
        </Grid>
        <Grid item>
          <CalendarMonthIcon sx={{ mx: 2, fontSize: 50 }} />
          <ThemeProvider theme={theme}>
            <Typography>1997-03-19</Typography>
          </ThemeProvider>
        </Grid>
        <Grid item>
          <GradeIcon sx={{ mx: 10, fontSize: 50 }} />
          <ThemeProvider theme={theme}>
            <Typography>Bachelor Of Science (B.Sc.)</Typography>
          </ThemeProvider>
        </Grid>
        <Grid item>
          <WorkIcon sx={{ mx: 9, fontSize: 50 }} />
          <ThemeProvider theme={theme}>
            <Typography>Freelance Web Developer</Typography>
          </ThemeProvider>
        </Grid>
      </Grid>
      <Grid container direction="row" alignItems="center">
        <div className="title2">
          <h3>Soft Skills</h3>
        </div>
        <div className="container">
          <div className="card">
            <div className="box2">
              <div class="percent">
                <svg>
                  <circle cx="50" cy="50" r="50"></circle>
                  <circle cx="50" cy="50" r="50"></circle>
                </svg>
                <div className="number">
                  <h3>80%</h3>
                </div>
              </div>
              <h3 className="text">Teamwork</h3>
            </div>
          </div>
          <div className="card">
            <div className="box2">
              <div class="percent">
                <svg>
                  <circle cx="50" cy="50" r="50"></circle>
                  <circle cx="50" cy="50" r="50"></circle>
                </svg>
                <div className="number">
                  <h3>95%</h3>
                </div>
              </div>
              <h3 className="text">Flexibility</h3>
            </div>
          </div>
          <div className="card">
            <div className="box2">
              <div class="percent">
                <svg>
                  <circle cx="50" cy="50" r="50"></circle>
                  <circle cx="50" cy="50" r="50"></circle>
                </svg>
                <div className="number">
                  <h3>85%</h3>
                </div>
              </div>
              <h3 className="text">Analysing</h3>
            </div>
          </div>
          <div className="card">
            <div className="box2">
              <div class="percent">
                <svg>
                  <circle cx="50" cy="50" r="50"></circle>
                  <circle cx="50" cy="50" r="50"></circle>
                </svg>
                <div className="number">
                  <h3>100%</h3>
                </div>
              </div>
              <h6 className="text2">New trends</h6>
            </div>
          </div>
          <div className="card">
            <div className="box2">
              <div class="percent">
                <svg>
                  <circle cx="50" cy="50" r="50"></circle>
                  <circle cx="50" cy="50" r="50"></circle>
                </svg>
                <div className="number">
                  <h3>80%</h3>
                </div>
              </div>
              <h3 className="text">Project fun</h3>
            </div>
          </div>
          <div className="card">
            <div className="box2">
              <div class="percent">
                <svg>
                  <circle cx="50" cy="50" r="50"></circle>
                  <circle cx="50" cy="50" r="50"></circle>
                </svg>
                <div className="number">
                  <h3>85%</h3>
                </div>
              </div>
              <h6 className="text2">Communication</h6>
            </div>
          </div>
        </div>
      </Grid>
      <Button
        onClick={onDownload1}
        variant="contained"
        color="primary"
        endIcon={<DownloadIcon />}
        sx={{ mt: 3, justifyContent: "start" }}
      >
        Download CV
      </Button>
    </section>
  );
};

export default About;
