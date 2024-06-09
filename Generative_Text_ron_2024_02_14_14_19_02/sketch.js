//Title: generative text 


function preload() {
  //load csv file and font
  myText = loadStrings("poem.csv");
  myFont = loadFont("Pacifico.ttf");
}
function setup() {
  createCanvas(650, 500);
}
function draw() {
  background(0, 10);
  createText();
}

function createText() {
  frameRate(0.5);
  fill(200, 0, 0);
  textSize(random(60));
  j = frameCount;
  let random_word = [];
  let number_of_text = int(random(myText.length)); //get a random number from the length of the csv file
  random_word = split(myText[number_of_text], ","); //splits each line of the csv file into words
  print(random_word);
  let t = random(random_word);

  push();
  textFont(myFont);
  text(t, noise(j) * 650, noise(j + 1) * 700); //this prints a text in the canvas at but it disappears because noise is used
  pop();
}

function mouseClicked() {
  background(255, 255, 255);
}
