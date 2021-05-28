import React, { useState, useEffect } from "react";
import "./TodoForm.css";

function TodoForm(props) {
  const { onAdd, todoItems, istodoEdited, editableItem, onEdit } = props;

  const [todoInput, setTodoInput] = useState(``);
  const [_editableItem, setEditableItem] = useState(editableItem);
  console.log(`_editableItem`, _editableItem);
  console.log(`todoInput`, todoInput);

  useEffect(() => {
    if (istodoEdited) {
      setTodoInput(editableItem.name);
      setEditableItem(editableItem);
    } else {
    }
  }, [istodoEdited]);

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

  const handleEdit = (event) => {
    event.preventDefault();
    let cloneTodoItems = [...todoItems];
    let isIndexExicts = (item) => item.id === _editableItem.id;
    let findIndex = cloneTodoItems.findIndex(isIndexExicts);
    cloneTodoItems[findIndex] = _editableItem;
    onEdit(cloneTodoItems);
    setTodoInput(``);
  };

  const handleInputChange = (event) => {
    if (!istodoEdited) {
      setTodoInput(event.target.value);
    } else {
      setEditableItem((editableItem) => {
        let cloneEditableItem = { ...editableItem };
        cloneEditableItem["name"] = event.target.value;
        return cloneEditableItem;
      });
      setTodoInput(_editableItem.name);
    }
  };

  return (
    <div>
      <form>
        <h1>{istodoEdited ? `Edit Todo Form` : `Add Todo Form`}</h1>
        <input value={todoInput} onChange={handleInputChange} />
        <button onClick={!istodoEdited ? handleAddTodo : handleEdit}>
          {istodoEdited ? `Edit ToDo` : `Create ToDo`}
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
