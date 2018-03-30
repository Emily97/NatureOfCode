function Bob(x, y) {

    this.position = createVector(x, y);
    this.velocity = createVector();
    this.acceleration = createVector();
    this.mass = 24;
    this.damping = 0.99;
    this.dragOffset = createVector();
    this.dragging = false;

    this.update = function() {
        this.velocity.add(this.acceleration);
        this.velocity.mult(this.damping);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    }

    this.applyForce = function(force) {
        var f = force.copy();
        f.div(this.mass);
        this.acceleration.add(f);
    }

    this.display = function() {
        stroke(0);
        strokeWeight(3);
        fill(157);

        if (this.dragging) {
            fill(157);
        }

        ellipse(this.position.x, this.position.y, this.mass * 2, this.mass * 2);
    }

    this.handleClick = function(mx, my) {
        var d = dist(mx, my, this.position.x, this.position.y);

        if (d < this.mass) {
            this.dragging = true;
            this.dragOffset.x = this.position.x - mx;
            this.dragOffset.y = this.position.y - my;
        }
    }

    this.stopDragging = function() {
        this.dragging = false;
    }

    this.handleDrag = function(mx, my) {
        if (this.dragging) {
            this.position.x = mx + this.dragOffset.x;
            this.position.y = my + this.dragOffset.y;
        }
    }
}
