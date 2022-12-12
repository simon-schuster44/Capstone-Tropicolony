import styled from "styled-components";
import {useState, useEffect} from "react";
import OneCard from "./OneCard";

export default function OverlayBig({
  levelText,
  overlayState,
  setOverlayState,
  allCardsData,
  setCardToAdd,
}) {
  const [card1, setCard1] = useState(false);
  const [card2, setCard2] = useState(false);
  const [card3, setCard3] = useState(false);

  useEffect(() => {
    setCard1(allCardsData[Math.floor(Math.random() * allCardsData.length)]);
    setCard2(allCardsData[Math.floor(Math.random() * allCardsData.length)]);
    setCard3(allCardsData[Math.floor(Math.random() * allCardsData.length)]);
  }, [overlayState]);

  return (
    <>
      {overlayState ? (
        <Overlay>
          <CardFlex>
            {card1 || card1.id === 0 ? (
              <OneCard
                card={card1}
                fontSize="1rem"
                onClick={() => {
                  setCardToAdd(card1.id);
                  setOverlayState(false);
                }}
              />
            ) : (
              ""
            )}

            {card2 || card2.id === 0 ? (
              <OneCard
                card={card2}
                fontSize="1rem"
                onClick={() => {
                  setCardToAdd(card2.id);
                  setOverlayState(false);
                }}
              />
            ) : (
              ""
            )}

            {card3 || card3.id === 0 ? (
              <OneCard
                card={card3}
                fontSize="1rem"
                onClick={() => {
                  setCardToAdd(card3.id);
                  setOverlayState(false);
                }}
              />
            ) : (
              ""
            )}
          </CardFlex>

          <h3>{levelText}</h3>

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

const CardFlex = styled.div`
  display: flex;
  height: 40vh;
`;
