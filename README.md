![kirby drawing](https://64.media.tumblr.com/3fc8e6b3fb397b57ff216ad9597142ba/tumblr_oghvusSRV91ufr0jio1_400.gif)

# Canvas!

## What is canvas?

Html canvas is an html element that allows someone to draw items on a plane using numbers and methods. It is most commonly used for making 2d objects, but has other use cases. Some of the advantages of using canvas for your graphics are that they are maniuplatable with javascript ineractions within a browser.

[W3 schools canvas info](https://www.w3schools.com/graphics/canvas_intro.asp)

[MDN canvas info](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage)

To create a canvas element, in **html** is simply:

```html
<canvas id="myCanvas" width="200" height="100"></canvas>
```

id / width / height are optional parameters. If width and height are not specified it will default to 300px wide and 150 px high. ID is used to access the canvas with your JS.

To start acessing your canvas, use the following code in **JS** (assuming you used the same canvas id):

```javascript
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d"); //ctx can be named whatever you like.
```
Now that we can access our canvas, lets start drawing some shapes! I'm going to start by drawing everyones loveable low tier hero (in smash at least)... kirby.

## What is kirby?

![The horror.](https://pbs.twimg.com/media/GIPC0NYXEAAa1SZ.jpg)

## Making a circle in Canvas

To start making our round ball of joy, we start with making a big pink circle in the middle of the canvas. Unlike normally drawing, drawing canvas is done by manipulating the coordinate plane with numbers (to the horror to most art students). Blow is the code to make a pink circle, then I will go step by step on what is happening on each line.

```javascript
const canvas = document.getElementById("canvas");
const kirb = canvas.getContext("2d");

kirb.beginPath();
kirb.arc(100, 75, 50, 0, 2 * Math.PI);
kirb.fillStyle = "pink" 
kirb.fill()
kirb.stroke();
```

* **Const lines**: giving canvas a line just allows us to access the canvas element easier. const kirb, I'm naming my first circle Kirb and you can't stop me.

* **beginPath()**: all drawing in canvas is done by drawing a path of coordinates, this starts this process.

* **.arc()** This defines the circle shape in this instance and more generally draws curves in canvas. It is taking in 5 arguments, (x, y, radius, startAngle, endAngle)

     * X/Y coordinates, something you should keep in mind is that unlike what most people are used to, the y is inverted. X Y starts at 0 at the top left, and the larger the number the closer to the bottom right corner you are getting.

     * Radius - determines how big the circle is, must be positive

     * Start/End in radians, unlike degrees, which I am used to, this is how js knows degrees, here is a picture from w3schools so you can visualize it.

     ![w3schools radians](https://www.w3schools.com/graphics/img_arc.gif)

* **fillstyle Fill()** This gives our kirby its adorable pink color and fills in the circle we just drew.

* **stroke()** This gives our circle simple black outline.

## Making ovals in canvas

Following our gif at the top of the page, the next stop is to give our kirby eyes. A window to its pitch black soul.

```javascript
const eye1 = canvas.getContext("2d");

eye1.beginPath();
eye1.ellipse(90, 50, 10, 3, Math.PI / 1.95, 0, 2 * Math.PI);
eye1.fillStyle = "darkblue"
eye1.stroke();
eye1.fill()

```

As you can see, this is very similar to our circle code, but with some extra parameters.

They are, in order:
* x, 
* y, 
* radiusX, 
* radiusY, 
* rotation, 
* startAngle, 
* endAngle, 


x and y are the same a the circle, giving a starting point of our ellipse

Radius x/y determines the width/height of the ellipse you are making

rotation is in radians again, for this I just experimented, but you can read up on how to do it correctly.

The start and end angle is the same as a circle because we want to make a full circle.

Now that you know how to make an eye, make a few more eyes, Also you can create the hands and feet using ellipses too!

## Making a half circle

Theres one other special shape that I used to make my kirby, I made a half circle for its mouth. Here is the code, guess if you can see the difference between this and making the other circle.

```javascript
mouth.beginPath();
mouth.arc(100, 65, 12, 0, 1 * Math.PI);
mouth.fillStyle = "red" 
mouth.fill()
```

If you guessed the fill being red... you're right, but more importantly look at the start and end angle, I made it end at 1 * Pi to make it a half circle instead of a full circle.

## Finishing it up

Now that we know how to make all the basic shapes, make sure you put them in an order that makes sense. Since javascript reads from top to bottom, you can either put the thigns you want to be seen on top of the other at the bottom of your code or include a z-index property on your shapes.

Enjoy and here is my completed kirby!

[Completed Kirby!](https://codepen.io/MarioBland/pen/ZEdZeJB)