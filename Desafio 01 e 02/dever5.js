function usuarios()
{
var usuario = 
[
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

    var diego = 
    {
        nome: "",
        habilidades: [""]
    };
    var gabriel = 
    {
        nome: "",
        habilidades: [""]
    };
    diego=usuario[0];
    gabriel=usuario[1];

	var diego_text="O " + diego.nome + " possui as habilidades: " + diego.habilidades;
    var gabriel_text = " O " + gabriel.nome + " possui as habilidades: " + gabriel.habilidades + ".";
    
	document.getElementById("mensagem1").innerHTML = diego_text;
	document.getElementById("mensagem2").innerHTML = gabriel_text;
}
