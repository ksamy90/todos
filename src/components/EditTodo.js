// import React from 'react';
// import AddTodo from './AddTodo';

// const EditTodo = () => (
//     <div>
//         <AddTodo />
//     </div>
// );

// export default EditTodo;

import React from 'react';

export default class AddTodo extends React.Component {
  state = {
    error: undefined
  };
  handleAddTodo = (e) => {
    e.preventDefault();
    const todo = e.target.elements.todo.value.trim();
    /

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.todo.value = '';
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddTodo}>
          <input type="text" name="todo" />
          <button>Add Todo</button>
        </form>
      </div>
    );
  }
}
