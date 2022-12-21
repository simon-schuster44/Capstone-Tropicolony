import SaveSvg from "./SVG/SaveSvg";
import styled from "styled-components";
import Link from "next/link";
import LogoSvg from "./SVG/LogoSvg";

export default function Header({saveoption, onClick}) {
  return (
    <HeaderContainer className="logo">
      <LinkElement href="/">
        <LogoSvg width="100%" />
      </LinkElement>

      {saveoption && <SaveSvg width="50px" onClick={onClick} />}
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  height: 8vh;
  padding: 1%;
  display: flex;
  justify-content: space-around;
  svg:active {
    transform: scale(0.8);
  }
`;

const LinkElement = styled(Link)`
  display: flex;
`;
