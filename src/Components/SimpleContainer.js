import { CircularProgress, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import StudentCard from "./StudentCard";
import { Waypoint } from "react-waypoint";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "0.5rem",
  },
}));

export default function SimpleContainer() {
  const classes = useStyles();

  const { getStudents, studentList, nextStudents, moreStudents, loading } = useContext(GlobalContext);

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {studentList.map((student, key) => (
          <React.Fragment key={key}>
            <StudentCard student={student} />
            {key === studentList.length - 4 && (
              <Waypoint onEnter={() => nextStudents()} />
            )}
          </React.Fragment>
        ))}
        {loading && <CircularProgress />}
      </Grid>
    </div>
  );
}
