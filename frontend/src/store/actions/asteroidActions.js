import * as actionTypes from "./actionTypes";

export const updateSelection = (field, selection) => {
  return {
    type: actionTypes.UPDATE_ASTRO,
    field: field,
    selection: selection,
  };
};
