import {useState} from "react";
import Canvas from "../../components/Canvas";
import {dataLevel1} from "../../components/Level1/_data";
import Ressources from "../../components/Ressources/Ressources";
import styled from "styled-components";

export default function Level1() {
  const [array, setArray] = useState(dataLevel1);

  return (
    <>
      <Background />
      <Canvas array={array} setArray={setArray} />
      <Ressources />
    </>
  );
}

const Background = styled.main`
  position: absolute;
  margin: 0;
  top: 0;
  background: url(/img/game-background.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  z-index: -1;
`;
