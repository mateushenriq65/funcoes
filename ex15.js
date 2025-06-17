function verificarNumero(numero) {
  if (numero > 0) {
    return "positivo";
  } else if (numero < 0) {
    return "negativo";
  } else {
    return "zero";
  }
}

console.log(verificarNumero(4)); 
console.log(verificarNumero(-2)); 
console.log(verificarNumero(4,80)); 
console.log(verificarNumero(0)); 
console.log(verificarNumero(-2.71)); 