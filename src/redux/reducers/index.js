import login from "./login";
import user from "./user";
import card from "./card-informations";
import { combineReducers } from "redux";

export default combineReducers({ login, user, card });
