import C from "../constants";
const initialState = {
  currentCategory: 1
};
function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case C.SET_NUMBER_CATEGORY:
      return { ...state, currentCategory: action.payload };
    default:
      return state;
  }
}
export default categoryReducer;
