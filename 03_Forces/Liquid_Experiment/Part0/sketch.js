//sketch.js
var wind;
var angle;
var time = 1000;

function setup() {
  createCanvas(600,600);

}

function draw() {
  background(151);

  angle = map(noise(time), 0, 1, 0, 90);

  wind = p5.Vector.fromAngle(radians(angle));
  wind.mult(100);
  line(0, 0, wind.x, wind.y);

  time = time + 0.001;
}
