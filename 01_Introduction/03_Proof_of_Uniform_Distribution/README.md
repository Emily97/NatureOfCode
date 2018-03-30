# Proof of Uniform Distribution
In this exercise we create a number of bars on the screen that randomly increment depending on the index number that is randomly picked. This example shows how psuedo random is not actually random but it actually a mathematical function that simulates randomness. This is shown by how the columns remain relatively the same. 
##Code
Firstly we declare and empty array called randomCounts and a variable for the number of items we will have in our array.

```js
var randomCounts = [];
var total = 20;
```
In the setup function, we create a canvas. The loop then populates the array with zeros.
```js
function setup() {						
	createCanvas(640,360);
	for (var i = 0; i < total; i++) {
		randomCounts[i] = 0;
	}
}
```
The draw loop occurs each frame. The background is found within the draw function so that theres no trail left on screen. A variable index is declared which picks a number randomly between 0 and 20 but floors it so that its a number between 0 - 19.
Black stroke with the weight of 2px and fill of white is used.  

```js
function draw() {
	background(127);
	var index = floor(random(total));
	randomCounts[index]++;

	stroke(0);
	strokeWeight(2);
	fill(255);
}
```
This variable below is declaring the width of the columns by dividing the width of the canvas by the number of columns to be drawn. A loop is used to add height to the columns when there number is selected.

```js
	var w = width/randomCounts.length;

	for (var x = 0; x < randomCounts.length; x++) {
		rect(x*w, height - randomCounts[x], w-1, randomCounts[x])
	}  
