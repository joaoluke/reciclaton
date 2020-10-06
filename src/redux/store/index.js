import { createStore, applyMiddleware } from "redux";
import { combine } from "../reducers";
import thunk from "redux-thunk";

export const store = createStore(combine, applyMiddleware(thunk));
