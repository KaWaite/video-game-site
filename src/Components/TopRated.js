import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import TopList from "./TopList";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function TopRated() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <TopList />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TopList />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TopList />
        </Grid>
      </Grid>
    </div>
  );
}
