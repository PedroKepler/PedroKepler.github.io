function exp ()
{
    var anos = document.getElementById("entrada1").value;
    anos = parseInt(anos);

    if (anos>0 && anos<=1)
    alert("iniciante");
    else 
      if(anos>1 && anos<=3)
    alert ("Intermediário");
    else 
      if(anos>3 && anos<=6)
    alert ("Avançado");	
    else 
      if(anos>=7)
    alert ("Jedi master");
    else 
      if(anos<0)
    alert ("Número invalido");
}