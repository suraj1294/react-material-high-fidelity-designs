import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ButtonArrow from "./ButtonArrow";

import background from "../assets/background.jpg";
import mobileBackGround from "../assets/mobileBackground.jpg";

const useStyles = makeStyles((theme) => ({
  serviceLearnMoreButton: {
    ...theme.typography.heroButton,
    height: 35,
    fontSize: "0.7em",
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  callToActionBackground: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url(${mobileBackGround})`,
    },
  },
}));

const CallToAction = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid
      container
      className={classes.callToActionBackground}
      alignItems="center"
      justify="space-between"
    >
      <Grid item style={{ marginLeft: "5em" }}>
        <Typography variant="h4">
          Simple Software
          <br />
          Revolutionary Results
        </Typography>
        <Typography variant="subtitle2">Take advantages of the</Typography>
        <Button variant="outlined" className={classes.serviceLearnMoreButton}>
          <span style={{ marginRight: 10 }}>Learn More</span>
          <ButtonArrow
            width={10}
            height={10}
            fill={theme.palette.primary.main}
          />
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="secondary"
          className={classes.estimateButton}
        >
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  );
};

export default CallToAction;
