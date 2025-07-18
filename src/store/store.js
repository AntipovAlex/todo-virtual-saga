import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import todosReducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(todosReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
