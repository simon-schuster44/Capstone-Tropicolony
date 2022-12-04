export default function buildTower(
  value,
  array,
  setArray,
  activeBuildings,
  setActiveBuildings,
  wood,
  setWood
) {
  if (value.color === "grass" && array[value.id + 10].color === "grass") {
    if (wood >= 4) {
      setArray(
        array.map(item => {
          if (item.id === value.id) {
            return {
              ...item,
              color: "tower",
            };
          } else if (item.id === value.id + 10) {
            return {
              ...item,
              show: false,
            };
          } else {
            return item;
          }
        })
      );
      setActiveBuildings(activeBuildings + 1);
      setWood(wood - 4);
    } else {
      alert("Wir benötigen Holz, Mylord.");
    }
  } else {
    alert("geht nix");
  }
}
