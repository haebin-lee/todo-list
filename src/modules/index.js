import input from './input';
import todos from './todos';
import settings from './settings';

import {combineReducers} from 'redux';

export default combineReducers({
    settings,
    input, 
    todos
});