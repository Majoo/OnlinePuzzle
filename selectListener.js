$('document').ready(function() {
	for (i = 0; i < picturesPerSide; i++) {
		$("#img" + i).click(function(eventObject) {
			var element = $( this );
	    	var picIndex = element.attr("alt");
	    	console.log("user selected " + picIndex);
	    	cube.selectPicture(cube.getFrontSide().pictures[picIndex]); //which picture did he select? which pictures are displayed? is it a 1x1 or 2x2 cube?
		});
    }
});