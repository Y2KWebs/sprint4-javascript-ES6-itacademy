function tabla(a, b) {
  var res = "";
  for (i = 1; i <= b; i++) {
    res += `${a} X ${i} = ${a * i}
`;
  }
  return res;
}

var a = prompt("favor intoduzca valor 1");
var b = prompt("favor intoduzca valor 2");
console.log(tabla(a, b));
