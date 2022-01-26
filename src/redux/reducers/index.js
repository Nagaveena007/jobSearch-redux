import { ADD_TO_FAV, REMOVE_FROM_FAV } from "../actions";
import { initialState } from "../store";

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAV:
      return {
        ...state,
        favourite: [...state.favourite, action.payload],
      };
    case REMOVE_FROM_FAV:
      return {
        ...state,
        favourite: state.favourite.filter((comp) => comp !== action.payload),
      };
    default:
      return state;
  }
};
export default mainReducer;
