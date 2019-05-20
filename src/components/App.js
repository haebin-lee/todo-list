import React, {Component} from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as settingsActions from '../modules/settings';

import TodoInputContainer from '../containers/TodoInputContainer';
import TodoListContainer from '../containers/TodoListContainer';

const initialTodos = new Array(500).fill(0).map(
  (foo, index) => ({id: index, text: `일정 ${index}`, done:false})
);

class App extends Component {

  state = {
    input: '', 
    todos: [
      {id:0, text: '리액트 공부하기', done:true}, 
      {id:1, text: '컴포넌트 스타일링 하기', done: false},
    ]
    // todos: initialTodos,
  }
  id =1; 
  getId = () =>{
    return ++this.id;
  }

  handleChange = (e) =>{
    const {value} = e.target;
    this.setState({
      input: value
    })
  }

  handleInsert = () =>{
    const {todos, input} = this.state;
    const newTodo = {
      id: this.getId(),
      done: false, 
      text: input,
    }

    this.setState({
      // todos: todos.concat(newTodo), 
      todos: [...todos, newTodo],
      input: '',
    })
  }

  handleToggle = (id) =>{

    const {todos} = this.state;
    const index = todos.findIndex(todo => todo.id === id);

    const toggled = {
      ...todos[index], 
      done: !todos[index].done
    }

    this.setState({
      todos: [
        ...todos.slice(0, index), 
        toggled, 
        ...todos.slice(index+1, todos.length)
      ]
    });
  }
   
  handleRemove = (id) =>{
    const {todos} = this.state;
    const index = todos.findIndex(todo => todo.id === id);

    this.setState({
      todos: todos.filter((todo)=> todo.id !== index)
    })
  }
  render(){
    const {input, todos} = this.state;
    let {SettingsActions, settings} = this.props;
    let type = settings.get('type');
    return(
      <div>
        <button type="button" onClick={() => SettingsActions.setType(0)}>일반</button>
        <button type="button" onClick={() => SettingsActions.setType(1)}>리덕스 적용</button>
        {
          type===0? ' 일반' : ' 리덕스'
        }
        {
          type===0? 
          <PageTemplate>
            <TodoInput onChange={this.handleChange} onInsert={this.handleInsert} value={input}/>
            <TodoList todos={todos} onToggle={this.handleToggle} onRemove={this.handleRemove}/>
          </PageTemplate>:
          <PageTemplate>
            <TodoInputContainer/>
            <TodoListContainer/>
          </PageTemplate>
        }
      </div>
    

    )
  }
}


export default connect(
  (state) =>({
    settings: state.settings,
  }), 
  (dispatch) => ({
    SettingsActions: bindActionCreators(settingsActions, dispatch)
  })
)(App);
