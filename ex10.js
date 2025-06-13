function converterReaisParaDolares(valoremReais, taxadeConversao) {
  const valoremDolares = valoremReais / taxadeConversao;
  return valoremDolares;
}
   
{
const valoremReais = (100); 
const taxadeConversao = (5.50);

const valoremDolares = converterReaisParaDolares(valoremReais, taxadeConversao); 

console.log("R$ ${valoremReais} equivalem a US$ ${valoremDolares}"); 
}
