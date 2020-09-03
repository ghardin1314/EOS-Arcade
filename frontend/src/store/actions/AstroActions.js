import * as actionTypes from "./actionTypes";


export const startAstro = () => {
  return {
    type: actionTypes.START_ASTRO,
  };
};

export const endAstro = () => {
    return {
      type: actionTypes.END_ASTRO,
    };
  };