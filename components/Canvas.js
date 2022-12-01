import {useState, useEffect} from "react";
import styled from "styled-components";
//------- Functions--------------------------------
import chooseImg from "../functions/chooseImg";

export default function Canvas({array, setBuildingMenuState}) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(!animate), 1000);
  }, [animate]);

  return (
    <CanvasContainer>
      {array.map(item => {
        if (item.show) {
          return (
            <Field
              key={`f-${item.id}`}
              onClick={() => setBuildingMenuState(item)}
              color={item.color}
              animate={animate}
            >
              {chooseImg(item)}
            </Field>
          );
        } else return "";
      })}
    </CanvasContainer>
  );
}

const CanvasContainer = styled.div`
  background: linear-gradient(0.25turn, aqua, rgb(5, 175, 175), aqua);
  border: 3px solid black;
  border-radius: 20px;
  box-shadow: 2px 4px 10px black;
  padding: 10px;
  width: 98%;
  max-width: 400px;
  margin: auto;
  display: grid;
  height: auto;
  grid-template-columns: repeat(10, 1fr);
  gap: 0;
`;

const Field = styled.div`
  box-sizing: content-box;
  position: relative;
  border: 1px solid black;
  border-radius: 2px;
  min-height: 25px;
  overflow: visible;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    transform: scale(0.95);
    background-color: red;
  }
  svg {
    transition: 1s;
  }

  ${props => (props.color === "grass" ? "background-color: khaki;" : "")}
  ${props => (props.color === "stone" ? "background-color: grey;" : "")}
  ${props => (props.color === "water" ? "background-color: aqua;" : "")}
  ${props => (props.color === "forest" ? "background-color: darkgreen;" : "")}

  ${props =>
    props.color === "lumberhut"
      ? `background-image: url(/img/wooden-hut.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 70%;
  background-color: khaki;`
      : ""}

${props =>
    props.color === "house"
      ? `background-image: url(../../img/big-hut.png);
  background-position: center;
  background-size: 85%;
  background-color: khaki;
  background-repeat: no-repeat;
  grid-column: span 2;
  grid-row: span 2;`
      : ""}

${props =>
    props.color === "tower"
      ? `background-image: url(../../img/tower.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: khaki;
  grid-row: span 2;`
      : ""}

/* -------------------------ANIMATIONS-----------------------------*/

${props =>
    props.animate && props.color === "lumberhut"
      ? "background-size: 25px 30px;"
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
