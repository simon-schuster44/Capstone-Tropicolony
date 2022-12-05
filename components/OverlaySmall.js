import styled from "styled-components";
import GameOverSvg from "./SVG/GameOverSvg";
import WinningSvg from "./SVG/WinningSvg";
import Link from "next/link";

export default function OverlaySmall({
  levelText,
  children,
  overlayState,
  setOverlayState,
  textState,
}) {
  return (
    <>
      {overlayState ? (
        <Overlay>
          {textState === 99 ? <WinningSvg /> : ""}
          {textState === 0 ? <GameOverSvg /> : ""}
          <h3>{textState === 0 || textState === 99 ? "" : levelText}</h3>
          {children}
          {textState === 0 || textState === 99 ? (
            ""
          ) : (
            <Button onClick={() => setOverlayState(false)}>continue</Button>
          )}
          {textState === 0 ? (
            <Button onClick={() => window.location.reload()}>restart</Button>
          ) : (
            ""
          )}
          {textState === 99 ? (
            <MenuLink href="/levels">
              <Button>menu</Button>
            </MenuLink>
          ) : (
            ""
          )}
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
`;

const Button = styled.button`
  margin: 20px;
  width: 150px;
  height: 60px;
  border-radius: 20px;
  font-size: 25px;
`;

const MenuLink = styled(Link)`
  width: 100%;
`;
