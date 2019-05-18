import React, { Component } from 'react';
import TodoItem from '../TodoItem';

class TodoList extends Component {

    shouldComponentUpdate(prevProps, prevState){
        return prevProps.todos !== this.props.todos
    }
    
    render() {
        const {todos, onToggle, onRemove} = this.props;

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