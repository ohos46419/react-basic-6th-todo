import { useState } from "react";

const TodoForm = ({ addTodos }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!newTodo.trim()) {
      return;
    }

    const newTodoObject = {
      id: crypto.randomUUID(),
      text: newTodo,
      completed: false,
    };

    addTodos(newTodoObject);

    setNewTodo("");
  };

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="todo 입력"
      />
      <button type="submit">todo 추가</button>
    </form>
  );
};

export default TodoForm;
