$(function () {
    $("#ir").click(function () 
    {
        let text_array = $("#text_array").val();
        text_array = text_array.replace(/\s+/g, '');
        let array = text_array.split(",");
        let tamanho = array.length;
        if (array[tamanho - 1] == "") {
            array.pop();
        }
        $("#result").html("<br>Sequencia de fibonacci até " + text_array + 
        " números: " + fibonacci(text_array));
    })

    $("#nao_repetir").click(function ()
     {
        $("#result").text("");
        $("#text_array").val("");
    })
    function fibonacci(s) {
        let array = new Array;
        array.push(0);
        let x = 0;
        let y = 1;
        let fibo = 1;
        for (let i = 0; i < s - 1; i++)
         {
            array.push(fibo);
            fibo = x + y;
            x = y;
            y = fibo;
        }
        return array.join(",");
    }
})