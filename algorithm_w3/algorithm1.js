function sumAll(arr) {
  var max=(Math.max(...arr));
  var min=(Math.min(...arr));
  var sum =0
  for (var i = min; i <= max; i++) {
    sum =sum+i;
    
}
  return sum;
}

sumAll([1, 4]);
console.log(sumAll([1, 4]))
