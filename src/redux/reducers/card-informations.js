import { GET_CARD_INFORMATIONS } from "../action/card-informations";
const defaultState = [];
const card = (state = defaultState, { type, informations }) => {
  switch (type) {
    case GET_CARD_INFORMATIONS:
      return [...state, informations];

    default:
      return state;
  }
};

export default card;
