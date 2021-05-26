import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

function TodoList(props) {
  const { data, onDelete, handleCheckbox, onEdit } = props;

  return (
    <div>
      <ul>
        <h1>Todo List</h1>
        {data.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            onDelete={onDelete}
            handleCheckbox={handleCheckbox}
            onEdit={onEdit}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
