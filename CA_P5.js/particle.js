// class
function Particle(){
    this.pos = createVector(random(width),random(height));  //the position of the line is randomly placed somewhere between the min and max of the width and height
    this.vel = createVector(0,0);   // the starting velocity in the x and y direction....createVector(x,y)
    this.acc = createVector(0,0);   // the starting acceleration in the x and y direction
    this.maxspeed = 4;
    this.color = 0;

    this.prevPos = this.pos.copy(); // gets a copy of the previous position of the vector and returns a p5.Vector object

    this.update = function(){
        this.vel.add(this.acc);          // adds the two vectors together to change the speed
        this.vel.limit(this.maxspeed);  // the limit fucntion limits the magnitude of the vector to the value found within the parameter
        this.pos.add(this.vel);        // adds the two vectors together so that position velocity value is added to the current position
        this.acc.mult(0);              // resets the acceleration variable back to 0 by multiplying it by zero.
    }

    this.follow = function(vectors){
        var x = floor(this.pos.x /scl); // the x position is actual place on the screen but its corresponding position on the grid needs to be scaled down by the scale variable
        var y = floor(this.pos.y /scl); // the y position is actual place on the screen but its corresponding position on the grid needs to be scaled down by the scale variable
        var index = x + y * cols;       // takes a 2-Dimensional value into a 1-Dimensional array
        var force = vectors[index];
        this.applyForce(force);         // based on the particles xy position, scale this particle to the grid of columns and rows and find the corresponding vector in the 1-Dimensional Array then take this vector and apply it as a force
    }

    this.applyForce = function(force){
        this.acc.add(force);
    }

    this.show = function(){
        // added innovation, the flowfield changes colour depending on its rgba value
        // similar to the pixel array exercise in nature of code
        stroke(this.color, 255, 255, 25); // the variable this.color is incremented to gradually change the color of the line
        this.color = this.color + 1;      // incrementing
        if(this.color > 255){
            this.color = 0;               // if the variable reaches 255 then the variable is set to 0
        }
        strokeWeight(1);                  // the thickness of the line
        line(this.pos.x, this.pos.y,this.prevPos.x, this.prevPos.y);    // the lines position on the screen is determined by its previous x and y coordinates
        // point(this.pos.x, this.pos.y);
        this.updatePrev();
    }
    this.updatePrev = function(){
        //the x and y coordinates are copied which makes the lines new coordinates relate to its previous x and y position
        this.prevPos.x = this.pos.x;
        this.prevPos.y = this.pos.y;
    }
    this.edges = function(){
        // this checks that the lines don't go off the canvas
        // if the line goes to the edge of the canvas the lines position is updated to appear on the opposite edge of the canvas
        if(this.pos.x > width){
            this.pos.x = 0;
            this.updatePrev();
        }
        if(this.pos.x < 0){
            this.pos.x = width;
            this.updatePrev();
        }
        if(this.pos.y > height){
            this.pos.y = 0;
            this.updatePrev();
        }
        if(this.pos.y < 0 ) {
            this.pos.y = height;
            this.updatePrev();
        }
    }
}
