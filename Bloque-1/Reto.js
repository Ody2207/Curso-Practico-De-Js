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
    return Number(lado1) + Number(lado2) + Number(base); 
};

// Es importate recordar que si yo solo pongo lado1 + lado2 + base Js no siempre reconoce que estos datos son tipo
// número, por eso aqui hay que hacer la coercion para poder decirle a Js que los datos que les estoy dando 
// son tipo numerico

// Resultado sin coercion 5 + 5 + 5 = 555 
// Resultado con coercion 5 + 5 + 5 = 15

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




// Reto 2 -- Conseguir altura, perimetro y area de un triangulo isoseles

// Funciones

    // Altura triangulo
function alturaTriangulo(base, lado) {
    return Math.sqrt((lado ** 2) - ((base ** 2) / 4));
};

    // Perimetro triangulo 

function perimetroTrianguloIso(base, lado) {
    return (lado * 2) + base;
};

    // Area triangulo

function areaTrianguloIso(base, altura) {
    return (base * altura) / 2
};


        //Conexion con HTML

// Calculo cuadrado
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

// Calculo triangulo



function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("Input-triangulo-lado1");
    const lado1 = input1.value;

    const input2 = document.getElementById("Input-triangulo-lado2");
    const lado2 = input2.value;

    const input3 = document.getElementById("Input-triangulo-base");
    const base = input3.value;

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro);
};



function calcularAreaTriangulo(){
    const input1 = document.getElementById("Input-triangulo-base");
    const base = input1.value;

    const input2 = document.getElementById("Input-triangulo-altura");
    const altura = input2.value;

    const perimetro = areaTriangulo(altura, base);
    alert(perimetro);
};

// Circulo
function calcularCircunferenciaCirculo() {
    const input = document.getElementById("Input-Circulo-radio");
    const radio = input.value

    const circunferencia = perimetroCirculo(radio);
    alert(circunferencia);
};

function calcularAreaCirculo() {
    const input = document.getElementById("Input-Circulo-radio");
    const radio = input.value;

    const area = areaCirculo(radio);
    alert(area);
};

// Triangulo Isoseles 

function calcularTrianguloIso() {
    const input1 = document.getElementById("Input-trianguloIso-lado");
    const lado = input1.value

    const input2 = document.getElementById("Input-trianguloIso-base");
    const base = input2.value

    const altura = alturaTriangulo(base, lado);

    const perimetro = perimetroTrianguloIso(base, lado);

    const area = areaTrianguloIso(base, altura);

    if(lado >= base){
        alert(
            "Esta es la altura: " 
            + altura 
            + " Este es el perimetro: "
            + perimetro 
            + " Esta es el area: " 
            + area
            + " Es un triangulo Isóceles");
        
    } else {
        alert("NO ES UN TRIANGULO ISÓCELES")
    
    }
};


// getElementById <-- Esta propiedad nos permite manipular la etiqueta que nosotros le asigenemos
// value <--- Esta propiedad nos permite decirle a Js que solo queremos manupular los datos de esta etiqueta

// Despues creamos una variable y llamamos a la funciones previamente echa y como propiedad de decimos 
// que va a interactuar con los daots de la etiqueta, y por ultimo mandamos una alerta con el resultado de esta.