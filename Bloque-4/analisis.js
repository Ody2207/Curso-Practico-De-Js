const salarioCol = colombia.map(
    function (personita){
        return personita.salary;
    }
);

const salariosColSorted = salarioCol.sort(
    function( a, b ){
        return a - b;
    }
);




function calcularPromedioAritmetico(lista){             
    const sumaLista = lista.reduce(                     
        function(valorAcumulado = 0, nuevoElemento){
        return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
};

function esPar(){
    return (numerito % 2 === 0);
}

function medianaSalario(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)){

        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const promedio1y2 = calcularPromedioAritmetico([personitaMitad1, personitaMitad2]); 

        return mediana = promedio1y2;
    } else {

        const personitaMitad = lista[mitad];

        return mediana = personitaMitad;
    }
}

console.log(
    medianaSalario(salariosColSorted)
);



// // Helpers
// function esPar(numerito) {
//     return (numerito % 2 === 0);
//   }
  
//   function calcularMediaAritmetica(lista) {
//     const sumaLista = lista.reduce(
//       function (valorAcumulado = 0, nuevoElemento) {
//         return valorAcumulado + nuevoElemento;
//       }
//     );
//     const promedioLista = sumaLista / lista.length;
//     return promedioLista;
//   }
  
//   // Calculadora de mediana
//   function medianaSalarios(lista) {
//     const mitad = parseInt(lista.length / 2);
  
//     if (esPar(lista.length)) {
//       const personitaMitad1 = lista[mitad - 1];
//       const personitaMitad2 = lista[mitad];
  
//       const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
//       return mediana;
//     } else {
//       const personitaMitad = lista[mitad];
//       return personitaMitad;
//     }
//   }