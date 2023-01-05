import Link from "next/link";
import styled from "styled-components";
import Header from "../../components/Header";
import useLocalStorage from "../../components/useLocalStorage";

export default function Levels() {
  const [saveData] = useLocalStorage("saveGame", []);
  return (
    <>
      <Background />
      <Header />
      <LevelContainer>
        <Headline>Levels</Headline>
        <Option>
          <OptionLink unlocked={["1"]} href="/levels/level1">
            1
          </OptionLink>
        </Option>
        <Option>
          <OptionLink unlocked={saveData?.unlocked} href="/levels/level2">
            2
          </OptionLink>
        </Option>
        <Option>
          <OptionLink unlocked={saveData?.unlocked} href="/levels/level3">
            3
          </OptionLink>
        </Option>
        <Option>
          <OptionLink unlocked={saveData?.unlocked} href="/levels/level4">
            4
          </OptionLink>
        </Option>
        <Option>
          <OptionLink unlocked={saveData?.unlocked} href="/levels/level5">
            5
          </OptionLink>
        </Option>
        <Option freeplay={true}>
          <OptionLink unlocked={saveData?.unlocked} href="/levels/freeplay">
            Free play
          </OptionLink>
        </Option>
      </LevelContainer>
    </>
  );
}

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
const LevelContainer = styled.div`
  margin: 30px auto;
  border-radius: 20px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
`;

const Headline = styled.h1`
  grid-column: span 5;
  padding: 2%;
  font-family: "Comic Sans MS";
  font-weight: bold;
  color: #ff9d2d;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: 2px 2px 8px black;
  background-color: #8cefff;
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
  opacity: 1;
  ${props =>
    !props.unlocked?.includes(props.children)
      ? "opacity: 0.3; pointer-events: none;"
      : ""}
`;

const Option = styled.div`
  width: 100%;
  padding: 5px;
  font-family: "Comic Sans MS";
  font-size: 40px;
  font-weight: bold;
  color: #ff9d2d;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: 2px 2px 8px black;
  background-color: #8cefff;
  transition: 0.3s;
  ${props => (props.children === "Settings" ? "height:auto;" : "")}
  ${props => (props.freeplay ? "grid-column: 2/span 3;" : "")}
  :active {
    transform: scale(0.8);
  }
`;
