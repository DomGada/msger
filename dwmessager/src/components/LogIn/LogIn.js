import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";

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

  const submitUser = () => {
    setRedirect(true);
  };

  if (redirect) {
    console.log("Setting token to 1");
    props.setToken(1);
    return <Redirect to="/" />;
  }

  return (
    <div className={classes.loginWrapper}>
      <h1>Please Log In</h1>
      <form>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button onClick={submitUser}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
