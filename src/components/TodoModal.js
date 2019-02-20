import React from 'react';
import Modal from 'react-modal';

const TodoModal = (props) => (
  <Modal
    isOpen={!!props.selectedTodo}
    onRequestClose={props.handleClearSelectedTodo}
    contentLabel="Selected Todo"
  >
    <h3>Selected Todo</h3>
    {props.selectedTodo && <p>{props.selectedTodo}</p>}
    <button onClick={props.handleClearSelectedTodo}>Okay</button>
  </Modal>
);

export default TodoModal;
