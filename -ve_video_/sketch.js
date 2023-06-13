let capture;

function setup() {
  createCanvas(640, 360);
  capture = createCapture(VIDEO);
  capture.size(640, 360);
  capture.hide();
  pixelDensity(1);
}

function draw() {
  background(0);
  loadPixels();
  capture.loadPixels();

  let thresholdAmount = 50;
  thresholdAmount *= 3; // 3 for r, g, b
  for (let y = 0; y < capture.height; y++) {
    for (let x = 0; x < capture.width; x++) {
      let index = 4 * (x + y * width);
      // flip the x to make software mirror
      let flippedIndex = 4 * (width - 1 - x + y * width);
      // add them all together using the flipped index
      let total =
        capture.pixels[flippedIndex] +
        capture.pixels[flippedIndex + 1] +
        capture.pixels[flippedIndex + 2];
      // divide by three (since rgb added together)
      total/=3;//
      // set output color to black unless over the threshold amount
      let output =0;
      if (total > thresholdAmount) {
        output = 255;
      }
      // set the screen pixels to the flipped thresholded colors
      pixels[index] = output;
      pixels[index + 1] = output;
      pixels[index + 2] = output;
    }
  }

  capture.updatePixels();
  updatePixels();
}
