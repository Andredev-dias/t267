function somar() {
  var n1 = parseFloat(document.getElementById("n1").value);
  var n2 = parseFloat(document.getElementById("n2").value);

  var resp = document.getElementById("respSoma");
  resp.textContent = n1 + n2;
  // resp.innerHTML = n1 + n2;
  // resp.innerText = n1 + n2;
}

function sub() {
  var batata1 = parseFloat(document.getElementById("s1").value);
  var batata2 = parseFloat(document.getElementById("s2").value);
  var res = document.getElementById("respSub");
  res.innerHTML = batata1 - batata2;
}

function multi() {
  var m1 = parseFloat(document.getElementById("m1").value);
  var m2 = parseFloat(document.getElementById("m2").value);
  var res = document.getElementById("respMulti");
  res.innerHTML = m1 * m2;
}

function div() {
  var d1 = parseFloat(document.getElementById("d1").value);
  var d2 = parseFloat(document.getElementById("d2").value);
  var res = document.getElementById("respDiv");
  res.innerHTML = d1 / d2;
}

function media() {
  var m1 = parseFloat(document.getElementById("me1").value);
  var m2 = parseFloat(document.getElementById("me2").value);
  var m3 = parseFloat(document.getElementById("me3").value);
  var media = document.getElementById("respMedia");
  var res = (m1 + m2 + m3) / 3;

  if (res >= 7) {
    media.textContent = res.toFixed(3);
    media.style.color = "green";
    media.style.backgroundColor = "#6CD180";
    media.style.padding = "5px";
  } else {
    media.textContent = res.toFixed(3);
    media.style.color = "red";
    media.style.backgroundColor = "lightpink";
    media.style.padding = "5px";
  }
}

function contar() {
  const num = parseFloat($("#numeroInput").val());

  var resultadoStr = "";

  if (num <= 100) {
    for (var cont = 1; cont <= num; cont++) {
      resultadoStr = resultadoStr + cont + "<br>";
    }
    $("#result").html(resultadoStr);
  } else {
    $("#result").text("Digite um número menor que 100!!!");
  }
}
