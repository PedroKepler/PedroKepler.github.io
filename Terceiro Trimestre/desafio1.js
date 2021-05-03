$(function () {
    $("#ir").click(function () 
    {
        alert("teste");
        let text_array = $("#text_array").val();
        text_array = text_array.replace(/\s+/g, '');
        let array = text_array.split(",");
        let tamanho = array.length;
        if (array[tamanho - 1] == "") {
            array.pop();
        }
        $("#result").html("<br>Valor minimo: " + minimo(array) + "<br> Valor máximo: " 
        + maximo(array) + "<br> Array sem repetição: " + nao_repetir(array) + "<br> Array em ordem: " + ordem_crescente(array));
    })
    $("#nao_repetir").click(function () 
    {
        $("#result").text("");
        $("#text_array").val("");
    })
    function minimo(v) {
        let mini;
        v.forEach(function (numero) 
        {
            if (numero == Math.min(...v)) {
                mini = numero;
            }
        });
        return mini;
    }
    function maximo(v) {
        let max;
        v.forEach(function (numero) {
            if (numero == Math.max(...v)) {
                max = numero;
            }
        });
        return max;
    }
    function nao_repetir(v) {
        let v_nao_repetir = [...new Set(v)];
        return v_nao_repetir.join(",");
    }
    function ordem_crescente(v) {
        return v.sort().join(",");
    }
})