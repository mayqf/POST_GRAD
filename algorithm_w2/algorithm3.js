function truncateString(str, num) {
  if (str.length > num) {
  console.log(str.substring(0,num)+'...')
} else {
  console.log(str)
}
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
truncateString("Peter Piper picked a peck of pickled peppers", 11)
truncateString("A-", 1)
truncateString("Absolutely Longer", 2)
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)