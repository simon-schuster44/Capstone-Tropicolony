import styled from "styled-components";
import Link from "next/link";

export default function Home({array}) {
  return (
    <>
      <button onClick={() => console.log(array)}>Log Array</button>
      <MainMenu>
        <Option>
          <OptionLink href="/level1">New Game </OptionLink>
        </Option>

        <Option>
          <OptionLink href="/level1">Settings </OptionLink>
        </Option>
      </MainMenu>
    </>
  );
}

const MainMenu = styled.div`
  margin: 10px auto;
  border: 2px solid red;
  height: 60vh;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin: 10px auto;
  border-radius: 20px;
  box-shadow: 2px 2px 8px black;
`;
