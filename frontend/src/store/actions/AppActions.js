import * as actionTypes from "./actionTypes";

export const updateApp = (key, value) => {
    return {
      type: actionTypes.UPDATE_APP,
      key: key,
      value: value,
    };
  };