var Mover = function(m) {

	this.location = createVector(30,30);
	this.velocity = createVector(0,0);
	this.acceleration = createVector(0,0);
	this.mass = m;

	this.update = function() {
		this.velocity.add(this.acceleration);
		this.velocity.limit(10);
		this.location.add(this.velocity);
		this.acceleration.mult(0);
	}

	this.display = function() {
		fill(255,0,0,50);
		stroke(150);
		strokeWeight(2);
		ellipse(this.location.x, this.location.y, this.mass * 10, this.mass * 10);
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