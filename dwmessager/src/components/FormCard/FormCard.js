import React from "react";
import Form from "./Form";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    color: "blue",
    textAlign: "center",
    marginLeft: "30%",
    marginRight: "30%",
    marginTop: "5%",
  },
});
const FormCard = () => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Form />
        </CardContent>
      </Card>
    </div>
  );
};

export default FormCard;
