import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  btn: {
    marginRight: "100px",
  },
}));

export default function ValidationTextFields() {
  const classes = useStyles();
  const user = {
    userName: "",
    password: "",
    firstName: "",
    lastName: "",
  };
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName, firstName, lastName, password);
    const user = {
      username: userName,
      password: password,
      firstname: firstName,
      lastname: lastName,
      friendCode: 1738,
    };
    console.log(user);

    // Make a request for a user with a given ID
    axios
      .post("http://localhost:3001/users/insert", {
        user,
      })
      .then(function (response) {
        // handle success
        console.log("The response is : ", response);
      })
      .catch(function (error) {
        // handle error
        console.log("The error is : ", error);
      });
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="standard-full-width"
          label="Username"
          style={{ margin: 8 }}
          placeholder=""
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div>
        <TextField
          id="standard-full-width"
          label="Password"
          style={{ margin: 8 }}
          placeholder=""
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <TextField
          id="standard-full-width"
          label="First Name"
          style={{ margin: 8 }}
          placeholder=""
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <TextField
          id="standard-full-width"
          label="Last Name"
          style={{ margin: 8 }}
          placeholder=""
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          classes={classes.btn}
          onClick={handleSubmit}
          style={{ marginRight: "5px" }}
        >
          SignUp
        </Button>
        <Button variant="outlined">Cancel</Button>
      </div>
    </form>
  );
}
