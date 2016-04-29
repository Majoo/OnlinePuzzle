var cubeColor = ["#326056", "#2A3D4C", "#3B3C3E", "#461420","#8B6943", "#ECCD65"];
// parameters - different sides colors
function drawCube(front, right, top) {
  // get the canvas element using the DOM
  var canvas = document.getElementById('cubeCanvas');
  // Make sure we don't execute when canvas isn't supported
  if (canvas.getContext) {
    // use getContext to use the canvas for drawing
    var ctx = canvas.getContext('2d');
    var xBottom = 200;
    var yBottom = 200;
    var width = 150; //width and height are the same

    ctx.fillStyle = cubeColor[top];
    ctx.beginPath();
    ctx.moveTo(xBottom,yBottom - width);
    ctx.lineTo(xBottom + width/2,yBottom - width*1.5);
    ctx.lineTo(xBottom - width/2,yBottom - width*1.5);
    ctx.lineTo(xBottom - width,yBottom - width);
    ctx.lineTo(xBottom,yBottom);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = cubeColor[right];
    ctx.beginPath();
    ctx.moveTo(xBottom,yBottom);
    ctx.lineTo(xBottom,yBottom - width);
    ctx.lineTo(xBottom + width/2,yBottom - width*1.5);
    ctx.lineTo(xBottom + width/2,yBottom - width*0.5);
    ctx.lineTo(xBottom,yBottom);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = cubeColor[front];
    ctx.fillRect(xBottom - width,yBottom - width,xBottom,yBottom);

  } else {
     alert('You need Safari or Firefox 1.5+ to see this demo.');
  }
}

//which side of the cube
drawCube(1, 2, 3);

