// Asi es como calculamos los parametos de las figuras geometricas con constantes y las imprimimos, tambien 
// las encapsulamos con console.group para poder tener un mejor orden al imprimirlo en la consola

// Este es el código del cuadrado
console.group("Cuadrado");

const ladoCuadrado = 5;
console.log("Lados del cuadrado mide " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es " + perimetroCuadrado + "cm");


const areaCuadrada = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es " + perimetroCuadrado + "cm2");

console.groupEnd();


// Este es el código del triangulo
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const resultadoLadoTriangulo = ladoTriangulo1 * 2;

console.log(
    "Los lados del triangulo miden " 
    + ladoTriangulo1 
    + "cm, " 
    + ladoTriangulo2 
    + "cm, " 
    + baseTriangulo 
    + "cm "
);


const alturaTriangulo = 5.5;
console.log("la altura del triangulo es: " + alturaTriangulo + "cm");

const perimetroTriangulo1 = resultadoLadoTriangulo + baseTriangulo;
console.log("El perimetro del triangulo es " + perimetroTriangulo1 + "cm")

const perimetroTriangulo2 = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es " + perimetroTriangulo2 + "cm")


const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("area del triangulo es " + areaTriangulo);

console.groupEnd();

// Este es el código del circulo 

console.group("Circulo");

// Radio 
const radioCirculo = 4;
console.log("El radio del círculo es: " + radioCirculo + "cm")

// Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del círculo es: " + diametroCirculo + "cm")

// pi
// const pi = 3.1415;
const Pi = Math.PI;
console.log("Pi es: " + Pi)


// Circunferencia
const perimetroCirculo = diametroCirculo * Pi;
console.log("El perimetro del círculo es: " + perimetroCirculo + "cm")

// Área 
const areaCirculo = (radioCirculo ** 2) * Pi;
console.log("El área del círculo es: " + areaCirculo + "cm2")


console.groupEnd();