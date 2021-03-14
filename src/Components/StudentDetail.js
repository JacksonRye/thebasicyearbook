import {
  CircularProgress,
  Container,
  CssBaseline,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import Image from "material-ui-image";

import { GlobalContext } from "../context/GlobalState";

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
    marginTop: theme.spacing(1),
  },
  media: {},
}));

export const StudentDetail = ({ match }) => {
  const { params } = match;

  const { id } = params;

  const { getStudentById, student, loading } = useContext(GlobalContext);

  const classes = useStyles();

  useEffect(() => {
    getStudentById(id);
  }, []);

  const {
    basic_no,
    date_of_birth,
    dept,
    email,
    lga,
    name,
    pictures,
    sex,
    state,
    phone_no,
  } = student;

  return loading ? (
    <CircularProgress />
  ) : (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.root} maxWidth="sm">
        <Image src={pictures.src} />
        <Typography component="div">
          <p>Name: {name}</p>
          <p>Sex: {sex}</p>
          <p>DOB: {date_of_birth}</p>
          <p>Dept: {dept}</p>
          <p>Basic No: {basic_no}</p>
          <p>State: {state}</p>
          <p>LGA: {lga}</p>
          <p>Phone: {phone_no}</p>
          <p>Email: {email}</p>
        </Typography>
      </Container>
    </React.Fragment>
  );
};
