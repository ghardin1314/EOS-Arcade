import React from "react";

import CustomTopbar from "../components/Topbar"

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
      flexFlow: "column",
      height: "100vh"
    }
  }));

export default function CustomLayour(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CustomTopbar />
            {props.children}
        </div>
    )
}