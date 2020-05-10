import { applyMiddleware, createStore } from "redux";
import Reducers from "../Reducers/Reducers";
import thunk from "redux-thunk";

const middleware = applyMiddleware(thunk);
const store = createStore(Reducers, middleware);

export default store;
