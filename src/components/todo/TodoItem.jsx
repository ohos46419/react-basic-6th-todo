import { useContext } from "react";
import styled from "styled-components";
import { TodoContext } from "../../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { toggleCompleted, handleDelete } = useContext(TodoContext);
  return (
    <TaskItem key={todo.id}>
      <TaskItemContent>
        <p
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
          }}
        >
          {todo.text} - {todo.completed ? "완료됨" : "미완료"}
        </p>
      </TaskItemContent>

      <TaskItemActions>
        <TaskItemActionButton
          onClick={() => toggleCompleted(todo.id)}
          color="#582be7"
        >
          {todo.completed ? "되돌리기" : "완료"}
        </TaskItemActionButton>
        <TaskItemActionButton
          onClick={() => handleDelete(todo.id)}
          color="#f05656"
        >
          삭제
        </TaskItemActionButton>
      </TaskItemActions>
    </TaskItem>
  );
};

export default TodoItem;

const TaskItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;
  border-radius: 1rem;
  background-color: #ffffff;
`;

const TaskItemContent = styled.div``;

const TaskItemActions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

export const TaskItemActionButton = styled.button`
  color: #fff;
  background-color: ${({ color }) => color};

  padding: 0.5rem 1rem;
  border-radius: 0.5rem;

  cursor: pointer;

  &:hover {
    opacity: 80%;
  }
`;
