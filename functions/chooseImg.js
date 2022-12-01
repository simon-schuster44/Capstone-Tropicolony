//------- SVGs-------------------------------------
import PalmtreeSvg from "../components/SVG/PalmtreeSvg";
import RocksSvg from "../components/SVG/RocksSvg";
import WaterSvg from "../components/SVG/WaterSvg";

export default function chooseImg(value) {
  if (value.color === "water") {
    return <WaterSvg fill="rgb(2, 180, 180)" width="90%" />;
  } else if (value.color === "stone") {
    return <RocksSvg fill="rgb(55, 55, 55)" width="70%" />;

    // <img src="/svg/mountain-solid.svg" alt="lol" className="stonesvg" />;
  } else if (value.color === "forest") {
    return (
      <PalmtreeSvg fill="rgb(126, 202, 126)" />
      // <img src="/svg/palmtree-solid.svg" alt="lol" className="forestsvg" />
    );
  }
}
