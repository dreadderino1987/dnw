function setup() {
  createCanvas(400, 400);
  background("white");
  noStroke();
}

function draw() {
  let diameter = random(10, 30);
  let colorBlue = 0;
  let mColorRed = random(200, 255);
  let maxColorGreen = random(100, 200);
  let mouseRandomX = mouseX + random(-20, 20);
  let mouseRandomY = mouseY + random(-20, 20);
  let opacityUnder = random(10, 40);
  let opacityOver = random(40, 70);
  if (mouseIsPressed) {
    if (diameter < 20) {
      fill(mColorRed, 0, colorBlue, opacityUnder);
      circle(mouseRandomX, mouseRandomY, diameter);
    } else {
      fill(mColorRed, maxColorGreen, colorBlue, opacityOver);
      circle(mouseRandomX, mouseRandomY, diameter);
      noStroke();
    }
  }
}
