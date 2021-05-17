$(function () {
    $("#ir").click(function () 
    {
      let salario = $("#valor").val();
      console.log(salario);
      $("#result").text("a taxa é= :" + imposto(salario) + " reais.");
    });

    $("#nao_repetir").click(function () 
    {
      $("#valor").val("");
      $("#result").text("");
    });

    function imposto(sal) 
    {
      x= parseFloat(sal);
      if (x <= 1903.99) {
        return "Sem taxas!";
      }
      if (x > 1903.99 && x <= 2826.65) {
        return x * 0.075 - 142.8;
      }
      if (x > 2826.65 && x <= 3751.05) {
        return x * 0.15 - 354.8;
      }
      if (x > 3751.05 && x <= 4664.68) {
        return x * 0.225 - 636.13;
      }
      if (x > 4664.68) {
        return x * 0.275 - 869.36;
      }
    }
  });