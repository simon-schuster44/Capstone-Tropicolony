import styled from "styled-components";
import Link from "next/link";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <>
      <Background />
      <Header />
      <MainMenu>
        <Option>
          <OptionLink href="/level1">Continue</OptionLink>
        </Option>
        <Option>
          <OptionLink href="/level1">New Game </OptionLink>
        </Option>
        <Option>
          <OptionLink href="/level1">Load</OptionLink>
        </Option>

        <Option>
          <OptionLink href="/settings">Settings </OptionLink>
        </Option>
      </MainMenu>
    </>
  );
}

const MainMenu = styled.div`
  margin: 30px auto;
  /* box-shadow: 2px 2px 8px black; */
  border-radius: 20px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #8cefff; */
  /* background-color: #ff8e72; */
  background-color: transparent;
`;

const OptionLink = styled(Link)`
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: inherit;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Option = styled.div`
  width: 80vw;
  height: 100px;
  font-family: "Comic Sans MS";
  font-size: 40px;
  font-weight: bold;
  color: #ff9d2d;
  margin: 30px auto;
  border-radius: 20px;
  box-shadow: 2px 2px 8px black;
  /* background-color: #ff8e72; */
  background-color: #8cefff;
`;

const Background = styled.main`
  position: absolute;
  margin: 0;
  top: 0;
  background: url(/img/game-background.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  z-index: -1;
`;
