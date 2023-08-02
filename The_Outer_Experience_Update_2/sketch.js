//Project: Galaxy
//Aurthor: Aaron Wajah
//Date: 28/04/2023
//Revised: 02/05/2023
//Update Description: Includes more than one galaxy.

var boxSz = 100;
var boxSz_i = 1000;
var boxSz_2 = 1000; //this will be moons for second galaxy.
var numSpheres = 16;

let gal_spheres = 2000 * 5;
let gal_spheres_2 = 2000 * 3;
let gal_spheres_3 = 200;

var a = [];
var b = [];
var c = [];

var a_1 = [];
var b_1 = [];
var c_1 = [];

//array for starlike objects in galaxy
var e = [];
var f = [];
var g = [];

//array for starlike objects in second galaxy
var e_1 = [];
var f_1 = [];
var g_1 = [];

var t = 0.0;

let moon;
let vid;
let m = 0;

let cam = {
    x: 0,
    y: 0,
    z: 0,
    th: 0,
    phi: 0,
    lookAt: {
        x: 100,
        y: 0,
        z: 0,
    },
};
let tex1, tex2, tex3;

function preload() {
    tex1 = loadImage("textures/tex1.png");
    tex2 = loadImage("textures/tex2R.jpeg");
    tex3 = loadImage("textures/tex3C.jpg");
    tex_jup = loadImage("textures/jup.jpg");
    tex_star = loadImage("textures/star3.jpg");
    tex_sun = loadImage("textures/sun.jpg");
    smoke = loadImage("textures/star elliipse.jpg");
    earth = loadImage("textures/earth1.png");
    moon_tex = loadImage("textures/moon.png");
    myFont = loadFont("textures/TwilightFont.otf");
    song = loadSound("textures/Interstellar-Theme.mp3");
    red_moon = loadImage("textures/red moon.png");
    pink_text = loadImage("textures/pink planet.jpg");
    green_planet = loadImage("textures/green planet.jpg");
    gas_planet = loadImage("textures/gas.jpg");
    redplanet = loadImage("textures/redplanet.jpg");
    rainbowPlanet = loadImage("textures/rainbow planet.jpg");
}

//
class generativeArt {
    //class to generate art on canvas
    constructor() {
        this.move_art = -200;
        this.xRot = 0.1; //rotation speed about the x-axis
        this.yRot = 0.1; //rotation speed about the y-axis
        this.drawBox(); //
        this.planets();
        this.numbspheres = 16;
        this.b_size = 300;
    }

    drawBox(x, y, z) {
        //function to draw rotating intertwined boxes
        push(); //give the box the below properties till it meets pop
        rotateX(frameCount * this.xRot); //rotate about x-axis
        rotateY(frameCount * this.yRot); //rotate about y-axis
        stroke(0);
        fill(249, 22, 3);
        sphere(2); //draw box
        //second box
        rotateX(frameCount * this.xRot);
        rotateY(frameCount * this.yRot);
        stroke(255, 255, 255);
        fill(249, 249, 3);
        sphere(2);
        pop(); //resets the box properties to its original properties
    }

    planets() {
        push();
        pointLight(255, 250, 200, -200, -200, 200);
        for (let x = 0; x < 200; x += 50) {
            this.xRot = 0.01;
            this.yRot = 0.01;
            push();
            noStroke();
            translate(x + 200, 0, x - 500);
            rotateX(frameCount * this.xRot);
            rotateY(frameCount * this.yRot);
            texture(tex1);
            push();
            sphere(50);
            pop();
            pop();
        }
        pop();
    }

    moon() {
        push();
        this.xRot = 0.01;
        this.yRot = 0.01;
        texture(tex2);
        noStroke();
        translate(-200, 300);
        rotateX(frameCount * this.xRot);
        rotateY(frameCount * this.yRot);
        sphere(20);
        pop();
    }

    gal_plane() {
        push();
        texture(vid);
        translate(0, 900);
        rotateX(HALF_PI);
        noStroke();
        plane(windowWidth, 1000);
        pop();
    }

