import styled from "styled-components";

export default function WinningOverlay() {
  return <OverlayContainer></OverlayContainer>;
}

const OverlayContainer = styled.div`
  position: absolute;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;
