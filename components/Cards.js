import styled from "styled-components";
import {useState} from "react";

export default function Cards({
  randomCards,
  chosenCard,
  setChosenCard,
  wood,
  stone,
  dailyWorkers,
}) {
  const [activeCard, setActiveCard] = useState(0);
  return (
    <CardContainer>
      <CardGrid>
        {randomCards.map(card => {
          if (
            wood < card.wood ||
            dailyWorkers < card.workers ||
            stone < card.stone
          ) {
            return (
              <Card onClick={() => setActiveCard(0)} grey={true}>
                {card.name}
              </Card>
            );
          } else {
            return (
              <Card onClick={() => setActiveCard(card.id)}>{card.name}</Card>
            );
          }
        })}
      </CardGrid>
      <Button onClick={() => setChosenCard(activeCard)}>Choose</Button>
    </CardContainer>
  );
}

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 1rem 1rem;
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Card = styled.div`
  height: 100px;
  border: 2px solid black;
  background-color: aqua;
  transition: 0.2s;
  :hover {
    transform: scale(1.2);
  }
  ${props => (props.grey ? "opacity: 0.4" : "")}
`;
const Button = styled.button`
  grid-column: 2/2;
  max-width: 4rem;
`;
