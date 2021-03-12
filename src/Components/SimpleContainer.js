import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import StudentCard from "./StudentCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "0.5rem",
  },
}));

export default function SimpleContainer() {
  const classes = useStyles();

  const { getStudents, studentList } = useContext(GlobalContext);

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        
        {studentList.map((student) => (
          <StudentCard student={student}/>
        ))}
      </Grid>
    </div>
  );
}
