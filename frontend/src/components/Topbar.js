import React from "react";
import { Link as RouterLink } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  grow: {
    flex: 1,
  },
}));

export default function CustomTopbar() {
  const classes = useStyles();
  return (<div className={classes.grow}>
      <AppBar style={{ margin: 0 }} position="fixed">
          <Toolbar>
              <Button variant="contained" color="inherit" component={RouterLink} to='/Play'>Play</Button>
              <Button variant="contained" color="inherit" component={RouterLink} to='/'>Home</Button>
          </Toolbar>
      </AppBar>
      <Toolbar />
  </div>);
}