    art() {
        //function to create rotating boxes at different locations on the canvas
        for (let i = 10; i < 1000; i += 50) {
            for (let j = 20; j < 1000; j += 100) {
                push();
                translate(-(j - i), i, i); //translate the box to different positions determined by i and j
                this.drawBox();
                pop();
            }
        }

        for (let i = 10; i < 1000; i += 50) {
            for (let j = 20; j < 1000; j += 100) {
                push();
                translate(i, -j + i, i + j); //translate the box to different positions determined by i and j
                this.drawBox();
                pop();
            }
        }
        for (let a = 10; a < 100; a += 10) {
            push();
            translate((m += 0.1), -100); //translate the box to different positions determined by a but moves the boxes down the y axis
            this.drawBox();
            pop();
        }
    }
}

function setup() {
    vid = createVideo("spacefloor.mp4");
    vidLoad();
    vid.size(100, 100);
    let cnv = createCanvas(windowWidth, windowHeight, WEBGL);

    //angleMode(DEGREES);
    my_art = new generativeArt();
    song.play();
    song.loop();
    song.setVolume(10);
    userStartAudio();

    //stars for first galaxy
    for (var i = 0; i < numSpheres; i++) {
        a[i] = random(-boxSz, boxSz);
        b[i] = random(-boxSz, boxSz);
        c[i] = random(-boxSz, boxSz);
    }

    for (var y = 0; y < gal_spheres; y++) {
        e[y] = random(-boxSz_i, boxSz_i);
        f[y] = random(-boxSz_i, boxSz_i);
        g[y] = random(-boxSz_i, boxSz_i);
    }

    //stars for second galaxy

    for (var i_1 = 0; i_1 < numSpheres; i_1++) {
        a_1[i_1] = random(-boxSz, boxSz);
        b_1[i_1] = random(-boxSz, boxSz);
        c_1[i_1] = random(-boxSz, boxSz);
    }

    for (var y_1 = 0; y_1 < gal_spheres_2; y_1++) {
        e_1[y_1] = random(-boxSz_i, boxSz_i);
        f_1[y_1] = random(-boxSz_i, boxSz_i);
        g_1[y_1] = random(-boxSz_i, boxSz_i);
    }

    //stars for third galaxy

    mousePrev = {
        x: mouseX,
        y: mouseY,
    };

    textFont(myFont);
}

