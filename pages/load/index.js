import styled from "styled-components";
import Link from "next/link";
import Header from "../../components/Header";
import useLocalStorage from "../../components/useLocalStorage";
export default function Load({savaState, setSaveState}) {
  const [saveData, setSaveData] = useLocalStorage("saveGame", []);
  return (
    <>
      <Background />
      <Header />
      <Menu>
        <Option>Save Files</Option>
        {Object.entries(saveData).map(file => {
          return (
            <Option>
              <OptionLink
                onClick={() => setSaveState(true)}
                href={`/levels/${file[0]}`}
              >
                {file[0]}
              </OptionLink>
            </Option>
          );
        })}

        <Option>
          <OptionLink href="/">Main Menu</OptionLink>
        </Option>
      </Menu>
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
const Menu = styled.div`
  margin: 30px auto;
  border-radius: 20px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  padding: 5px;
  height: 100px;
  font-family: "Comic Sans MS";
  font-size: 40px;
  font-weight: bold;
  color: #ff9d2d;
  margin: 30px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: 2px 2px 8px black;
  /* background-color: #ff8e72; */
  background-color: #8cefff;
  ${props => (props.children === "Settings" ? "height:auto" : "")}
`;
