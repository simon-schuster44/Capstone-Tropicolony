import styled from "styled-components";
import Link from "next/link";
import Header from "../../components/Header";
import {useState} from "react";
export default function Settings() {
  const [popup, setPopup] = useState(false);
  function deleteData() {
    localStorage.removeItem("saveGame");
    setPopup(false);
  }

  return (
    <>
      <Background />
      <Header />
      <Menu>
        <Option>Settings</Option>
        <Option onClick={() => setPopup(true)}>delete all data</Option>

        <Option>
          <OptionLink href="/">Main Menu</OptionLink>
        </Option>

        <Popup popup={popup}>
          <h2>This will remove all saved data from your profile.</h2>
          <h2>Confirm?</h2>
          <ButtonContainer>
            <Button onClick={() => deleteData()}>Do it.</Button>
            <Button onClick={() => setPopup(false)} red={true}>
              Naaah...
            </Button>
          </ButtonContainer>
        </Popup>
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
  background-attachment: fixed;
  height: 100vh;
  width: 100vw;
  z-index: -1;
`;

const Menu = styled.div`
  margin: 0 auto 30px auto;
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
  background-color: #8cefff;
  transition: 0.3s;
  ${props => (props.children === "Settings" ? "height:auto" : "")}
  :active {
    transform: scale(0.8);
  }
`;

const Popup = styled.div`
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 0%;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  overflow: hidden;
  transition: 0.8s;
  h2 {
    margin-top: 30%;
    text-align: center;
  }
  ${props => props.popup && "height: 100%"}
`;

const Button = styled.button`
  height: 2.5rem;
  width: 5.5rem;
  margin: 0 2rem;
  background-color: aqua;
  border-radius: 8px;
  box-shadow: 2px 2px 8px black;
  color: #ff9d2d;
  font-size: 1.2rem;
  transition: 0.3s;
  :active {
    transform: scale(0.8);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
