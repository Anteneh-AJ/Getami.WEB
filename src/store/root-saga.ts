import { all } from 'redux-saga/effects';
// import { watchLogin } from '../account/state/saga/account-saga';
import { watchIncrement, watchDecrement } from '../defualt/state/saga/counter-saga';
import { watchLogin } from '../account/state/saga/account-saga';

export function* rootSaga() {
    yield all([
        watchDecrement(), watchIncrement(), watchLogin()]);
}