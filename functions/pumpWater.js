export default function pumpWater(array, setArray) {
  setArray(
    array.map(item => {
      //top right field
      if (
        item.id > 0 &&
        item.color === "water" &&
        array[item.id - 1].color === "tower" &&
        item.id % 10 !== 0
      ) {
        return {...item, color: "grass"};
      }
      //top left field
      else if (
        item.id < array.length - 10 &&
        item.color === "water" &&
        array[item.id + 1].color === "tower" &&
        (item.id + 1) % 10 !== 0
      ) {
        return {...item, color: "grass"};
      }
      //top field
      else if (
        item.id < array.length - 20 &&
        item.color === "water" &&
        array[item.id + 10].color === "tower"
      ) {
        return {...item, color: "grass"};
      }
      //bottom left field
      else if (
        item.id < array.length - 2 &&
        item.id > 9 &&
        item.color === "water" &&
        array[item.id - 9].color === "tower" &&
        (item.id + 1) % 10 !== 0
      ) {
        return {...item, color: "grass"};
      }
      //bottom right field
      else if (
        item.id > 11 &&
        item.color === "water" &&
        array[item.id - 11].color === "tower" &&
        item.id % 10 !== 0
      ) {
        return {...item, color: "grass"};
      }
      //bottom field
      else if (
        item.id > 19 &&
        item.color === "water" &&
        array[item.id - 20].color === "tower"
      ) {
        return {...item, color: "grass"};
      } else {
        return item;
      }
    })
  );
}
