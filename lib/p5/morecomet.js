let comet1 = { x: 1, y: 2, diameter: 5, velocity: 2 };
let comet2 = { x: 5, y: 3, diameter: 3, velocity: 1.5 };
let comet3 = { x: 4, y: 7, diameter: 4, velocity: 1.7 };
let comet4 = { x: 3, y: 9, diameter: 7, velocity: 2.3 };

let canvasSize = 400;

function setup() {
  createCanvas(canvasSize, canvasSize);
  background("black");
  fill("white");
  noStroke();
}

function draw() {
  background(0, 0, 0, 10);
  renderComet(comet1);
  renderComet(comet2);
  renderComet(comet3);
  renderComet(comet4);
}

function renderComet(comet, treshold) {
  comet.x = comet.x + comet.velocity;
  comet.y = comet.y + comet.velocity;
  circle(comet.x, comet.y, comet.diameter);
  if (comet.x > canvasSize || comet.y > canvasSize) {
    comet.x = random(-350, 350);
    comet.y = 0;
  }
}
