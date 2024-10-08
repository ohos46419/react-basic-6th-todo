const TodoItem = ({ todo, toggleCompleted, handleDelete }) => {
  return (
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
  );
};

export default TodoItem;
