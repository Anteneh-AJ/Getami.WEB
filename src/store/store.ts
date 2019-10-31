import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { counterReducer } from "../defualt/state/reducer/counter-reducer";
import { accountReducer } from "../account/state/reducer/account-reducer";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./root-saga";

export const reducer = combineReducers({
    counter: counterReducer,
    account: accountReducer
});

const sagaMiddleWare = createSagaMiddleware();


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// export const store = createStore(reducer, applyMiddleware(sagaMiddleWare));
export const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleWare)));
sagaMiddleWare.run(rootSaga);