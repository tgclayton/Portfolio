document.addEventListener('DOMContentLoaded', startGame)
document.addEventListener('click', checkForWin)
document.addEventListener('contextmenu', checkForWin)
// Define your `board` object here!
var cheer = new Audio(src = 'sounds/cheer.wav')
var board = {}
var hasWon = false

createBoard(5) //builds the initial board

function createBoard(size /*3,4,5,6*/) {
  board.cells = []
  for (i = 0; i < size * size; i++) {
    board.cells.push({})
    board.cells[i].row = Math.floor(i / size)
    board.cells[i].col = (i % size)
    board.cells[i].hidden = true
    board.cells[i].isMarked = false
    board.cells[i].isMine = Math.random() >= 0.7
  }
}

function newGame(size) { //starts a new game
  window['hasWon'] = false
  boom.pause();
  boom.currentTime = 0;
  cheer.pause();
  cheer.currentTime = 0;
  if (size === "reset") {
    let old = document.getElementsByClassName('cell');
    oldSize = Math.sqrt(old.length)
    clearBoard()
    createBoard(oldSize)
    startGame()
  } else {
    clearBoard()
    createBoard(size)
    startGame()
  }
}

function clearBoard() { //removes previous board
  let field = document.getElementsByClassName('cell');
  while (field.length > 0) {
    field[0].parentNode.removeChild(field[0]);
  }
}

function startGame() {
  // Don't remove this function call: it makes the game work!
  for (let i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = ""
    let count = countSurroundingMines(board.cells[i])
    board.cells[i].surroundingMines = count
  }
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin() {
  for (i = 0; i < board.cells.length; i++) {
    if (hasWon === true) {
      return
    }
    if (board.cells[i].isMine === true) {
      if (board.cells[i].isMarked === false) {
        return
      }
    } else if (board.cells[i].hidden === true) {
      return
    }
  }
  window['hasWon'] = true
  cheer.play()
  lib.displayMessage('You win!')
}
// You can use this function call to declare a winner (once you've
// detected that they've won, that is!)

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines(cell) {

  //function will get the number of cells surrounding current cell

  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  var count = 0
  for (i = 0; i < surrounding.length; i++) {
    if (surrounding[i].isMine === true) {
      count++
    }
  }
  return count
}
