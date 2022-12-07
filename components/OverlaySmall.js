import styled from "styled-components";

export default function OverlaySmall({chosenCard}) {
  return <Overlay chosenCard={chosenCard}>Choose a tile!</Overlay>;
}

const Overlay = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  bottom: 0;
  font-size: 1.2rem;
  text-align: center;
  color: white;
  height: 40%;
  width: 98%;
  padding-top: 10%;
  border-radius: 20px;
  transition: 0.5s;
  ${props => (props.chosenCard ? "" : "opacity: 0; z-index:-1")}
`;
