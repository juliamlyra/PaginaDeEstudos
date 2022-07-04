//Objetivo: Ao clicar no botão 'Resultado', capturar os valores dos inputs, fazer a soma e exibir na div com id 'Resultado'.
let inputvalue1;
let inputvalue2;

let input1;
let input2;
let exibirResultado;

let resultadoSoma;

function somaDeDoisNumeros(num1, num2) {
  let resultado = num1 + num2;
  return resultado;
}

function onClickResult() {
  input1 = document.getElementById("num1");
  input2 = document.getElementById("num2");
  exibirResultado = document.getElementById("resultado");

  inputvalue1 = parseFloat(input1.value);
  inputvalue2 = parseFloat(input2.value);

  resultadoSoma = somaDeDoisNumeros(inputvalue1, inputvalue2);

  exibirResultado.textContent = resultadoSoma;
}
