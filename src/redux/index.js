import { createStore, combineReducers } from 'redux';
import counter from './counter';
import home from './home';

export default createStore(combineReducers({
    counter, home
}));