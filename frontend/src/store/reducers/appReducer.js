import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  loading: false,
};

const updateApp = (state, action) => {
  return updateObject(state, {
    [action.key]: action.value,
  });
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_APP:
      return updateApp(state, action);
    default:
      return state;
  }
};

export default AppReducer;