function setup() {
    createCanvas(700, 500);
    background(5, 195, 221);
    angleMode(DEGREES);
}

function draw() {
    strokeWeight(1);
    print(mouseX, mouseY);


    push()
        //drawing points to get curve shape
    point(244, 422);
    point(228, 402);
    point(234, 374);
    point(223, 351);
    point(234, 320);
    point(220, 293);
    point(231, 262);
    point(222, 240);
    point(238, 230);
    point(262, 236);
    point(288, 229);
    point(320, 234);
    point(358, 231);

    //rightside curve
    point(450, 402);
    point(439, 376);
    point(448, 351);
    point(430, 321);
    point(444, 294);
    point(430, 265);
    point(438, 241);
    point(418, 228);
    point(393, 235);
    point(439, 421);

    //creating hands
    stroke(0);
    fill(255, 255, 255);
    ellipse(225, 377, 23, 40);

    stroke(0);
    fill(255, 255, 255);
    ellipse(449, 377, 23, 40);

    //creating curve from points

    stroke(197, 207, 19);
    strokeWeight(4);
    fill(241, 245, 32);
    beginShape();
    curveVertex(244, 422);
    curveVertex(244, 422);
    curveVertex(228, 402);
    curveVertex(234, 374);
    curveVertex(223, 351);
    curveVertex(234, 319);
    curveVertex(220, 293);
    curveVertex(231, 262);
    curveVertex(222, 240);
    curveVertex(238, 230);
    curveVertex(262, 236);
    curveVertex(288, 229);
    curveVertex(262, 261);
    curveVertex(320, 234);
    curveVertex(358, 229);
    curveVertex(358, 231);
    curveVertex(393, 235);
    curveVertex(418, 228);
    curveVertex(438, 241);
    curveVertex(430, 265);
    curveVertex(444, 294);
    curveVertex(430, 321);
    curveVertex(448, 351);
    curveVertex(439, 376);
    curveVertex(450, 402);
    curveVertex(439, 421);
    curveVertex(439, 421);
    endShape();

    //drawing for eyes
    stroke(0);
    strokeWeight(2);
    fill(255, 255, 255);
    circle(365, 310, 70);

    //2nd eyes
    stroke(0);
    strokeWeight(2);
    fill(255, 255, 255);
    circle(295, 310, 70);

    //inner circless for eyes
    stroke(0);
    strokeWeight(2);
    fill(32, 160, 245);
    circle(299, 310, 30);

    stroke(0);
    strokeWeight(2);
    fill(32, 160, 245);
    circle(355, 310, 30);

    //inner inner eyes

    stroke(0);
    strokeWeight(2);
    fill(0);
    circle(300, 310, 10);

    stroke(0);
    strokeWeight(2);
    fill(0);
    circle(355, 310, 10);

    //white patches of cirlcles to make eyes realistic
    //left eye
    noStroke(0);
    fill(255, 255, 255);
    circle(295, 306, 5);

    //lower circle
    noStroke(0);
    fill(255, 255, 255);
    circle(302, 315, 2.5);

    //for right eye
    noStroke(0);
    fill(255, 255, 255);
    circle(350, 306, 5);

    //lower circle
    noStroke(0);
    fill(255, 255, 255);
    circle(358, 315, 2.5);

    //lower rectangles
    stroke(0);
    fill(255, 255, 255);
    rect(241, 421, 206, 30, 10);
    fill(245, 153, 32);
    rect(245, 450, 199, 30);

    //smile on Bob's face
    stroke(0);
    strokeWeight(3);
    fill(241, 245, 32);
    arc(330, 350, 120, 80, 0, 180);

    stroke(0);
    strokeWeight(3);
    noFill();
    arc(270, 353, 20, 10, -180, 0);
    arc(390, 354, 20, 10, -180, 0);

    //red blushing of Bob
    // stroke(245, 99, 32);
    // strokeWeight(3);
    // noFill(197, 207, 19);
    // arc(270,345,50,35,-190,20)
    // arc(390,345,50,35,-190,20)

    //Bob's tie
    stroke(0);
    strokeWeight(2);
    triangle(290, 421, 330, 435, 338, 421);
    triangle(357, 421, 372, 435, 403, 421);

    stroke(0);
    strokeWeight(3);
    fill(245, 39, 32);
    arc(348, 422, 17, 35, 0, 180);
    arc(348, 455, 17, 35, 180, 0);

    // stroke(0);
    // strokeWeight(1);
    // strokeJoin(ROUND);
    // triangle(338,421,349,443,357,421)

    stroke(0);
    strokeWeight(2);
    fill(245, 245, 32);
    rect(288, 480, 10, 25);
    rect(400, 480, 10, 25);

    stroke(0);
    strokeWeight(2);
    fill(255, 255, 255);
    rect(320, 389, 12, 15);

    rect(336, 389, 12, 15);

    //ellipse for nose
    translate(61, -60);
    rotate(10);
    stroke(0);
    fill(241, 245, 32);
    ellipse(330, 339, 23, 40);

    translate(12, 1);
    rotate(1);
    noStroke();
    fill(241, 245, 32);
    rect(310, 348, 20, 20);

    //other spots on body
    translate(20, -60);
    rotate(10);
    stroke(197, 207, 19);
    fill(197, 207, 19);
    ellipse(270, 310, 20, 30);

    translate(20, -60);
    rotate(10);
    stroke(197, 207, 19);
    fill(197, 207, 19);
    ellipse(340, 370, 10, 15);

    translate(20, -60);
    rotate(10);
    stroke(197, 207, 19);
    fill(197, 207, 19);
    ellipse(470, 210, 10, 15);

    translate(20, -60);
    rotate(10);
    stroke(197, 207, 19);
    fill(197, 207, 19);
    ellipse(470, 210, 10, 15);

    translate(20, -60);
    rotate(10);
    stroke(197, 207, 19);

    fill(197, 207, 19);
    ellipse(550, 350, 15, 30);

    translate(20, -60);
    rotate(10);
    stroke(197, 207, 19);
    fill(197, 207, 19);
    ellipse(650, 170, 20, 30);

    translate(20, -60);
    rotate(-60);
    stroke(0);
    strokeWeight(1);
    fill(245, 245, 32);
    rect(-82, 692, 9, 80);
    pop()

    print(mouseX + "," + mouseY);
}