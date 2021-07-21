import React from "react";
import Nav from "../NavBar/Nav";

import { makeStyles } from "@material-ui/core/styles";
import Content from "./Content";
const useStyles = makeStyles((theme) => ({}));
const Home = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Nav token={props.token} setToken={props.setToken}></Nav>

      <Content />
    </div>
  );
};

export default Home;
