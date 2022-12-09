import {useEffect, useState} from "react";
import Canvas from "../../../components/Canvas";
import {dataLevel2} from "../../../components/LevelData/_dataLevel2";
import Ressources from "../../../components/Ressources";
import styled from "styled-components";
import OverlayBig from "../../../components/OverlayBig";
import Header from "../../../components/Header";
import Cards from "../../../components/Cards";
import {allCardsData} from "../../../components/LevelData/_allCardsData";
import OverlaySmall from "../../../components/OverlaySmall";
import {cardsDeckData} from "../../../components/LevelData/_cardsDeckData";
import CardsSvg from "../../../components/SVG/CardsSvg";

export default function Level2() {
  const [array, setArray] = useState(dataLevel2.fields);
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
  const [stone, setStone] = useState(0);
  const [food, setFood] = useState(10);
  const [workers, setWorkers] = useState(2);
  const [dailyWorkers, setDailyWorkers] = useState(2);

  //this is just for deployment:
  if (stone === 1000) {
    setAllCards(allCards + 1);
    setActiveBuildings(activeBuildings + 1);
    setWorkers(0);
    setTextState(0);
    setChooseTileState(chooseTileState + 1);
  }

  useEffect(() => {
    if (cardToAdd) {
      setCardsDeck([...cardsDeck, allCardsData[cardToAdd]]);
    }
  }, [cardToAdd]);

  useEffect(() => {
    setShuffledCards(cardsDeck.sort(() => 0.5 - Math.random()));
  }, [cardsDeck]);

  useEffect(() => {
    if (shuffledCards.length === 0) {
      setOverlayState(true);
    }
    setRandomCards(shuffledCards.slice(0, 6));
  }, [shuffledCards]);

  useEffect(() => {
    if (gatherRessources.reveal) {
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
    cardHandler(chosenCard, randomCards);
    setChosenCard(false);
  }, [gatherRessources]);

  if (chosenCard === -1) {
    alert("No card selected!");
    setChosenCard(false);
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
    setDailyWorkers(workers);
    setFood(food - workers);
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
          setActiveCard={setActiveCard}
          randomCards={randomCards}
          chosenCard={chosenCard}
          setChosenCard={setChosenCard}
          wood={wood}
          stone={stone}
          dailyWorkers={dailyWorkers}
        />
        <ButtonContainer>
          <Button red={true} onClick={() => endRound()}>
            End round
          </Button>
          <Button onClick={() => setChosenCard(activeCard)}>Choose</Button>
        </ButtonContainer>

        <OverlaySmall chosenCard={chosenCard} />

        {overlayState ? (
          <OverlayBig
            allCardsData={allCardsData}
            setCardToAdd={setCardToAdd}
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
      <DeckContainer>
        <CardsSvg width="100%" />
        {cardsDeck.length}/{shuffledCards.length - randomCards.length}
      </DeckContainer>
      <Ressources
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
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30vw;
  height: 2rem;
  border-radius: 8px;
  background-color: green;
  ${props => (props.red ? "background-color: red;" : "")}
`;

const DeckContainer = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
  bottom: 25%;
  left: 5%;
  display: flex;
  width: 20%;
  border-radius: 20px;
  height: 2rem;
  padding: 4px;
`;
