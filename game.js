var Picture = function (path) {
	this.path = path; // path to the image
	this.solved = false; // if it has been solved and should not be displayed anymore
};

var Side = function (pictures) {
	this.pictures = pictures;
};

var Cube = function () {
	this.selectedPicture = false;
	// load images into array
	// create sides and populate them with images
	// set a side as currently displayed side
};

Cube.prototype.selectPicture = function (picture) {
	// if no picture is selected, set selected picture
	// else check if selected and new picture are a couple
		// if they are a couple, set them solved and hide them
	// clear selection
}

Cube.prototype.displaySide = function (side) {
	
}