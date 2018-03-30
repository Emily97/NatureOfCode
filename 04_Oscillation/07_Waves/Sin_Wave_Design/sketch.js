var r = 30;
var theta = 0;
var period = 20;
var amplitude = 10;

function setup() {
    createCanvas(640, 640);
    background(255);
}

function draw() {
    var x = r * cos(theta);
    var y = r * sin(theta);

    noStroke();
    fill(0,100);
    ellipse(x + width/2, y + height/2,3,3);

    //theta += (TWO_PI / (period * amplitude));
    theta += 0.01;

    r = amplitude * sin(TWO_PI * frameCount / period) + 150;
}
