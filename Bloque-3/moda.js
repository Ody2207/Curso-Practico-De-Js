
//Sacando la moda Reto


function sacandoLaModa(lista) {

    const listaCout = {};

    lista.map(                                                    
        function (elemnto){
    
            if(listaCout[elemnto]){
                listaCout[elemnto] += 1;  
    
            } else {
                listaCout[elemnto] = 1;
            }
            
        }
    );

    const listArray = Object.entries(listaCout).sort(            
        function (a, b){
            return a[1] - b[1];                                     
        }
    );

    return moda = listArray[listArray.length - 1];
};


//<----El metodo .map nos permite recorrer nuesto array (Linea 9)

//<-----El elemento .entries nos permite crear un objeto en array de nuevo (Linea 22)

// a[1] el numero que esta dentro del parentesis es la posicion del array dentro del array 
// ["1" 4]

// "1" = posicion 0
// 4 = posicion 1