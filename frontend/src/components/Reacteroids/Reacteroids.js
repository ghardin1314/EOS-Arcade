import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Ship from "./Ship";
import Asteroid from "./Asteroid";
import { randomNumBetweenExcluding } from "./helpers";

import * as actions from "../../store/actions/asteroidActions";

import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

const KEY = {
  LEFT: 37,
  RIGHT: 39,
  UP: 38,
  A: 65,
  D: 68,
  W: 87,
  SPACE: 32,
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "column",
    height: "100vh"
  },
}));

export function Reacteroids(props) {
  const canvas = useRef(null);
  const divElement = useRef(null);

  const dispatch = useDispatch();

  const state = useSelector((state) => state.AstroReducer);

  const classes = useStyles();

  var ships = [];
  var asteroids = [];
  var bullets = [];
  var particles = [];

  const updateSelection = (field, selection) => {
    dispatch(actions.updateSelection(field, selection));
  };

  // TODO: Lookup handle resize for function
  const handleResize = (value, e) => {
    const screen = {
      width: divElement.current.clientWidth,
      height: divElement.current.clientHeight,
      ratio: window.devicePixelRatio || 1,
    };

    updateSelection("screen", { screen });
  };

  // TODO: Lookup handle keys for function
  const handleKeys = (value, e) => {
    let keys = state.keys;
    if (e.keyCode === KEY.LEFT || e.keyCode === KEY.A) keys.left = value;
    if (e.keyCode === KEY.RIGHT || e.keyCode === KEY.D) keys.right = value;
    if (e.keyCode === KEY.UP || e.keyCode === KEY.W) keys.up = value;
    if (e.keyCode === KEY.SPACE) keys.space = value;

    // TODO: Update keys state
    updateSelection("keys", keys);
  };

  // component did mount useEffect
  
  useEffect(() => {
    window.addEventListener("keyup", handleKeys.bind(this, false));
    window.addEventListener("keydown", handleKeys.bind(this, true));
    window.addEventListener("resize", handleResize.bind(this, false));

    // TODO update state with screen dimentions

    console.log(divElement.current.clientWidth);
    console.log(divElement.current.clientHeight);

    const screen = {
      width: divElement.current.clientWidth,
      height: divElement.current.clientHeight,
      ratio: window.devicePixelRatio || 1,
    };

    console.log(divElement.current.clientWidth);
    console.log(divElement.current.clientHeight);

    updateSelection("screen", screen);

    // TODO update state with context
    const context = canvas.current.getContext("2d");
    console.log(context);

    startGame();
    requestAnimationFrame(() => {
      update();
    });

    // Clean up on unmount
    return () => {
      window.removeEventListener("keyup", handleKeys);
      window.removeEventListener("keydown", handleKeys);
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line
  }, []);

  const addScore = (points) => {
    if (state.inGame) {
      const currentScore = state.currentScore + points;
      updateSelection("currentScore", currentScore);
    }
  };

  const startGame = () => {
    updateSelection("inGame", true);
    updateSelection("currentScore", 0);

    // Make ship
    let ship = new Ship({
      position: {
        x: state.screen.width / 2,
        y: state.screen.height / 2,
      },
      create: createObject.bind(this),
      onDie: gameOver.bind(this),
    });
    createObject(ship, ships);

    // Make asteroids
    asteroids = [];
    generateAsteroids(state.asteroidCount);
  };

  const gameOver = () => {
    updateSelection("inGame", false);

    // Replace top score
    if (state.currentScore > state.topScore) {
      updateSelection("topScore", state.currentScore);
      localStorage["topscore"] = state.currentScore;
    }
  };

  const generateAsteroids = (howMany) => {
    let asteroids = [];
    let ship = ships[0];
    for (let i = 0; i < howMany; i++) {
      let asteroid = new Asteroid({
        size: 80,
        position: {
          x: randomNumBetweenExcluding(
            0,
            state.screen.width,
            ship.position.x - 60,
            ship.position.x + 60
          ),
          y: randomNumBetweenExcluding(
            0,
            state.screen.height,
            ship.position.y - 60,
            ship.position.y + 60
          ),
        },
        create: createObject.bind(this),
        addScore: addScore.bind(this),
      });
      createObject(asteroid, asteroids);
    }
  };

  const createObject = (item, group) => {
    // Todo this ???
    group.push(item);
  };

  const updateObjects = (items, group) => {
    let index = 0;
    for (let item of items) {
      if (item.delete) {
        group.splice(index, 1);
      } else {
        items[index].render(state);
      }
      index++;
    }
  };

  const checkCollisionsWith = (items1, items2) => {
    var a = items1.length - 1;
    var b;
    for (a; a > -1; --a) {
      b = items2.length - 1;
      for (b; b > -1; --b) {
        var item1 = items1[a];
        var item2 = items2[b];
        if (checkCollision(item1, item2)) {
          item1.destroy();
          item2.destroy();
        }
      }
    }
  };

  const checkCollision = (obj1, obj2) => {
    var vx = obj1.position.x - obj2.position.x;
    var vy = obj1.position.y - obj2.position.y;
    var length = Math.sqrt(vx * vx + vy * vy);
    if (length < obj1.radius + obj2.radius) {
      return true;
    }
    return false;
  };

  const update = () => {
    const context = canvas.current.getContext("2d");
    const ratio = state.screen.ratio
    const width = state.screen.width
    const keys = state.keys;
    const ship = ships[0];
    

    context.save();
    context.scale(state.screen.ratio, state.screen.ratio);

    // Motion trail
    context.fillStyle = "#000";
    context.globalAlpha = 0.4;
    console.log(state.screen.height);
    context.fillRect(0, 0, state.screen.width, state.screen.height);
    context.globalAlpha = 1;

    // // Next set of asteroids
    if (!asteroids.length) {
      let count = state.asteroidCount + 1;
      // TODO: update state of astroid couns
      updateSelection("astroidCount", count);
      generateAsteroids(count);
    }

    // Check for colisions
    checkCollisionsWith(bullets, asteroids);
    checkCollisionsWith(ship, asteroids);

    // Remove or render
    updateObjects(particles, particles);
    updateObjects(asteroids, asteroids);
    updateObjects(bullets, bullets);
    //updateObjects(ship, ships);

    context.restore();

    // Next frame
    requestAnimationFrame(() => {
      update();
    });
  };

  let endgame;
  let message;

  if (state.currentScore <= 0) {
    message = "0 points... So sad.";
  } else if (state.currentScore >= state.topScore) {
    message = "Top score with " + state.currentScore + " points. Woo!";
  } else {
    message = state.currentScore + " Points though :)";
  }

  if (!state.inGame) {
    endgame = (
      <div className="endgame">
        <p>Game over, man!</p>
        <p>{message}</p>
        <button onClick={startGame.bind(this)}>try again?</button>
      </div>
    );
  }

  const test = () => {
    console.log(state.screen.width)
  }

  return (
    <div className={classes.root} ref={divElement}>
      {/*{ endgame }
        <span className="score current-score" >Score: {this.state.currentScore}</span>
        <span className="score top-score" >Top Score: {this.state.topScore}</span>
        <span className="controls" >
          Use [A][S][W][D] or [←][↑][↓][→] to MOVE<br/>
          Use [SPACE] to SHOOT
    </span>*/}
    <Button variant="contained" onClick={() => {test()}}>Default</Button>
      <canvas
        ref={canvas}
        width={state.screen.width * state.screen.ratio}
        height={state.screen.height * state.screen.ratio}
      />
    </div>
  );
}
