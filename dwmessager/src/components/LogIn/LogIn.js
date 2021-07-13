import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    loginWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
  }));

  const LogIn = () =>  {
    const classes = useStyles();

  return(
    <div className="loginWrapper">
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
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}


export default LogIn;