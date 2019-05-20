import React, { Component } from 'react';
import TodoInput from '../components/TodoInput';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as inputActions from '../modules/input';
import * as todosActions from '../modules/todos';

class TodoInputContainer extends Component {

    id =1; 
    getId = () =>{
        return ++this.id;
    }

    handleChange = (e) =>{
        const {value} = e.target;
        const {InputActions} = this.props;
        InputActions.setInput(value);
    }

    handleInsert = () =>{
       const {InputActions, TodosActions, value} = this.props;
       const todo = {
           id: this.getId(), 
           text: value, 
           done: false,
       } 

       TodosActions.insert(todo);
       InputActions.setInput('');
    }

    render() {
        const {value} = this.props;

        return (
            <TodoInput
                onChange={this.handleChange}
                onInsert = {this.handleInsert}
                value = {value}
            />
        );
    }
}

export default connect(
    (state) => ({
        value: state.input.get('value')
    }), 
    (dispatch) => ({
        /*
            bingActionCreators를 사용하면 모든 것을 일일이 dispatch할 필요없다. 
            this.props.InputAction.setInput()로 호출하면 된다. 
         */
        InputActions: bindActionCreators(inputActions, dispatch),
        TodosActions: bindActionCreators(todosActions, dispatch),
    })
)(TodoInputContainer)