class generativeArt { //class to generate art on canvas
  constructor() {
    this.move_art = -200;
    this.xRot = 0.01; //rotation speed about the x-axis
    this.yRot = 0.01;//rotation speed about the y-axis
    this.drawBox();//
  }

  drawBox() { //function to draw rotating intertwined boxes 
    push();//give the box the below properties till it meets pop
    rotateX(frameCount * this.xRot); //rotate about x-axis
    rotateY(frameCount * this.yRot); //rotate about y-axis
    stroke(0);
    noFill();
    box(3, 3, 30); //draw box
    //second box
    rotateX(frameCount * this.xRot);
    rotateY(frameCount * this.yRot);
    stroke(255, 255, 255);
    noFill();
    box(3, 3, 30);
    pop(); //resets the box properties to its original properties
  }

  art() { //function to create rotating boxes at different locations on the canvas
    for (let i = 10; i < 1000; i += 50) {
      for (let j = 20; j < 1000; j += 100) { 
        push();
        translate(-(j - i), i); //translate the box to different positions determined by i and j
        this.drawBox();
        pop();
      }
    }
    
    for (let i = 10; i < 1000; i += 50) {
      for (let j = 20; j < 1000; j += 100) {
        push();
        translate(i, j - i); //translate the box to different positions determined by i and j
        this.drawBox();
        pop();
      }
    }
    for (let a = -350; a < 350; a += 30) {
      push();
      translate(a + 10, (this.move_art+= 0.001)); //translate the box to different positions determined by a but moves the boxes down the y axis
      this.drawBox(20, 50, 10);
      pop();
    }
  }


  
}

function setup() {
  createCanvas(700, 400, WEBGL);
  background(220);
  my_art = new generativeArt();
}

function draw() {
  my_art.drawBox();
  my_art.art();
}

//inspiration

//from the previous homework created using boxes in 3D.

//challenges faced:

//I had a difficulty in navigating the 3D space difficulty in resetting the movement from the top of the canvas.
//Also, it was a hustle figuring out how to make sure the boxes stay in a fixed position

