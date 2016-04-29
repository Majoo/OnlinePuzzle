var Picture = function (path) {
	this.path = path; // path to the image
	this.solved = false; // if it has been solved and should not be displayed anymore
	this.partner = null;

	this.addPartner = function (picture){
		this.partner = picture;
	}
};

var Side = function (pictures) {
	this.pictures = pictures;
};

var Cube = function () {
	this.selectedPicture = null;
	// load images into array
	// create sides and populate them with images
	// set a side as currently displayed side

	this.selectPicture = function (picture){
		if(selectedPicture == null){
			this.selectedPicture = picture;
		}else if (picture == this.selectedPicture ){
			//Set pair as solved:
			picture.solved = true;
			this.selectedPicture.solved = true;
			//Hide pictures TODO
			//Clear selection:
			this.selectedPicture = null;
		}
	}
};

Cube.prototype.selectPicture = function (picture) {
	// if no picture is selected, set selected picture
	// else check if selected and new picture are a couple
		// if they are a couple, set them solved and hide them
	// clear selection
}

Cube.prototype.displaySide = function (side) {

}
