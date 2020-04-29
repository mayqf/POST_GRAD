function findElement(arr, func) {
  let num = 0;
  var lucky = arr.filter(func);
  if (lucky.length==0) {
  console.log('undefined')
} else {
  console.log(lucky[0])
}
  return num;
  
}

findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })