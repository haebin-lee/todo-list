import {List, Map} from 'immutable';
import {handleActions, createAction} from 'redux-actions';

// 액션타입 
const INSERT    = 'todos/INSERT';
const TOGGLE    = 'todos/TOGGLE';
const REMOVE    = 'todos/REMOVE';

// 액션생성함수 
export const insert    = createAction(INSERT);
export const toggle     = createAction(TOGGLE);
export const remove     = createAction(REMOVE);

//초기값
const initialState = List([
    Map({
        id:0, 
        text: '리액트 공부하기', 
        done: true,
    }), 
    Map({
        id:1, 
        text: '리덕스공부하기', 
        done: false,
    })
])

export default handleActions({
    [insert]: (state, action) =>{
        const {id, text, done} = action.payload;
        return state.push(Map({ id, text, done }))
    },
    [TOGGLE]: (state, action) =>{
        const {payload: index} = action
        return state.updateIn([index, 'done'], done => !done);
    }, 
    [REMOVE]: (state, action) =>{
        const {payload: index} = action
        return state.delete(index)
    }
}, initialState)