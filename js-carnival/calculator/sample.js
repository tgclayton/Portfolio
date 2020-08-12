var entries = [];
var total = 0;

var temp = '';
$("button").on('click', function() {   // Got a number, add to temp
 	var val = $(this).text();


  if (!isNaN(val) || val === '.') {   // Got some symbol other than equals, add temp to our entries
    temp += val;                    // then add our current symbol and clear temp
    $("#answer").val(temp.substring(0,10));
    

  } else if (val === 'AC') { //clear everything
    entries = [];
    temp = '';
    total = 0;
    $("#answer").val('')

  
  } else if (val === 'CE') { // Clear last entry
    temp = '';
    $("#answer").val('')
    
  
  } else if (val === 'x') { // Change multiply symbol to work with eval
    entries.push(temp);
    entries.push('*');
    temp = '';
    
  
  } else if (val === '÷') { // Change divide symbol to work with eval
    entries.push(temp);
    entries.push('/');
    temp = '';

  
  } else if (val === '=') { // Got the equals sign, perform calculation
  	entries.push(temp);

    var nt = Number(entries[0]);
    for (var i = 1; i < entries.length; i++) {
      var nextNum = Number(entries[i+1])
      var symbol = entries[i];
      
      if (symbol === '+') { nt += nextNum; } 
      else if (symbol === '-') { nt -= nextNum; } 
      else if (symbol === '*') { nt *= nextNum; } 
      else if (symbol === '/') { nt /= nextNum; }
      
      i++;
    }
    
    
    if (nt < 0) { // Swap the '-' symbol so text input handles it correctly
      nt = Math.abs(nt) + '-';
    }
    
    $("#answer").val(nt);
		entries = [];
    temp = '';
    
  
  } else { // Push number
    entries.push(temp);
    entries.push(val);
    temp = '';
  }
});