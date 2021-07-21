import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  loginWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const LogIn = (props) => {
  const classes = useStyles();
  const [redirect, setRedirect] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useState(false);

  const submitUser = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:3001/users/login", {
        params: { username: username, password: password },
      })
      .then(function (response) {
        console.log(response.data);
        if (response.data === false) {
          console.log("Wrong Username or password you loser");
        } else if (response.data != false) {
          // Response should be the id of the user specified
          setId(response.data);
          console.log("id: " + id);
          setRedirect(1);
        }
      })
      .catch(function (error) {
        console.log("This is the error: " + error);
      });
  };

  if (redirect) {
    props.setToken(id);
    return <Redirect to="/" />;
  }

  return (
    <div className={classes.loginWrapper}>
      <h1> Please Log In </h1>{" "}
      <form>
        <label>
          <p> Username </p>{" "}
          <input onChange={(e) => setUsername(e.target.value)} type="text" />
        </label>{" "}
        <label>
          <p> Password </p>{" "}
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </label>{" "}
        <div>
          <button onClick={submitUser}> Submit </button>{" "}
        </div>{" "}
      </form>{" "}
    </div>
  );
};

export default LogIn;
