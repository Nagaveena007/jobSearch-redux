import { createStore } from "redux";

import mainReducer from "../reducers";

export const initialState = {
  favourite: [],
};
let configureStore = createStore(
  mainReducer,
  initialState,
  Window.__REDUX_DEVTOOLS_EXTENSION__ && Window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default configureStore;
