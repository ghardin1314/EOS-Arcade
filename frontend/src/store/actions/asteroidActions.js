import * as actionTypes from "./actionTypes";

export const updateSelection = (field, selection) => {
  return {
    type: actionTypes.UPDATE_FIELD,
    field: field,
    selection: selection,
  };
};
