import {useEffect, useState} from "react";
import Canvas from "../../../components/Canvas";
import {dataLevel2} from "../../../components/LevelData/_dataLevel2";
import Ressources from "../../../components/Ressources";
import styled from "styled-components";
import OverlaySmall from "../../../components/OverlaySmall";
import Header from "../../../components/Header";
import BuildingMenu from "../../../components/BuildingMenu";
import cutTrees from "../../../functions/cutTrees";
import Tasks from "../../../components/Tasks";
import pumpWater from "../../../functions/pumpWater";

export default function Level2() {
  const [array, setArray] = useState(dataLevel2.fields);
  const [buildingMenuState, setBuildingMenuState] = useState(false);
  const [overlayState, setOverlayState] = useState(true);
  const [textState, setTextState] = useState(1);
  const [timeoutState, setTimeoutState] = useState(0);
  const [pumpWaterState, setPumpWaterState] = useState(false);
  const [possibleBuildings, setPossibleBuildings] = useState([
    {name: "lumberhut", price: "wood x2"},
    {name: "tower", price: "wood x4"},
  ]);
  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(0);
  // -------------------ressources--------------------------------------------------
  const [activeBuildings, setActiveBuildings] = useState(1);
  const [wood, setWood] = useState(4);
  const [stone, setStone] = useState(0);
  const [workers, setWorkers] = useState(0);

  //---------------gather ressources-----------------------------------
  useEffect(() => {
    clearTimeout(timeoutState);
    setTimeoutState(
      setTimeout(() => {
        cutTrees(array, setArray, wood, setWood);
        setPumpWaterState(!pumpWaterState);
      }, 5000)
    );
  }, [array, timer]);

  useEffect(() => {
    pumpWater(array, setArray);
  }, [pumpWaterState]);
  //---------------------------------------------------------------

  if (counter === 5) {
    setCounter(0);
    setTimer(timer + 1);
  }

  //---------------------------------------TASKS---------------------------------------
  //---------------------------------------first task---------------------------------------
  //task complete:
  if (
    array[11].color === "grass" &&
    array[22].color === "grass" &&
    array[32].color === "grass" &&
    array[41].color === "grass" &&
    textState === 1
  ) {
    setTimeout(() => {
      setOverlayState(true);
      setTextState(textState + 1);
    }, 2000);
  }
  if (textState === 2 && overlayState === false) {
    setTimeout(() => {
      setTextState(99);
      setOverlayState(true);
    }, 1000);
  }

  //---------------------------------------you did wrong---------------------------------------
  if (
    (array[10].color === "lumberhut" ||
      array[21].color === "lumberhut" ||
      array[31].color === "lumberhut" ||
      array[20].color === "grass" ||
      array[30].color === "lumberhut") &&
    textState !== 0
  ) {
    setTextState(0);
    setOverlayState(true);
  }

  //this is just for deployment:
  if (stone === 1000) {
    setStone(0);
    setWorkers(0);
    setPossibleBuildings(0);
  }

  return (
    <>
      <Background />
      <Header saveoption={true} />
      <GameContainer>
        <Canvas
          counter={counter}
          setCounter={setCounter}
          array={array}
          setArray={setArray}
          setBuildingMenuState={setBuildingMenuState}
        />
        <BuildingMenu
          buildingMenuState={buildingMenuState}
          setBuildingMenuState={setBuildingMenuState}
          possibleBuildings={possibleBuildings}
          activeBuildings={activeBuildings}
          setActiveBuildings={setActiveBuildings}
          array={array}
          setArray={setArray}
          wood={wood}
          setWood={setWood}
        />
        <TimerBox>Days: {timer}</TimerBox>
        <Tasks>{dataLevel2.tasks[textState]}</Tasks>
        {overlayState ? (
          <OverlaySmall
            levelText={dataLevel2.levelText}
            textState={textState}
            overlayState={overlayState}
            setOverlayState={setOverlayState}
          >
            {dataLevel2.text[textState]}
          </OverlaySmall>
        ) : (
          ""
        )}
      </GameContainer>
      <Ressources
        activeBuildings={activeBuildings}
        wood={wood}
        stone={stone}
        workers={workers}
      />
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

const GameContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TimerBox = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 2%;
  border-radius: 20px;
  align-self: flex-end;
  margin: 3%;
`;
