import React from "react";

import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  grow: {
    flex: 1,
  },
  title: {
    marginRight: theme.spacing(2),
  },
  menu: {
    marginRight: 0,
    align: "right",
  },
  button: {
    marginLeft: theme.spacing(2),
  },
  offset: theme.mixins.toolbar,
}));

function CustomTopbar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>{/* content */}</Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}

export default CustomTopbar;

{
  /* <Button color='inherit' component={RouterLink} to="/play"> Play</Button>
<Button color='inherit' component={RouterLink} to="/"> Home</Button> */
}
