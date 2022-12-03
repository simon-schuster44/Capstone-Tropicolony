export default function destroyBuilding(
  array,
  setArray,
  value,
  activeBuildings,
  setActiveBuildings
) {
  if (value.color === "lumberhut") {
    setArray(
      array.map(item => {
        if (item.id === value.id) {
          return {
            ...item,
            color: "grass",
          };
        } else {
          return item;
        }
      })
    );
    setActiveBuildings(activeBuildings - 1);
  } else {
    alert("geht nix");
  }
}
