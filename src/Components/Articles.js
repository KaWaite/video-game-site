import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: "20px 80px",
    height: "80vh"
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "rgba(199,201,123,1)",
    color: theme.palette.text.secondary,
    minHeight: "93.5px"
    // margin: "20px",
  },
  mainarticle: {
    minHeight: "500px"
  }
}));

export default function Articles() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 style={{ textAlign: "left" }}>News</h1>
      <Grid container spacing={3}>
        <Grid item xs={12} md={9}>
          <Paper className={`${classes.paper} ${classes.mainarticle}`}>
            MainArticle
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

{
  /* <div className={classes.root}>
      <Grid container spacing={3} alignItems="flex-start">
        <Grid item xs={12} md={9}>
          <Paper className={`${classes.paper} ${classes.mainarticle}`}>
            MainArticle
          </Paper>
        </Grid>
        <Grid container direction="column" alignItems="flex-end">
          <Grid item xs style={{ backgroundColor: "red" }}>
            <Paper className={classes.paper}>secondary</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>secondary</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>secondary</Paper>
          </Grid>
        </Grid>
      </Grid>
    </div> */
}
