import {useEffect, useState} from "react";
import Canvas from "../../../components/Canvas";
import {dataLevel2} from "../../../components/LevelData/_dataLevel2";
import Ressources from "../../../components/Ressources";
import styled from "styled-components";
import OverlayBig from "../../../components/OverlayBig";
import Header from "../../../components/Header";
import Tasks from "../../../components/Tasks";
import Cards from "../../../components/Cards";
import {allCardsData} from "../../../components/LevelData/_allCardsData";
import OverlaySmall from "../../../components/OverlaySmall";
import gameDesigner from "../../../XDeveloper/gameDesigner";

export default function Level2() {
  const [array, setArray] = useState(dataLevel2.fields);
  const [chooseTileState, setChooseTileState] = useState(false);
  const [overlayState, setOverlayState] = useState(true);
  const [textState, setTextState] = useState(1);
  const [counter, setCounter] = useState(0);
  const [allCards, setAllCards] = useState(allCardsData);
  const [randomCards, setRandomCards] = useState(allCardsData);
  const [chosenCard, setChosenCard] = useState(false);
  const [gatherRessources, setGatherRessources] = useState(false);
  // -------------------ressources--------------------------------------------------
  const [activeBuildings, setActiveBuildings] = useState(1);
  const [wood, setWood] = useState(4);
  const [stone, setStone] = useState(0);
  const [food, setFood] = useState(0);
  const [workers, setWorkers] = useState(2);
  const [dailyWorkers, setDailyWorkers] = useState(2);

  useEffect(() => {
    if (gatherRessources.wood) {
      setWood(wood + gatherRessources.wood);
    }
    if (gatherRessources.stone) {
      setStone(stone + gatherRessources.stone);
    }
    if (gatherRessources.food) {
      setFood(food + gatherRessources.food);
    }
    if (gatherRessources.dailyWorkers) {
      setDailyWorkers(dailyWorkers + gatherRessources.dailyWorkers);
    }
    if (gatherRessources.lumberhut) {
      setArray(
        array.map(tile => {
          if (tile.id === gatherRessources.lumberhut) {
            return {...tile, color: "lumberhut"};
          } else {
            return tile;
          }
        })
      );
    }
    cardHandler(chosenCard, randomCards);
    setChosenCard(false);
  }, [gatherRessources]);

  function cardHandler(chosenCard, randomCards) {
    if (chosenCard === 0) {
      alert("No card selected!");
    } else {
      setRandomCards(
        randomCards.filter(
          item =>
            randomCards.indexOf(item) !==
            randomCards.indexOf(
              randomCards.find(item => item.id === chosenCard)
            )
        )
      );
    }
  }

  return (
    <>
      <Background />
      <Header saveoption={true} />
      <GameContainer>
        <Canvas
          setGatherRessources={setGatherRessources}
          counter={counter}
          setCounter={setCounter}
          array={array}
          setArray={setArray}
          chosenCard={chosenCard}
          setChooseTileState={setChooseTileState}
        />
        <Cards
          randomCards={randomCards}
          chosenCard={chosenCard}
          setChosenCard={setChosenCard}
          wood={wood}
          stone={stone}
          dailyWorkers={dailyWorkers}
        />
        <OverlaySmall chosenCard={chosenCard} />

        <Tasks>{dataLevel2.tasks[textState]}</Tasks>
        {overlayState ? (
          <OverlayBig
            levelText={dataLevel2.levelText}
            textState={textState}
            overlayState={overlayState}
            setOverlayState={setOverlayState}
          >
            {dataLevel2.text[textState]}
          </OverlayBig>
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
