function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.uol.com.br/");
    // window.location.href = "https://www.uol.com.br/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "obrigado por passar o mouse";
    elemento.innerHTML = "obrigado por passar o mouse";
    //alert("troca texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "passa o mouse aqui";
    elemento.innerHTML = "Passe o Moiuse aqui";
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*
function soma(n1,n2){
return n1 + n2 ;
}
var validar;
function validaidade(idade){
    validar;
    if (idade >=18){
        validar =true
    } else{
        validar= false
    }
    return validar;
}
var idade = prompt("Qual a sua idade");
validaidade(idade);
console.log(validaidade(idade));
*/


//alert(soma(5,10));


/*
var d= new Date();
alert("minutos " + d.getMinutes());
alert(d.getMonth()+1 + " mês ");
*/
/*
var count;
for(count=0; count<=5; count++){
    alert(count);
};
*/
/*
var count = 0;
while(count <= 5){
        console.log(count);
  alert(count);
   count++;
    };
*/

//var idade = prompt("Qual sua idade?");
  //  if (idade >= 18){
    //    alert("Maior de idade");
    // } else{
       // alert("Menor de idade");
    // };
   
//
//var fruta =[{nome:"maçã", cor:"vermelha"},{nome:"uva", cor:"roxa"}]
//console.log(fruta.nome);
//alert(fruta[1].nome);

//var lista = ["maça","pêra","laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join("+"));
//console.log(lista.reverse());

//console.log(lista.length);
//alert(lista[]);



//var nome="Juarez Ferraz";
//var idade=34;
//var idade2= 10;
//var frase ="Japão é um bom time"
//alert("Meu nome é " + nome + " tenho " + idade +" anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.toLowerCase());
//console.log(frase.toUpperCase());
//console.log(frase.replace("Japão","Brazil"));
//alert(frase.replace("Japão","Brazil"));
