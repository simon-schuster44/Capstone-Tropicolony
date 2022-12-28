import styled from "styled-components";
import Link from "next/link";
import Header from "../../components/Header";
import DeleteSvg from "../../components/SVG/DeleteSvg";
import useLocalStorage from "../../components/useLocalStorage";
import {useState} from "react";
export default function Load({setSaveState}) {
  const [saveData, setSaveData] = useLocalStorage("saveGame", []);
  const [reloader, setReloader] = useState(true);

  function deleteEntry(key) {
    let object = saveData;
    delete object[key];
    setSaveData(object);
    setReloader(!reloader);
  }
  return (
    <>
      <Background />
      <Header />
      <Menu>
        <Option fontsize="2.5rem">Save Files</Option>
        {saveData &&
          Object.entries(saveData).map((file, index) => {
            if (file[0] === "finished") {
              return;
            } else {
              return (
                <Option key={index}>
                  <OptionLink
                    onClick={() => setSaveState(true)}
                    href={`/levels/${file[0]}`}
                  >
                    {file[0]}
                  </OptionLink>
                  <DeleteSvg width="10%" onClick={() => deleteEntry(file[0])} />
                </Option>
              );
            }
          })}
        <Option fontsize="2.5rem">
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
  padding: 2%;
  height: auto;
  font-family: "Comic Sans MS";
  font-size: 1.5rem;
  font-weight: bold;
  color: #ff9d2d;
  margin: 30px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: 2px 2px 8px black;
  background-color: #8cefff;
  ${props => props.fontsize && `font-size: ${props.fontsize};`}
`;