function draw() {
    background(0);

    push();
    noFill();
    stroke(255);
    strokeWeight(0.1);
    sphere(1000);
    pop();

    //Second Galaxy
    push();
    noFill();
    stroke(252, 65, 3);
    strokeWeight(0.5);
    push();
    translate(1200, 10, -3000);
    push();
    rotateX(frameCount * 0.01);
    sphere(1000);
    pop();
    pop();
    pop();

    //Third Galaxy
    push();
    noFill();
    stroke(252, 215, 3);
    strokeWeight(0.5);
    push();
    translate(1200, 0, 3000);
    push();
    rotateY(frameCount * 0.05);
    ellipsoid(500);
    pop();
    pop();
    pop();

    //planets for third galaxy

    push();
    translate(1200, 0, 3000);
    texture(pink_text);
    rotateY(frameCount * 0.05);
    noStroke();
    sphere(50);
    pop();

    push();
    translate(1200, 100, 3050);
    texture(green_planet);
    rotateX(frameCount * 0.05);
    noStroke();
    sphere(40); //green planet in 3rd galaxy
    pop();

    push();
    translate(1000, 100, 3100);
    texture(redplanet);
    rotateY(frameCount * 0.05);
    rotateX(frameCount * 0.05);
    noStroke();
    sphere(100); //red planet in 3rd galaxy
    pop();

    //yellow gas planet in second planet
    push();
    translate(1200, -500, -3000);
    texture(gas_planet);
    rotateY(frameCount * 0.05);
    rotateX(frameCount * 0.05);
    noStroke();
    sphere(200);
    pop();

    push();
    translate(600, -500, -3000);
    texture(rainbowPlanet);
    rotateY(frameCount * 0.05);
    rotateX(frameCount * 0.05);
    noStroke();
    sphere(200);
    pop();

    // Look around controls
    cam.th += (mouseX - mousePrev.x) / 100;
    cam.phi += (mouseY - mousePrev.y) / 100;

    // Movement controlss
    if (keyIsDown(87)) {
        cam.x -= 2 * cos(cam.th);
        cam.z += 2 * sin(cam.th);
    }
    if (keyIsDown(83)) {
        cam.x += 2 * cos(cam.th);
        cam.z -= 2 * sin(cam.th);
    }
    if (keyIsDown(68)) {
        cam.x -= 2 * cos(cam.th + PI / 2);
        cam.z += 2 * sin(cam.th + PI / 2);
    }
    if (keyIsDown(65)) {
        cam.x += 2 * cos(cam.th + PI / 2);
        cam.z -= 2 * sin(cam.th + PI / 2);
    }

    // Update previous mouse position
    mousePrev.x = mouseX;
    mousePrev.y = mouseY;

    // Define the look at vector
    let x = [100, 0, 0];
    let R = math.multiply(Rz(cam.phi), Ry(cam.th));
    x = math.multiply(x, R);

    // Update the look-at point
    cam.lookAt = {
        x: cam.x + x._data[0],
        y: cam.y + x._data[1],
        z: cam.z + x._data[2],
    };

    // Call the built in p5 function 'camera' to position and orient the camera
    camera(
        cam.x,
        cam.y,
        cam.z, // position
        cam.lookAt.x,
        cam.lookAt.y,
        cam.lookAt.z, // look-at
        0, -1,
        0
    ); // up vector

    push();
    rotateY(frameCount * 0.01);
    push();
    rotateX(HALF_PI * 2);
    translate(-100, 0, -100);
    text("Use A,S,D,W with Mouse to navigate", 0, 0);
    pop();
    pop();

    // Draw a sphere at the look at point
    push();
    translate(cam.lookAt.x, cam.lookAt.y, cam.lookAt.z);
    fill(255);
    noStroke();
    push();
    rotateY(frameCount * 0.01);
    //pointLight(255,255,250,0,30,20)
    texture(earth);
    sphere(10);
    push();
    texture(moon_tex);
    rotateX(frameCount * 0.01);
    //rotateY(frameCount * 0.01);
    translate(20, 0, 0);
    sphere(2);
    pop();
    pop();
    pop();

    push();
    push();
    noStroke();
    rotateX(QUARTER_PI);
    rotateX(frameCount * 0.001);
    rotateY(frameCount * 0.001);
    rotateZ(frameCount * 0.001);
    texture(smoke);
    torus(1000);
    pop();
    noStroke();
    rotateY(frameCount * 0.01);
    texture(tex_sun);
    sphere(30);
    pop();

    push(); //for moons around jupiter
    for (var i = 0; i < numSpheres; i++) {
        push();

        translate(-200, -150);
        push();
        push();
        rotateY(frameCount * 0.01);
        texture(tex_jup);
        noStroke();
        sphere(20);
        pop();
        translate(a[i], b[i], c[i]);
        push();
        texture(tex_star);
        rotateY(frameCount * 0.05);
        noStroke();
        sphere(boxSz / 50);
        pop();
        pop();
        pop();
    }
    pop();

    for (var y = 0; y < gal_spheres; y++) {
        push();
        noStroke();
        translate(e[y], f[y], g[y]);
        rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);
        rotateZ(frameCount * 0.01);
        noStroke();
        texture(tex_star);
        sphere(1);

        pop();
    }

    //populate moons in second galaxy

    for (var y_1 = 0; y_1 < gal_spheres_2; y_1++) {
        push();
        noStroke();
        translate(e_1[y_1], f_1[y_1], g_1[y_1]);
        noStroke();
        texture(red_moon);
        push();
        translate(1200, 10, -3000);
        rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);
        rotateZ(frameCount * 0.01);
        sphere(10);
        pop();
        pop();
    }

    my_art.drawBox();
    //my_art.art();
    my_art.planets();
    my_art.moon();
    my_art.gal_plane();
}

function vidLoad() {
    vid.loop();
    vid.volume(0);
}

function Rz(th) {
    return math.matrix([
        [cos(th), sin(th), 0],
        [-sin(th), cos(th), 0],
        [0, 0, 1],
    ]);
}

// Rotation matrix for rotation about y-axis
function Ry(th) {
    return math.matrix([
        [cos(th), 0, -sin(th)],
        [0, 1, 0],
        [sin(th), 0, cos(th)],
    ]);
}

//inspiration

//from the previous homework created using boxes in 3D.

//challenges faced:

//I had a difficulty in navigating the 3D space difficulty in resetting the movement from the top of the canvas.
//Also, it was a hustle figuring out how to make sure the boxes stay in a fixed position