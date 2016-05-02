var cube;
var level = 1;
$('document').ready(function() {
  init(4);
});

function init(picturesPerSide) {
  cube = new Cube(picturesPerSide);

  // create <img>s in canvas div
  var div = $("#myCanvas");
  div.empty();

  if(picturesPerSide == 1){
    for (i = 0; i < cube.picturesPerSide; i++) {
      div.append("<img style='width:450px;height:450px;' id='img" + i + "' class='img' src='' alt='" + i +"'>");
    }
  }
  else if(picturesPerSide == 4){
    for (i = 0; i < cube.picturesPerSide; i++) {
      div.append("<img id='img" + i + "' class='img' src='' alt='" + i +"'>");
    }
  }

  div.append("</table>");
  displayImages();
  drawCube(cube.frontSide - 1, cube.rightSide - 1, cube.topSide - 1);

  // init listeners
  for (i = 0; i < cube.picturesPerSide; i++) {
  $("#img" + i).click(function(eventObject) {
  var element = $( this );
    var picIndex = element.attr("alt");
    console.log("user selected " + picIndex);
    cube.selectPicture(cube.getFrontSide().pictures[picIndex]);
  });
  }
}

function displayImages() {
  for (i = 0; i < cube.picturesPerSide; i++) {
    var pic = cube.sides[cube.frontSide - 1].pictures[i];
    var img = $("#img" + i);
    img.attr("src", "img/" + pic.path);
    if ((cube.selectedPicture != null) && (cube.selectedPicture.path == pic.path)){
      $("#img"+i).addClass('selected');
      console.log("selected picture remembered");
    } else {
      $("#img"+i).removeClass('selected');
    }
  }
}
