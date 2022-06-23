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
    return (base * altura) / 2;
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



//Conexion con HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("Input-Cuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
};

function calcularAreaCuadrado(){
    const input = document.getElementById("Input-Cuadrado");
    const value = input.value;

    const area = areaCuadrada(value);
    alert(area);
};

// getElementById <-- Esta propiedad nos permite manipular la etiqueta que nosotros le asigenemos
// value <--- Esta propiedad nos permite decirle a Js que solo queremos manupular los datos de esta etiqueta

// Despues creamos una variable y llamamos a la funciones previamente echa y como propiedad de decimos 
// que va a interactuar con los daots de la etiqueta, y por ultimo mandamos una alerta con el resultado de esta.