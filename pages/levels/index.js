import Link from "next/link";
import styled from "styled-components";

export default function levels() {
  return (
    <>
      <Background />
      <LevelContainer>
        <Option>
          <OptionLink href="/levels/level1">1</OptionLink>
        </Option>
        <Option>
          <OptionLink href="/levels/level2">2</OptionLink>
        </Option>
        <Option>
          <OptionLink href="">3</OptionLink>
        </Option>
        <Option>
          <OptionLink href="">4</OptionLink>
        </Option>
        <Option>
          <OptionLink href="">5</OptionLink>
        </Option>
        <Option>
          <OptionLink href="">6</OptionLink>
        </Option>
        <Option>
          <OptionLink href="">7</OptionLink>
        </Option>
        <Option>
          <OptionLink href="">8</OptionLink>
        </Option>
        <Option>
          <OptionLink href="">9</OptionLink>
        </Option>
        <Option>
          <OptionLink href="">10</OptionLink>
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
  ${props => (props.children === "Settings" ? "height:auto" : "")}
`;
