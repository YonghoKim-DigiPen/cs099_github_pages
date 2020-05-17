// cs099
// Youngho Kim
// Draw Animal Exercise
// Spring 2020



function setup() {
  createCanvas(380, 550);
}

function draw() {
  background(0, 170, 250);
  fill('black'); strokeWeight(1);
  ellipse(225, 300, 180, 350, 150);
  arc(300, 240, 150, 250, QUARTER_PI, HALF_PI,);
  arc(150, 240, 150, 250, HALF_PI, PI-QUARTER_PI);
  fill('white'); strokeWeight(1);
  ellipse(222, 330, 130, 220, 150);
  ellipse(200, 160, 40, 30, 40);
  ellipse(245, 160, 40, 30, 40);
  fill(255, 204, 0);
  triangle(180, 180, 267,180, 222, 250);
  fill('black'); strokeWeight(1);
  circle(200, 160, 15,);
  circle(245, 160, 15,);
  strokeWeight(30);
  line(200, 450, 200, 500);
  line(250, 450, 250, 500);
  strokeWeight(1); fill(255, 204, 0);
  quad(235, 501, 270, 501, 300, 533, 235, 533);
  quad(215, 501, 180, 501, 150, 533, 215, 533);
  fill('white')
  rect(150, 120, 25, 25, 5);
  rect(120, 90, 25, 25, 5);
  ellipse(70, 55, 130, 110, 200);
  fill('black');
  text('Hi!', 62, 50);
  text('My name is Pingu!', 20, 65);
  text('Noob! Noob!', 35, 80);
  fill('black')
  square(155, 125, 15);
  square(125, 95, 15); 
  strokeWeight(5);
  point(215, 185);
  point(225, 185);
}