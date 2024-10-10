import { ClipboardCheck, Ellipsis, Monitor, Video } from "lucide-react";
import styled from "styled-components";

const TodoDashboard = () => {
  return (
    <section>
      <DashboardSection>
        <DashboardHeader>
          <h1>Todo Dashboard</h1>
        </DashboardHeader>

        <DashboardCardList>
          <DashboardCard flex="2" color="#e7582b">
            <div>
              <ClipboardCheck />
              <Ellipsis />
            </div>
            <p>
              16 <br /> All Task
            </p>
          </DashboardCard>

          <DashboardCard flex="1" color="#582be7">
            <div>
              <Monitor />
              <Ellipsis />
            </div>
            <p>
              3 <br /> Completed
            </p>
          </DashboardCard>

          <DashboardCard flex="1" color="#242424">
            <div>
              <Video />
              <Ellipsis />
            </div>
            <p>
              13 <br /> Pending
            </p>
          </DashboardCard>
        </DashboardCardList>
      </DashboardSection>
    </section>
  );
};

export default TodoDashboard;

const DashboardSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const DashboardHeader = styled.div`
  h1 {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const DashboardCardList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 100%;
`;

const DashboardCard = styled.div`
  background-color: ${(props) => props.color};
  padding: 1rem;
  border-radius: 1rem;
  height: calc((640px / 4));

  color: white;
  font-weight: bold;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: ${(props) => props.flex};

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
