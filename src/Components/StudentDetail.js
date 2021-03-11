import {
  Card,
  Container,
  CssBaseline,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import Image from "material-ui-image";

import image from "./img/brain.jpeg";

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
    marginTop: theme.spacing(1),
  },
  media: {},
}));

export const StudentDetail = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.root} maxWidth="sm">
        <Image src={image} />
        <Typography component="div">
          <p>Name: Jane Doe</p>
          <p>Sex: Female</p>
          <p>DOB: X/X/X</p>
          <p>Dept: Medicine</p>
          <p>Basic No: X</p>
          <p>State: Rivers</p>
          <p>LGA: Port Harcourt</p>
          <p>080xxxxx</p>
          <p>Email: xxxx@yahoo.com</p>
        </Typography>
      </Container>
    </React.Fragment>
  );
};
