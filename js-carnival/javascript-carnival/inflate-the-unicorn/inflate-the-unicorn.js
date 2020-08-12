  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -  -   -  //

var anum = 0  //
var snum = 0  // index variables for unicorn images
var bnum = 0  //

console.log("Inflate The Unicorn!");


// console.log(anum, bnum,snum)

function reset (){  //resets the game to "mostly" its original state
  anum = 0
  bnum = 0
  snum = 0
  document.getElementById('Buttershy').src="./images/unicorn-0.png"
  document.getElementById('Sparklesilver').src="./images/unicorn-0.png"
  document.getElementById('Arcothax').src="./images/unicorn-0.png"
  document.getElementById('message').innerText = 'Oh no, the Unicorns all have empty balloons again!! '
}

function increment(num){ //increments the index for images
  window[num]++;
  // console.log(window[num])
  return window[num]
}

function finished(name){ //displays a message from unicorn when balloon is full
  if (name === "Arcothax"){
    document.getElementById('message').innerText = "Arcothax the Annihilator, Destroyer of Worlds, is grateful to the service you have rendered her in filling her reservoir of chaotic power"
    return
  }
document.getElementById('message').innerText = name + " is very thankful to you for filling her balloon!"
}

function inflate(id, num){  // changes unicorn image to next one in sequence
 window[num]++
 if (window[num] >= 6 && id === "Arcothax") {
  document.getElementById(id).src="./images/Arcothax.png"
  finished('Arcothax')
  return
 } else if (window[num] >= 6){
 document.getElementById(id).src="./images/unicorn-3.png"
  finished(id)
  return
}
//  console.log(window[num])
  // console.log("inflate has been called");
newNum = Math.floor(window[num] * .5)
console.log(window[num])
console.log(newNum)
 document.getElementById(id).src="./images/unicorn-" + newNum + ".png"
 document.getElementById('message').innerText = id + " thanks you for your help"
 
  }
