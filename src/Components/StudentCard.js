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

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  media: {
    height: "25vh",
  },
  link: {
  },
  name: {
    color: theme.palette.primary.dark,

  }
}));

export default function StudentCard({ student }) {
  const { pictures, name, id } = student;

  const { src } = pictures;

  const classes = useStyles();

  return (
    <Grid item xs={6} sm={3}>
      <Link
        style={{ textDecoration: "none" }}
        className={classes.link}
        to={`/detail/${id}`}
      >
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media} image={src} title="Brain" />
            <CardContent>
              <Typography
                className={classes.name}
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
