//sketch.js
var mover;
var liquid = [];

function setup() {
    createCanvas(600,600);

    mover = new Mover(255, 10, 0, 0, 0.01, 0.02, 5);

    liquid[0] = new Liquid(200, 100, 120, 80, 0.8, 0, 0, 255, 100);
    liquid[1] = new Liquid(200, 200, 120, 80, 0.8, 255, 0, 255, 100);
    liquid[2] = new Liquid(200, 300, 120, 80, 0.8, 0, 255, 255, 100);
    liquid[3] = new Liquid(200, 400, 120, 80, 0.8, 0, 255, 100, 100);
}

function draw() {
    background(255);

    var gravity = createVector(0,0.1 * mover.mass);

    for (var i=0; i<liquid.length; i++) {
        liquid[i].display();
    }

    for (var i=0; i<liquid.length; i++) {
        if(liquid[i].contains(mover)) {
            console.log("Mover Is inside Liquid " + i)
            var dragForce = liquid[i].calculateDrag(mover);
            mover.applyForce(dragForce);
        }
    }

    // liquid[0].calculateDrag(mover);
    // liquid[1].calculateDrag(mover);
    // liquid[2].calculateDrag(mover);
    // liquid[3].calculateDrag(mover);

    mover.update();
    mover.display();
    mover.checkEdges();
    mover.applyForce(gravity);

    // for ( var x=0; x<mover.length; x++) {
    //   for (var i=0; i<liquid.length; i++) {
    //     if(liquid[i].contains(mover[x])) {
    //       console.log("Mover " + x + "Is inside Liquid" + i)
    //       var dragForce = liquid[i].calculateDrag(mover[x]);
    //       mover[x].applyForce(dragForce);
    //     }
    //   }
    // }

    // for (var i=0; i<mover.length; i++) {
    //   var gravity = createVector(0,0.1 * mover.mass);

    //   mover.update();
    //   mover.display();
    //   mover.checkEdges();
    //   mover.applyForce(gravity);
    // }

}
// //sketch.js
// var mover;
// var liquid;
//
// function setup() {
//   createCanvas(600,600);
//
//   mover = new Mover(200, 200, 0, 5, 0.0, 0.01, 5);
//   liquid = new Liquid(0, height/2, 600, 300, 0.01, 0, 0, 255, 100);
// }
//
// function draw() {
//   background(255);
//   var m = mover.mass;
//   var gravity = createVector(0, 0.05*m);
//
//   if(liquid.contains(mover)){
//     console.log("mover is inside liquid");
//     //liquid.calculateDrag(mover);
//     var dragForce = liquid.calculateDrag(mover);
//     mover.applyForce(dragForce);
//   }
//   mover.applyForce(gravity);
//   liquid.display();
//   mover.update();
//   mover.display();
//   mover.checkEdges();
// }
