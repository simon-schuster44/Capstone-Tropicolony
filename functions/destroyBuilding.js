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
  } else if (value.color === "tower") {
    setArray(
      array.map(item => {
        if (item.id === value.id) {
          return {
            ...item,
            color: "grass",
          };
        } else if (item.id === value.id + 10) {
          return {
            ...item,
            show: true,
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
