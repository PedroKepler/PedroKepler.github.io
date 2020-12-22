function quadrado()
{
	var quadrados = document.createElement('div');
	quadrados.style.width = '100px';
	quadrados.style.height = '100px';
	quadrados.style.backgroundColor = '#FF0000';
	quadrados.style.marginBottom = '1px'
	quadrados.style.display = 'inline-block';
	var result= document.getElementById('teste');
	result.appendChild(quadrados);
}