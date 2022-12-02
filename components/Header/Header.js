import SaveSvg from "../SVG/SaveSvg";
import styled from "styled-components";
import Link from "next/link";

export default function Header({saveoption}) {
  return (
    <HeaderContainer className="logo">
      <LinkElement href="/">
        <Logo src="/img/Logo.png" />
      </LinkElement>

      {saveoption ? <SaveSvg width="50px" /> : ""}
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  margin: 10px auto;
  height: 100px;
  display: flex;
  justify-content: space-around;
  transition: 1s;
`;

const LinkElement = styled(Link)`
  display: flex;
`;

const Logo = styled.img`
  width: auto;
  padding: 10px;
`;
