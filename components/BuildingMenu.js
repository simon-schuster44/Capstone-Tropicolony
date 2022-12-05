import styled from "styled-components";
import buildLumberHut from "../functions/buildLumberHut";
import destroyBuilding from "../functions/destroyBuilding";
import buildTower from "../functions/buildTower";

export default function BuildingMenu({
  buildingMenuState,
  setBuildingMenuState,
  possibleBuildings,
  activeBuildings,
  setActiveBuildings,
  array,
  setArray,
  wood,
  setWood,
}) {
  function handleBuildingForm(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    if (data.building === "tower") {
      buildTower(
        buildingMenuState,
        array,
        setArray,
        activeBuildings,
        setActiveBuildings,
        wood,
        setWood
      );
    }

    if (data.building === "lumberhut") {
      buildLumberHut(
        array,
        setArray,
        buildingMenuState,
        activeBuildings,
        setActiveBuildings,
        wood,
        setWood
      );
    }
    if (data.building === "destroy") {
      destroyBuilding(
        array,
        setArray,
        buildingMenuState,
        activeBuildings,
        setActiveBuildings
      );
    }
    setBuildingMenuState(false);
  }

  return (
    <>
      <BuildingMenuContainer buildingMenuState={buildingMenuState}>
        <BuildingMenuHeadline>Building Menu</BuildingMenuHeadline>
        <BuildingForm onSubmit={handleBuildingForm}>
          {buildingMenuState ? (
            <>
              {possibleBuildings.map(building => {
                return (
                  <InputContainer key={`div-${building.name}`}>
                    <InputElement
                      type="radio"
                      name="building"
                      id={building.name}
                      key={building.name}
                      value={building.name}
                    />
                    <label htmlFor={building.name}>
                      {building.name === "tower"
                        ? "Water tower"
                        : building.name}
                      <br /> cost: {building.price}
                    </label>
                  </InputContainer>
                );
              })}
              <InputContainer>
                <InputElement
                  type="radio"
                  name="building"
                  id="destroy"
                  key="destroy"
                  value="destroy"
                />
                <label htmlFor="destroy">Destroy</label>
              </InputContainer>
            </>
          ) : (
            ""
          )}

          <Button type="submit">BUILD!</Button>
        </BuildingForm>
        <Button onClick={() => setBuildingMenuState(false)}>Back</Button>
      </BuildingMenuContainer>
    </>
  );
}

const BuildingMenuContainer = styled.div`
  border: 2px solid black;
  border-radius: 8px;
  box-shadow: 2px 2px 8px black;
  max-width: 400px;
  position: absolute;
  top: 0;
  height: auto;
  width: 95%;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  transition: 0.5s;
  ${props => (props.buildingMenuState ? "" : "opacity: 0; z-index: -1;")}
`;

const BuildingMenuHeadline = styled.h1`
  text-align: center;
  margin-top: 3%;
`;

const BuildingForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputContainer = styled.div`
  border-radius: 20px;
  box-shadow: 0 0 8px white;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2% auto;
`;

const InputElement = styled.input`
  margin: 1rem;
  transform: scale(1.5);
`;

const Button = styled.button`
  margin: 1rem;
`;
