import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import Reacteroids from "../components/Reacteroids/Reacteroids";
import Popper from "@material-ui/core/Popper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import * as actions from "../store/actions/AstroActions";

const useStyles = makeStyles((theme) => ({
  root: {},
  details: {
    display: "flex",
    flexDirection: "column",
  },
  bottom: {
    display: "flex",
    flexDirection: "row",
  },
  content: {
    flex: "1 0 auto",
  },
}));

export default function Astroids() {
  const classes = useStyles();
  const refEl = useRef(null);
  const state = useSelector((state) => state.AstroReducer);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    setAnchorEl(refEl.current);
  }, []);

  function startGame() {
    dispatch(actions.startAstro());
  }

  return (
    <div ref={refEl}>
      <Reacteroids />
      <Popper
        open={!state.inGame}
        disablePortal={true}
        anchorEl={anchorEl}
        placement="bottom"
        popperOptions={{
          modifiers: {
            offset: {
              offset: "0,-50%",
            },
          },
        }}
      >
        <Paper>
          <Typography component="h5" variant="h5">
            Test message. This is where the info goes!
          </Typography>
          <div className={classes.bottom}>
            <Button onClick={startGame}>Play Free</Button>
            <Button>Play Paid</Button>
          </div>
        </Paper>
      </Popper>
    </div>
  );
}
