var Oscillator = function(_time){
    var angle = createVector();
    var vel = createVector(random(-0.015,0.015),random(-0.015,0.015));
    var amp = createVector(random((width*1.5)/2),random((height*1.5)/2));
    var time = _time;

    this.oscillate = function(){
        angle.add(vel);
    }

    this.render = function(){
        var x = sin(angle.x)*amp.x;
        var y = sin(angle.y)*amp.y;
        var rad = map(noise(time),0,1,2.5,25);

        var col1 = map(sin(time),0,1,0,255);
        var col2 = map(sin(time),0,1,0,255);
        var col3 = map(sin(time),0,1,0,255);

        time += 0.02;

        push();
        translate(width/2,height/2);
        strokeWeight(0.25)
        stroke(col1,col2,col3,55);
        fill(col1,col2,col3,55);
        line(0,0,x,y);
        noStroke();
        ellipse(x,y,rad);
        pop();
    }
}
