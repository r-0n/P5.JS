//Concept: I thought about how ants invade a space and when their natural pattern is distorted by an external force(human), they scatter all over. This project aims to simulate that

let xpos;
let ypos;

let xOff,yOff=0
let shape;
noiseScale = 0;
let x = 1;
let y = 1;

colx = 450;
coly = 350;
//let done=true;
function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(220);
  for (let xpos = 10; xpos < width; xpos = xpos + 10) {
    for (let ypos = 10; ypos < height; ypos = ypos + 10) {
      stroke(0);
      noFill(0, 0, 200);
      noiseScale += 0.001;
      rect(random(noiseScale), random(noiseScale), 5, 5);
      
      line(xpos, ypos, xpos, ypos);
    }
  }

  circle(x, y, 10);
  x = x + 1;
  y = y + 1;
  if (x >= width ) {
    x = 0;
    y = 0;
  }

  circle(mouseX, mouseY, 50);
  colx = colx - 1;
  coly = coly - 1;

  
}

// function mouseClicked(){
//   background(255,255,255)
// }
