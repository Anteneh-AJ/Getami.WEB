import { put, takeLatest, delay } from "redux-saga/effects"

function* handleIncrement() {
    delay(1000);
    yield put({ type: "INCREMENT_BY_ONE" });
}

function* handleDecrement() {
    delay(1000);
    yield put({ type: "DECREMENT_BY_ONE" });
}

export function* watchIncrement() {
    yield takeLatest("INCREMENT", handleIncrement);
}

export function* watchDecrement() {
    yield takeLatest("DECREMENT", handleDecrement);
}