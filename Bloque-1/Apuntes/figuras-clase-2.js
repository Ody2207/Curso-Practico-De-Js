// En esta clase encapsulamos todas nuestras operaciones en funciones para que el usuario pueda eleguir 
// los argumentos de la funcion y así hacerlo mucho más automatico

// Este es el código del cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado){
    return lado * 4;
};

// perimetroCuadrado(33);
// los que nosotros pongamos dentro de los parentesis ya no sera parametros si no argumentos


function areaCuadrada(lado){
    return lado * lado;
};

console.groupEnd();




// Este es el código del triangulo
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;     
};

function areaTriangulo(base, altura){
    return (base * altura) / 2
};

console.groupEnd();




// Este es el código del circulo 
console.group("Circulo");

// // Diametro
function diametroCirculo(radio){
    return radio * 2;
};

// Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
};

// // Área 
function areaCirculo(radio){
    return  (radio ** 2) * Math.PI;
};

console.groupEnd();