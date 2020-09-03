import React from "react";
import Reacteroids from "../components/Reacteroids/Reacteroids";


import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root_game: {
    flex: "1",
  },
}));

export default function Game() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Paper>Test 1</Paper>
      <Reacteroids />
    </React.Fragment>
  );
}
