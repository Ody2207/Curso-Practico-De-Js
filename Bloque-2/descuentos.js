// const percioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(percio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (percio * porcentajePrecioConDescuento) / 100;
    
    return precioConDescuento;
};

function onclickbuttonPriceDiscout(){

  const inputPrice = document.getElementById("InputPrice");
  const PriceValue = inputPrice.value;

  const InputDiscount = document.getElementById("InputDiscount");
  const DiscoutValue = InputDiscount.value;

  const precioConDescuento = calcularPrecioConDescuento(PriceValue, DiscoutValue);

  const resultP = document.getElementById("ResultP");
  resultP.innerText = "El precio con descuento son: $" + precioConDescuento;

};

// console.log({
//     percioOriginal, 
//     descuento, 
//     porcentajePrecioConDescuento, 
//     precioConDescuento,
// });