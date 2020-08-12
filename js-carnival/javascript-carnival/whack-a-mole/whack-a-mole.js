// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Whack-a-Mole!")
var whack = new Audio(src = 'whack-audio.wav')
var moleCount = 0
var colNum 
var rowNum
var count = 3
var time = 10
highScore = 0


function moleClear() {        //clear any moles already present
  let button = document.getElementById('moleButton');
  console.log(button + 'moleclear function check')
  button.parentNode.removeChild(button);
}

function reset (){
  if (highScore < moleCount){
highScore = moleCount
}
  count = 3
  time = 10
  moleCount = 0
  document.getElementById('count').innerText = ""
  document.getElementById('countdown').innerText = ""
  document.getElementById('timeLeft').innerText = ''
  document.getElementById('highScore').innerText = highScore
}

function startCount(){ //runs the timers and their effects
  document.getElementById('countdown').innerText = count
 
  console.log('count is currently ' + count)
 var counter = setInterval(function(){
    count--
  if (count === 0){
   document.getElementById('countdown').innerText = 'Go!'
   clearInterval(counter)
   document.getElementById('timeLeft').innerText = '10'
   
   var timeLeft = setInterval(function(){
    time--
    if (time == 0){
     document.getElementById('timeLeft').innerText = 'Times Up!'
     clearInterval(timeLeft)
     moleClear()
     reset()
    } else {
     document.getElementById('timeLeft').innerHTML = time
    }
  }, 1000)
   
  } else {
    document.getElementById('countdown').innerText = count
  }
}, 1000)
}


function newMole() { //places a new mole after one is clicked on and plays a sound
  moleCount++
  whack.pause();
  whack.currentTime = 0;
  moleClear()
  moleShow()
  whack.play();
  var count = document.getElementById('count')
  count.innerHTML = moleCount
}

function random (size, num){
 // console.log('var recieved is ' + num)
//   do{
//     ranNum = Math.floor(Math.random() * Math.floor(size))
//   }
  
//  while (ranNum != num){
  ranNum = Math.floor(Math.random() * Math.floor(size))
 
return ranNum
  
}


function moleShow() {  //places a mole in a random cell
let exists = !!document.getElementById('moleButton')
  if (exists === true){
    moleClear()
  } 
  let row = random(5, rowNum);
  rowNum = row
  let col = random(5, colNum);
  colNum = col
   console.log(colNum, rowNum)
  var mole = document.getElementById('molefield').rows[row].cells[col];
  mole.innerHTML = "<button type='button' id='moleButton' class='moleButton' onclick='newMole()'><img class='molePic'src='mole.PNG'></button>"
  
}