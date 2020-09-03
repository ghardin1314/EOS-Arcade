import * as actionTypes from "./actionTypes";

export const updateSelection = (field, selection) => {
  return {
    type: actionTypes.UPDATE_ASTRO,
    field: field,
    selection: selection,
  };
};

export const startAstro = () => {
  console.log("Midfire")
  return {
    type: actionTypes.START_ASTRO,
  };
};

export const endAstro = () => {
  return {
    type: actionTypes.END_ASTRO,
  };
};
