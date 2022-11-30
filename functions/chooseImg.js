//------- SVGs-------------------------------------
import PalmtreeSvg from "../components/SVG/PalmtreeSvg";
import RocksSvg from "../components/SVG/RocksSvg";

export default function chooseImg(value) {
  if (value.color === "water") {
    return <img src="/svg/water-solid.svg" alt="lol" className="watersvg" />;
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
