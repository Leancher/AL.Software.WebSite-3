import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";
import categoryReducer from "./setCategory";

export default combineReducers({
  todos,
  visibilityFilter,
  categoryReducer
});
