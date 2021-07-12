import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    flex: 1,
    height: "100%",
    flexGrow: 1,
    color: theme.palette.text.secondary,
  },
  paperSet2: {
    marginTop: "15px",
  },
  mainContent: {
    marginLeft: "10px",
    marginRight: "10px",
    marginTop: "30px",
  },
  header: {
    marginTop: "10px",
    textAlign: "center",
  },
  item: { flex: 1, flexGrow: 1 },
  introduction: {
    marginLeft: "15%",
    marginRight: "15%",
    textAlign: "center",
  },
}));

export default function Content() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper>
            <Typography className={classes.header} variant="h1">
              DWMessenger
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <div className={classes.mainContent}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} className={classes.item}>
            <Paper className={classes.paper}>
              <Typography className={classes.header} variant="h3">
                What is this app?
              </Typography>
              <Typography className="introduction" variant="body2">
                DWMessenger is a React project, created by two passionate recent
                graduate developers. We embarked on this journey to create a
                messenging app similar to Discord, to chat with our friends, and
                showcase our wonderful skills. To join this website, check out
                the signup page, where you can create a user profile, add a
                picture, and send friend requests to your friends to begin
                chatting! Hope you enjoy our app.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.item}>
            <Paper className={classes.paper}>
              <Typography className={classes.header} variant="h3">
                Technologies Used
              </Typography>
              <Typography variant="body2">
                React, Node, Express, Material-UI
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3} className={classes.paperSet2}>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
