function confirmEnding(str, target) {
    var n = str.search(target);
    if ( n == -1) {
    console.log("It does not contain");
  } else {
   if(n == ((str.length)-(target.length))){
  console.log("True")}
  else{
  console.log('False');
   } 
    
  }};
  confirmEnding("Bastian", "n")
  confirmEnding("Bastian", "n")
  confirmEnding("Connor", "n")
  confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")
  confirmEnding("He has to give me a new name", "name")