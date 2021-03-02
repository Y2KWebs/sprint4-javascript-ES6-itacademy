function tabla() {
  var a = document.getElementById("a");
  var b = parseInt(document.getElementById("b").value);

  if (parseInt(a.value) < 0) {
    document.getElementById("errorb").textContent = "Es campo es obligatorio";
    console.log("dssdf" + a.classList);
  } else {
    let c = parseInt(a.value);
    var res = "<table border=1>";
    for (i = 1; i <= b; i++) {
      res += `<tr><td>${c} X ${i} = ${c * i}</td></tr>`;
    }
    document.getElementById("tabla").innerHTML = res + "</table>";
  }
}
