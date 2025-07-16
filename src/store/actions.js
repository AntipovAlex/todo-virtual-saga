export const loadTodosRequest = () => ({ type: "LOAD_TODOS_REQUEST" });

export const loadTodosSuccess = (todos) => ({
  type: "LOAD_TODOS_SUCCESS",
  payload: todos,
});

export const addTodo = (text) => ({ type: "ADD_TODO", payload: text });

export const deleteTodo = (id) => ({ type: "DELETE_TODO", payload: id });

export const editTodo = (id, text) => ({
  type: "EDIT_TODO",
  payload: { id, text },
});
