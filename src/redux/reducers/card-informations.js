import { ADD_INFORMATIONS } from "../action/card-informations";
const defaultState = [];
const cardInformations = (state = defaultState, { type, addInformations }) => {
  switch (type) {
    case ADD_INFORMATIONS:
      return [...state, addInformations];

    default:
      return state;
  }
};

export default cardInformations;
