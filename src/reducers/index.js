import { combineReducers } from "redux";
import { asyncActionsHandler } from "./asyncActionsHadler";
import {
  parseCompositeString,
  parseSimpleString
} from "../Utilites/parseString";

const buildReducers = () => {
  const categories = asyncActionsHandler(
    "getCategoriesList",
    "catsInitStore",
    parseCompositeString
  );
  const currentCategory = asyncActionsHandler(
    "getCurrentCategory",
    "curCatInitStore",
    parseCompositeString
  );
  const photoList = asyncActionsHandler(
    "getPhotosList",
    "photoListInitStore",
    parseSimpleString
  );
  const reducers = {
    categories,
    currentCategory,
    photoList
  };
  return reducers;
};

// Объединяем все редьсеры в один
// При обновлении состояния вызываются все функции-редьюсеры
// В каждом редьюсере есть аргументы: состояние и тип,
// Если тип совпадает, то возврщается новое значени, если
// нет, то первоначальное или неопределенное.
export const rootReducer = combineReducers(buildReducers());
