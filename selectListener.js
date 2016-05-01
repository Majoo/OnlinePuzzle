$('document').ready(function() {
	for (i = 0; i < cube.picturesPerSide; i++) {
		$("#img" + i).click(function(eventObject) {
			var element = $( this );
	    	var picIndex = element.attr("alt");
	    	console.log("user selected " + picIndex);
	    	cube.selectPicture(cube.getFrontSide().pictures[picIndex]);
		});
    }
});