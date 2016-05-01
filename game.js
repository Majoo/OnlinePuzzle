var Picture = function (path) {
	this.path = path; // path to the image
	this.solved = false; // if it has been solved and should not be displayed anymore
	this.partner = null;

	this.setPartner = function (picture) {
		this.partner = picture;
	}

	this.changePictureToSolved = function() {
		//user correctly selected two pictures
		this.path = "solved.png";
		this.solved = true;
	}
};

var Side = function (pictures) {
	this.pictures = pictures;
};

var Cube = function (picturesPerSide) {
	this.picturesPerSide = picturesPerSide;
	this.selectedPicture = null;
	this.sides = [];
	this.frontSide = 1;
	this.topSide = 3;
	this.rightSide = 2;
	this.objectCount = this.picturesPerSide * 3; // 6 sides divided by 2 pictures per object
	this.objectsToSolve = this.objectCount;
	this.highscore = 0;

	// create pictures and couples
	var pictures = [];
	for (i = 1; i < this.objectCount + 1; i++) {
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

	this.getFrontSide = function() {
		return this.sides[this.frontSide - 1];
	}

	// select a picture and check if they can be solved
	this.selectPicture = function (picture){
		if (this.selectedPicture == null){	 //selecting a picture
			this.selectedPicture = picture;
			console.log("user selected first card");
		}
		else if (picture == this.selectedPicture){ // selecting already selected picture = deselect
			this.selectedPicture = null;
			console.log("deselect");
		}
		else if (picture == this.selectedPicture.partner){
			// correctly selected second picture
			//Set pair as solved and Hide pictures
			picture.changePictureToSolved();
			this.selectedPicture.changePictureToSolved();
			this.highscore = this.highscore + 2;
			$("#highscoreLbl").text(this.highscore);
			console.log("highscore: "+this.highscore);
			displayImages();
			//Clear selection:
			this.selectedPicture = null;
			console.log("user selection correct");

			// check if all pics have been solved
			this.objectsToSolve--;
			if (this.objectsToSolve == 0) {
				window.alert("You solved the cube! Are you ready for the next level?");
				level++;
				$("#levelLbl").text(level);
				init(4);
			};
		} else	// incorrectly selected second picture
		{
			//should we say something?
			console.log("user selection incorrect");
			this.selectedPicture = null;
		}
	}


	this.rotate = function (arrow) {
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
