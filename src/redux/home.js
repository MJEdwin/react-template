import { createActions, handleActions } from 'redux-actions'

const config = {
    prefix: "HOME"
};

export const types = {
    INIT: 'INIT',
    SET_VALUE: 'SET_VALUE'
};

export const actions = createActions({
    [types.INIT]: undefined,
    [types.SET_VALUE]: playload => playload
}, config);

const initalState = "hello,world";

export default handleActions({
    [types.INIT]: () => initalState,
    [types.SET_VALUE]: (state, action) => action.payload
}, initalState, config);
