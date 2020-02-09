import { handleActions, createActions } from 'redux-actions';

const config = {
    prefix: "COUNTER"
};

export const types = {
    INIT: 'INIT',
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT'
};

export const actions = createActions({
    [types.INIT]: undefined,
    [types.INCREMENT]: undefined,
    [types.DECREMENT]: undefined
}, config);

var initalState = 0;

export default handleActions({
    [types.INIT]: () => initalState,
    [types.INCREMENT]: (state) => state + 1,
    [types.DECREMENT]: (state) => state - 1
}, initalState, config);