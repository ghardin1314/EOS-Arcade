import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const appState = {
  loading: false,
};

const updateSelection = (state, action) => {
  return updateObject(state, {
    [action.field]: action.selection,
  });
};

const AppReducer = (state = appState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_FIELD:
      return updateSelection(state, action);
    default:
      return state;
  }
};

export default AppReducer;
