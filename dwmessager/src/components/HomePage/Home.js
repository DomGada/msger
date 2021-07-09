import React from "react";
import Nav from "../NavBar/Nav";

import { makeStyles } from "@material-ui/core/styles";
import Content from "./Content";
const useStyles = makeStyles((theme) => ({}));
const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <Nav></Nav>

      <Content />
    </div>
  );
};

export default Home;
