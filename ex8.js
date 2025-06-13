
function calcularIdade(anoNascimento) {
  let anoAtual = new Date().getFullYear();
  let idade = anoAtual - anoNascimento;
  return idade;
}

    console.log("a idade é " + calcularIdade(2005))


