import login from "./login";
import user from "./user";
import complaint from "./complaint";
import { combineReducers } from "redux";

export default combineReducers({ login, user, complaint });
