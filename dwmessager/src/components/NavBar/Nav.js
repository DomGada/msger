import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "white",
  },
  homeButton: {
    color: "black",
    border: ".5px solid black",
    backgroundColor: "#F8F8FF",
  },
  signup: {
    marginRight: "5px",
  },
}));

export default function Nav(props) {
  console.log("The current state of token is " + props.token);

  const [name, setName] = useState("");

  const classes = useStyles();

  const logOutFunc = () => {
    console.log("Setting token to null");
    props.setToken(null);
  };

  let buttons;
  if (!props.token) {
    buttons = (
      <div>
        <Button
          variant="contained"
          component={Link}
          to={"/signup"}
          color="default"
          className={classes.signup}
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
    );
  } else {
    axios
      .get("http://localhost:3001/users/name", {
        params: { id: props.token },
      })
      .then(function (response) {
        console.log(response.data);
        if (response.data === false) {
          console.log("Not Logged In");
        } else if (response.data != false) {
          setName(response.data);
        }
      })
      .catch(function (error) {
        console.log("This is the error: " + error);
      });
    buttons = (
      <div>
        <Button style={{ color: "white" }} variant="disabled">
          Hello {name}
        </Button>

        <Button variant="contained" onClick={logOutFunc}>
          Sign Out
        </Button>
      </div>
    );
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
            <Typography color="default" className={classes.title} variant="h6">
              <Button className={classes.homeButton} variant="container">
                Home
              </Button>
            </Typography>
            {buttons}
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}
