import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    color: theme.palette.primary.contrastText,
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            align="center"
            className={classes.title}
            variant="h4"
            noWrap
          >
            The Basic Year Book
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
