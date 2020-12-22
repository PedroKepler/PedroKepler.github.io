var nomes_array = ["Diego", "Gabriel", "Lucas"];

function adicionar ()
{
	var elem = document.getElementById('apresent');
    var valordoinput = document.getElementById('valor').value;
    
	for (i of nomes_array) //Para percorrer todo o for ( java script cefet) 
	{
      var li = document.createElement('li');
      var palavra = document.createTextNode(i);

	  li.appendChild(palavra);
	  elem.appendChild(li);
	}

	var li = document.createElement('li');
	var palavra = document.createTextNode(valordoinput);

	li.appendChild(palavra);
	elem.appendChild(li);

    nomes_array.splice(0,3);
}