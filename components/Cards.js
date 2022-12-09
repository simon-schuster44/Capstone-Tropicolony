import styled from "styled-components";
import WorkersSvg from "./SVG/WorkersSvg";
import StoneSvg from "./SVG/StoneSvg";

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
        {randomCards.map((card, index) => {
          if (
            wood < card.cost.wood ||
            dailyWorkers < card.cost.dailyWorkers ||
            stone < card.cost.stone
          ) {
            return (
              <Card key={index} onClick={() => setActiveCard(-1)} grey={true}>
                <Text headline={true}>{card.name}</Text>
                <Text> {card.description}</Text>

                <Container>
                  <WorkersSvg />
                  <Value>{card.cost.dailyWorkers}</Value>
                </Container>

                {card.gain.stone ? (
                  <Container>
                    <StoneSvg />
                    <Value>+</Value>
                  </Container>
                ) : (
                  ""
                )}
              </Card>
            );
          } else {
            return (
              <Card key={index} onClick={() => setActiveCard(card.id)}>
                <Text headline={true}>{card.name}</Text>
                <Text> {card.description}</Text>

                <Container>
                  <WorkersSvg />
                  <Value>{card.cost.dailyWorkers}</Value>
                </Container>

                {card.gain.stone ? (
                  <Container>
                    <StoneSvg />
                    <Value>+</Value>
                  </Container>
                ) : (
                  ""
                )}
              </Card>
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
  height: 30vh;
  margin-top: 3%;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

const CardFlex = styled.div`
  display: flex;
  gap: 6px;
  height: 100%;
  width: 100%;
  overflow-x: scroll;
  overflow-y: visible;
  white-space: nowrap;
`;
const Placeholder = styled.div`
  min-width: 30px;
`;

const Card = styled.div`
  height: 60%;
  overflow-wrap: wrap;
  min-width: 30vw;
  border: 2px solid black;
  background-color: aqua;
  border-radius: 8px;
  font-size: 0.7rem;
  transition: 0.5s;
  :hover {
    z-index: 2;
    transform: scale(1.5) translate(0, 20%);
  }
  ${props => (props.grey ? "opacity: 0.4;" : "")}
`;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  height: 2rem;
`;

const Text = styled.p`
  margin: 0;
  white-space: normal;
  ${props =>
    props.headline ? "font-size: 0.8rem; text-decoration: underline;" : ""}
`;

const Value = styled.span`
  position: absolute;
  color: #ff9d2d;
  font-size: 2rem;
  align-self: center;
`;
