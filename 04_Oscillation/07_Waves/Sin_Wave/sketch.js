var startAngle=0;
var angleVel = 0.2;

function setup() {
    createCanvas(640, 640);
    background(255);
}

function draw() {
    background(255,4);
    stroke(150);
    fill(55);

    startAngle += 0.015;
    var angle = startAngle;

    for(var x = 0; x <= width; x += 10) {

        var  y = map(sin(angle),-1,1,0,height);

        ellipse(x,y,8,8);

        angle += angleVel;
    }
}
