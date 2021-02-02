function adicionar ()
{
	var elemento_quarto = document.getElementById('teste3');
    var valordoinput = document.getElementById('text').value;
    
	for (i of  nomes_array) //Para percorrer todo o for ( java script cefet) 
	{
      var acrescentarli = document.createElement('li');
      var texto = document.createTextNode(i);

	  acrescentarli.appendChild(texto);
	  elemento_quarto.appendChild(acrescentarli);
	}

	var acrescentarli = document.createElement('li');
	var texto = document.createTextNode(valordoinput);

	acrescentarli.appendChild(texto);
	elemento_quarto.appendChild(acrescentarli);

    nomes_array.splice(0,3);
}