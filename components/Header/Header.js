import SaveSvg from "../SVG/SaveSvg";

export default function Header({saveoption}) {
  return (
    <div className="logo">
      <img src="/img/Logo.png" />
      {saveoption ? <SaveSvg /> : ""}
    </div>
  );
}
