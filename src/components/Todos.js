import React from 'react';
import Todo from './Todo';

const Todos = (props) => (
  <div>
    <button onClick={props.handleDeleteTodos}>Remove All</button>
    {props.todos.length === 0 && <p>Please add an option to get started!</p>}
    {
      props.todos.map((todo, index) => (
        <Todo
          key={todo}
          id={index}
          todoText={todo}
          handleDeleteTodo={props.handleDeleteTodo}
        />
      ))
    }
  </div>
);

export default Todos;
