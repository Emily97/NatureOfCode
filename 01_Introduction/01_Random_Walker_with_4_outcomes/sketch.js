var walker;									//Declare a walker object

function setup() {							//P5.js has 2 main functions setup() and draw(). Setup() happens only at the start and
	createCanvas(320, 640);					//draw() occurs every frame
	background(127);						//In this instance we create a canvas sized 320 x 640 and make its background 127 in color(grey)
	walker = new Walker();					//Here we tell it what type of object walker is and we then call the Walker class to make a walker object
}

function draw() {							//On each frame the draw() function is called. It in turn calls the walker render() 
	walker.render();						//function from inside the walker object
	walker.step();							//it then calls the steps function from inside the walker object
}

function Walker() {							//This is the Walker class that makes walker objects. All variable declarations and functions are preceded with this.
	this.x = width/2;
	this.y = height/2;

	this.render = function() {
		stroke(0);
		point(this.x, this.y);
	}

	this.step = function() {				//This is one approach of randomness. We will try others soon
		var choice = floor(random(4));		//Floor(random(4)) will choose a random float between 0 & 4(max 3.9999). It then
		if (choice === 0) {					//floors it(by removing the decimal places). The max will be 3 and the min 0. Using this result we give it 4 outcomes using an if statement.
			this.x++;
		}
		else if (choice === 1) {
			this.x--;
		}
		else if (choice === 2) {
			this.y++;
		}
		else {
			this.y--;
		}

		this.x = constrain(this.x,0,width);	//We dont want our point to go off the screen so we use a p5.js function called
		this.y = constrain(this.y,0,height);//constrain to limit its x position. (constrain a value between 2 other values)
	}
}
