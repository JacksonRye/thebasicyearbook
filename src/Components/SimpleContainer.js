import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import StudentCard from "./StudentCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '0.5rem'
  },
}));

export default function SimpleContainer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
      </Grid>
    </div>
  );
}
