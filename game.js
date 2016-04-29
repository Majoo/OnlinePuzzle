var Picture = function (path) {
	this.path = path; // path to the image
	this.solved = false; // if it has been solved and should not be displayed anymore
};

var Side = function (pictures) {
	this.pictures = pictures;
};

var Cube = function (sides) {
	this.sides = sides;
	// selectedPicture
};

Cube.prototype.select(picture) {
	// if no picture is selected, set selected picture
	// else check if selected and new picture are a couple
		// if they are a couple, set them solved and hide them
	// clear selection
}