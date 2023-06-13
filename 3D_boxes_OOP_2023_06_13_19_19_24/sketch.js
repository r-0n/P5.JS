
class Boxes {
  constructor() {
    this.xRot = 0.01;
    this.yRot = 0.01;
  }

  rot() {
    //rotate the boxes about x and y axes
    rotateX(frameCount * this.xRot);
    rotateY(frameCount * this.yRot);
  }

  create_boxes() {
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 150; j += 10) {
        box(mouseX, mouseY, 150);
      }
    }
    for (let i = 5; i < 100; i += 15) {
      for (let j = 10; j < 150; j += 50) {
        stroke(random(255), random(255), random(255));
        box(i, j, i + j);
      }
    }
    box(mouseX, mouseY, 100);
    box(mouseY, mouseX, 200);
  }

  create_center_circle() {
    //draw circle at center
    fill(0);
    stroke(0);
    circle(0, 0, 20);

    rotateX(frameCount * this.xRot);
    rotateZ(frameCount * this.xRot);
    //draw circle at center
    fill(0);
    stroke(0);
    circle(0, 0, 20);
  }

  add_circle_rotate_about_z() {
    rotateX(frameCount * 2);
    rotateZ(frameCount * 2);
    //draw circle at center
    noFill();
    stroke(255);
    circle(0, 0, 30);
  }
}

function setup() {
  createCanvas(500, 400, WEBGL);
  my_box = new Boxes(); 
}

function draw() {
  background(0);

  my_box.rot();
  my_box.create_boxes();
  my_box.create_center_circle();
  my_box.add_circle_rotate_about_z();
}
