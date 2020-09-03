import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CustomTopbar from "../components/Topbar";


const useStyles = makeStyles((theme) => ({
  root_layout: {
    display: "flex",
    flexFlow: "column",
  },
}));

export default function CustomLayout(props) {
  const classes = useStyles();
  return (
    <div className={classes.root_layout}>
      {/* <CustomTopbar /> */}
      {props.children}
    </div>
  );
}
