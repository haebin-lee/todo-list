import {List, Map} from 'immutable';
import {handleActions, createAction} from 'redux-actions';

//액션타입
const SET_INPUT = 'input/SET_INPUT';

//액션생성함수
export const setInput   = createAction(SET_INPUT);

//초기값
const initialState =  Map({
   value :''
});

export default handleActions({
    [SET_INPUT]: (state, action) =>{
        return state.set('value', action.payload)
    },
   
}, initialState)