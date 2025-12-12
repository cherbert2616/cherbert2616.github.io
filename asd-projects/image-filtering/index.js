// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
applyFilter(reddify);
  applyFilter(decreaseBlue);
  applyFilterNoBackground(increaseGreenByBlue);
  applyFilterNoBackground(reddify);

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
function applyFilter(filterFunction) {
for (let i = 0; i < image.length; i++) {
for (let j = 0; j < image[i].length; j++) {
  filterFunction(pixelArray);
  var pixel = image[i];
  var pixelArray = rgbStringToArray(pixel);
  // This is where I'll modify the color values later
  pixelArray[RED] = 200;
  var updatedPixel = rgbStringToArray(pixelArray);
}
 }
}


// TODO 9 Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) {
  var backgroundColor = image[0][0]
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      if (image[i][j] !== backgroundColor) {
        var pixelArray = rgbStringToArray(image[i][j])
        var transformation = filterFunction(pixelArray)
        image[i][j] = rgbArrayToString(transformation) 
      }
    }
  }
}

// TODO 6: Create the keepInBounds function
function keepInBounds(num) {
  if (num < 0){
    return 0;
  }
  else if (num > 255) {
    return 255;
  }
  else {
    return num;
  }
}

// TODO 4: Create reddify filter function
function reddify(pixelArray) {
pixelArray[0] += RED
};

// TODO 7 & 8: Create more filter functions
function decreaseBlue(pixelArray) {
  pixelArray[2] -= BLUE
}
function increaseGreenByBlue(pixelArray) {
pixelArray[1] = pixelArray[2]
pixelArray[1] = keepInBounds(pixelArray[1]) 
}
// CHALLENGE code goes below here
