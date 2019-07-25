import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";

// createStore - создает хранилище, принимает функцию-редьюсер, остальные необязательные
export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
