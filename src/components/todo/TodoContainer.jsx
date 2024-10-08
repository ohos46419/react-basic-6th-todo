import { useState } from "react";
import { SAMPLE_TODOS } from "../../constants/sample-todos";
import TodoForm from "../TodoForm";

const TodoContainer = () => {
  const [todos, setTodos] = useState(SAMPLE_TODOS);

  const addTodos = (newTodoObject) => setTodos([newTodoObject, ...todos]);

  const toggleCompleted = (id) =>
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );

  const handleDelete = (id) =>
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));

  return (
    <div>
      <TodoForm addTodos={addTodos} />

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <p
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text} - {todo.completed ? "완료됨" : "미완료"}
            </p>

            <button onClick={() => toggleCompleted(todo.id)}>
              {todo.completed ? "되돌리기" : "완료"}
            </button>

            <button onClick={() => handleDelete(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoContainer;
