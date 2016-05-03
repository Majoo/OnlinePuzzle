$('document').ready(function() {
	$("#arrowUp").click(arrowUp);
	$("#arrowDown").click(arrowDown);
	$("#arrowLeft").click(arrowLeft);
	$("#arrowRight").click(arrowRight);
});

$(document).keydown(function(e) {
	switch(e.which) {
			case 37: arrowLeft(); // left
			break;

			case 38: arrowUp(); // up
			break;

			case 39: arrowRight(); // right
			break;

			case 40: arrowDown(); // down
			break;

			default: return; // exit this handler for other keys
	}
	e.preventDefault(); // prevent the default action (scroll / move caret)
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
