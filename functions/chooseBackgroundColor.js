export default function chooseBackgroundColor(tilecolor) {
  const background = "background-color: ";
  const khaki = "background-color: khaki;";
  const image = "background-image: ";
  const size = "background-size: ";
  switch (tilecolor) {
    case "grass":
      return khaki;
    case "wheat":
      return khaki + image + "url(/img/wheat.png);" + size + "70%;";
    case "windmill":
      return khaki + image + "url(/img/windmill.png);" + size + "65%;";
    case "tent":
      return khaki + image + "url(/img/tent.png);" + size + "80%;";
    case "house":
      return khaki + image + "url(/img/house.png);" + size + "90%;";
    case "tower":
      return khaki + image + "url(/img/tower.png);" + size + "contain;";
    case "water":
      return background + "aqua;";
    case "well":
      return (
        background + "aqua;" + image + "url(/img/well.png);" + size + "90%;"
      );
    case "stone":
      return (
        background + "grey;" + image + "url(/img/stone.png);" + size + "90%;"
      );
    case "forest":
      return (
        background +
        "darkgreen;" +
        image +
        "url(/img/palm.png);" +
        size +
        "55%;"
      );
    case "lumberhut":
      return (
        background +
        "darkgreen;" +
        image +
        "url(/img/wooden-hut.png);" +
        size +
        "70%;"
      );
    case "quarry":
      return (
        background + "gray;" + image + "url(/img/quarry.png);" + size + "100%;"
      );
  }
}
