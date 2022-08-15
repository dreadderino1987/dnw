function setup() {
  createCanvas(450, 450);
}

function draw() {
  drawBackground("white");
  fill("tomato");
  rect(25, 25, 200);
  noStroke();
  fill("yellowgreen");
  rect(250, 25, 200);
  fill("skyblue");
  rect(25, 250, 200);
  fill("orange");
  rect(250, 250, 200);
}

function drawBackground(color) {
  background(color);
}
