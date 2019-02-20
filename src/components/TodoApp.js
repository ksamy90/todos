import React from 'react';
import AddTodo from './AddTodo';
import Action from './Action';
import Header from './Header';
import Todos from './Todos';
import TodoModal from './TodoModal';

export default class TodoApp extends React.Component {
  state = {
    todos: [],
    selectedTodo: undefined
  };
  handleDeleteTodos = () => {
    this.setState(() => ({ todos: [] }));
  };
  handleClearSelectedTodo = () => {
    this.setState(() => ({ selectedTodo: undefined }));
  }
  handleDeleteTodo = (todoToRemove) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todoToRemove !== todo)
    }));
  };
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.todos.length);
    const todo = this.state.todos[randomNum];
    this.setState(() => ({
      selectedTodo: todo
    }));
  };
  handleAddTodo = (todo) => {
    if (!todo) {
      return 'Enter valid value to add item';
    } else if (this.state.todos.indexOf(todo) > -1) {
      return 'This todo already exists';
    }

    this.setState((prevState) => ({
      todos: prevState.todos.concat(todo)
    }));
  };
  componentDidMount() {
    try {
      const json = localStorage.getItem('todos');
      const todos = JSON.parse(json);

      if (todos) {
        this.setState(() => ({ todos }));
      }
    } catch (e) {}
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos.length !== this.state.todos.length) {
      const json = JSON.stringify(this.state.todos);
      localStorage.setItem('todos', json);
    }
  }
  render() {

    return (
      <div>
        <Header />
        <Action
          hasTodos={this.state.todos.length > 0}
          handlePick={this.handlePick}
        />
        <Todos
          todos={this.state.todos}
          handleDeleteTodos={this.handleDeleteTodos}
          handleDeleteTodo={this.handleDeleteTodo}
        />
        <AddTodo
          handleAddTodo={this.handleAddTodo}
        />
        <TodoModal
          selectedTodo={this.state.selectedTodo}
          handleClearSelectedTodo={this.handleClearSelectedTodo}
        />
      </div>
    );
  }
}
