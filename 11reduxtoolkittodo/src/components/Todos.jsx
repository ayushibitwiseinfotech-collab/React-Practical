
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeTodo,
  setEditingTodo,
} from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  // Confirm before editing a todo
  const handleEdit = (todo) => {
    const confirmEdit = window.confirm(
      `Do you want to edit "${todo.text}"?`
    );

    if (confirmEdit) {
      dispatch(setEditingTodo(todo));
    }
  };

  // Confirm before deleting a todo
  const handleDelete = (todo) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${todo.text}"?`
    );

    if (confirmDelete) {
      dispatch(removeTodo(todo.id));
    }
  };

  return (
    <ul className="list-none">
      {todos.map((todo) => (
        <li
          className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
          key={todo.id}
        >
          <div className="text-white">{todo.text}</div>

          <div className="flex gap-2">
            {/* Edit Button */}
            <button
              onClick={() => handleEdit(todo)}
              className="text-white bg-blue-500 border-0 py-1 px-4 hover:bg-blue-600 rounded text-md"
            >
              Edit
            </button>

            {/* Delete Button */}
            <button
              onClick={() => handleDelete(todo)}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              X
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Todos;
