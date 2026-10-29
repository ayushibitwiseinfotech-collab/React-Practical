
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  editTodo,
  cancelEdit,
} from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  // Get the Todo selected for editing
  const editingTodo = useSelector(
    (state) => state.todos.editingTodo
  );

  // Display selected Todo text in the input field
  useEffect(() => {
    if (editingTodo) {
      setInput(editingTodo.text);
    } else {
      setInput("");
    }
  }, [editingTodo]);

  const addTodoHandler = (e) => {
    e.preventDefault();

    const trimmedInput = input.trim();

    if (!trimmedInput) return;

    if (editingTodo) {
      // Update the existing Todo
      dispatch(
        editTodo({
          id: editingTodo.id,
          text: trimmedInput,
        })
      );
    } else {
      // Add a new Todo
      dispatch(addTodo(trimmedInput));
    }

    setInput("");
  };

  const cancelEditHandler = () => {
    dispatch(cancelEdit());
    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {editingTodo ? "Save" : "Add Todo"}
      </button>

      {editingTodo && (
        <button
          type="button"
          onClick={cancelEditHandler}
          className="text-white bg-gray-500 border-0 py-2 px-6 hover:bg-gray-600 rounded text-lg"
        >
          Cancel
        </button>
      )}
    </form>
  );
}

export default AddTodo;
