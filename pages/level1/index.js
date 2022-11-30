import {useState} from "react";
import Canvas from "../../components/Canvas";
import {dataLevel1} from "../../components/Level1/_data";
import Ressources from "../../components/Ressources/Ressources";
import styled from "styled-components";
import OverlaySmall from "../../components/OverlaySmall/OverlaySmall";

export default function Level1() {
  const [array, setArray] = useState(dataLevel1.fields);
  const [overlayState, setOverlayState] = useState(true);
  const text1 =
    "Welcome to the island. Your first task is to build a lumberhut. Simply click on the sand tile, choose the lumberhut from the menu and build!";

  return (
    <>
      <Background />
      <Canvas array={array} setArray={setArray} />
      {overlayState ? (
        <OverlaySmall
          overlayState={overlayState}
          setOverlayState={setOverlayState}
        >
          {text1}
        </OverlaySmall>
      ) : (
        ""
      )}

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
