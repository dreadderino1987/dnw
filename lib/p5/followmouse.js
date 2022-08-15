function setup() {
  createCanvas(450, 450);
}

function draw() {
  drawBackground("white");
  circle(mouseX, mouseY, 30);
}

function drawBackground(color) {
  background(color);
}

/*

function setup() {
  createCanvas(450, 450);
  drawBackground('grey');
}

function draw() {
  
fill(mouseX / 400 * 255);
  circle(mouseX, mouseY, mouseY /400 * 40);
}

function drawBackground(color) {
 background(color);
}

*/
