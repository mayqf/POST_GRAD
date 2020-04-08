function booWho(bool) {
  var type=typeof(bool)
  bool = (type == "boolean") ? "true" : "false";
  console.log(bool);
}

booWho(true)
booWho(false)
booWho([1, 2, 3])
booWho([].slice)
booWho({ "a": 1 })
booWho(NaN)
booWho("a")
booWho("true")
booWho("false")