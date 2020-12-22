function verificando ()
{
    var verficar = ["Javascript", "ReactJS", "React Native"];

	if(verficar.indexOf("Javascript") == -1)
	{
		alert("não encontrado");
		return 0;
	}
	else{
		x = 1;	
		alert(" Javascript está no array ");
		return 1;
	}
}