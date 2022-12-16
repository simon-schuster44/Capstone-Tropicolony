//------- SVGs-------------------------------------
import WaterSvg from "../components/SVG/WaterSvg";
import TreasureSvg from "../components/SVG/TreasureSvg";

export default function chooseImg(value) {
  if (value.color === "water") {
    return <WaterSvg fill="rgb(2, 180, 180)" width="90%" />;
  } else if (value.color === "treasure") {
    return <TreasureSvg width="80%" />;
  }
}
