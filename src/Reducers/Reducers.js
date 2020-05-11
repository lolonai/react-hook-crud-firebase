import { combineReducers } from "redux";
import createUser from "./signin";
import loginUser from "./login";
import logoutUser from "./logout";
import createPost from "./create";

const reducers = combineReducers({
  signIn: createUser,
  logIn: loginUser,
  logOut: logoutUser,
  create: createPost,
});

export default reducers;
