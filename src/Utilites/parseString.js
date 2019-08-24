export const parseCompositeString = str =>
  str.split("&").map(item => item.split(";"));
