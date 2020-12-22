function quadradoColorido()
{
	var quadrados = document.createElement('div');
    quadrados.style.width = '100px';
    
    quadrados.style.height = '100px';
    
    quadrados.style.backgroundColor = '#FF0000';
    
    quadrados.style.marginBottom = '1px'
    
    quadrados.style.display = 'inline-block';
    
    var result = document.getElementById('teste');
    
	quadrados.onmouseover = function() {

        quadrados.style.backgroundColor = getRandomColor();
        
      }
	result.appendChild(quadrados);
}

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
  return color;
}
