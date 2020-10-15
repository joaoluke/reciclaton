import { USERS } from '../action/ranking';

const defaultState = {
    users: [],
}

const RankingUsers = (state = defaultState, action) => {
    switch (action.type) {
        case USERS:
            return {...state, users: action.users}
        default:
            return state;
    }
}

export default RankingUsers;