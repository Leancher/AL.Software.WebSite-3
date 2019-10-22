import { combineReducers } from "redux";
import { asyncActionsHandler } from "./asyncActionsHandler";
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
  const photosList = asyncActionsHandler(
    "getPhotosList",
    "photoListInitStore",
    parseSimpleString
  );
  const notesPreviewList = asyncActionsHandler(
    "getNotesPreview",
    "notePreviewInitStore",
    parseCompositeString
  );
  const reducers = {
    categories,
    currentCategory,
    photosList,
    notesPreviewList
  };
  return reducers;
};

// Объединяем все редьсеры в один
// При обновлении состояния вызываются все функции-редьюсеры
// В каждом редьюсере есть аргументы: состояние и тип,
// Если тип совпадает, то возврщается новое значени, если
// нет, то первоначальное или неопределенное.
export const rootReducer = combineReducers(buildReducers());
