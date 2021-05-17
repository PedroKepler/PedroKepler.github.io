$(function () {
    $("#ir").click(function () {
      let pose1 = $("#v1").val();
      let pose2 = $("#v2").val();
      let pose3 = $("#v3").val();
      if (pose1 <= 0 || pose2 <= 0 || pose3 <= 0)
       {
        $("#resultado").text(
          "VALORES INVÁLIDOS"
        );
      } else {
        $("#result").text("O " + triangulo(pose1, pose2, pose3));
      }
    });

    $("#nao_repetir").click(function () {
      $("#l1").val("");
      $("#l2").val("");
      $("#l3").val("");
      $("#result").text("");
    });

    function triangulo(l1, l2, l3) {
      primeiro = parseFloat(l1);
      segundo = parseFloat(l2);
      terceiro = parseFloat(l3);
      if (cond_existencia_triangulo(primeiro, segundo, terceiro) == true) {
        return classificação_triangulo(primeiro, segundo, terceiro);
      } else {
        return "Triângulo não existe.";
      }
    }

    function modulo(v) {
      if (v < 0) {
        v = v * -1;
      }
      return v;
    }

    function cond_existencia_triangulo(l1, l2, l3) {
      if (
        (modulo(l2 - l3) < l1 && l1 < l2 + l3) ||
        (modulo(l1 - l3) < l2 && l2 < l1 + l3) ||
        (modulo(l1 - l2) < l3 && l3 < l1 + l2)
      ) {
        return true;
      } else {
        return false;
      }
    }

    function classificação_triangulo(lado1, lado2, lado3) {
      if (lado1 == lado2 && lado1 == lado3 && lado2 == lado3) {
        return "Triângulo é equilátero.";
      }
      if (
        (lado1 == lado2 && lado1 != lado3) ||
        (lado2 == lado3 && lado2 != lado1) ||
        (lado3 == lado1 && lado3 != lado2)
      ) {
        return "Triângulo é Isóceles.";
      }
      if (lado1 != lado2 && lado1 != lado3 && lado3 != lado2) {
        return "Triângulo é Escaleno.";
      }
    }
  });