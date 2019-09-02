import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";

// createStore - создает хранилище, принимает функцию-редьюсер, остальные необязательные
export const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export const catsInitStore = {
  items: [
    "PatternPage",
    "5",
    "0",
    "Страница-шаблон",
    "Описание странцы-щаблонв",
    "3",
    "1",
    "0",
    "1"
  ],
  state: "init",
  error: null
};

export const curCatInitStore = {
  items: [
    [],
    "SubCategory",
    "5",
    "1",
    "Страница-шаблон подкатегории",
    "Описание страница-шаблона подкатегории",
    "3",
    "0",
    "1",
    "0"
  ],
  state: "init",
  error: null
};

export const photoListInitStore = {
  items: ["photo1", "photo2"],
  state: "init",
  error: null
};
