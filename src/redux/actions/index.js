export const ADD_TO_FAV = "ADD_TO_FAV";
export const REMOVE_FROM_FAV = "REMOVE_FROM_FAV";

export const addToFavoAction = (comp) => ({
  type: ADD_TO_FAV,
  payload: comp,
});
export const removeFromFavoAction = (index) => ({
  type: REMOVE_FROM_FAV,
  payload: index,
});
