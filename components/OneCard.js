import styled from "styled-components";
import WorkersSvg from "./SVG/WorkersSvg";
import StoneSvg from "./SVG/StoneSvg";
import WoodSvg from "./SVG/WoodSvg";
import FoodSvg from "./SVG/FoodSvg";

export default function OneCard({card, grey, onClick, fontSize, hover}) {
  return (
    <Card onClick={onClick} grey={grey} hover={hover}>
      <Text headline={true} fontSize={fontSize}>
        {card.name}
      </Text>
      <Text fontSize={fontSize}> {card.description}</Text>
      <RessourcesBox>
        <Container dailyWorker={true}>
          <WorkersSvg />
          <Value>-{card.cost.dailyWorkers}</Value>
        </Container>
        {card.cost.wood ? (
          <Container>
            <WoodSvg width="100%" />
            <Value>{card.cost.wood}</Value>
          </Container>
        ) : (
          ""
        )}
        {card.cost.stone ? (
          <Container>
            <StoneSvg width="100%" />
            <Value>{card.cost.stone}</Value>
          </Container>
        ) : (
          ""
        )}
        {card.cost.food ? (
          <Container>
            <FoodSvg width="100%" />
            <Value>{card.cost.food}</Value>
          </Container>
        ) : (
          ""
        )}
        {card.cost.workers ? (
          <Container>
            <WorkersSvg width="100%" />
            <Value>{card.cost.workers}</Value>
          </Container>
        ) : (
          ""
        )}
        {card.gain.workers ? (
          <Container>
            <WorkersSvg width="100%" />
            <ArrowUp src="/svg/arrowUp.svg" />
          </Container>
        ) : (
          ""
        )}
        {card.gain.wood ? (
          <Container>
            <WoodSvg width="100%" />
            <ArrowUp src="/svg/arrowUp.svg" />
          </Container>
        ) : (
          ""
        )}
        {card.gain.stone ? (
          <Container>
            <StoneSvg width="100%" />
            <ArrowUp src="/svg/arrowUp.svg" />
          </Container>
        ) : (
          ""
        )}
        {card.gain.food ? (
          <Container>
            <FoodSvg width="100%" />
            <ArrowUp src="/svg/arrowUp.svg" />
          </Container>
        ) : (
          ""
        )}
      </RessourcesBox>
    </Card>
  );
}

const Card = styled.div`
  color: black;
  position: relative;
  height: 60%;
  padding: 1%;
  overflow-wrap: wrap;
  min-width: 30vw;
  max-width: 30vw;
  border: 2px solid black;
  background-color: #8defff;
  border-radius: 8px;
  font-size: 0.5rem;
  transition: 0.5s;
  ${props => (props.grey ? "opacity: 0.4;" : "")}
  ${props =>
    props.hover
      ? ` :hover {
    z-index: 2;
    transform: scale(1.5) translate(0, 20%);`
      : ""}
`;

const RessourcesBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Container = styled.div`
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 4%;
  width: 2rem;
  position: relative;
  display: flex;
  justify-content: space-around;
  height: 2.5rem;
  width: 2.5rem;
  ${props =>
    props.dailyWorker ? "position:absolute;right:-5%;bottom:-5%;" : ""}
`;

const Text = styled.p`
  margin: 0;
  width: auto;
  white-space: normal;
  ${props =>
    props.headline ? "font-size: 0.8rem; text-decoration: underline;" : ""}
  ${props => (props.fontSize ? `font-size:${props.fontSize}` : "")}
`;

const Value = styled.span`
  position: absolute;
  color: #ff9d2d;
  font-size: 2rem;
  align-self: center;
`;

const ArrowUp = styled.img`
  position: absolute;
  align-self: center;
  width: 70%;
`;
