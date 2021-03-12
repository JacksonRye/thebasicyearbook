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

export default function StudentCard({ student }) {
  const { pictures, name, id } = student;

  const { src } = pictures;

  console.log("student", student);

  const classes = useStyles();

  return (
    <Grid item xs={12} sm={3}>
      <Link to={`/detail/${id}`}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media} image={src} title="Brain" />
            <CardContent>
              <Typography
                align="center"
                gutterBottom
                variant="h5"
                component="h2"
              >
                {name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
}
