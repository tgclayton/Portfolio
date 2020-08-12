// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
window.addEventListener("keydown", function(e) {
  if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
  }
}, false);

document.onkeydown = detect

var headNum = 0 //
var bodyNum = 0 // Index numbers for body parts
var shoeNum = 0 //

var append = "head" //variable to insert into image filepath to retrieve clothing
var bp = 2 // value that is incremented and then bound to the part index
var bit = "shoeNum" //variable to tell the code which index to look at
console.log("part currently selected is " + append + " and its index is " + window[bit])

function changePart(key) { //Cycles through clothes in selected body part
  if (key === "left" && window[bit] === 0) {
    window[bit] = 5
  } else if (key === "left" && window[bit] > 0) {
    window[bit]--
  } else if (key === "right" && window[bit] === 5) {
    window[bit] = 0
  } else {
    window[bit]++
  }
  let part = document.getElementById(append)
  part.src = "images/" + append + window[bit] + ".png"
  console.log(append + " is now at index " + window[bit])
}

function selectPart(key) { // Cycles through body parts to change clothes on
  if (key === "down" && bp > 0) {
    bp--
  } else if (key === "down" && bp == 0) {
    bp = 2
  } else if (key === "up" && bp < 2) {
    bp++
  } else {
    bp = 0
  }
  if (bp === 0) {
    append = "shoes"
    bit = 'shoeNum'
    document.getElementById('part-selector').innerHTML = 'Shoes'
  } else if (bp === 1) {
    append = "body"
    bit = 'bodyNum'
    document.getElementById('part-selector').innerHTML = 'Clothes'
  } else {
    append = "head"
    bit = 'headNum'
    document.getElementById('part-selector').innerHTML = 'Hats'
  }
  console.log("part now selected is " + append + " and its index is " + window[bit])
}

function detect() { //determines which arrow key is pressed
  switch (event.keyCode) {
    case 37: ; //left
      changePart("left")
      break;
    case 38: ; //up
      selectPart('up')
      break;
    case 39: ; //right
      changePart("right")
      break;
    case 40: ; //down
      selectPart("down")
      break;
    default:
  }
}