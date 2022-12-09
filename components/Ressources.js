import styled from "styled-components";

import WoodSvg from "./SVG/WoodSvg";
import StoneSvg from "./SVG/StoneSvg";
import WorkersSvg from "./SVG/WorkersSvg";
import FoodSvg from "./SVG/FoodSvg";

export default function Ressources({food, wood, stone, workers, dailyWorkers}) {
  return (
    <Footer>
      <RessourceContainer>
        <WoodSvg width="50px" />
        <Text>{wood}</Text>
      </RessourceContainer>
      <RessourceContainer>
        <StoneSvg />
        <Text>{stone}</Text>
      </RessourceContainer>
      <RessourceContainer>
        <WorkersSvg />
        <Text>
          {dailyWorkers}/{workers}
        </Text>
      </RessourceContainer>
      <RessourceContainer>
        <FoodSvg />
        <Text>
          {food}/-{workers}
        </Text>
      </RessourceContainer>

      {/* <img src="/svg/wood-icon.svg" /> */}
    </Footer>
  );
}

const Footer = styled.footer`
  position: fixed;
  height: 60px;
  bottom: 5px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const RessourceContainer = styled.div`
  margin: 5px;
  display: flex;
  justify-content: space-between;
  border-radius: 20px;
  box-shadow: 0 0 8px black;
  width: 100%;
  overflow: hidden;
  padding: 5px;
  backdrop-filter: blur(5px);
`;

const Text = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 100%;
  margin: 0;
  font-size: 100%;
`;
