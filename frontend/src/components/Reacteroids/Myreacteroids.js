import React from "react";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root_game: {
      flexGrow: 1,
    },
  }));

export default function Myreacteroids() {

    const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2} justify="center">
        <Paper>Score: </Paper>
        <Paper className="score top-score">
          Top Score:
        </Paper>
        <Paper className="controls">
          Use [A][S][W][D] or [←][↑][↓][→] to MOVE
          <br />
          Use [SPACE] to SHOOT
        </Paper>
      </Grid>
    </div>
  );
}
