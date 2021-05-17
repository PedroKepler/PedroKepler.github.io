$(function () {
    $("#ir").click(function () {
      let l = $("#v1").val();
      let rotacao = $("#v2").val();
      rotacao = parseInt(rotacao);
      $("#result").text(misturar(l, rotacao));
    });

    $("#nao_repetir").click(function () {
      $("#v1").val("");
      $("#v2").val("");
      $("#result").text("");
    });

    function misturar(letra, rotacoes) {
      let array_letras = letra.split("");
      let array_alfabeto = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
      ];
      let tam_letras = array_letras.length;
      let tam_alfabeto = array_alfabeto.length;
      let i = 0;
      let y = 0;
      let a;
      let aux;
      while 
      (y < tam_letras) {
        aux = array_letras[y];
        while (i < tam_alfabeto) 
        {
          if (array_alfabeto[i] == aux) {
            if 
            (i + rotacoes > tam_alfabeto) {
              a = i + rotacoes - tam_alfabeto;
              array_letras[y] = array_alfabeto[a];
            } else if (i + rotacoes == tam_alfabeto) {
              array_letras[y] = array_alfabeto[0];
            } else {
              array_letras[y] = array_alfabeto[i + rotacoes];
            }
          }
          i++;
        }
        i = 0;
        y++;
      }
      let string = array_letras.join("");
      return string;
    }
  });