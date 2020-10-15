import { PASS, ERROR } from "../action/login";

const defaultState = {
  pass: false,
  err: "",
};

const register = (state = defaultState, action) => {
  switch (action.type) {
    case PASS:
      return { ...state, pass: action.pass };
    case ERROR:
      return { ...state, err: action.err };
    default:
      return state;
  }
};

export default register;
