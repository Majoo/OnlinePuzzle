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

var rotation = 0;
function changeSide (arrow) {
	console.log("you clicked " + arrow);

	var side = cube.displayedSide;
	if (side == 0) {
		var movement = (arrow + rotation) % 4;
		switch (movement) {
			case ArrowEnum.UP:
				cube.displayedSide = 5;
				break;
			case ArrowEnum.RIGHT:
				cube.displayedSide = 1;
				break;
			case ArrowEnum.DOWN:
				cube.displayedSide = 2;
				break;
			case ArrowEnum.LEFT:
				cube.displayedSide = 3;
				break;
		}

		if (north == 5) {
		} else if (north == 1) {
			switch (arrow) {
				case ArrowEnum.UP:
					cube.displayedSide = 3;
					break;
				case ArrowEnum.RIGHT:
					cube.displayedSide = 5;
					break;
				case ArrowEnum.DOWN:
					cube.displayedSide = 1;
					break;
				case ArrowEnum.LEFT:
					cube.displayedSide = 2;
					break;
			}
		}
	}
}