function spinalCase(str) {
  var seperator = /\s|_|(?=[A-Z])/
  return str.split(seperator).join("-").toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));
