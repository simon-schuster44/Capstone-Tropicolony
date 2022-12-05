export default function buildLumberHut(
  array,
  setArray,
  value,
  activeBuildings,
  setActiveBuildings,
  wood,
  setWood
) {
  if (value.color === "grass") {
    if (wood >= 2) {
      setArray(
        array.map(item => {
          if (item.id === value.id) {
            return {
              ...item,
              color: "lumberhut",
            };
          } else {
            return item;
          }
        })
      );
      setActiveBuildings(activeBuildings + 1);
      setWood(wood - 2);
    } else {
      alert("Wir benötigen Holz, Mylord.");
    }
  } else {
    alert("geht nix");
  }
}
