var numberDict = {};
numberDict[0] = "1101111";
numberDict[1] = "0001001";
numberDict[2] = "1011110";
numberDict[3] = "1011011";
numberDict[4] = "0111001";
numberDict[5] = "1110011";
numberDict[6] = "1110111";
numberDict[7] = "1001001";
numberDict[8] = "1111111";
numberDict[9] = "1111011";

function printChar(bin, numPart){
  if (bin==1){
    if (numPart === "_"){
      return "_";
    } else {
      return "|"
    }

  } else { return " ";}
}

function printTop(number){
  var topRow ="";
  for (var i = 0; i < number.length; i++) {
    topRow += " ";
    if (number.charAt(i)===":"){
      topRow += " ";
    } else {
      topRow += printChar(numberDict[number.charAt(i)].charAt(0), "_");
    }
    topRow += " ";
  }
  console.log(topRow);
}

function printMid(number){
  var midRow ="";
  for (var i = 0; i < number.length; i++) {
    if(number.charAt(i)===":"){
      midRow += " * ";
    }
    else{
      midRow += printChar(numberDict[number.charAt(i)].charAt(1), "|");
      midRow += printChar(numberDict[number.charAt(i)].charAt(2), "_");
      midRow += printChar(numberDict[number.charAt(i)].charAt(3), "|");
    }}
    console.log(midRow);
  }

  function printBot(number){
    var midRow ="";
    for (var i = 0; i < number.length; i++) {
      if(number.charAt(i)===":"){
        midRow += " * ";
      }
      else{
        midRow += printChar(numberDict[number.charAt(i)].charAt(4), "|");
        midRow += printChar(numberDict[number.charAt(i)].charAt(5), "_");
        midRow += printChar(numberDict[number.charAt(i)].charAt(6), "|");
      }}
      console.log(midRow);
    }


    function printNumber(num){
      printTop(num);
      printMid(num);
      printBot(num);
    }

    var today = new Date();

console.log(new Array(60 + 1).join('\n'));
printNumber(today.toTimeString().substr(0,8));
