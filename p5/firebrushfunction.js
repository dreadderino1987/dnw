function setup() {
  createCanvas(600, 600);
  background("white");
  noStroke();
}

function draw() {
  if (mouseIsPressed) {
    fireBrush(mouseX, mouseY);
  }
}

function fireBrush(x, y) {
  x = x + random(-20, 20);
  y = y + random(-20, 20);

  let diameter = random(10, 40);
  let mColorRed = random(200, 255);
  let maxColorGreen = random(100, 200);

  let opacityUnder = random(10, 40);
  let opacityOver = random(40, 70);

  if (diameter < 28) {
    fill(mColorRed, 0, 0, opacityUnder);
    circle(x, y, diameter);
  } else {
    fill(mColorRed, maxColorGreen, 0, opacityOver);
    circle(x, y, diameter);
  }
}
