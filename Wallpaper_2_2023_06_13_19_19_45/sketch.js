function setup() {
  createCanvas(600, 400, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(30);

  stroke(255);
  
  
  rotateX(60);
  noFill();
  stroke(255);

  for (let i = 0; i < 20; i++) {
    beginShape();
    for (let j = 0; j < 360; j += 10) {
      rad = i * 8;
      let x = rad * cos(i);
      let y = rad * sin(j);
      let z = sin(frameCount+i*10) * 50;

      vertex(x, y, z);
      
    }
    endShape();
  }
  
  
  
}
