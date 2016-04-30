var cubeColor = ["#F4CF64", "#E5A373", "#D7AFA5", "#4F4140","#FFF6D3", "#FF8366"];
// parameters @front, @right, @top are numbers which cube side it is  and according to this different color will be used for drawing a cube
function drawCube(front, right, top) {
  // get the canvas element using the DOM
  var canvas = document.getElementById('cubeCanvas');
  // Make sure we don't execute when canvas isn't supported
  if (canvas.getContext) {
    // use getContext to use the canvas for drawing
    var ctx = canvas.getContext('2d');
    var xBottom = 150;
    var yBottom = 150;
    var width = 100; //width and height are the same

    ctx.fillStyle = cubeColor[top];
    ctx.beginPath();
    ctx.moveTo(xBottom, yBottom - width);
    ctx.lineTo(xBottom + width/2,yBottom - width*1.5);
    ctx.lineTo(xBottom - width/2,yBottom - width*1.5);
    ctx.lineTo(xBottom - width,yBottom - width);
    ctx.lineTo(xBottom, yBottom - width);
    ctx.closePath();
    ctx.fill();
    //ctx.stroke();

    ctx.fillStyle = cubeColor[right];
    ctx.beginPath();
    ctx.moveTo(xBottom, yBottom);
    ctx.lineTo(xBottom, yBottom - width);
    ctx.lineTo(xBottom + width/2, yBottom - width*1.5);
    ctx.lineTo(xBottom + width/2, yBottom - width*0.5);
    ctx.lineTo(xBottom,yBottom);
    ctx.closePath();
    ctx.fill();
    // ctx.stroke();

    ctx.fillStyle = cubeColor[front];
    ctx.fillRect(xBottom - width, yBottom - width, width, width);

  } else {
     alert('You need Safari or Firefox 1.5+ to see this demo.');
  }
}

//which side of the cube
drawCube(0, 4, 5);
