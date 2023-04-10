//Definir las variables lowerLimitEven, upperLimitEven, lowerLimitOdd y upperLimitOdd. 
//Se deben mostrar en consola todos los números pares existentes entre el lowerLimitEven y 
//upperLimitEven con el mensaje “El número <num> es par”. Y mostrar todos los valores impares 
//que existen entre lowerLimitOdd y upperLimitOdd mostrando el mensaje “El número <num> es 
//impar


let lowerLimitEven = 2;
let upperLimitEven = 10;
let lowerLimitOdd = 3;
let upperLimitOdd = 15;

let i;
let t;

for (i = lowerLimitEven+1; i < upperLimitEven; i++){
     if ( i % 2 === 0){
     console.log(`El numero ${i} es par`);
     } 
}

for (t = lowerLimitOdd+1; t < upperLimitOdd; t++){
     if (t % 2 !== 0){
          console.log(`El numero ${t} es impar`);
     } 
}






     







