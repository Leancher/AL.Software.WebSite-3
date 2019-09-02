export const parseCompositeString = str =>
  str.split("&").map(item => item.split(";"));
export const parseSimpleString = string => string.split("&");
