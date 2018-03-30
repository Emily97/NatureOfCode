var bob;
var spring;

function setup() {
    createCanvas(640, 360);
    setFrameRate(60);

    spring = new Spring(width / 2, 10, 100);
    bob = new Bob(width / 2, 100);
}


function draw() {
    background(255);

    var gravity = createVector(0, 2);
    bob.applyForce(gravity);

    spring.connect(bob);
    spring.constrainLength(bob, 30, 200);

    bob.update();

    spring.displayLine(bob);
    bob.display();
    spring.display();
}

function mousePressed() {
    bob.handleClick(mouseX, mouseY);
}

function mouseDragged() {
    bob.handleDrag(mouseX, mouseY);
}

function mouseReleased() {
    bob.stopDragging();
}
