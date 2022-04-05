//chess board variant with functions
const squaresPerRow = 4;
numOfRows = 4;
let xString = '';
let yString = '';

function drawDark() {
  for (i = 0; i < squaresPerRow; i++) {
    xString += '# ';
  }
  console.log(xString);
  //console.log('\n');
  xString = '';
}
function drawLight() {
  for (i = 0; i < squaresPerRow; i++) {
    yString += ' #';
  }
  //console.log('\n');
  console.log(yString);
  yString = '';
}

for (n = 0; n < numOfRows; n++) {
  drawLight();
  drawDark();
}

// drawDark();
// drawLight();
