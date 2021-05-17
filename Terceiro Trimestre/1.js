$(function () {
    $("#ir").click(function () 
    {
      let v1 = $("#op1").val();
      let v2 = $("#op2").val();
      let operacao = $("#chave").val();
      $("#result").text("Resultado = " + calculadoraope(v1, v2, operacao));
    });

    $("#nao_repetir").click(function () 
    {
      $("#op1").val("");
      $("#op2").val("");
      $("#result").text("");
    });
        function calculadoraope(v1, v2, op) {
            num1 = parseFloat(v1);
            num2 = parseFloat(v2);
            switch (op) {
              case "Soma":
                return num1 + num2;
                break;
              case "Subtração":
                return num1 - num2;
                break;
              case "Multiplicação":
                return num1 * num2;
                break;
              case "Divisão":
                return num1 / num2;
                break;
            }
          }
  });