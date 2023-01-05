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
    } else if (
      allCardsData[idCard].building &&
      allCardsData[idCard].building?.terrain?.indexOf(tile.color) === -1
    ) {
      alert(
        `Needs to be build on ${
          allCardsData[idCard].building.terrain.includes("grass")
            ? "sand"
            : allCardsData[idCard].building.terrain.join(" / ")
        }!`
      );
      abort = true;
    } else if (
      allCardsData[idCard].building &&
      allCardsData[idCard].building.style === "windmill" &&
      array.filter(item => item.color === "windmill").length >=
        array.filter(item => item.color === "well").length
    ) {
      alert("Windmill needs an own well to build");
      abort = true;
    } else if (
      allCardsData[idCard].building &&
      allCardsData[idCard].building.style === "wheat" &&
      !array.some(
        item =>
          item.color == "windmill" &&
          (tile.id === item.id - 11 ||
            tile.id === item.id - 10 ||
            tile.id === item.id - 9 ||
            tile.id === item.id - 1 ||
            tile.id === item.id + 1 ||
            tile.id === item.id + 9 ||
            tile.id === item.id + 10 ||
            tile.id === item.id + 11)
      )
    ) {
      alert("Needs to be in range of a windmill");
      abort = true;
    }
    if (tile.dark && chosenCard !== 0) {
      alert("Not yet discovered!");
      abort = true;
    }
    if (allCardsData[idCard]?.gain?.food?.wheat && tile.color !== "wheat") {
      alert("Needs to be placed on wheat!");
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
          (1 +
            array.filter(
              item =>
                item.color === allCardsData[idCard].gain.wood.multiplicator
            ).length),
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

    if (allCardsData[idCard].gain?.stone?.multiplicator) {
      object = {
        ...object,
        stone:
          object.stone *
          (1 +
            array.filter(
              item =>
                item.color === allCardsData[idCard].gain.stone.multiplicator
            ).length),
      };
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
    if (allCardsData[idCard].gain?.food?.multiplicator) {
      object = {
        ...object,
        food:
          object.food *
          array.filter(
            item => item.color === allCardsData[idCard].gain.food.multiplicator
          ).length,
      };
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
  grid-template-columns: repeat(10, 5.3rem);
  grid-template-rows: repeat(auto-fill, 5.3rem);
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
  margin: 0.5px;
  border-radius: 8px;
  width: 100%;
  height: 5rem;
  width: 5rem;
  overflow: visible;
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
  background-position: center;
  background-repeat: no-repeat;
  ${props => props.background}
`;
