// Creando el Rango y rango medio



function CreandoRango(lista) {

    const listaOrdenada = lista.sort(
        function(a, b) {
            return a - b;
        }
    );

    const primerValor = listaOrdenada[0];
    const segundoValor = listaOrdenada.pop();

    const rango = segundoValor - primerValor;
    const rangoMedio = (segundoValor + primerValor) / 2;

    return console.log("El rango es: " + rango + " El rango Medio es: " + rangoMedio)
};

// ¿Cuál tipo de promedio elegiste para trabajar?
    // Yo en lo personal elegi el rango

// ¿Qué casos de uso tiene tu tipo de promedio?
    //Este nos permite conocer de que numero medio entre el número más chico y el más grande de nuestra lista

// ¿Cómo traduces su fórmula a código JavaScript?
    // Primero ordene la lista 
    // Despues tome en dos variables el número más chico y el más grande 
    // Para el rango solo reste estos dos números
    // Y para el rango medio los sume y despues los dividi entre 2


