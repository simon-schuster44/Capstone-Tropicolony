//------- SVGs-------------------------------------
import PalmtreeSvg from "../components/SVG/PalmtreeSvg";
import RocksSvg from "../components/SVG/RocksSvg";
import WaterSvg from "../components/SVG/WaterSvg";
import TreasureSvg from "../components/SVG/TreasureSvg";

export default function chooseImg(value) {
  if (value.color === "water") {
    return <WaterSvg fill="rgb(2, 180, 180)" width="90%" />;
  } else if (value.color === "stone") {
    return <RocksSvg fill="rgb(55, 55, 55)" width="70%" />;
  } else if (value.color === "forest") {
    return <PalmtreeSvg fill="rgb(126, 202, 126)" />;
  } else if (value.color === "treasure") {
    return <TreasureSvg width="80%" />;
  }
}
