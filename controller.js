//Objetivo: Ao clicar no botão 'Resultado', capturar os valores dos inputs, fazer a soma e exibir na div com id 'Resultado'.

function calc(valor1, valor2) {
  let resultado = valor1 + valor2;
  return resultado;
}


function onClickGetResult() {
  let inputValue1 = parseFloat(document.getElementById("valor1").value);
  let inputValue2 = parseFloat(document.getElementById("valor2").value);
  let exibirResultado = document.getElementById("resultado");
  exibirResultado.textContent = calc(inputValue1, inputValue2);
}
