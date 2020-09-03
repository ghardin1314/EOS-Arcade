import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  inGame: false,
};

const startAstro = (state, action) => {
  return updateObject(state, {
    inGame: true,
  });
};

const endAstro = (state, action) => {
  return updateObject(state, {
    inGame: false,
  });
};

const AstroReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_ASTRO:
      return startAstro(state, action);
    case actionTypes.END_ASTRO:
      return endAstro(state, action);
    default:
      return state;
  }
};

export default AstroReducer;
