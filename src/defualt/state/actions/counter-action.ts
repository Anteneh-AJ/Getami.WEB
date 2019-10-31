export function increment() {
    return {
        type: 'INCREMENT'
    }
}

export function decrement() {
    return {
        type: 'DECREMENT'
    }
}

export enum CounterActionTypes {
    INCREMENT = "INCREMENT",
    DECREMENT = "DECREMENT"
}
export enum CounterActionLoad {
    INCREMENTASYNC = "INCREMENT_ASYNC",
    DECREMENTASYNC = "DECREMENT_ASYNC"
}