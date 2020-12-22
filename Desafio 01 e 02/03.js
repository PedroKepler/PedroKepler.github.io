
function terceiraQuestao ()
{
	var nomes = ["Diego", "Gabriel", "Lucas"];
    var elemento = document.createElement('ul');
	elemento.style.display = 'inline-block';
	for (i of nomes) 
	{
      var acrescentarli = document.createElement('li');
      var texto = document.createTextNode(i);

      acrescentarli.appendChild(texto);
      elemento.appendChild(acrescentarli);
	}

	var resultado = document.getElementById('teste2');
	resultado.appendChild(elemento);


}