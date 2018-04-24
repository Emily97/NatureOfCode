var inc = 0.1;          // incrementing
var scl = 10;
var cols, rows;
var zoff = 0;           // 3-Dimensional
var particle = [];      //declaring particle array
var flowfield;

function setup(){
    createCanvas(400,400);
    colorMode(HSB, 255);    // Hue/Saturation/Brightness
    cols = floor(width / scl); // the number of columns on screen by dividing the width of the canvas by the scale value this value is then floored so that the answer is not a decimal number
    rows = floor(height / scl); // the number of rows on screen by dividing the height of the canvas by the scale value this value is then floored so that the answer is not a decimal number
    for(var i = 0; i < 500; i++){
        particle[i] = new Particle(); // calling the particle class
    }
    flowfield = new Array(cols * rows);     // stores all the vectors in an array which amounts to the number of cols multiplied by the number of rows
    background(51);
}

function draw(){
    var yoff = 0;   // 2-Dimenional
    for(var y = 0; y < rows; y++) {
        var xoff = 0;   // 1-Dimensional
        for(var x = 0; x < cols; x++) {
            var index = x + y * cols;   // takes a 2-Dimensional value into a 1-Dimensional array
            var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;   // give noise in 3-Dimensional space, by muliplying 2PI by 4 the flowfield moves in many different directions whereas without it the flowfields gravitate to the left side of the canvas
            var v = p5.Vector.fromAngle(angle);
            v.setMag(1);
            flowfield[index] = v;
            xoff += inc; // increments the xoff
            stroke(0, 50);
        }
        yoff += inc; // increments the yoff
        zoff += 0.0003; // increments the zoff
    }
    // the particle class is calling all the functions created in the class
    for(var i = 0; i < particle.length; i++){
        particle[i].follow(flowfield);
        particle[i].update();
        particle[i].edges();
        particle[i].show();
    }
}
