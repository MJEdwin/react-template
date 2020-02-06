import { createReducer } from '../reduxHelper';

var initalState = 0;

function increase(state) {
    return state + 1;
}

function decrease(state) {
    return state - 1;
}

export default createReducer(initalState, {
    increase,
    decrease
});