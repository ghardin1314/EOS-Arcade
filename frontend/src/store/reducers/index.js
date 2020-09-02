import { combineReducers } from 'redux'
import AstroReducer from "./astroReducer";
import AppReducer from "./appReducer"

export default combineReducers({
  AstroReducer,
  AppReducer,
});
