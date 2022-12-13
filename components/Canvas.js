import styled from "styled-components";
//------- Functions--------------------------------
import chooseImg from "../functions/chooseImg";
import {allCardsData} from "./LevelData/_allCardsData";
import chooseBackgroundColor from "../functions/chooseBackgroundColor";

export default function Canvas({array, chosenCard, setGatherRessources}) {
  function BuildOnTile(idCard, tile) {
    let abort;
    if (!idCard && idCard !== 0) {
      abort = true;
    }

    if (tile.dark && chosenCard !== 0) {
      alert("Not yet discovered!");
      abort = true;
    }

    if (
      allCardsData[idCard].building &&
      tile.color !== allCardsData[idCard].building?.terrain
    ) {
      alert(
        `Needs to be build on ${
          allCardsData[idCard].building.terrain === "grass"
            ? "sand"
            : allCardsData[idCard].building.terrain
        }!`
      );
      abort = true;
    }

    if (abort) {
      return;
    }
    //Breakpoint---------------------------------------

    let object = {};
    if (idCard === 0) {
      object = {...object, reveal: tile.id};
    }
    //------------wood-------------------------------
    if (allCardsData[idCard].gain?.wood) {
      if (allCardsData[idCard].gain.wood[tile.color]) {
        object = {
          ...object,
          wood: allCardsData[idCard].gain.wood[tile.color],
        };
      } else {
        object = {...object, wood: allCardsData[idCard].gain.wood.else};
      }
    }

    if (allCardsData[idCard].gain?.wood?.multiplicator) {
      object = {
        ...object,
        wood:
          object.wood *
          (1 + array.filter(item => item.color === "lumberhut").length),
      };
    }
    //------------stone-------------------------------
    if (allCardsData[idCard].gain?.stone) {
      if (allCardsData[idCard].gain.stone[tile.color]) {
        object = {
          ...object,
          stone: allCardsData[idCard].gain.stone[tile.color],
        };
      } else {
        object = {...object, stone: allCardsData[idCard].gain.stone.else};
      }
    }
    //------------food-------------------------------
    if (allCardsData[idCard].gain?.food) {
      if (allCardsData[idCard].gain.food[tile.color]) {
        object = {
          ...object,
          food: allCardsData[idCard].gain.food[tile.color],
        };
      } else {
        object = {...object, food: allCardsData[idCard].gain.food.else};
      }
    }
    //------------workers-------------------------------

    if (allCardsData[idCard].gain.workers) {
      object = {...object, workers: allCardsData[idCard].gain.workers};
    }

    //--------------cost-----------------------------------
    if (allCardsData[idCard].cost) {
      const keys = Object.keys(allCardsData[idCard].cost);
      keys.forEach(key => {
        object = {
          ...object,
          [key]: -allCardsData[idCard].cost[key],
        };
      });
    }
    //--------------buildings-----------------------------------

    if (allCardsData[idCard].building) {
      object = {
        ...object,
        tileId: tile.id,
        building: allCardsData[idCard].building.style,
      };
    }

    setGatherRessources(object);
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
                background={chooseBackgroundColor(item.color)}
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
  height: 100%;
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
  background-position: center;
  background-repeat: no-repeat;
  ${props => props.background}
`;
