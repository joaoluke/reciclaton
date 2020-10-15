import login from "./login";
import user from "./user";
import complaint from "./complaint";
import { combineReducers } from "redux";
import register from "./register";
import ranking from './ranking';

export default combineReducers({ login, user, complaint, register, ranking });


