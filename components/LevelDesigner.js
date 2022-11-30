import {useState} from "react";

export default function LevelDesigner() {
  const [array, setArray] = useState(() => {
    let thing = [];
    for (let i = 0; i < 50; i++) {
      thing.push({
        id: i,
        color: "forest",
        secondcolor: chooseColor(),
        red: false,
        show: true,
      });
    }

    return thing;
  });
}
