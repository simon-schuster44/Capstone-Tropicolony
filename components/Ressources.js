import styled from "styled-components";

import WoodSvg from "./SVG/WoodSvg";
import StoneSvg from "./SVG/StoneSvg";
import WorkersSvg from "./SVG/WorkersSvg";
import FoodSvg from "./SVG/FoodSvg";

export default function Ressources({
  food,
  wood,
  stone,
  workers,
  dailyWorkers,
  array,
}) {
  return (
    <Footer>
      <RessourceContainer>
        <WoodSvg width="100%" />
        <Text>{wood}</Text>
      </RessourceContainer>
      <RessourceContainer>
        <StoneSvg width="100%" />
        <Text>{stone}</Text>
      </RessourceContainer>
      <RessourceContainer>
        <WorkersSvg width="100%" />
        <Text>
          {workers}/{dailyWorkers}
        </Text>
      </RessourceContainer>
      <RessourceContainer>
        <FoodSvg width="100%" />
        <Text>
          {food}/-
          {workers +
            array.filter(
              item => item.color === "lumberhut" || item.color === "windmill"
            ).length}
        </Text>
      </RessourceContainer>
    </Footer>
  );
}

const Footer = styled.footer`
  position: fixed;
  height: 8vh;
  bottom: 5px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const RessourceContainer = styled.div`
  position: relative;
  margin: 5px;
  display: flex;
  justify-content: space-between;
  border-radius: 20px;
  box-shadow: 0 0 8px black;
  width: 100%;
  overflow: hidden;
  padding: 5px;
  background-color: rgba(0, 255, 255, 0.2);
  backdrop-filter: blur(5px);
`;

const Text = styled.h2`
  position: absolute;
  color: #ff9d2d;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0;
  font-size: 1.5rem;
`;
