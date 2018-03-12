# Vectors07 - Magnitude
In the previous exercise we used multiplication and division to determine the length of our vectorLine. However we do not know what the length of the line is which is where magnitude comes in. By using the theorem of Pythagoras we can find out the magnitude or length of this. If you imagine the vectorLine is the hypotenuse of the right angle triangle and if we take the components of the vectorLine (the x and y) we use them as the two side other sides of the triangle. To calculate the length of the vectorLine you must do the following:
- make the vectorLine equal to z: vectorLine=z
- use this formula x^2 + y^2 = z^2
- square root the answer for z and you have the length of the line

## Code
To start, the setup function contains the canvas size.
Next in the draw function, declare the background color. Like in the previous exercises declare the three variables as followed:
```js
var mouse = createVector(mouseX, mouseY);
var center = createVector(width /2, height /2);
var vectorLine = mouse.sub(center);
```
The next line is the newest line to the code otherwise the code is identical to previous questions. Firstly the variable m is declared which is equal to the length or magnitude of the vectorLine. The fill and stroke are declared as well as a rectangle which is placed at the top of the canvas and will be length of the vectorLine.
```js
var m = vectorLine.mag();
fill(255);
stroke(0);
rect(0, 0, m, 10);

translate(width /2, height /2);
strokeWeight(2);
stroke(255);
line(0, 0, vectorLine.x, vectorLine.y);
}
```
