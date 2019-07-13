import C from "../constants";

export function setYear(year) {
  return {
    type: "SET_YEAR",
    payload: year
  };
}

export const setCurrentCategory = number => ({
  type: C.SET_NUMBER_CATEGORY,
  payload: number
});
