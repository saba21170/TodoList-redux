// TodoList.js
import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions/todoActions';

const TodoList = (props) => {
  const handleDelete = (id) => {
    props.deleteTodo(id);
  };

  return (
    <div>
      <ul>
        {props.todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps, { deleteTodo })(TodoList);