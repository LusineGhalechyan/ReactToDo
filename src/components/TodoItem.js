import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  console.log(`props_ITEM`, props);

  const {
    item: { name },
    item: { id },
    item: { isComplete },
    onDelete,
    handleCheckbox,
    onEdit,
  } = props;

  return (
    <li>
      <input
        type="checkbox"
        checked={isComplete}
        onChange={() => handleCheckbox(id)}
      />
      <p className={isComplete ? `complete` : ``}>{name}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
      <button onClick={() => onEdit(id)}>Edit</button>
    </li>
  );
}

export default TodoItem;
