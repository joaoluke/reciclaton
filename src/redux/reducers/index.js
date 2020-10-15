import login from "./login";
import userService from "./user-service";
import user from "./user";
import complaint from "./complaint";
import register from "./register";
import card from "./card-informations";
import usersList from "./users";
import { combineReducers } from "redux";
export default combineReducers({
  login,
  userService,
  user,
  card,
  usersList,
  register,
  complaint,
});
