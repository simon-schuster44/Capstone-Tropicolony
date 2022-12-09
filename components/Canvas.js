import {useState, useEffect} from "react";
import styled from "styled-components";
//------- Functions--------------------------------
import chooseImg from "../functions/chooseImg";
import {allCardsData} from "./LevelData/_allCardsData";

export default function Canvas({
  array,
  chooseTileState,
  setChooseTileState,
  chosenCard,
  counter,
  setCounter,
  setGatherRessources,
}) {
  //deployment:
  if (counter === 5000) {
    setChooseTileState(chooseTileState + 1);
  }
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(!animate);
      setCounter(counter + 1);
    }, 1000);
  }, [animate]);

  function BuildOnTile(idCard, tile) {
    if (tile.dark && chosenCard !== 0) {
      alert("Not yet discovered!");
      return "";
    } else {
      let object = {};
      if (idCard === 0) {
        object = {...object, reveal: tile.id};
      }
      if (allCardsData[idCard].gain) {
        if (allCardsData[idCard].gain.wood) {
          if (
            allCardsData[idCard].gain.wood.forest &&
            tile.color === "forest"
          ) {
            object = {...object, wood: allCardsData[idCard].gain.wood.forest};
          } else if (
            allCardsData[idCard].gain.wood.stone &&
            tile.color === "stone"
          ) {
            object = {...object, wood: allCardsData[idCard].gain.wood.stone};
          } else if (
            allCardsData[idCard].gain.wood.water &&
            tile.color === "water"
          ) {
            object = {...object, wood: allCardsData[idCard].gain.wood.water};
          } else if (
            allCardsData[idCard].gain.wood.grass &&
            tile.color === "grass"
          ) {
            object = {...object, wood: allCardsData[idCard].gain.wood.grass};
          } else {
            object = {...object, wood: allCardsData[idCard].gain.wood.else};
          }
          if (allCardsData[idCard].gain.wood.multiplicator) {
            object = {
              ...object,
              wood:
                object.wood *
                (1 + array.filter(item => item.color === "lumberhut").length),
            };
          }
        }
        if (allCardsData[idCard].gain.stone) {
          if (
            allCardsData[idCard].gain.stone.forest &&
            tile.color === "forest"
          ) {
            object = {...object, stone: allCardsData[idCard].gain.stone.forest};
          } else if (
            allCardsData[idCard].gain.stone.stone &&
            tile.color === "stone"
          ) {
            object = {...object, stone: allCardsData[idCard].gain.stone.stone};
          } else if (
            allCardsData[idCard].gain.stone.water &&
            tile.color === "water"
          ) {
            object = {...object, stone: allCardsData[idCard].gain.stone.water};
          } else if (
            allCardsData[idCard].gain.stone.grass &&
            tile.color === "grass"
          ) {
            object = {...object, stone: allCardsData[idCard].gain.stone.grass};
          } else {
            object = {...object, stone: allCardsData[idCard].gain.stone.else};
          }
        }
        if (allCardsData[idCard].gain.food) {
          if (
            allCardsData[idCard].gain.food.forest &&
            tile.color === "forest"
          ) {
            object = {...object, food: allCardsData[idCard].gain.food.forest};
          } else if (
            allCardsData[idCard].gain.food.stone &&
            tile.color === "stone"
          ) {
            object = {...object, food: allCardsData[idCard].gain.food.stone};
          } else if (
            allCardsData[idCard].gain.food.water &&
            tile.color === "water"
          ) {
            object = {...object, food: allCardsData[idCard].gain.food.water};
          } else if (
            allCardsData[idCard].gain.food.grass &&
            tile.color === "grass"
          ) {
            object = {...object, food: allCardsData[idCard].gain.food.grass};
          } else {
            object = {...object, food: allCardsData[idCard].gain.food.else};
          }
        }
        if (allCardsData[idCard].gain.workers) {
          object = {...object, workers: allCardsData[idCard].gain.workers};
        }
      }
      if (allCardsData[idCard].cost) {
        if (allCardsData[idCard].cost.dailyWorkers) {
          object = {
            ...object,
            dailyWorkers: -allCardsData[idCard].cost.dailyWorkers,
          };
        }
        if (allCardsData[idCard].cost.wood) {
          object = {...object, wood: -allCardsData[idCard].cost.wood};
        }
        if (allCardsData[idCard].cost.stone) {
          object = {...object, stone: -allCardsData[idCard].cost.stone};
        }
      }
      if (allCardsData[idCard].building) {
        if (tile.color === allCardsData[idCard].building.terrain) {
          object = {
            ...object,
            tileId: tile.id,
            building: allCardsData[idCard].building.style,
          };
        } else {
          alert(
            `Needs to be build on ${allCardsData[idCard].building.terrain} terrain!`
          );
          return "";
        }
      }
      setGatherRessources(object);
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
  height: 40vh;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(10, 5rem);
  gap: 0;
  overscroll-behavior: contain;
  overflow-y: scroll;
  overflow-x: scroll;
`;

const Overlay = styled.div`
  position: absolute;
  width: 101%;
  height: 101%;
  border-radius: 6px;
  z-index: 2;
  background-color: black;
  transition: 1s;
  ${props => (props.dark ? "" : "opacity: 0")}
`;

const Field = styled.div`
  box-sizing: content-box;
  position: relative;
  border: 1px solid black;
  margin: 1%;
  border-radius: 8px;
  height: 5rem;
  overflow: visible;
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;

  svg {
    transition: 1s;
  }

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
