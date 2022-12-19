export default function gameDesigner() {
  let thing = [];
  for (let i = 0; i < 150; i++) {
    if (i === 0 || i === 1 || i === 2) {
      thing.push({id: i, color: "grass", dark: false, show: true});
    } else if (i === 10) {
      thing.push({id: i, color: "house", dark: false, show: true});
    } else if (i === 11 || i === 12) {
      thing.push({id: i, color: "forest", dark: false, show: true});
    } else {
      thing.push({id: i, color: chooseColor(), dark: true, show: true});
    }
  }
  return thing;
}

function chooseColor() {
  let random = randomize();
  if (random < 4) {
    return "grass";
  } else if (random < 8) {
    return "forest";
  } else if (random < 9) {
    return "water";
  } else {
    return "stone";
  }
}

function randomize() {
  return Math.round(Math.random() * 10);
}
