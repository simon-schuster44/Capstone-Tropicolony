import styled from "styled-components";

export default function OverlaySmall({
  children,
  overlayState,
  setOverlayState,
}) {
  return (
    <>
      {overlayState ? (
        <Overlay>
          {children}
          <Button onClick={() => setOverlayState(false)}>continue</Button>
        </Overlay>
      ) : (
        ""
      )}
    </>
  );
}
const Overlay = styled.div`
  width: 98%;
  position: absolute;
  font-size: 1.2rem;
  padding: 2rem;
  text-align: center;
  border: 2px solid black;
  height: 75vh;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
`;

const Button = styled.button`
  margin: 20px;
  width: 150px;
  height: 60px;
  border-radius: 20px;
  font-size: 25px;
`;
