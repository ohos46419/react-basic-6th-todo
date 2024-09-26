import { useState } from "react";

const SAMPLE_TODOS = [
  { id: 1, text: "Buy milk", completed: false },
  { id: 2, text: "Clean the house", completed: false },
  { id: 3, text: "Go for a run", completed: false },
  { id: 4, text: "Finish homework", completed: false },
  { id: 5, text: "Call mom", completed: false },
  { id: 6, text: "Buy groceries", completed: false },
  { id: 7, text: "Walk the dog", completed: false },
  { id: 8, text: "Read a book", completed: false },
  { id: 9, text: "Do laundry", completed: false },
  { id: 10, text: "Write code", completed: false },
];

const TodoList = () => {
  const [todos, setTodos] = useState(SAMPLE_TODOS);
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

    setTodos([newTodoObject, ...todos]);

    setNewTodo("");
  };

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const toggleCompleted = (id) => {
    const updatedTodos = [];

    todos.forEach((todo) => {
      if (todo.id === id) {
        // TODO - 수정
        const newTodo = {
          id: todo.id,
          text: todo.text,
          completed: !todo.completed,
        };

        return updatedTodos.push(newTodo);
      }

      updatedTodos.push(todo);
    });

    setTodos(updatedTodos);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="todo 입력"
        />
        <button type="submit">todo 추가</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <p>
              {todo.text} - {String(todo.completed)}
            </p>
            <button onClick={() => toggleCompleted(todo.id)}>완료</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
