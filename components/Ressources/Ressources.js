import WoodSvg from "../SVG/WoodSvg";
import StoneSvg from "../SVG/StoneSvg";
import WorkersSvg from "../SVG/WorkersSvg";
import BuildingsSvg from "../SVG/BuildingsSvg";

export default function Ressources() {
  return (
    <div className="ressources">
      <div className="ressourceContainer">
        <WoodSvg width="50px" />
        <h2>0</h2>
      </div>
      <div className="ressourceContainer">
        <StoneSvg />
        <h2>0</h2>
      </div>
      <div className="ressourceContainer">
        <WorkersSvg />
        <h2>0</h2>
      </div>
      <div className="ressourceContainer">
        <BuildingsSvg />
        <h2>0</h2>
      </div>

      {/* <img src="/svg/wood-icon.svg" /> */}
    </div>
  );
}
