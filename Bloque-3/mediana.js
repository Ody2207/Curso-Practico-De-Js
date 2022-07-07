function numerosOrdenados(numeros) {                    // Funcion para ordenar los numeros del array
    function comparar ( a, b ){ 
        return a - b; 
    }

   return numYaOrdenados = numeros.sort(comparar);
}


function calcularPromedioAritmetico(lista){             // Funcion para sacar promedio
    const sumaLista = lista.reduce(                     // <---- Este metodo reduce permite tener como argumento una funcion e ir sumando todos los elemntos de la lista
        function(valorAcumulado = 0, nuevoElemento){
        return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
};

function esPar(numerito) {                              // Permite validad si es par o inpar 
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
};


function sacandoMediana(lista){

    const listaOrdenada = numerosOrdenados(lista);
    const numeros = parseInt(listaOrdenada.length / 2);
    let mediana;

    if (esPar(listaOrdenada.length)) {

        const elemento1 = listaOrdenada[numeros - 1];
        const elemento2 = listaOrdenada[numeros];
    
        const promedio1y2 = calcularPromedioAritmetico([elemento1, elemento2]);
    
        mediana = promedio1y2;
    } else {
    
        mediana = listaOrdenada[numeros];
    
    };

    return mediana;
}


// Primer reto: Convertir esto en funciones --------Completado !
// Segundo reto: Ordenar las arrays ----------------Completado !