import React from 'react'
import { Reacteroids } from "../components/Reacteroids/Reacteroids"

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      flex: "1 1 auto"
    },
  }));

export default function Game() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Reacteroids />
        </div>
    )
}
