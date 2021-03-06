import React, { FC } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import footerAdorment from "../assets/Footer Adornment.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";

import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    zIndex: 1301,
    position: "relative",
  },
  adorment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  linksContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontWeight: "bold",
    fontSize: "0.75em",
  },
  gridItem: {
    margin: "3em",
  },
  logo: {
    height: "4em",
    width: "4em",
    [theme.breakpoints.down("md")]: {
      height: "3em",
      width: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "2em",
      width: "2em",
    },
  },
  iconContainer: {
    position: "absolute",
    marginTop: "-6em",
    right: "3em",
    [theme.breakpoints.down("md")]: {
      marginTop: "-4.5em",
      right: "1.5em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "-3.5em",
      right: "1em",
    },
  },
}));

const Footer: FC<{}> = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footerContainer}>
      <Hidden mdDown>
        <Grid
          container
          justify="center"
          direction="row"
          className={classes.linksContainer}
        >
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Link to="/" className={classes.link}>
                  Home
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Link to="/services" className={classes.link}>
                  Services
                </Link>
              </Grid>
              <Grid item>
                <Link to="/services/customSoftware" className={classes.link}>
                  Custom Software Development
                </Link>
              </Grid>
              <Grid item>
                <Link to="/services/mobileApps" className={classes.link}>
                  iOS/Android App Development
                </Link>
              </Grid>
              <Grid item>
                <Link to="/services/websites" className={classes.link}>
                  Website Development
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Link to="/revolution" className={classes.link}>
                  The Revolution
                </Link>
              </Grid>
              <Grid item>
                <Link to="/revolution" className={classes.link}>
                  Vision
                </Link>
              </Grid>
              <Grid item>
                <Link to="/revolution" className={classes.link}>
                  Technology
                </Link>
              </Grid>
              <Grid item>
                <Link to="/revolution" className={classes.link}>
                  Process
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Link to="/about" className={classes.link}>
                  About Us
                </Link>
              </Grid>
              <Grid item>
                <Link to="/about" className={classes.link}>
                  Mission Statement
                </Link>
              </Grid>
              <Grid item>
                <Link to="/about" className={classes.link}>
                  History
                </Link>
              </Grid>
              <Grid item>
                <Link to="/about" className={classes.link}>
                  Team
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Link to="/contact" className={classes.link}>
                  Contact Us
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        alt="footer adorment slash"
        src={footerAdorment}
        className={classes.adorment}
      />
      <Grid
        container
        justify="flex-end"
        spacing={3}
        className={classes.iconContainer}
      >
        <Grid item>
          <a
            href="http://www.facebook.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={facebook} alt="facebook logo" className={classes.logo} />
          </a>
        </Grid>
        <Grid item>
          <a
            href="http://www.instagram.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src={instagram}
              alt="instagram logo"
              className={classes.logo}
            />
          </a>
        </Grid>
        <Grid item>
          <a
            href="http://www.twitter.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={twitter} alt="twitter logo" className={classes.logo} />
          </a>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
