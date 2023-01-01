import React from "react";
import "./techstack.css";
import FE from "../../pictures/frontend.jpg";
import Typography from "@mui/material/Typography";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import Rating from "@mui/material/Rating";
import { Grid } from "@material-ui/core";
import { styled } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Root = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    backgroundColor: red[500]
  },
  [theme.breakpoints.up("md")]: {
    backgroundColor: blue[500]
  },
  [theme.breakpoints.up("lg")]: {
    backgroundColor: green[500]
  }
}));
const TechStack = () => {
  return (
    <section className="tech" id="techs">
      <div className="title">
        <h3>Tech-Stack</h3>
        <Typography
          variant="subtitle1"
          gutterBottom
          align="start"
          sx={{ m: 3 }}
        >
          All knowledge from the different areas of the tech stack is listed
          here. Further details on the rest of the tech stack can be found in
          the resume.
        </Typography>
      </div>
      <div className="container">
        <h3>Frontendentwicklung</h3>
        <div className="skills">
          <h4>HTML5 / CSS3</h4>
          <div className="rating">
            <Rating
              sm={4}
              name="read-only"
              value={5}
              precision={0.5}
              readOnly
              size="large"
              sx={{ color: "#1e7cfb" }}
            />
          </div>
        </div>
        <div className="skills">
          <h4>JS/TS</h4>
          <div className="rating">
            <Rating
              sm={4}
              name="read-only"
              value={4}
              precision={0.5}
              readOnly
              size="large"
              sx={{ color: "#1e7cfb" }}
            />
          </div>
        </div>
        <div className="skills">
          <h4>Angular</h4>
          <div className="rating">
            <Rating
              name="read-only"
              value={3.5}
              precision={0.5}
              readOnly
              size="large"
              sx={{ color: "#1e7cfb" }}
            />
          </div>
        </div>
        <div className="skills">
          <h4>React</h4>
          <div className="rating">
            <Rating
              name="read-only"
              value={4}
              precision={0.5}
              readOnly
              size="large"
              sx={{ color: "#1e7cfb" }}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <h3>Backendentwicklung</h3>
        <div className="skills">
          <h4>Node.js</h4>
          <div className="rating">
            <Rating
              name="read-only"
              value={4}
              readOnly
              size="large"
              sx={{ color: "#1e7cfb" }}
            />
          </div>
        </div>
        <div className="skills">
          <h4>C#</h4>
          <div className="rating">
            <Rating
              name="read-only"
              value={4.5}
              precision={0.5}
              readOnly
              size="large"
              sx={{ color: "#1e7cfb" }}
            />
          </div>
        </div>
        <div className="skills">
          <h4>.NET</h4>
          <div className="rating">
            <Rating
              name="read-only"
              value={4}
              readOnly
              size="large"
              sx={{ color: "#1e7cfb" }}
            />
          </div>
        </div>
        <div className="skills">
          <h4>Kotlin</h4>
          <div className="rating">
            <Rating
              name="read-only"
              value={3.5}
              precision={0.5}
              readOnly
              size="large"
              sx={{ color: "#1e7cfb" }}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <h3>UX-/UI-Design / IDE</h3>
        <div className="skills">
          <h4>Adobe XD</h4>
          <div className="rating">
            <Rating
              name="read-only"
              value={4.5}
              precision={0.5}
              readOnly
              size="large"
              sx={{ color: "#1e7cfb" }}
            />
          </div>
        </div>
        <div className="skills">
          <h4>Figma</h4>
          <div className="rating">
            <Rating
              name="read-only"
              value={4}
              precision={0.5}
              readOnly
              size="large"
              sx={{ color: "#1e7cfb" }}
            />
          </div>
        </div>
        <div className="skills">
          <h4>VS 2022/VS Code</h4>
          <div className="rating">
            <Rating
              name="read-only"
              value={4}
              precision={0.5}
              readOnly
              size="large"
              sx={{ color: "#1e7cfb" }}
            />
          </div>
        </div>
        <div className="skills">
          <h4>IntelliJ IDEA</h4>
          <div className="rating">
            <Rating
              name="read-only"
              value={3.5}
              precision={0.5}
              readOnly
              size="large"
              sx={{ color: "#1e7cfb" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
