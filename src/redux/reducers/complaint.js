import { REQUIRE_COMPLAINTS } from "../action/complaint";


const defaultState = {
  complaints: [],
};

const ComplaintPage = (state = defaultState, action) => {
  switch (action.type) {
    case REQUIRE_COMPLAINTS:
      const { complaints } = action
      return { ...state, complaints }
    default:
      return state;
  }
};

export default ComplaintPage;
