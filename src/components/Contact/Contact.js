import React from "react";
import "./contact.css";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Grid } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DesignServicesRoundedIcon from "@mui/icons-material/DesignServicesRounded";
const theme = createTheme({
  typography: {
    // Tell MUI what the font-size on the html element is.
    fontSize: 18,
    textTransform: "capitalize"
  }
});
const theme2 = createTheme({
  typography: {
    // Tell MUI what the font-size on the html element is.
    fontSize: 16,
    textTransform: "capitalize"
  }
});
const Validation = () => {
  var form = document.getElementById("form");
  var email = document.getElementById("email").value;
  var text = document.getElementById("txt_2");
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
  } else {
    form.classList.remove("valid");
    form.classList.add("invalid");
  }
  if (email === "") {
    form.classList.remove("valid");
    form.classList.remove("invalid");
    text.innerHTML = "";
    text.style.color = "#00ff00";
  }
};
const Contact = () => {
  return (
    <section className="cont_sec" id="contact">
      <div className="title">
        <h3>Contact</h3>
        <ThemeProvider theme={theme2}>
          <Typography
            variant="subtitle1"
            gutterBottom
            align="start"
            sx={{ ml: -8, mr: -8 }}
          >
            Do you have any further questions for me? You are welcome to ask
            your questions via the form. I am very much looking forward to your
            feedback.
          </Typography>
        </ThemeProvider>
      </div>
      <div className="contactFormular1">
        <form id="form" action="#">
          <Typography
            variant="h5"
            gutterBottom
            align="center"
            fontWeight="bold"
            sx={{ m: 3 }}
          >
            Contact adresses:
          </Typography>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            lg={12}
          >
            <Grid item lg={4} xs={12}>
              <CallIcon sx={{ mx: 19, fontSize: 40, mb: 3 }} />
              <ThemeProvider theme={theme}>
                <Typography sx={{ ml: 10, mb: 3 }}>
                  Mobile: 0178/1549585
                </Typography>
              </ThemeProvider>
            </Grid>
            <Grid item lg={4} xs={12}>
              <LocationOnIcon sx={{ mx: 19, fontSize: 40, mb: 3 }} />
              <ThemeProvider theme={theme}>
                <Typography sx={{ ml: 10, mb: 3 }}>Rastatt, Germany</Typography>
              </ThemeProvider>
            </Grid>
            <Grid item lg={4} xs={12}>
              <EmailIcon sx={{ mx: 19, fontSize: 40, mb: 3 }} />
              <ThemeProvider theme={theme}>
                <Typography sx={{ ml: 10, mb: 3 }}>
                  rudolf_beck@gmx.net
                </Typography>
              </ThemeProvider>
            </Grid>
          </Grid>
          <div className="contactFormular2">
            <form id="form" action="#">
              <h2>Write your message here: </h2>
              <div className="inputBox">
                <input type="text" name="" required="required" />
                <span>Voller Name</span>
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  name=""
                  required="required"
                  id="email"
                  onKeyDown="<Validation/>"
                />
                <span className="Txt_1">EMail</span>
                <span id="txt_2"></span>
              </div>
              <div className="inputBox">
                <textarea required="required"></textarea>
                <span>Nachricht schreiben</span>
              </div>

              <Button variant="contained" endIcon={<SendIcon />}>
                Send
              </Button>
            </form>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
