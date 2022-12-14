import {useEffect, useState} from "react";
import Canvas from "../../../components/Canvas";
import {dataLevel4} from "../../../components/LevelData/_dataLevel4";
import Ressources from "../../../components/Ressources";
import styled from "styled-components";
import OverlayBig from "../../../components/OverlayBig";
import Header from "../../../components/Header";
import Cards from "../../../components/Cards";
import {allCardsData} from "../../../components/LevelData/_allCardsData";
import OverlaySmall from "../../../components/OverlaySmall";
import {cardsDeckData} from "../../../components/LevelData/_cardsDeckData";
import CardsSvg from "../../../components/SVG/CardsSvg";
import useLocalStorage from "../../../components/useLocalStorage";

export default function Level4({saveState, setSaveState}) {
  //Local storage:-----------------------------------------------------
  const [saveData, setSaveData] = useLocalStorage("saveGame");

  const [array, setArray] = useState(dataLevel4.fields);
  const [chooseTileState, setChooseTileState] = useState(false);
  const [overlayState, setOverlayState] = useState(false);
  const [textState, setTextState] = useState(1);
  const [counter, setCounter] = useState(0);
  const [allCards, setAllCards] = useState(allCardsData);
  const [cardsDeck, setCardsDeck] = useState(
    cardsDeckData.map(index => allCards[index])
  );
  const [cardToAdd, setCardToAdd] = useState(false);
  const [shuffledCards, setShuffledCards] = useState([1]);
  const [randomCards, setRandomCards] = useState([]);
  const [chosenCard, setChosenCard] = useState(false);
  const [activeCard, setActiveCard] = useState("");
  const [gatherRessources, setGatherRessources] = useState(false);
  // -------------------ressources--------------------------------------------------
  const [activeBuildings, setActiveBuildings] = useState(1);
  const [wood, setWood] = useState(10);
  const [stone, setStone] = useState(10);
  const [food, setFood] = useState(10);
  const [workers, setWorkers] = useState(3);
  const [dailyWorkers, setDailyWorkers] = useState(3);
  const [diedWorkers, setDiedWorkers] = useState(0);

  useEffect(() => {
    async function fetchCards() {
      try {
        const response = await fetch("/api/cards");
        if (response.ok) {
          const data = await response.json();
          setAllCards(data);
        } else {
          throw new Error(
            `Fetch fehlgeschlagen mit Status: ${response.status}`
          );
        }
      } catch (error) {
        alert(error.message);
      }
    }
    fetchCards();
  }, []);

  //SaveGameGate:--------------------------------------------------
  useEffect(() => {
    if (saveState && saveData) {
      setArray(saveData.level4.tiles);
      setCardsDeck(saveData.level4.cardsDeck);
      setWood(saveData.level4.wood);
      setStone(saveData.level4.stone);
      setFood(saveData.level4.food);
      setWorkers(saveData.level4.workers);
      setDailyWorkers(saveData.level4.workers);
      setSaveState(false);
    }
  }, [saveState, saveData]);

  //this is just for deployment:
  if (stone === 10000000) {
    setAllCards(allCards + 1);
    setActiveBuildings(activeBuildings + 1);
    setWorkers(0);
    setTextState(0);
    setChooseTileState(chooseTileState + 1);
  }
  //---------------Winning----------------------------------
  if (array.some(item => item.color === "windmill") && !overlayState) {
    setTimeout(() => {
      setSaveData({...saveData, unlocked: [...saveData.unlocked, "5"]});
      setOverlayState("win");
    }, 1500);
  }

  //---------------Losing-----------------------------------
  useEffect(() => {
    if (food < 0) {
      setWorkers(workers - 1);
      setDailyWorkers(workers - 1);
      setFood(0);
      setDiedWorkers(diedWorkers + 1);
    }
  }, [food]);

  if (workers <= 0) {
    setTimeout(() => setOverlayState("lose"), 1000);
  }

  useEffect(() => {
    if (cardToAdd || cardToAdd === 0) {
      setCardsDeck([...cardsDeck, allCardsData[cardToAdd]]);
    }
    setCardToAdd(false);
  }, [cardToAdd]);

  useEffect(() => {
    setShuffledCards(cardsDeck.sort(() => 0.5 - Math.random()));
  }, [cardsDeck]);

  useEffect(() => {
    if (shuffledCards.length === 0) {
      setOverlayState("endround");
    }
    setRandomCards(shuffledCards.slice(0, 6));
  }, [shuffledCards]);

  //----------------------------------gather resources------------------------------------------------
  useEffect(() => {
    if (gatherRessources.reveal || gatherRessources.reveal === 0) {
      setArray(
        array.map(tile => {
          if (tile.id === gatherRessources.reveal) {
            return {...tile, dark: false};
          } else {
            return tile;
          }
        })
      );
    }
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
    if (gatherRessources.workers) {
      setWorkers(workers + gatherRessources.workers);
    }
    if (gatherRessources.building) {
      //Tower:
      if (gatherRessources.building === "tower") {
        setArray(
          array.map(tile => {
            if (tile.id === gatherRessources.tileId) {
              return {...tile, color: "tower"};
            }
            //left side:
            else if (
              (tile.id === gatherRessources.tileId - 11 ||
                tile.id === gatherRessources.tileId - 1 ||
                tile.id === gatherRessources.tileId + 9) &&
              gatherRessources.tileId % 10 !== 0
            ) {
              return {...tile, dark: false};
            }
            //top tile:
            else if (
              tile.id === gatherRessources.tileId - 10 &&
              gatherRessources.tileId > 9
            ) {
              return {...tile, dark: false};
            }
            //bottom tile:
            else if (
              tile.id === gatherRessources.tileId + 10 &&
              gatherRessources.tileId < array.length - 10
            ) {
              return {...tile, dark: false};
            }
            //right side:
            else if (
              (tile.id === gatherRessources.tileId - 9 ||
                tile.id === gatherRessources.tileId + 1 ||
                tile.id === gatherRessources.tileId + 11) &&
              (gatherRessources.tileId + 1) % 10 !== 0
            ) {
              return {...tile, dark: false};
            } else {
              return tile;
            }
          })
        );
      }
      //windmill:
      else if (gatherRessources.building === "windmill") {
        setArray(
          array.map(tile => {
            if (tile.id === gatherRessources.tileId) {
              return {...tile, color: "windmill"};
            } else if (tile.color === "grass" && tile.dark === false) {
              //left side:
              if (
                (tile.id === gatherRessources.tileId - 11 ||
                  tile.id === gatherRessources.tileId - 1 ||
                  tile.id === gatherRessources.tileId + 9) &&
                gatherRessources.tileId % 10 !== 0
              ) {
                return {...tile, color: "wheat"};
              }
              //top tile:
              else if (
                tile.id === gatherRessources.tileId - 10 &&
                gatherRessources.tileId > 9
              ) {
                return {...tile, color: "wheat"};
              }
              //bottom tile:
              else if (
                tile.id === gatherRessources.tileId + 10 &&
                gatherRessources.tileId < array.length - 10
              ) {
                return {...tile, color: "wheat"};
              }
              //right side:
              else if (
                (tile.id === gatherRessources.tileId - 9 ||
                  tile.id === gatherRessources.tileId + 1 ||
                  tile.id === gatherRessources.tileId + 11) &&
                (gatherRessources.tileId + 1) % 10 !== 0
              ) {
                return {...tile, color: "wheat"};
              } else {
                return tile;
              }
            } else {
              return tile;
            }
          })
        );
      } else {
        setArray(
          array.map(tile => {
            if (tile.id === gatherRessources.tileId) {
              return {...tile, color: gatherRessources.building};
            } else {
              return tile;
            }
          })
        );
      }
    }
    cardHandler(chosenCard, randomCards);
    setChosenCard(false);
    setActiveCard("");
  }, [gatherRessources]);

  if (chosenCard === -1) {
    alert("No card selected!");
    setChosenCard(false);
    setActiveCard("");
  }
  function cardHandler(chosenCard, randomCards) {
    let IndexOfChosenCard = randomCards.indexOf(
      randomCards.find(item => item.id === chosenCard)
    );
    let firstPart = randomCards.slice(0, IndexOfChosenCard);
    let lastPart = randomCards.slice(IndexOfChosenCard + 1);
    setRandomCards(firstPart.concat(lastPart));
  }

  function endRound() {
    setShuffledCards(shuffledCards.slice(6));
    setFood(
      food -
        (workers +
          array.filter(
            item => item.color === "lumberhut" || item.color === "windmill"
          ).length)
    );
    setDailyWorkers(workers);
  }

  function saveGame() {
    setSaveData({
      ...saveData,
      level4: {
        tiles: array,
        cardsDeck: cardsDeck,
        wood: wood,
        stone: stone,
        workers: workers,
        food: food,
      },
    });
  }

  return (
    <>
      <Background />
      <Header saveoption={true} onClick={saveGame} />

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
          setActiveCard={setActiveCard}
          randomCards={randomCards}
          chosenCard={chosenCard}
          setChosenCard={setChosenCard}
          wood={wood}
          stone={stone}
          food={food}
          dailyWorkers={dailyWorkers}
        />
        <ButtonContainer>
          <Button red={true} onClick={() => endRound()}>
            End day
          </Button>
          <Button onClick={() => setChosenCard(activeCard)}>Choose</Button>
        </ButtonContainer>

        <OverlaySmall
          chosenCard={chosenCard}
          setChosenCard={setChosenCard}
          setActiveCard={setActiveCard}
        />

        {overlayState && (
          <OverlayBig
            diedWorkers={diedWorkers}
            allCardsData={allCardsData}
            setCardToAdd={setCardToAdd}
            levelText={dataLevel4.levelText}
            textState={textState}
            overlayState={overlayState}
            setOverlayState={setOverlayState}
            nextLevel="level5"
            cardsDeck={cardsDeck}
          ></OverlayBig>
        )}
      </GameContainer>
      <DeckContainer onClick={() => setOverlayState("cards")}>
        <CardsSvg width="100%" />
        {cardsDeck.length}/
        {shuffledCards.length - 6 + randomCards.length > 0
          ? shuffledCards.length - 6 + randomCards.length
          : "0"}
      </DeckContainer>
      <TutorialContainer>
        <p>{dataLevel4.levelText}</p>
      </TutorialContainer>

      <Ressources
        array={array}
        food={food}
        wood={wood}
        stone={stone}
        workers={workers}
        dailyWorkers={dailyWorkers}
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
  justify-content: flex-end;
  align-items: center;
  height: 92vh;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 4rem;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  box-shadow: 2px 2px 8px black;
  align-items: center;
  width: 30vw;
  height: 2.5rem;
  border-radius: 8px;
  background-color: green;
  transition: 0.3s;
  ${props => (props.red ? "background-color: red;" : "")}
  :active {
    transform: scale(0.8);
  }
`;

const DeckContainer = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.3);
  bottom: 8rem;
  left: 1%;
  display: flex;
  width: 20%;
  border-radius: 20px;
  height: 2rem;
  padding: 4px;
`;

const TutorialContainer = styled.div`
  position: absolute;
  bottom: 8rem;
  right: 1%;
  height: 2rem;
  padding: 4px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.3);
  p {
    padding: 0;
    margin: 0;
  }
`;
