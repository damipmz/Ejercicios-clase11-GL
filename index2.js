/* Atención, equipo de inteligencia! Hemos recibido un reporte de un importante 
hackeo en nuestra red de computadoras. Necesitamos su ayuda para encontrar al 
responsable del ataque y detenerlo antes de que cause más daño. Se sabe que el hacker es 
parte de una lista de los 10 delincuentes más buscados. Además sabemos que tiene fanatismo 
por dejar “su marca” en los registros, creemos que se llama Juan o Pedro, y que sus números 
favoritos son el 3 y el 7. Encuentren al hacker lo más rápido que puedan, el destino de todos 
está en sus manos. 
['Juan', 'Santiago', 'Luis', 'Carlos', 'Miguel', 'Jorge', 'Fernando', 'Pedro', 'Andrés', 'Daniel'] */

let sospechosos = ['Juan', 'Santiago', 'Luis', 'Carlos', 'Miguel', 'Jorge', 'Fernando', 'Pedro', 'Andrés', 'Daniel'];

let i;

// Con un for recorro el largo del array, o sea, los sospechosos.
for (i = 0; i < sospechosos.length; i++){
    // Comparo las dos posibilidades para ver coicidencias con los nombres dados.
    if (sospechosos[i] === 'Juan' || sospechosos[i] === 'Pedro'){
        // comparo los indices, el que coincida con nombre e indice, es el hacker.
        if(i == 3){
            console.log(sospechosos[i]);
        } else if (i == 7){
            console.log(`El hacker es: ${sospechosos[i]}.`);
        }
    }
        
}


