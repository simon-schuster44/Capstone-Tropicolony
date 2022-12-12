import styled from "styled-components";
import OneCard from "./OneCard";
import WorkersSvg from "./SVG/WorkersSvg";
import StoneSvg from "./SVG/StoneSvg";
import WoodSvg from "./SVG/WoodSvg";
import FoodSvg from "./SVG/FoodSvg";

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
  :hover {
    z-index: 2;
    transform: scale(1.5) translate(0, 20%);
  }
  ${props => (props.grey ? "opacity: 0.4;" : "")}
`;

const RessourcesBox = styled.div`
  display: flex;
`;

const Container = styled.div`
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 4%;
  width: 2rem;
  position: relative;
  display: flex;
  justify-content: space-around;
  height: 2rem;
  ${props =>
    props.dailyWorker ? "position:absolute;right:-10%;bottom:-10%;" : ""}
`;

const Text = styled.p`
  margin: 0;
  width: auto;
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

const ArrowUp = styled.img`
  position: absolute;
  align-self: center;
  width: 70%;
`;
