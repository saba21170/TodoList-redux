// TodoForm.js
import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/todoActions";

const TodoForm = (props) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      props.addTodo({
        id: new Date().getTime(),
        text: text,
      });
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default connect(null, { addTodo })(TodoForm);
