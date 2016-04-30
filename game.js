var Picture = function (path) {
	this.path = path; // path to the image
	this.solved = false; // if it has been solved and should not be displayed anymore
	this.partner = null;

	this.setPartner = function (picture){
		this.partner = picture;
	}
	this.changePictureToSolved = function(){	//user correctly selected two pictures
		this.path = "solved.png";
		this.solved = true;
	}
};

var Side = function (pictures) {
	this.pictures = pictures;
};

var Cube = function (picturesPerSide) {
	this.selectedPicture = null;
	this.sides = [];
	this.frontSide = 1;
	this.topSide = 3;
	this.rightSide = 2;

	var objectCount = picturesPerSide * 3; // 6 sides divided by 2 pictures per object
	// create pictures and couples
	var pictures = [];
	for (i = 1; i < objectCount + 1; i++) {
	    var pic1 = new Picture(i + "_1.png");
	    pictures.push(pic1);
	    var pic2 = new Picture(i + "_2.png");
	    pictures.push(pic2);
	    pic1.setPartner(pic2);
	    pic2.setPartner(pic1);
	}

	// create sides and populate them with images
	for (i = 0; i < 6; i++) {
		// randomly take pictures from picture array
		var pics = [];
		for (k = 0; k < picturesPerSide; k++) {
			var j = Math.floor(Math.random() * pictures.length);
			pics.push(pictures.splice(j, 1)[0]);
		}
		var side = new Side(pics);
		this.sides.push(side);
	}

	// select a picture and check if they can be solved
	this.selectPicture = function (picture){
		if(selectedPicture == null){	 //selecting a picture
			this.selectedPicture = picture;
			console.log("user selected first card");
		} 
		else if (picture == this.selectedPicture){ // selecting already selected picture = deselect
			selectedPicture = null;
			console.log("deselect");
		} 
		else if (picture == this.selectedPicture.partner){ // correctly selected second picture  
			//Set pair as solved and
			//Hide pictures TODO
			picture.changePictureToSolved();
			this.selectedPicture.changePictureToSolved();
			//Clear selection:
			this.selectedPicture = null;
			console.log("user selection correct");
		} else	// incorrectly selected second picture  
		{
			//should we say something?
			console.log("user selection incorrect");
			this.selectedPicture = null;
		}
	}


	this.rotate = function (arrow) {
		console.log("you clicked " + arrow);

		var frontSide, topSide, rightSide;
		switch (arrow) {
			case ArrowEnum.UP:
				topSide = 7 - cube.frontSide;
				frontSide = cube.topSide;
				rightSide = cube.rightSide;
				break;
			case ArrowEnum.DOWN:
				topSide = cube.frontSide;
				frontSide = 7 - cube.topSide;
				rightSide = cube.rightSide;
				break;
			case ArrowEnum.RIGHT:
				topSide = cube.topSide;
				frontSide = cube.rightSide;
				rightSide = 7 - cube.frontSide;
				break;
			case ArrowEnum.LEFT:
				topSide = cube.topSide;
				frontSide = 7 - cube.rightSide;
				rightSide = cube.frontSide;
				break;
		}
		
		cube.topSide = topSide;
		cube.frontSide = frontSide;
		cube.rightSide = rightSide;
	}
};
