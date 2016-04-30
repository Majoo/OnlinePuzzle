$('document').ready(function(){
	$("#arrowUp").click(arrowUp);
	$("#arrowDown").click(arrowDown);
	$("#arrowLeft").click(arrowLeft);
	$("#arrowRight").click(arrowRight);
});

const ArrowEnum = {
	UP: 0,
	RIGHT: 1,
	DOWN: 2,
	LEFT: 3,
};

function arrowUp () {
    changeSide(ArrowEnum.UP);
}

function arrowDown () {
    changeSide(ArrowEnum.DOWN);
}

function arrowLeft () {
    changeSide(ArrowEnum.LEFT);
}

function arrowRight () {
    changeSide(ArrowEnum.RIGHT);
}

function changeSide(arrowEnum) {
  cube.rotate(arrowEnum);
  displayImages();
  drawCube(cube.frontSide - 1, cube.rightSide - 1, cube.topSide - 1);
}