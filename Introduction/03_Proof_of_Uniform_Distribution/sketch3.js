var randomCounts = [];					//Firstly we declare and empty array called randomCounts and a variable for the number of items we will have in our array
var total = 20;

function setup() {						//In our setup we create a canvas. The loop populates the array with zero's [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
	createCanvas(640,360);
	for (var i = 0; i < total; i++) {
		randomCounts[i] = 0;
	}
}

function draw() {						//So now everytime we draw (or the draw loop occurs each frame) we
	background(127);					//redraw the background(see what would happen if you didn't do this)
	var index = floor(random(total));	//We then choose a random number between 0 and 20, floor it( so the results will be 0-19 integers)
	randomCounts[index]++;				//and we add it to the value in the array. Example 6.76 randomly chosen - floored to 6
										//-randomCounts[6] = 0 + 1 = 1 [0,0,0,0,0,1,0,0,0,0,0,0,0,0]
	//Draw a rectangle to graph results
	stroke(0);							//Black stroke with weight of 2px and fill of white selected and ready to be 
	strokeWeight(2);					//used to draw something. Calculates the width of each bar
	fill(255);

	var w = width/randomCounts.length;

	for (var x = 0; x < randomCounts.length; x++) {
		rect(x*w, height - randomCounts[x], w-1, randomCounts[x]);
		//Loops 20 times(once for each bar) and creates a rectangle with a height
		//based on the array value at the time. Rect(x Start Pos, y Start Pos, width, height)
	}
}