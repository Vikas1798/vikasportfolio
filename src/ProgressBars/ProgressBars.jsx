import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#33FF00",
  },
}))(LinearProgress);

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CustomizedProgressBars() {
  const classes = useStyles();

  const progressbartitle = {
    fontSize: "20px",
    fontWeight: "900",
    // color: "#2689f8"
    color: "white",
  };
  const progressPercentage = {
    fontSize: "20px",
    fontWeight: "900",
    color: "#DC7633 ",
    flot: "right",
  };

  return (
    <div className={classes.root}>
      <br />
      <h6 style={progressbartitle}>html5</h6>
      <BorderLinearProgress variant="determinate" value={90} />
      <h6 style={progressPercentage}>90%</h6>
      <br />
      <h6 style={progressbartitle}>css3</h6>
      <BorderLinearProgress variant="determinate" value={85} />
      <h6 style={progressPercentage}>85%</h6>
      <br />
      <h6 style={progressbartitle}>Javascript</h6>
      <BorderLinearProgress variant="determinate" value={65} />
      <h6 style={progressPercentage}>65%</h6>
      <br />
      <h6 style={progressbartitle}>ES6</h6>
      <BorderLinearProgress variant="determinate" value={60} />
      <h6 style={progressPercentage}>60%</h6>
      <br />
      <h6 style={progressbartitle}>ReactJs</h6>
      <BorderLinearProgress variant="determinate" value={70} />
      <h6 style={progressPercentage}>70%</h6>
      <br />
      <h6 style={progressbartitle}>Git and GitHub</h6>
      <BorderLinearProgress variant="determinate" value={50} />
      <h6 style={progressPercentage}>50%</h6>
      <br />
    </div>
  );
}
