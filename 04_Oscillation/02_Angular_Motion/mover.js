var Mover = function(m) {

	this.location = createVector(30,30);
	this.velocity = createVector(0,0);
	this.acceleration = createVector(0,0);
	this.mass = m;

  //rotating
  this.angle = 0;
  this.aVelocity = 0;
  this.aAcceleration = 0.001;

	this.update = function() {
    //position
		this.velocity.add(this.acceleration);
		this.velocity.limit(10);
		this.location.add(this.velocity);
		this.acceleration.mult(0);

    //angle
    this.aAcceleration = this.velocity.x;
    this.aVelocity += this.aAcceleration;
    this.aVelocity = constrain(this.aVelocity, -0.05, 0.05);
    this.angle += this.aVelocity;
	}

	this.display = function() {
		fill(255,0,0,50);
		stroke(150);
		strokeWeight(2);

    push();
    translate(this.location.x, this.location.y);
    rotate(this.angle);
    rectMode(CENTER);
		rect(0, 0, this.mass * 10, this.mass * 10);
    pop();
	}

	this.checkEdges = function() {
		if (this.location.x > width || this.location.x < 0) {
			this.velocity.x = this.velocity.x * -1;
		}
		if (this.location.y > height || this.location.y < 0) {
			this.velocity.y = this.velocity.y * -1;
		}
	}

	this.applyForce = function(force) {
		var f = p5.Vector.div(force,this.mass);
		this.acceleration.add(f);
	}

}
