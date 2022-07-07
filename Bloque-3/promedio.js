
 function calcularMediaAritmetica(lista){

     const sumaLista = lista.reduce(                    // <---- Este metodo reduce permite tener como argumento una funcion e ir sumando todos los elemntos de la lista
         function(valorAcumulado = 0, nuevoElemento){
             return valorAcumulado + nuevoElemento;
         }
     );

     const promedioLista = sumaLista / lista.length;
     return promedioLista;
};

// --------- Esta es otra forma de sacar la media o promedio con un for
     // let sumaLista = 0;

     // for (let i = 0; i < lista.length; i++){
     //     sumaLista = sumaLista + lista[i];

     // };


