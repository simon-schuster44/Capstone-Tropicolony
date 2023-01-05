import styled from "styled-components";
import WorkersSvg from "./SVG/WorkersSvg";
import StoneSvg from "./SVG/StoneSvg";
import WoodSvg from "./SVG/WoodSvg";
import FoodSvg from "./SVG/FoodSvg";
import css from "styled-jsx/css";

export default function OneCard({
  card,
  grey,
  onClick,
  fontSize,
  hover,
  height,
}) {
  return (
    <Card onClick={onClick} grey={grey} hover={hover} height={height}>
      <Text headline={true}>{card.name}</Text>
      <Text fontSize={fontSize}> {card.description}</Text>
      <RessourcesBox>
        <Container dailyWorker={true}>
          <WorkersSvg />
          <Value>-{card.cost.dailyWorkers}</Value>
        </Container>
        {card.cost.wood && (
          <Container>
            <WoodSvg width="50%" />
            <Value>{card.cost.wood}</Value>
          </Container>
        )}
        {card.cost.stone && (
          <Container>
            <StoneSvg width="100%" />
            <Value>{card.cost.stone}</Value>
          </Container>
        )}
        {card.cost.food && (
          <Container>
            <FoodSvg width="50%" />
            <Value>{card.cost.food}</Value>
          </Container>
        )}
        {card.cost.workers && (
          <Container>
            <WorkersSvg width="50%" />
            <Value>{card.cost.workers}</Value>
          </Container>
        )}
        {card.gain.workers && (
          <Container>
            <WorkersSvg width="50%" />
            <ArrowUp src="/svg/arrowUp.svg" />
          </Container>
        )}
        {card.gain.wood && (
          <Container>
            <WoodSvg width="50%" />
            <ArrowUp src="/svg/arrowUp.svg" />
          </Container>
        )}
        {card.gain.stone && (
          <Container>
            <StoneSvg width="50%" />
            <ArrowUp src="/svg/arrowUp.svg" />
          </Container>
        )}
        {card.gain.food && (
          <Container>
            <FoodSvg width="50%" />
            <ArrowUp src="/svg/arrowUp.svg" />
          </Container>
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
  min-width: 30vw;
  max-width: 30vw;
  box-shadow: 2px 2px 6px black;
  background-image: url("/img/pergament2.png");
  background-position: center;
  /* background-size: cover; */
  border: 1px solid black;
  /* background: linear-gradient(135deg, #fff27c, #d8c948); */
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
  ${props => props.height && `height: ${props.height}`}
`;

const RessourcesBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  position: relative;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 1%;
  margin: 1%;
  width: 60%;
  display: flex;
  height: 1.3rem;
  justify-content: space-between;
  ${props =>
    props.dailyWorker
      ? css`
          position: absolute;
          right: -3%;
          bottom: -3%;
          width: auto;
          height: 1.7rem;
          border: 1px solid black;
          background-color: white;
          padding: 2%;
        `
      : ""}
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
  color: black;
  font-size: 1rem;
  align-self: center;
  margin-right: 0.5rem;
`;

const ArrowUp = styled.img`
  width: 50%;
`;
