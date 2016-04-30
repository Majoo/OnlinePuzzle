$('document').ready(function(){
	$("#arrowUp").click(arrowUp);
	$("#arrowDown").click(arrowDown);
	$("#arrowLeft").click(arrowLeft);
	$("#arrowRight").click(arrowRight);
});

const ArrowEnum = {
	UP: 1,
	RIGHT: 2,
	DOWN: 3,
	LEFT: 4,
};

function arrowUp () {
    arrow(ArrowEnum.UP);
}

function arrowDown () {
    arrow(ArrowEnum.DOWN);
}

function arrowLeft () {
    arrow(ArrowEnum.LEFT);
}

function arrowRight () {
    arrow(ArrowEnum.RIGHT);
}

function arrow (arrowEnum){
    console.log("you clicked " + arrowEnum);
}