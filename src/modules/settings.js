import {Map} from 'immutable';
import {handleActions, createAction} from 'redux-actions';

//액션타입 
const SET_TYPE = 'settings/SET_TYPE';

//액션생성함수 
export const setType = createAction(SET_TYPE);

const initialState = Map({
    type: 0, // 0:일반, 1. 리덕스적용
})

export default handleActions({
    [SET_TYPE]: (state, action) => {
        return state.set('type', action.payload)
    }
}, initialState)