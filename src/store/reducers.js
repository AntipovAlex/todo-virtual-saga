import { combineReducers } from "redux";

const initialState = [];

let nextId = 1001;

function todosReducer(state = initialState, action) {
  switch (action.type) {
    case "LOAD_TODOS_SUCCESS":
      return action.payload;
    case "ADD_TODO":
      return [...state, { id: nextId++, text: action.payload }];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    case "EDIT_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    default:
      return state;
  }
}

export default combineReducers({
  todos: todosReducer,
});
