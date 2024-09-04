let numRand = Math.floor(Math.random() * (1,10) +1);
console.log(numRand);

let numUser = parseInt(prompt("Elije un numero para adivinar: "));
let vidas = 3;

while(numUser !== numRand && vidas > 1){
    console.log("Lo siento, fallaste");
    vidas --;
    console.log("uyyyy, ahora tus vidas son " + vidas + ", Ten cuidado!");
    numUser = parseInt(prompt("Intenalo de nuevo, ingresa otro numero: "));
}


if( numUser === numRand){
    console.log("Ganasteeeeeeee");
}else{
    console.log("Perdiste, ni modo, intentalo de nuevo!");
    console.log("El numero incognito era: " + numRand);
}