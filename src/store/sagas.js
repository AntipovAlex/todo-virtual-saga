import { put, takeLatest } from "redux-saga/effects";
import { loadTodosSuccess } from "./actions";

function generateTodos(count = 1000) {
  const todos = [];
  for (let i = 1; i <= count; i++) {
    todos.push({ id: i, text: `Task ${i}` });
  }
  return todos;
}

function* loadTodosSaga() {
  const data = generateTodos(1000);
  yield put(loadTodosSuccess(data));
}

export default function* rootSaga() {
  yield takeLatest("LOAD_TODOS_REQUEST", loadTodosSaga);
}
