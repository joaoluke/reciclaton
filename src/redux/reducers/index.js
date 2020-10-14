import login from "./login";
import user from "./user";
import register from "./register";
import { combineReducers } from "redux";

export default combineReducers({ login, user, register });
