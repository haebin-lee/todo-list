import React, { Component } from 'react';
import {Map, List} from 'immutable';
import TodoItem from '../TodoItem';
import { isImmutable } from '@babel/types';

class TodoList extends Component {

    shouldComponentUpdate(prevProps, prevState){
        return prevProps.todos !== this.props.todos
    }
    
    render() {
        let {todos, onToggle, onRemove} = this.props;
        if(List.isList(todos)){
            todos = todos.toJS()
        }
        const todoList = todos.map(
            todo=>(
                <TodoItem
                    key = {todo.id}
                    id = {todo.id}
                    done = {todo.done}
                    onToggle = {() => onToggle(todo.id)}
                    onRemove = {() => onRemove(todo.id)}
                    >
                    {todo.text}
                </TodoItem>
            )
        );

        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoList;