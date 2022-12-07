import {useState, useEffect} from "react";
import styled from "styled-components";
//------- Functions--------------------------------
import chooseImg from "../functions/chooseImg";

export default function Canvas({
  array,
  chooseTileState,
  setChooseTileState,
  chosenCard,
  counter,
  setCounter,
  setGatherRessources,
}) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(!animate);
      setCounter(counter + 1);
    }, 1000);
  }, [animate]);

  function BuildOnTile(idCard, item) {
    if (item.dark) {
      alert("Not yet discovered!");
      return "";
    } else {
      switch (idCard) {
        case 0:
          break;
        case 1:
          if (item.color === "forest") {
            setGatherRessources({wood: 10, dailyWorkers: -1});
          } else if (item.color === "grass") {
            setGatherRessources({wood: 5, dailyWorkers: -1});
          } else {
            setGatherRessources({wood: 1, dailyWorkers: -1});
          }
          break;
        case 2:
          if (item.color === "stone") {
            setGatherRessources({stone: 10, dailyWorkers: -1});
          } else if (item.color === "grass") {
            setGatherRessources({stone: 5, dailyWorkers: -1});
          } else {
            setGatherRessources({stone: 1, dailyWorkers: -1});
          }
          break;
        case 3:
          if (item.color === "forest") {
            setGatherRessources({food: 10, dailyWrkers: -1});
          } else if (item.color === "grass") {
            setGatherRessources({food: 5, dailyWorkers: -1});
          } else {
            setGatherRessources({food: 1, dailyWorkers: -1});
          }
          break;
        case 4:
          if (item.color === "forest") {
            setGatherRessources({
              lumberhut: item.id,
              wood: -2,
              dailyWorkers: -2,
            });
          } else {
            alert("Needs to be build on forest terrain!");
          }
          break;
      }
    }
  }

  return (
    <>
      <CanvasContainer>
        {array.map(item => {
          if (item.show) {
            return (
              <Field
                key={`f-${item.id}`}
                onClick={() => BuildOnTile(chosenCard, item)}
                color={item.color}
                animate={animate}
                id={item.id}
              >
                <Overlay dark={item.dark} />
                {chooseImg(item)}
              </Field>
            );
          } else return "";
        })}
      </CanvasContainer>
    </>
  );
}

const CanvasContainer = styled.div`
  background: linear-gradient(0.25turn, aqua, rgb(5, 175, 175), aqua);
  border: 3px solid black;
  border-radius: 20px;
  box-shadow: 2px 4px 10px black;
  padding: 2rem;
  width: 98%;
  height: 50vh;
  width: 98%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(10, 80px);
  gap: 0;
  overflow-y: scroll;
  overflow-x: scroll;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: black;
  transition: 1s;
  ${props => (props.dark ? "" : "opacity: 0")}
`;

const Field = styled.div`
  box-sizing: content-box;
  position: relative;
  border: 1px solid black;
  border-radius: 2px;
  min-height: 80px;
  overflow: visible;
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;

  svg {
    transition: 1s;
  }
  ${props => (props.dark ? "" : "")}

  ${props => (props.color === "grass" ? "background-color: khaki;" : "")}
  ${props => (props.color === "stone" ? "background-color: grey;" : "")}
  ${props => (props.color === "water" ? "background-color: aqua;" : "")}
  ${props => (props.color === "forest" ? "background-color: darkgreen;" : "")}
  ${props => (props.color === "treasure" ? "background-color: khaki;" : "")}

  ${props =>
    props.color === "lumberhut"
      ? `background-image: url(/img/wooden-hut.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 70%;
  background-color: darkgreen;`
      : ""}

${props =>
    props.color === "house"
      ? `background-image: url(/img/big-hut.png);
  background-position: center;
  background-size: 85%;
  background-color: khaki;
  background-repeat: no-repeat;
  `
      : ""}

${props =>
    props.color === "tower"
      ? `background-image: url(/img/tower.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: khaki;
  grid-row: span 2;`
      : ""}

/* -------------------------ANIMATIONS-----------------------------*/

${props =>
    props.animate && props.color === "lumberhut"
      ? "background-size: 57% 120%;"
      : ""}

${props =>
    props.animate && props.color === "tower"
      ? "background-size: 25px 48px;"
      : ""}


${props =>
    props.animate && props.color === "water"
      ? "svg {transform: scale(0.8);"
      : ""}
`;
