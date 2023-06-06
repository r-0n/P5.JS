let spritesheet;
let sprites = [];
let direction = 1;
let step = 0;
let x;
let y;
let speed = 10;
let stepSpeed = 50;
let animationTimer;

function preload() {
    spritesheet = loadImage("runningcat.png");
    savannah = loadImage("savanna.jpg");
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    let w = spritesheet.width / 2;
    let h = spritesheet.height / 4;

    // the sprite sheet is arranged differently
    // even though there are different rows and columns, 
    // there is effectively only one linear animation
    // we only need a 1 dimensional array then
    // but we still need to loop through the rows and columns in the sprite sheet
    for (let y = 0; y < 4; y++) {
        for (let x = 0; x < 2; x++) {
            // and this time we can just push to the array
            sprites.push(spritesheet.get(x * w, y * h, w, h));
        }
    }

    // going to use translate to draw this time, so set x & y to 0
    x = 0;
    y = 0;

    imageMode(CENTER);
}

function draw() {
    background(255);
    image(savannah, width / 2, height / 2, width, height)
        //look at sprite sheet to determine which direction is which
    if (isKeyPressed) {
        if (keyCode == LEFT_ARROW) {
            direction = -1;
            x -= speed;
        }
        if (keyCode == RIGHT_ARROW) {
            direction = 1;
            x += speed;
        }
    }

    // translate allows us to scale properly
    translate(width / 2, height / 2 + 150);
    // change the x scale either to 1 or -1 to reverse direction
    scale(direction, 1);
    // need to keep track of x, so don't change that
    let xLoc = x;
    if (direction == -1)
        xLoc *= -1;
    image(sprites[step], xLoc, 0);
}

function keyPressed() {
    // use the javascript setInterval function that will
    // call a function repeatedly at a given milliseconds interval
    // supply setInterval with a function that will run the animation steps

    // but first! clear any interval that already might be running
    // to account for accidental multiple keypresses
    clearInterval(animationTimer)

    // then set the interval
    animationTimer = setInterval(() => {
        step = (step + 1) % 8;
    }, stepSpeed); // stepSpeed is our global variable that is the milliseconds for the interval
}

function keyReleased() {
    // when a key is released clear the interval
    clearInterval(animationTimer);
}