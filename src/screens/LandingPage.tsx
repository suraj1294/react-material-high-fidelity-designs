import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import animationData from "../animations/landinganimation/data";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ButtonArrow from "../ui/ButtonArrow";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    marginRight: "40px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "4em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "3em",
    },
  },
  buttonContainer: {
    marginTop: "1em",
  },
  buttonLearnMoreHero: {
    ...theme.typography.heroButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  serviceLearnMoreButton: {
    ...theme.typography.heroButton,
    height: 35,
    fontSize: "0.7em",
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
    },
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.secondary.main,
  },
  subtitle: {
    marginBottom: "1em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
      marginTop: "2em",
    },
  },
  serviceContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      marginTop: "7em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "5em",
    },
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Grid container direction="column">
        <Grid item>
          {/*-----hero block-----*/}
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
          >
            <Grid sm item className={classes.heroTextContainer}>
              <Typography align="center" variant="h2">
                Bringing west coast Technology <br /> to middle-east
              </Typography>
              <Grid container justify="center" alignItems="center">
                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.estimateButton}
                  >
                    Free Estimate
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    className={classes.buttonLearnMoreHero}
                  >
                    <span style={{ marginRight: 10 }}>Learn more</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.primary.main}
                    />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid sm item className={classes.animation}>
              <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.serviceContainer}>
          {/*-----Services block-----*/}
          <Grid
            container
            direction="row"
            justify={matchesSM ? "center" : undefined}
          >
            <Grid
              item
              style={{
                marginLeft: matchesSM ? 0 : "5em",
                textAlign: matchesSM ? "center" : undefined,
              }}
            >
              <Typography variant="h4">Custom Software Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Save Energy. Save Time. Save Money.
              </Typography>
              <Typography variant="subtitle1">
                Complete Digital Solution. From investigation to{" "}
                <span className={classes.specialText}>celebration</span>
              </Typography>
              <Button
                variant="outlined"
                className={classes.serviceLearnMoreButton}
              >
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.primary.main}
                />
              </Button>
            </Grid>
            <Grid item className={classes.icon}>
              <img src={customSoftwareIcon} alt="custom software icon" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default LandingPage;
