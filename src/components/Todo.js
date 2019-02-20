import React from 'react';

const Todo = (props) => (
  <div>
    {props.todoText}
    <button
      onClick={(e) => {
        props.handleDeleteTodo(props.todoText);
      }}
    >
      remove
      </button>
  </div>
);

export default Todo;
