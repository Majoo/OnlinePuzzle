var Picture = function (path) {
	this.path = path; // path to the image
	this.solved = false; // if it has been solved and should not be displayed anymore
	this.partner = null;

	this.setPartner = function (picture){
		this.partner = picture;
	}
};

var Side = function (pictures) {
	this.pictures = pictures;
};

var Cube = function (objectCount) {
	this.selectedPicture = null;
	
	// create pictures and couples
	pictures = [];
	for (i = 0; i < objectCount; i++) {
	    var pic1 = new Picture(i + "_1.png");
	    pictures.push(pic1);
	    var pic2 = new Picture(i + "_2.png");
	    pictures.push(pic2);
	    pic1.setPartner(pic2);
	    pic2.setPartner(pic1);
	}

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
