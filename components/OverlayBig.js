import styled from "styled-components";
import {useState, useEffect} from "react";
import OneCard from "./OneCard";
import WinningSvg from "./SVG/WinningSvg";
import Link from "next/link";
import GameOverSvg from "./SVG/GameOverSvg";
import {textTutorialData} from "./LevelData/_textTutorialData";

export default function OverlayBig({
  levelText,
  overlayState,
  setOverlayState,
  allCardsData,
  setCardToAdd,
  nextLevel,
  diedWorkers,
  cardsDeck,
}) {
  const [tutorialState, setTutorialState] = useState(0);

  const [card1, setCard1] = useState(false);
  const [card2, setCard2] = useState(false);
  const [card3, setCard3] = useState(false);

  useEffect(() => {
    let arr = [];
    while (arr.length < 3) {
      let x = Math.floor(Math.random() * allCardsData.length);
      if (arr.indexOf(x) === -1) {
        arr.push(x);
      }
    }

    setCard2(allCardsData[arr[1]]);
    setCard3(allCardsData[arr[2]]);
    if (levelText === "Level 3 - Upgrade a tent to a house") {
      setCard1(allCardsData[5]);
    } else {
      setCard1(allCardsData[arr[0]]);
    }
  }, [overlayState]);

  return (
    <>
      {overlayState === "tutorial" && (
        <Overlay tutorial={true}>
          <TextBox top="3%">{levelText}</TextBox>
          <TextBox left="" top="10%">
            Tutorial
          </TextBox>
          <TextBox top="30%" left="20%">
            Map
          </TextBox>
          <TextBox top="30%" left="60%">
            Drag to move!
          </TextBox>
          <TextBox top="60%">{`<---cards in hand--->`}</TextBox>
          <TextBox top="70vh" left="25%">
            {`<--- cards in deck / cards left`}
          </TextBox>
          <Button green={true} onClick={() => setOverlayState(false)}>
            Continue
          </Button>
        </Overlay>
      )}
      {overlayState === "win" && (
        <Overlay>
          <WinningSvg />
          {diedWorkers ? (
            <h3>{`You lost ${diedWorkers} people on your way...`}</h3>
          ) : (
            ""
          )}
          {nextLevel && (
            <Link href={`/levels/${nextLevel}`}>
              <Button>Next level</Button>
            </Link>
          )}
          <Link href="/levels">
            <Button>Menu</Button>
          </Link>
        </Overlay>
      )}
      {overlayState === "lose" && (
        <Overlay>
          <GameOverSvg />
          <h2>You lost your last worker...</h2>
          {diedWorkers && (
            <h2>{`You lost ${diedWorkers} people on your way...`}</h2>
          )}
          <Link href="/levels">
            <Button>Menu</Button>
          </Link>
        </Overlay>
      )}

      {overlayState === "endround" && (
        <Overlay>
          <CardFlex>
            {(card1 || card1.id === 0) && (
              <OneCard
                card={card1}
                fontSize="0.7rem"
                onClick={() => {
                  setCardToAdd(card1.id);
                  setOverlayState(false);
                }}
              />
            )}

            {(card2 || card2.id === 0) && (
              <OneCard
                card={card2}
                fontSize="0.7rem"
                onClick={() => {
                  setCardToAdd(card2.id);
                  setOverlayState(false);
                }}
              />
            )}

            {(card3 || card3.id === 0) && (
              <OneCard
                card={card3}
                fontSize="0.7rem"
                onClick={() => {
                  setCardToAdd(card3.id);
                  setOverlayState(false);
                }}
              />
            )}
          </CardFlex>

          <h3>Pick a new card!</h3>
        </Overlay>
      )}
      {overlayState === "cards" && (
        <Overlay>
          <CardGrid>
            {cardsDeck.map((card, index) => {
              return (
                <OneCard
                  height="180px"
                  key={index}
                  card={card}
                  fontSize="0.7rem"
                />
              );
            })}
          </CardGrid>
          <Button green={true} onClick={() => setOverlayState(false)}>
            Continue
          </Button>
        </Overlay>
      )}
      {overlayState === "textTutorial" && (
        <Overlay>
          {tutorialState < 6 && (
            <>
              <h2>How to play</h2>
              <TutImage src={textTutorialData[tutorialState].img} />
              <p>{textTutorialData[tutorialState].text}</p>
              <Button onClick={() => setTutorialState(tutorialState + 1)}>
                Next
              </Button>
            </>
          )}
          {tutorialState >= 6 && (
            <>
              <h2>Have Fun!</h2>
              <Button
                onClick={() => {
                  setTutorialState(0);
                  setOverlayState(false);
                }}
              >
                Play
              </Button>
            </>
          )}
        </Overlay>
      )}
    </>
  );
}
const Overlay = styled.div`
  width: 98%;
  position: absolute;
  font-size: 1.2rem;
  padding: 2rem;
  text-align: center;
  border: 2px solid black;
  height: 92vh;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  z-index: 3;
  ${props =>
    props.tutorial
      ? "justify-content: flex-end; background-color:rgba(0,0,0,0.5);"
      : ""}
`;

const Button = styled.button`
  margin: 20px;
  width: 9rem;
  height: 3rem;
  border-radius: 20px;
  font-size: 1.5rem;
  ${props => (props.green ? "background-color: green;" : "")}
`;

const CardFlex = styled.div`
  display: flex;
  height: 40vh;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(auto-fill, 180px);
  overflow-y: scroll;
  overflow-x: hidden;
  gap: 5px;
`;

const TextBox = styled.div`
  color: black;
  min-width: 80px;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 2%;
  border-radius: 20px;
  position: absolute;
  ${props => (props.left ? `left: ${props.left};` : "")}
  ${props => (props.top ? `top: ${props.top};` : "")}
`;

const TutImage = styled.img`
  width: 100%;
  border: 4px solid white;
  border-radius: 8px;
`;
