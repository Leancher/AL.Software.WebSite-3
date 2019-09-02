import { PHOTO_REQUEST_TYPES } from "../actions/getPhotosList";
import { parseSimpleString } from "../Utilites/parseString";
import { photoListInitStore } from "../store";

export const currentCategory = (store = photoListInitStore, action) => {
  switch (action.type) {
    case PHOTO_REQUEST_TYPES.SEND:
      return Object.assign({}, store, {
        state: "fetching",
        error: null
      });
    case PHOTO_REQUEST_TYPES.SUCCESS:
      const newStore = Object.assign({}, store, {
        items: parseSimpleString(action.payload),
        state: "success",
        error: null
      });
      return newStore;
    case PHOTO_REQUEST_TYPES.FAIL:
      return Object.assign({}, store, {
        state: "fail",
        error: action.payload
      });
    case PHOTO_REQUEST_TYPES.RESET:
      return Object.assign({}, store, {
        state: "init",
        error: null
      });
    default:
      return Object.assign({}, store);
  }
};
