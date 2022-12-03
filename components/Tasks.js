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
  font-size: 18px;
  background-color: rgba(0, 255, 255, 0.3);
  border-radius: 20px;
  padding: 10px;
  box-shadow: 2px 2px 8px black;
`;
