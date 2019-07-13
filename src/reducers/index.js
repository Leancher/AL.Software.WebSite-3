import { combineReducers } from "redux";
import { pageReducer } from "./page";
import { userReducer } from "./user";
import { categories } from "./categories";
import curCategory from "./curCategory";

export const rootReducer = combineReducers({
  page: pageReducer,
  user: userReducer,
  categories: categories,
  curCategory: curCategory
});
