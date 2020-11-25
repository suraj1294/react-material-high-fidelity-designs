import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import animationData from "../animations/landinganimation/data";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ButtonArrow from "../ui/ButtonArrow";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websiteIcon from "../assets/websiteIcon.svg";
import revolutionBackGround from "../assets/repeatingBackground.svg";
import infoBackground from "../assets/infoBackground.svg";

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
  revolutionBackGround: {
    backgroundImage: `url(${revolutionBackGround})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 10,
    padding: "10em",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      paddingTop: "8em",
      paddingBottom: "8em",
      boxShadow: theme.shadows[5],
      borderRadius: 0,
      width: "100%",
    },
  },
  revolutionContainer: {
    marginTop: "12em",
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  infoLearnMoreButton: {
    ...theme.typography.infoButton,
    height: 35,
    fontSize: "0.7em",
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

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

        {/*-----Custom software block-----*/}
        <Grid item className={classes.serviceContainer}>
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

        {/*-----iOS/Android block-----*/}
        <Grid item className={classes.serviceContainer}>
          <Grid
            container
            direction="row"
            justify={matchesSM ? "center" : "flex-end"}
          >
            <Grid
              item
              style={{
                textAlign: matchesSM ? "center" : undefined,
              }}
            >
              <Typography variant="h4">iOS/Android App Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Extend functionality. Extend Access. Increase Engagement.
              </Typography>
              <Typography variant="subtitle1">
                Integrate your web experience or create standalone app
                {matchesSM ? null : <br />} with either mobile platform.
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
            <Grid
              style={{ marginRight: matchesSM ? 0 : "5em" }}
              item
              className={classes.icon}
            >
              <img src={mobileAppsIcon} alt="mobile apps icon" />
            </Grid>
          </Grid>
        </Grid>

        {/*-----website development block-----*/}
        <Grid item className={classes.serviceContainer}>
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
              <Typography variant="h4">Website Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Reach more. Discover more. Sell More.
              </Typography>
              <Typography variant="subtitle1">
                Optimized for search Engines, built for speed.
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
              <img src={websiteIcon} alt="websites icon" />
            </Grid>
          </Grid>
        </Grid>

        {/*-----revolution development block-----*/}
        <Grid item className={classes.revolutionContainer}>
          <Grid
            alignItems="center"
            justify="center"
            container
            style={{ height: "100em" }}
          >
            <Card className={classes.revolutionCard}>
              <CardContent>
                <Grid
                  container
                  direction="column"
                  style={{ textAlign: "center" }}
                >
                  <Grid item>
                    <Typography variant="h3" gutterBottom>
                      The Revolution
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">
                      Visionary insights coupled with cutting-edge technology is
                      a recipe for revolution.
                    </Typography>
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
              </CardContent>
            </Card>
            <div className={classes.revolutionBackGround} />
          </Grid>
        </Grid>

        {/*-----information block-----*/}
        <Grid item>
          <Grid container style={{ height: "80em" }} alignItems="center">
            <Grid
              container
              style={{ position: "absolute" }}
              direction={matchesXS ? "column" : "row"}
              spacing={matchesXS ? 5 : 0}
            >
              <Grid
                sm
                item
                style={{
                  textAlign: matchesXS ? "center" : "initial",
                  marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5em",
                }}
              >
                <Typography
                  variant="h4"
                  gutterBottom
                  style={{ color: "white" }}
                >
                  About Us
                </Typography>
                <Typography variant="subtitle2">Let's get personal</Typography>
                <Button
                  variant="outlined"
                  className={classes.infoLearnMoreButton}
                >
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow width={10} height={10} fill="white" />
                </Button>
              </Grid>
              <Grid
                sm
                item
                style={{
                  textAlign: matchesXS ? "center" : "right",
                  marginRight: matchesXS ? 0 : matchesSM ? "2em" : "5em",
                }}
              >
                <Typography
                  variant="h4"
                  gutterBottom
                  style={{ color: "white" }}
                >
                  Contact Us
                </Typography>
                <Typography variant="subtitle2">
                  Say hello!
                  <span role="img" aria-label="waving emoji">
                    👋
                  </span>
                </Typography>
                <Button
                  variant="outlined"
                  className={classes.infoLearnMoreButton}
                >
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow width={10} height={10} fill="white" />
                </Button>
              </Grid>
            </Grid>

            <div className={classes.infoBackground} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default LandingPage;
