var createAction = (type, playload) => {
    return { type, playload };
};

var createReducer = (initalState, actions) => {
    return (state = initalState, action) => {
        if (actions.hasOwnProperty(action.type)) {
            return actions[action.type](state, action.playload);
        }
        return state;
    }
}


export {
    createReducer,
    createAction
}