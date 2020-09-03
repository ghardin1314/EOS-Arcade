import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const astroState = {
  screen: {
    width: 400, // window.innerWidth,
    height: 400, //window.innerHeight,
    ratio: window.devicePixelRatio || 1,
  },
  context: null,
  keys: {
    left: 0,
    right: 0,
    up: 0,
    down: 0,
    space: 0,
  },
  asteroidCount: 3,
  currentScore: 0,
  topScore: localStorage["topscore"] || 0,
  inGame: false,
};

const updateSelection = (state, action) => {
  return updateObject(state, {
    [action.field]: action.selection,
  });
};

const startAstro = (state, action) => {
  console.log("StartedGame")
  return updateObject(state, {
    inGame: true
  })
}

const endAstro = (state, action) => {
  return updateObject(state, {
    inGame: false
  })
}

const AstroReducer = (state = astroState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_ASTRO:
      return updateSelection(state, action);
    case actionTypes.START_ASTRO:
      return startAstro(state, action)
    case actionTypes.END_ASTRO:
        return endAstro(state, action)
    default:
      return state;
  }
};

export default AstroReducer