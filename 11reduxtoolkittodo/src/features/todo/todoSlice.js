
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
  editingTodo: null,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };

      state.todos.push(todo);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );

      if (state.editingTodo?.id === action.payload) {
        state.editingTodo = null;
      }
    },

    // Select a Todo to edit
    setEditingTodo: (state, action) => {
      state.editingTodo = action.payload;
    },

    // Save the edited Todo
    editTodo: (state, action) => {
      const { id, text } = action.payload;

      const todo = state.todos.find(
        (todo) => todo.id === id
      );

      if (todo) {
        todo.text = text;
      }

      state.editingTodo = null;
    },

    // Cancel editing
    cancelEdit: (state) => {
      state.editingTodo = null;
    },
  },
});

export const {
  addTodo,
  removeTodo,
  setEditingTodo,
  editTodo,
  cancelEdit,
} = todoSlice.actions;

export default todoSlice.reducer;
