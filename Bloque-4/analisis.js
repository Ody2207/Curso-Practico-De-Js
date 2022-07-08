// Helpers o Utils--- En programación esto se conoce como funciones que no son parte de la logiaca del código
// pero las nesecitamos para el programa
function esPar(numerito){
    return (numerito % 2 === 0);
}

function calcularPromedioAritmetico(lista){             
    const sumaLista = lista.reduce(                     
        function(valorAcumulado = 0, nuevoElemento){
        return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
};

// Calculadora de mediana

function medianaSalario(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)){

        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularPromedioAritmetico([personitaMitad1, personitaMitad2]); 

        return mediana;
    } else {

        const personitaMitad = lista[mitad];

        return personitaMitad;
    }
}

// Mediana General

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

const medianaGeneralCol = medianaSalario(salariosColSorted);

// Mediana del Top 10%

const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted - spliceStart;

const salariosColTop10 = salariosColSorted.splice(
    spliceCount,
    spliceStart,
);

const medianaTop10Col = medianaSalario(salariosColTop10)

console.log({
    medianaGeneralCol,
    medianaTop10Col,

});
