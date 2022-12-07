export default function cutTrees(array, setArray, wood, setWood) {
  let choppedWood = 0;
  let field = false;
  field = array.find(
    item =>
      //right tile:
      (item.id > 0 &&
        item.id % 10 !== 0 &&
        item.color === "forest" &&
        array[item.id - 1].color === "lumberhut") ||
      //bottom tile:
      (item.id > 9 &&
        item.color === "forest" &&
        array[item.id - 10].color === "lumberhut") ||
      //top tile:
      (item.id < array.length - 10 &&
        item.color === "forest" &&
        array[item.id + 10].color === "lumberhut") ||
      //left tile:
      (item.id < array.length - 1 &&
        (item.id + 1) % 10 !== 0 &&
        item.color === "forest" &&
        array[item.id + 1].color === "lumberhut")
  );

  if (field) {
    setArray(
      array.map(item => {
        if (item.id === field.id) {
          choppedWood++;
          setWood(wood + choppedWood);
          return {...item, color: item.secondcolor};
        } else {
          return item;
        }
      })
    );
  }
}
