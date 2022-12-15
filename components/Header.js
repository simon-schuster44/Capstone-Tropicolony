import SaveSvg from "./SVG/SaveSvg";
import styled from "styled-components";
import Link from "next/link";
import LogoSvg from "./SVG/LogoSvg";

export default function Header({saveoption}) {
  return (
    <HeaderContainer className="logo">
      <LinkElement href="/">
        <LogoSvg width="100%" />
      </LinkElement>

      {saveoption && <SaveSvg width="50px" />}
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  height: 8vh;
  padding: 1%;
  display: flex;
  justify-content: space-around;
`;

const LinkElement = styled(Link)`
  display: flex;
`;
