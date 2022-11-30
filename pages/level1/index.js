import {useState} from "react";
import Canvas from "../../components/Canvas";
import {dataLevel1} from "../../components/Level1/_data";
import Ressources from "../../components/Ressources/Ressources";

export default function Level1() {
  const [array, setArray] = useState(dataLevel1);

  return (
    <>
      <Canvas array={array} setArray={setArray} />
      <Ressources />
    </>
  );
}