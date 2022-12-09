import styled from "styled-components";
import GameOverSvg from "./SVG/GameOverSvg";
import WinningSvg from "./SVG/WinningSvg";
import Link from "next/link";
import {useState, useEffect} from "react";

export default function OverlayBig({
  levelText,
  children,
  overlayState,
  setOverlayState,
  textState,
  allCardsData,
  setCardToAdd,
}) {
  const [card1, setCard1] = useState(0);
  const [card2, setCard2] = useState(0);
  const [card3, setCard3] = useState(0);

  useEffect(() => {
    setCard1(allCardsData[Math.round(Math.random() * allCardsData.length)]);
    setCard2(allCardsData[Math.round(Math.random() * allCardsData.length)]);
    setCard3(allCardsData[Math.round(Math.random() * allCardsData.length)]);
  }, [overlayState]);

  return (
    <>
      {overlayState ? (
        <Overlay>
          {card1 ? (
            <Card
              onClick={() => {
                setCardToAdd(card1.id);
                setOverlayState(false);
              }}
            >
              {card1.name}
            </Card>
          ) : (
            ""
          )}
          {card2 ? (
            <Card
              onClick={() => {
                setCardToAdd(card2.id);
                setOverlayState(false);
              }}
            >
              {card2.name}
            </Card>
          ) : (
            ""
          )}
          {card3 ? (
            <Card
              onClick={() => {
                setCardToAdd(card3.id);
                setOverlayState(false);
              }}
            >
              {card3.name}
            </Card>
          ) : (
            ""
          )}

          <h3>{levelText}</h3>
          {children}

          <Button onClick={() => setOverlayState(false)}>continue</Button>
        </Overlay>
      ) : (
        ""
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
  height: 75vh;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  z-index: 3;
`;

const Button = styled.button`
  margin: 20px;
  width: 9rem;
  height: 3rem;
  border-radius: 20px;
  font-size: 1.5rem;
`;

const MenuLink = styled(Link)`
  width: 100%;
`;

const Card = styled.div`
  height: 100px;
  border: 2px solid black;
  background-color: aqua;
  color: black;
  transition: 0.2s;
  :hover {
    transform: scale(1.2);
  }
`;
