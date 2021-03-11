import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import image from "./img/brain.jpeg";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  media: {
    height: "20vh",
  },
});

export default function StudentCard() {
  const classes = useStyles();

  return (
    <Grid item xs={6} sm={3}>
      <Link to="/detail">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media} image={image} title="Brain" />
            <CardContent>
              <Typography
                align="center"
                gutterBottom
                variant="h5"
                component="h2"
              >
                Brain
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
}
