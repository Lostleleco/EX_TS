function multiplicar(num1, num2) {
    return num1 * num2;
}
function saudacao(nome) {
    return "Ol\u00E1 ".concat(nome);
}
var resultadoMultiplicacao = multiplicar(5, 3);
var mensagemSaudacao = saudacao('João');
console.log(resultadoMultiplicacao);
console.log(mensagemSaudacao);
