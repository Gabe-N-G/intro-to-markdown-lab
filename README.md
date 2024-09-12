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

Following our gif at the top of the page, the next stop is to give our kirby eyes. A window to its dark dark soul.




[Completed Kirby!](https://codepen.io/MarioBland/pen/ZEdZeJB)