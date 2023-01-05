import styled from "styled-components";

export default function OverlaySmall({
  chosenCard,
  setChosenCard,
  setActiveCard,
}) {
  return (
    <Overlay chosenCard={chosenCard}>
      Choose a tile!
      <Button
        onClick={() => {
          setChosenCard(false);
          setActiveCard("");
        }}
      >
        Cancel
      </Button>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  bottom: 0;
  font-size: 1.2rem;
  text-align: center;
  color: white;
  height: 21rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 98%;
  padding-top: 10%;
  border-radius: 20px;
  transition: 0.5s;
  z-index: 1;
  ${props =>
    props.chosenCard || props.chosenCard === 0 ? "" : "opacity: 0; z-index:-1"}
`;

const Button = styled.div`
  border-radius: 20px;
  color: black;
  margin-top: 6rem;
  background-color: white;
  width: 5rem;
  padding: 2%;
`;
