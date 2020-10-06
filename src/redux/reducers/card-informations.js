import { ADD_INFORMATIONS } from "../action/card-informations";
const defaultState = [];
const cardInformations = (state = defaultState, { type, informations }) => {
  switch (type) {
    case ADD_INFORMATIONS:
      return [...state, informations];

    default:
      return state;
  }
};

export default cardInformations;
