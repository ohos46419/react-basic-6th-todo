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
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        const newTodo = {
          id: todo.id,
          text: todo.text,
          completed: !todo.completed,
        };

        return newTodo;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleDelete = (id) => {
    const filteredTodos = todos.filter((todo) => {
      if (todo.id === id) {
        return false;
      }

      // else를 생략해도 된다 => Early return방식
      return true;
    });

    setTodos(filteredTodos);
  };

  // * 삼항연산자를 이용한 리팩토링
  // const handleDelete = (id) =>
  //   setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));

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

export default TodoList;
