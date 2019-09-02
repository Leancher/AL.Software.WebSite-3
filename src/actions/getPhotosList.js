import { buildReqStr, requestHandler } from "./requestHundler";

export const PHOTO_REQUEST_TYPES = {
  SEND: "PHOTO_REQUEST_SEND",
  SUCCESS: "PHOTO_REQUEST_SUCCESS",
  FAIL: "PHOTO_REQUEST_FAIL",
  RESET: "PHOTO_REQUEST_RESET"
};

export function getPhotosList() {
  const reqStr = buildReqStr("getPhotosList");
  return dispatch => {
    return requestHandler(dispatch, reqStr, PHOTO_REQUEST_TYPES);
  };
}
