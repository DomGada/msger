import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Nav(props) {

  console.log("The current state of token is " + props.token)

  const classes = useStyles();
  const [redirect, setRedirect] = useState(false);

  const logOutFunc = () => {
    setRedirect(true)
  }

  if (redirect) {
    console.log("Setting token to null")
    props.setToken(null);
    // return <Redirect to="/"/>
  }

  let buttons
  if (!props.token) {
    buttons =
    <div>
      <Button
    variant="contained"
    component={Link}
    to={"/signup"}
    color="default"
  >
    Signup
  </Button>
  <Button
      variant="contained"
      component={Link}
      to={"/login"}
      color="default"
       >
      Log In
    </Button>
  </div>
  }
  else {
    buttons = 
    <div>
      <Button
      variant="contained"
      onClick={logOutFunc}
      >
        Sign Out
      </Button>
      </div>
  }

  return (
    <div className={classes.root}>
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Home
            </Typography>
            {buttons}
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}
