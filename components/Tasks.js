import styled from "styled-components";

export default function Tasks({children}) {
  return (
    <TasksContainer>
      Tasks:
      <br />
      {children}
    </TasksContainer>
  );
}

const TasksContainer = styled.div`
  width: 95%;
  font-size: 1.2rem;
  background-color: rgba(0, 255, 255, 0.3);
  border-radius: 20px;
  padding: 3%;
  box-shadow: 2px 2px 8px black;
`;
