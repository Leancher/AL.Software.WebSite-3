import C from "../constants";
const initialState = 1;

const curCategory = (state = initialState, action) => {
  switch (action.type) {
    case C.SET_NUMBER_CATEGORY:
      return action.payload;

    default:
      return state;
  }
};

export default curCategory;
