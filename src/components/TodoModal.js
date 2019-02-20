import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const TodoModal = (props) => (
  <Modal
    isOpen={!!props.selectedTodo}
    onRequestClose={props.handleClearSelectedTodo}
    style={customStyles}
    contentLabel="Selected Todo"
  >
    <h3>Selected Todo</h3>
    {props.selectedTodo && <p>{props.selectedTodo}</p>}
    <button onClick={props.handleClearSelectedTodo}>Okay</button>
  </Modal>
);

export default TodoModal;
