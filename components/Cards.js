import styled from "styled-components";
import OneCard from "./OneCard";

export default function Cards({
  randomCards,
  chosenCard,
  setChosenCard,
  wood,
  stone,
  dailyWorkers,
  setActiveCard,
}) {
  //deployment:
  if (wood === 2000) {
    setChosenCard(chosenCard + 1);
  }
  return (
    <CardContainer>
      <CardFlex>
        <Placeholder />
        {randomCards.length > 0 &&
          randomCards.map((card, index) => {
            if (
              wood < card.cost.wood ||
              dailyWorkers < card.cost.dailyWorkers ||
              stone < card.cost.stone
            ) {
              return (
                <OneCard
                  key={index}
                  hover={true}
                  card={card}
                  onClick={() => setActiveCard(-1)}
                  grey={true}
                />
              );
            } else {
              return (
                <OneCard
                  key={index}
                  hover={true}
                  card={card}
                  onClick={() => setActiveCard(card.id)}
                />
              );
            }
          })}
        <Placeholder />
      </CardFlex>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  width: 100%;
  min-height: 14rem;
  margin-top: 3%;
  flex-direction: column;
  align-items: center;
`;

const CardFlex = styled.div`
  display: flex;
  gap: 6px;
  height: 100%;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
`;
const Placeholder = styled.div`
  min-width: 30px;
`;
