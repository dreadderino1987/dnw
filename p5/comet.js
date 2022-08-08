let posX = 0;

let canvasSize = 400;

function setup() {
  createCanvas(canvasSize, canvasSize);
  background("black");
}

function draw() {
  background(0, 0, 0, 5);
  circle(posX, posX, 30 + posX / 5);
  posX = posX + 1;
  if (posX > canvasSize + 30) {
    posX = 0;
  }
}
