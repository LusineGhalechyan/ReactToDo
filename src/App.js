import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const [editableItem, setEditableItem] = useState(null);
  const [istodoEdited, setistodoEdited] = useState(false);

  console.log(`editableItem`, editableItem);
  console.log(`todoItems`, todoItems);

  const handleAdd = (newTodo) => {
    setTodoItems([...todoItems, newTodo]);
  };

  const handleDelete = (id) => {
    const isItemExists = (item) => item.id !== id;
    let updatedItems = todoItems.filter(isItemExists);
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

  const handleEdit = (editableItem) => {
    setEditableItem(editableItem);
    setistodoEdited(!istodoEdited);
  };

  const handleFormEdit = (editedTodos) => {
    setTodoItems([...editedTodos]);
    setistodoEdited(false);
  };

  return (
    <div className="App">
      <TodoForm
        onAdd={handleAdd}
        onEdit={handleFormEdit}
        todoItems={todoItems}
        istodoEdited={istodoEdited}
        editableItem={editableItem}
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
