import {useState, useEffect} from "react";
//------- Functions--------------------------------
import chooseImg from "../functions/chooseImg";

export default function Canvas({array, setBuildingMenuState}) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(!animate), 1000);
  }, [animate]);

  return (
    <div className={`canvas ${animate ? "canvasAnimation" : ""}`}>
      {array.map(item => {
        if (item.show) {
          return (
            <div
              key={`f-${item.id}`}
              onClick={() => setBuildingMenuState(item)}
              className={`field ${item.color} ${item.red ? "red" : ""} ${
                animate && item.color === "lumberhut" ? "animateLumber" : ""
              } ${animate && item.color === "tower" ? "animateTower" : ""}`}
            >
              {chooseImg(item, animate)}
            </div>
          );
        } else return "";
      })}
    </div>
  );
}
