import login from "./login";
import userService from "./user-service";
import user from "./user";
import card from "./card-informations";
import { combineReducers } from "redux";
export default combineReducers({ login, userService, user, card });
