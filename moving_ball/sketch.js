let a=0;
let b=0;

let a_speed = 1;
let b_speed =2

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  stroke(0);
  fill(255)
  ellipse(a,b,32,32);
  
  a+=a_speed;
  b+=b_speed;
  
  if( a>width|| a<0){
    a_speed*=-1
  }
  
  if(b>height|| b<0){
    b_speed*=-1
  }
  
  
}