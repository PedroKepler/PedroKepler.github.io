$(function () {
    $("#ir").click(function () {
        let text_array = $("#text_array").val();
        text_array = text_array.replace(/\s+/g, '');
        let array = text_array.split(",");
        let tamanho = array.length;
        if (array[tamanho - 1] == "") {
            array.pop();
        }
        $("#result").html("<br>Duplicados " + elemento_duplicado(array) + "<br> pares: "
         + array_par(array) + "<br> Soma dos elementos: " + soma(array));
    })
    //LIMPAR CAIXA
    $("#nao_repetir").click(function () {
        $("#result").text("");
        $("#text_array").val("");
    })
    function elemento_duplicado(v) {
        let y = v.map(function (numero) {
            return numero * 2;
        })
        return y;
    }
    //FUNÇÃO DO ARRAY PAR
    function array_par(v) {
        let x = v.filter(function (numero) {
            return numero % 2 == 0;
        })
        if (x == "") {
            return "Não tem valores pares";
        }
        else {
            return x;
        }
    }
    //FUNÇÃO DE SOMA
    function soma(v) {
        let x = v.reduce(function (soma, numero) {
            return parseInt(soma) + parseInt(numero);
        });
        return x;
    }

})