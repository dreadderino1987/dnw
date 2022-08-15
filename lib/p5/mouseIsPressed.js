function setup() {
  let canvasbox = 500;
  let bgcolor = "white";
  let sqmslogo = canvasbox / 2.5;
  let sqsmal = canvasbox / 25;
  let sqlarge = canvasbox / 2;
  createCanvas(canvasbox, canvasbox);
  background(bgcolor);
  noStroke();
  fill("tomato");
  rect(sqsmal, sqsmal, sqmslogo);
  fill("yellowgreen");
  rect(sqlarge, sqsmal, sqmslogo);
  fill("skyblue");
  rect(sqsmal, sqlarge, sqmslogo);
  fill("orange");
  rect(sqlarge, sqlarge, sqmslogo);
}

function draw() {
  if (mouseIsPressed) {
    circle(mouseX, mouseY, random(30));
    fill("white");
  }
  // console.log("MouseX is " + mouseX + " and mouseY is " +  mouseY);
}
