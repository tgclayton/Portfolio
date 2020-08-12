var display = [] // stores the input to be displayed on screen
var calc = [] //stores the inputs to be compiled into a calculable array
var workNum = [] //stores the currently calculated nswer during the calculate function
var prev = "" //store the last answer calculated
var numPressed = false // if true last button pressed was a number and operators can be entered
// var op = true //if false last button pressed was a number and '=' can proceed
var useAnswer = false

document.querySelectorAll('#calcFace td') //td's respond when clicked
    .forEach(e => e.addEventListener('click', input))

document.getElementById('screen').removeEventListener('click', input) //stops clickcing on the screen from doing anything

function input() {  // takes  a pressed button and acts on it 
    let inp = this.innerText
    let show = document.getElementById('screen')
    // console.log(numPressed)
    // console.log('input is ' + inp)
    if (numPressed === false && (inp === "x" || inp === "-" || inp === "+" || inp === "÷")) {
        return
    }
    if (inp === 'x' || inp === '-' || inp === '+' || inp === '÷') { // deals with operator input
        // console.log('operator pressed and inp is ' + inp)
        numPressed = false
        calc.push(inp)
        inp = " " + inp + " "
        display.push(inp)
        // console.log(inp)
    } else if (inp === 'AC') { //AC button resets
        display = []
        calc = []
        workNum = []
        prev = ''
        numPressed = false
        show.innerHTML = 0
        return
    } else if (inp === 'CE') { //CE button clears last entry
        display.pop()
        calc.pop()
        // console.log(display.length)
        if (display.length === 0 ){
            document.getElementById('screen').innerText = '0'
            return
        }
    } else if (inp === '%'){
    return
    }else if (inp === '=') {  //runs and displays the calculation
        console.log('calc array is ' + calc)
        if (numPressed === true) {
            getCalc(calc)
            calculate(workNum)
            useAnswer = true
            display = []
            calc = []
            workNum = []
            numPressed = true
            // console.log('calc is ' + calc)
            return
        }
    }else if (inp === 'Ans'){
        console.log('answer key pressed ans answer = ' + prev + typeof(prev))
        console.log(!isNaN(prev))
        if (typeof(prev) === 'number'){
            console.log('answer was  a number')
            display.push('Ans')
            calc.push(prev)
            numPressed = true
            } else {
                return
            }
    }  else {  // handles regular numbers and '.' symbol
        if (useAnswer === true && !isNaN(Number(display[0]))){
            useAnswer = false
        }
        numPressed = true
        op = false
        display.push(inp)
        calc.push(inp)
        // console.log(Number(display[1]))

        // console.log('clicked ' + this.innerText)
    }
    //  console.log('display array contains: ' + display)
    // console.log('calc array contains: ' + calc)
    show.innerText = display.join("")
}

function getCalc(arr) { //turns the combined input into an array of workable entries (numbers and operators)
    let temp = []
    let working = []
    for (i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) { //if entry is a number it is added to a string of immediately previous numbers
            temp.push(arr[i])
            working.push(temp.join(''))
            workNum = working
        } else if (isNaN(arr[i])) { //if entry is an operator previous numbers are add as a single number and operator is added as an entry on its own between them
            if (arr[i] != '.') {
                working.push(temp.join(''))
                working.push(arr[i])
                temp = []
            } else {
                temp.push(arr[i])
            }
        } else {
            temp.push(arr[i])
        }
    }
}


function calculate(arr) {
    // console.log(arr)
    if (useAnswer === true) {
        // console.log('prev was add to start of calc and its value was ' + prev)
        arr[0] = prev
    }
    let current = Number(arr[0])
    let next = ''
    let working = current
    console.log(arr)
    for (i = 1; i < arr.length; i++) {
        if (isNaN(Number(arr[i]))) {
            // console.log('wasnt a number')
            next = Number(arr[i + 1])
            // console.log(arr[i + 1])
            let exp = arr[i]
            // console.log('current value is ' + arr[i] + ' and its type is ' + typeof(arr[i]))
            switch (exp) {
                case 'x': working *= next
                    //  console.log('it was multiplied and working is ' + working)
                    break;
                case '÷': working /= next
                    // console.log('it was divided and working is ' + working)
                    break;
                case '+': working += next
                    // console.log('it was added and working is ' + working)
                    break;
                case '-': working -= next
                    // console.log('it was subtracted and working is ' + working)
                    break;
                default:
            }
        } else {
            current = Number(arr[i])
        }
    }
    // console.log('working is ' + working + ' its type is ' + typeof (working))
    document.getElementById('screen').innerText = working
    prev = working
    // console.log('workNum = ' + workNum)
}

// combine all the numbers sequences into single numbers
//operate the math functions between them
//return the result to display array and show it
