import React from "react";
import "./portfolio.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DA from "../../pictures/DataAnalyzer.jpg";
import EB from "../../pictures/eBusiness.jpg";
import { spacing } from "@mui/system";
import BA from "../../pictures/bachelor.jpg";
import { Grid } from "@material-ui/core";
import DownloadIcon from "@mui/icons-material/Download";
import JW from "../../pictures/Jobwatch.png";
import GOPM from "../../pictures/Games_of_PM.png";
import Movi from "../../pictures/movisens_RGB_Web.png";
import BookIcon from "@mui/icons-material/Book";
import CC1 from "../../pictures/CC.png";
import SE from "../../pictures/software.jpg";
import CC2 from "../../pictures/CoupeCarb.png";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
const onDownload1 = () => {
  const link = document.createElement("a");
  link.download = `eB_Wireframing.pdf`;
  link.href = "./eB_Wireframing.pdf";
  link.click();
};
const onDownload2 = () => {
  const link = document.createElement("a");
  link.download = `Praxisbericht_movisens.pdf`;
  link.href = "./Praxisbericht_movisens.pdf";
  link.click();
};
const onDownload3 = () => {
  const link = document.createElement("a");
  link.download = `Bescheinigung_RB.pdf`;
  link.href = "./Bescheinigung_RB.pdf";
  link.click();
};
const onDownload4 = () => {
  const link = document.createElement("a");
  link.download = `Architekturdokumentation.pdf`;
  link.href = "./Architekturdokumentation.pdf";
  link.click();
};
const onDownload5 = () => {
  const link = document.createElement("a");
  link.download = `Projektbeschreibung.pdf`;
  link.href = "./Projektbeschreibung.pdf";
  link.click();
};

const Portfolio = () => {
  return (
    <section className="portfolio" id="port">
      <div className="title">
        <h3>Portfolio</h3>
      </div>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Grid item>
          <Card sx={{ maxWidth: 350 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={EB}
            />
            <CardContent sx={{ backgroundColor: "#DDE6F4", width: 350 }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontSize={16}
                fontWeight="bold"
              >
                eBusiness-Projekt: Jobwatch
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Hierbei soll eine App entwickelt werden in Bezug zu dem Thema.
                Demo-Version nicht vorhanden, Konzeption als PDF zum Download.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={onDownload1}
                variant="contained"
                color="primary"
                endIcon={<DownloadIcon />}
              >
                Download
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ maxWidth: 350 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="120"
              image={Movi}
            />
            <CardContent sx={{ backgroundColor: "#DDE6F4", width: 350 }}>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                fontSize={16}
                fontWeight="bold"
              >
                Praxisprojekt - movisens DataAnalyzer
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The user interface of the DataAnalyzer analysis software from
                movisens was to be renewed. The UI was to score points with new
                functions and additional features compared to its predecessor.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={onDownload2}
                variant="contained"
                color="primary"
                endIcon={<DownloadIcon />}
              >
                Report
              </Button>
              <Button
                onClick={onDownload3}
                variant="contained"
                color="primary"
                endIcon={<DownloadIcon />}
              >
                Certificate
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ maxWidth: 350 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              width="100"
              image={GOPM}
            />
            <CardContent sx={{ backgroundColor: "#DDE6F4", width: 350 }}>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                fontSize={16}
                fontWeight="bold"
              >
                Anwendungsprojekt - SEW Eurodrive
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Im Rahmen eines Hochschulprojektes soll eine
                Gamification-Webseite zu einem Kick-Off-Modul erstellt werden.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={onDownload4}
                variant="contained"
                color="primary"
                endIcon={<DownloadIcon />}
              >
                Architecture
              </Button>
              <Button
                onClick={onDownload5}
                variant="contained"
                color="primary"
                endIcon={<DownloadIcon />}
              >
                Project
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ maxWidth: 350 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={BA}
            />
            <CardContent sx={{ backgroundColor: "#DDE6F4", width: 350 }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontSize={16}
                fontWeight="bold"
              >
                Bachelor-Thesis
              </Typography>
              <Typography variant="body2" color="text.secondary">
                In the bachelor thesis, microinteractions were to be
                investigated on the basis of various eCommerce websites and
                optimized if necessary.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={onDownload5}
                variant="contained"
                color="primary"
                endIcon={<DownloadIcon />}
                disabled
              >
                Project
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ maxWidth: 350 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={CC1}
            />
            <CardContent sx={{ backgroundColor: "#DDE6F4", width: 350 }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontSize={16}
                fontWeight="bold"
              >
                Private Project: CoupeCabrio
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Website creation as a redesign of the website from the college
                times. Implemented using the latest techniques. Project images
                will follow.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={onDownload5}
                variant="contained"
                color="primary"
                endIcon={<DownloadIcon />}
                disabled
              >
                Project
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ maxWidth: 350 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={SE}
            />
            <CardContent sx={{ backgroundColor: "#DDE6F4", width: 350 }}>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                fontSize={14}
                fontWeight="bold"
              >
                Planned project: Website creation for a client
              </Typography>
              <Typography variant="body2" color="text.secondary">
                In the near future, a modern website is to be created for a
                client. Of course with the latest technologies. More details and
                pictures will follow.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={onDownload5}
                variant="contained"
                color="primary"
                endIcon={<DownloadIcon />}
                disabled
              >
                Project
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </section>
  );
};

export default Portfolio;
