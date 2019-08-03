export const parseCompositeString = string =>
  string.split("&").map(item => item.split(";"));
