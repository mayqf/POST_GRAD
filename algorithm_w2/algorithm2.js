function repeatStringNumTimes(str, num) {
  var str_int=str;
   if (num<1) {
     console.log('empty');
    return ''
  } else {
    var i;
    for (i = 0; i < num; i++) {
    str += str_int;}
    console.log(str);
    return str
  };
  }
  
  repeatStringNumTimes("*", 3);
  repeatStringNumTimes("abc", 3)
  repeatStringNumTimes("abc", 4)
  repeatStringNumTimes("abc", 1)
  repeatStringNumTimes("*", 8)
  repeatStringNumTimes("abc", -2)
  repeatStringNumTimes("abc", 0)