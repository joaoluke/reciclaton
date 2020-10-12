import login from "./login";
import userService from "./user-service";
import user from "./user";
import { combineReducers } from "redux";
export default combineReducers({ login, userService, user });
