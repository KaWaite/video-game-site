import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
// import tileData from './tileData';
// import Typography from "@material-ui/core/Typography";

import image from "../Images/the_last_of_us_2.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    // display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden"
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  },
  title: {
    color: "white"
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  }
}));

const tileData = [
  {
    img: image,
    title: "TLOU2",
    author: "author"
  },
  {
    img: image,
    title: "TLOU2",
    author: "author"
  },
  {
    img: image,
    title: "TLOU2",
    author: "author"
  },
  {
    img: image,
    title: "TLOU2",
    author: "author"
  },
  {
    img: image,
    title: "TLOU2",
    author: "author"
  },
  {
    img: image,
    title: "TLOU2",
    author: "author"
  },
  {
    img: image,
    title: "TLOU2",
    author: "author"
  },
  {
    img: image,
    title: "TLOU2",
    author: "author"
  }
];
export default function SingleLineGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 style={{ textAlign: "left" }}>Upcoming Games</h1>
      <GridList className={classes.gridList} cols={4}>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
