import C from "../constants";

let nextTodoId = 1;
export const addTodo = text => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  text
});

export const setVisibilityFilter = filter => ({
  type: "SET_VISIBILITY_FILTER",
  filter
});

export const toggleTodo = id => {
  console.log("toggleTodo");
  return {
    type: "TOGGLE_TODO",
    id
  };
};

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

export const setCurrentCategory = number => {
  return {
    type: C.SET_NUMBER_CATEGORY,
    payload: number
  };
};
