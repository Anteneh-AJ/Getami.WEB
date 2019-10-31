export type AccountState = {
    account: {
        isLoggedIn: boolean,
        loading: boolean
    }
}
export type Action =
    { type: "LOGIN_ACCOUNT", loading: boolean } |
    { type: "LOGOUT", loading: boolean } |
    { type: "LOGGEDIN", isLoggedIn: boolean };
