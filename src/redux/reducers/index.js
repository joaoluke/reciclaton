import login from "./login";
import user from "./user";
import complaint from "./complaint";
import { combineReducers } from "redux";
import register from "./register";

export default combineReducers({ login, user, complaint, register });


