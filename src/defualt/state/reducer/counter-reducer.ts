const initialState = 0;

type Action = { type: 'INCREMENT' } | { type: 'DECREMENT' }

export const counterReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'INCREMENT':
            state = state + 1; break;
        case 'DECREMENT':
            state = state - 1; break;
        default:
            return 0;
    }
    return state;
}