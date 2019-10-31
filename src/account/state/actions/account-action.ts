// export const login = () => ({
//     type: "LOGIN",
//     loading: true
// })


export const logout = () => ({
    type: 'LOGOUT',
    loading: true
})

export const action = (type: string) => ({
    type: type
})

export enum ACCOUNT {
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT",
    LOGIN_ASYNC = "LOGIN_ASYNC",
    LOGOUT_ASYNC = "LOGOUT_ASYNC"
}