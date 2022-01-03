
//ejercicio 1
function numAleatorio() {

        return Math.random() * (100 - 0) + 0;
    }


    
//ejercicio 5
function validarDni(dni) {

    var regEx_dni = /^[XYZ]?\d{5,8}[A-Z]$/;

    if(regEx_dni.test(dni) === true){
    
           return console.log("dni correcto");  
    }else{
          return console.log("dni incorrecto");
    }
}

//ejercicio 4

let  x = 100;
let  y = 2;
var numerosPrimos = [];

for (; y < x; y++) {

  if (primo(y)) {
    numerosPrimos.push(y);
  }
  
}

console.log(numerosPrimos);

function primo(numero) {

  for (var i = 2; i < numero; i++) {

    if (numero % i === 0) {
      return false;
    }

  }

  return numero !== 1;
}




//ejercicio 3

const numbers = [45, 4, 9, 16, 25];
const mayor = numbers.filter(myFunction);

console.log(mayor) ;

function myFunction(value, index, array) {
  return value > 18;
}




//ejercicio 6
function comparar(palindromo)
{

    for( var i = palindromo.length; i > 0; i-- )
    {
        if( palindromo[i] = palindromo.charAt(palindromo.length)-1 )
        {
            console.log('es un palíndromo');
        }else{
            console.log('no es un palíndromo');
        }
    }
}
comparar('La ruta nos aporto otro paso natural');


//ejercicio 2
function adivinar(){
var x = function numeroAleatorio() {
    return Math.random() * (100 - 0) + 0;
  }
var numeroEntrada = prompt("introduce un número entre 0 y 100");

if ( numeroEntrada < x){
    return console.log("tu número es menor");
}else if(numero = x){
    return console.log("tu número es igual");
}else{
    return console.log("tu número es mayor");
}
}

function adivinaNumero(num) {
    this.numero = num;
    var aleatorio = function numeroAleatorio() {
        return Math.random() * (100 - 0) + 0;
    this.comparar = function() {
        if ( numeroEntrada < x){
            return console.log("tu número es menor");
        }else if(numero = x){
            return console.log("tu número es igual");
        }else{
            return console.log("tu número es mayor");
        }
    
    }
    }
    }
    var num = console.log("escribe un número");
    var y = new adivinaNumero("num");

    class adivinaNumero {
        constructor(num) 
        { this.numero=num; }
        
        comparar(numero) {
            var aleatorio = function numeroAleatorio() {
                return Math.random() * (100 - 0) + 0;
                
                if ( numero < aleatorio){
                    return console.log("tu número es menor");
                }else if(numero = aleatorio){
                    return console.log("tu número es igual");
                }else{
                    return console.log("tu número es mayor");
                }
        
          }
        }
      }
      let num = promt ("escribe un número");
      let intento = new adivinaNumero(num);



