import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDashboard from "./TodoDashboard";
import styled from "styled-components";

const TodoContainer = () => {
  return (
    <TodoContainerWrapper>
      <TodoDashboard />
      <TodoForm />

      <TodoList />
    </TodoContainerWrapper>
  );
};

export default TodoContainer;

const TodoContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
