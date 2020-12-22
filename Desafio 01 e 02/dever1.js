function chamafuncao ()
{
    var endereco = 
    {
        rua: "Rua dos pinheiros", 
	 	numero: 1293, 
	 	bairro: "Centro", 
		cidade: "São Paulo", 
        uf: "SP",
    }
        ;
        var resultado = "O usuario mora em" + endereco.cidade + "/" + endereco.uf + ", no bairro" + endereco.bairro + "na rua " 
        + endereco.rua + "com o número" + endereco.numero;
        document.getElementById("resultado").innerHTML = resultado;
        return 0;
}