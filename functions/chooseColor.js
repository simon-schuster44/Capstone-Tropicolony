export default function chooseColor() {
  let random = randomize();
  if (random <= 5) {
    return "grass";
  } else if (random <= 9) {
    return "water";
  } else {
    return "stone";
  }
}

function randomize() {
  return Math.round(Math.random() * 10);
}
