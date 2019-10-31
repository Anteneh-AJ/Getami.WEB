import { put, takeLatest, delay } from "redux-saga/effects"

function* handleLogin() {
    yield put({ type: "LOGIN_ACCOUNT", loading: true });
    yield delay(5000);
    yield put({ type: "LOGGEDIN", isLoggedIn: true })
}

export function* watchLogin() {
    yield takeLatest("LOGIN", handleLogin);
}