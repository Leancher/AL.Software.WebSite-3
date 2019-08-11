import { buildReqStr, requestHandler } from "./requestHundler";

export const CUR_CAT_REQUEST = {
  SEND: "CUR_CAT_REQUEST_SEND",
  SUCCESS: "CUR_CAT_REQUEST_SUCCESS",
  FAIL: "CUR_CAT_REQUEST_FAIL",
  RESET: "CUR_CAT_REQUEST_RESET"
};

export const getCurrentCategory = catNum => {
  const reqStr = buildReqStr("getCurrentCategory", catNum);
  return requestHandler(reqStr, CUR_CAT_REQUEST);
};
