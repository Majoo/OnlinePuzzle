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
	this.sides = new Array(6);
	this.displayedSide = null;
	
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
	var picturesPerSide = objectCount / 6;
	for (i = 0; i < 6; i++) {
		// randomly take pictures from picture array
		pics = [];
		for (i = 0; i < picturesPerSide; i++) {
			var j = Math.floor((Math.random() * pictures.length);
			pics.push(pictures.splice(j, 1));
		}
		var side = new Side(pics);
		this.sides.push(side);
	}

	// set a side as currently displayed side
	this.displayedSide = sides[0];

	// select a picture and check if they can be solved
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

	// display given side
	this.displaySide = function (side) {
		this.displayedSide = side;
	}
};


