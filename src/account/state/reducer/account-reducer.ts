import { Action } from "../state";

const initialState = { isLoggedIn: false, loading: false };


export const accountReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case "LOGIN_ACCOUNT":
            state = { ...state, loading: action.loading };
            break;
        case "LOGGEDIN":
            state = { ...state, isLoggedIn: action.isLoggedIn };
            break;
        case "LOGOUT":
            state = { ...state, loading: action.loading };
            break;
        default:
            state = { ...state };
    }
    return state;
}