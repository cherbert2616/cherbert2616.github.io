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
  

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
function applyFilter(filterFunction) {
for (let i = 0; i < image[i]; i++) {
for (let j = 0; j < image[j]; j++) {
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
  for (let i = 0; i < image[i]; i++) {
    for (let j = 0; j < image[j]; j++) {
      
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
function reddify([pixelArray]) {
RED += [pixelArray]
};

// TODO 7 & 8: Create more filter functions
function decreaseBlue([pixelArray]) {
  BLUE -= [pixelArray]
}
function increaseGreenByBlue([pixelArray]) {

}
// CHALLENGE code goes below here
