function setup() {
  createCanvas(450, 450);
  background("white");
  noStroke();
  fill("tomato");
  rect(25, 25, 200);
  fill("yellowgreen");
  rect(250, 25, 200);
  fill("skyblue");
  rect(25, 250, 200);
  fill("orange");
  rect(250, 250, 200);
}

function draw() {
  if (mouseIsPressed) {
    circle(mouseX, mouseY, random(30));
    fill("white");
  }
  console.log("MouseX is " + mouseX + " and mouseY is " + mouseY);
}
