import React, { useState } from "react";
import "./TodoForm.css";

function TodoForm(props) {
  const { onAdd, editableItemId, todoItems } = props;
  const [todoInput, setTodoInput] = useState(``);

  const handleAddTodo = (event) => {
    event.preventDefault();

    let todoItem = {
      id: Math.random(),
      name: todoInput,
      isComplete: false,
    };
    onAdd(todoItem);
    setTodoInput(``);
  };

  const handleInputChange = (event) => {
    setTodoInput(event.target.value);
  };

  return (
    <div>
      <form>
        <h1>Add Todo Form</h1>
        <input value={todoInput} onChange={handleInputChange} />
        <button onClick={handleAddTodo}>Create ToDo</button>
      </form>
    </div>
  );
}

export default TodoForm;
