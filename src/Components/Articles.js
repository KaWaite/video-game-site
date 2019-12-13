import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

// components
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

// Images
import MainImage from "../Images/the_last_of_us_2.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingBottom: "50px",
    height: "80vh",
    fontFamily: `"Poppins", "sans-serif"`
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    backgroundColor: "rgba(199,201,123,1)",
    color: theme.palette.text.secondary,
    minHeight: "68px"
  },
  mainarticle: {
    minHeight: "500px",
    color: "white",
    backgroundImage: `url(${MainImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover"
  }
}));

export default function Articles() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>News</h1>
      <Grid container spacing={3}>
        <Grid item xs={12} md={9}>
          <Paper className={`${classes.paper} ${classes.mainarticle}`}>
            <Typography variant="h2" component="h2">
              The Last Of Us pt. ii
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs>
          <Grid container spacing={1} direction="column">
            <Grid item>
              <Paper className={classes.paper}>secondary</Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>secondary</Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>secondary</Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>secondary</Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>secondary</Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
