function pares ()
{
 
 var numero1 = document.getElementById("entrada1").value;
 var numero2 = document.getElementById("entrada2").value;
 numero1 = parseInt(numero1);
 numero2 = parseInt(numero2);
 var x=0;
 var y=0;
 var result = "Os números pares são:"
 if (numero1<numero2)
    {
    x = numero1;
    y = numero2;
    }
    else

    {
        y = numero1;
        x = numero2;
       
    }
 for (x;x<=y;x++)
 {
 if(x%2==0)
 result+= x+ ",";
}
alert (result);
}