export default function cutTrees(array, setArray, wood, setWood) {
  let choppedWood = 0;
  let field = false;
  field = array.find(
    item =>
      (item.id > 0 &&
        item.color === "forest" &&
        array[item.id - 1].color === "lumberhut") ||
      (item.id > 9 &&
        item.color === "forest" &&
        array[item.id - 10].color === "lumberhut") ||
      (item.id < array.length - 10 &&
        item.color === "forest" &&
        array[item.id + 10].color === "lumberhut") ||
      (item.id < array.length - 1 &&
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

  //   setArray(
  //     array.map(item => {
  //       if (
  //         item.id > 0 &&
  //         item.color === "forest" &&
  //         array[item.id - 1].color === "lumberhut"
  //       ) {
  //         choppedWood++;
  //         return {...item, color: "grass"};
  //       } else if (
  //         item.id < array.length - 1 &&
  //         item.color === "forest" &&
  //         array[item.id + 1].color === "lumberhut"
  //       ) {
  //         choppedWood++;
  //         return {...item, color: "grass"};
  //       } else if (
  //         item.id > 9 &&
  //         item.color === "forest" &&
  //         array[item.id - 10].color === "lumberhut"
  //       ) {
  //         choppedWood++;
  //         return {...item, color: "grass"};
  //       } else if (
  //         item.id < array.length - 10 &&
  //         item.color === "forest" &&
  //         array[item.id + 10].color === "lumberhut"
  //       ) {
  //         choppedWood++;
  //         return {...item, color: "grass"};
  //       } else {
  //         return item;
  //       }
  //     })
  //   );
}
