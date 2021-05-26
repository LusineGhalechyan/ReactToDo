import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const [editableItemId, setEditableItemId] = useState(``);
  // console.log(`editedItems`, typeof editableItemId);

  const handleAdd = (newTodo) => {
    setTodoItems([...todoItems, newTodo]);
  };

  const handleDelete = (id) => {
    let updatedItems = todoItems.filter((item) => item.id !== id);
    setTodoItems(updatedItems);
  };

  const handleCheckbox = (id) => {
    let updatedItems = todoItems.map((item) => {
      if (id === item.id) {
        let toggle = !item.isComplete;
        item.isComplete = toggle;
      }
      return item;
    });
    setTodoItems(updatedItems);
  };

  const handleEdit = (id) => {
    console.log(`ID`, id);
    setEditableItemId(id);
  };

  return (
    <div className="App">
      <TodoForm
        onAdd={handleAdd}
        editableItemId={editableItemId}
        todoItems={todoItems}
      />
      <TodoList
        data={todoItems}
        onDelete={handleDelete}
        handleCheckbox={handleCheckbox}
        onEdit={handleEdit}
      />
    </div>
  );
}

export default App;
