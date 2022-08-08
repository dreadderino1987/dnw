function setup() {
  createCanvas(600, 600);
  background("white");
  noStroke();
}

function draw() {
  if (mouseIsPressed) {
    switch (key) {
      case "f":
        fireBrush(mouseX, mouseY);
        break;
      case "i":
        iceBrush(mouseX, mouseY);
        break;
      default:
        fill("white");
        circle(mouseX, mouseY, 40);
    }
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

function iceBrush(x, y) {
  x = x;
  y = y;
  let ranX = x + random(-10, 10);
  let ranY = y + random(-10, 10);
  let rabig = random(30, 40);
  let rasma = random(10, 20);
  fill(0, 0, random(200, 255), random(0, 100));
  rect(x, y, rabig);
  rect(ranX, ranY, rasma);
}
