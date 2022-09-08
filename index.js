// Regras:
// let - Mutável
//const - Imutável
//consola.log() é igual print (imprimir)

// Rodar o projeto: yarn dev

// - Exercício 2

// A fórmula para calcular a área de uma circunferência é definida como A = n * R². Considerando para este problema que n = 3,14159 :

// Calcule a área usando a fórmula dada na descrição do problema.

// Entrada
// A entrada contém um valor de ponto flutuante (precisão dupla), que é a variável R .

// Resultado
// Apresente a mensagem "A=" seguida do valor da variável, como no exemplo abaixo, com quatro casas após a vírgula. Use todas as variáveis ​​de precisão dupla. Como todos os problemas, não se esqueça de imprimir o final de linha após o resultado, caso contrário você receberá "Erro de apresentação".

// Resposta:

// let n = 3.14159;
// let R = 2 ** 2;

// let A = n * R;

// console.log(A);

// simbolo ** significa potencial. Exemplo: R².

// - Exercício 3

// Escreva um programa que leia o número de um funcionário, seu número de horas trabalhadas em um mês e o valor que ele recebeu por hora. Imprima o número do funcionário e o salário que ele receberá no final do mês, com duas casas decimais.

// Não se esqueça de imprimir o final da linha após o resultado, caso contrário você receberá “Erro de apresentação”.
// Não se esqueça do espaço antes e depois do sinal igual e depois do U$.

// Entrada
// O arquivo de entrada contém 2 números inteiros e 1 valor de ponto flutuante, representando o número, a quantidade de horas trabalhadas e a quantidade que o funcionário recebe por hora trabalhada.

// Resposta:

// let totalOneMonth = 145;
// let valuePerHour = 15.55;

// let salary = (totalOneMonth * valuePerHour).toFixed(2);

// console.log(salary);

// - Exercício 4

// Parte 1
// descobrir a idade da pessoa de acordo do ano de nascimento dela
// vc pode escolher qualquer ano de nascimento

// Resposta:

// let age = 100;
// let year = 2022;

// let yearOfBirth = year - age;

// console.log(yearOfBirth);

// Parte 2
// Previsão idade da pessoa

// Resposta:

// let yearOfBirth = 1999;
// let year = 2050;

// let ageResult = year - yearOfBirth;

// console.log(ageResult);

// - Exercicios 5 -> Função: Soma, subtração, multiplicação e divisão

// Resposta:

// let a = 20;
// let b = 2;

// -Somar:

// function numeroSomar() {
//     let soma = a + b;
//     console.log(soma);
// }

// numeroSomar();

// -Subtração:

// function numeroSubtracao() {
//     let subtr = a - b;
//     console.log(subtr)
// }

// numeroSubtracao();

// -Multiplicação:

// function numeroMultiplica() {
//     let mult = a * b;
//     console.log(mult);
// }

// numeroMultiplica();

// -Divição:

// function numeroDivisao() {
//     let divisao = a / b;
//     console.log(divisao)
// }

// numeroDivisao();

// - Exercicio 5
// function mediasAlunos(nota_1, nota_2, nota_3) {

//     let notas = nota_1 + nota_2 + nota_3;

//     let media = notas / 3;
//     console.log(media);
//     return media;
// }

// mediasAlunos(5, 3, 7);
// mediasAlunos(3, 4, 1);
// mediasAlunos(10, 8, 9);

// function mediasAlunos(nota_1, nota_2, nota_3) {

//     let notas = nota_1 + nota_2 + nota_3;

//     let media = notas / 3;

//     if(media >= 6) {
//         return console.log("Aluno aprovado!" + media);
//     }
//     else if(media >=4) {
//         return console.log("Aluno Recuperação!" + media)
//     }
//     else {
//         return console.log("Aluno Reprovado!" + media);
//     }

//     console.log(media);
//     return media;
// }

// mediasAlunos( 6, 8, 7);
// mediasAlunos( 4, 4, 4);
// mediasAlunos(10, 10, 10);

// function mediasAlunos(nota_1, nota_2, nota_3) {

//     let notas = nota_1 + nota_2 + nota_3;

//     let media = notas / 3;

//     if(media >= 6) {
//         return console.log("Aluno aprovado: " + media);
//     }
//     else if(media >=4) {
//         return console.log("Aluno Recuperação: " + media)
//     }
//     else {
//         return console.log("Aluno Reprovado: " + media);
//     }

// }

// mediasAlunos( 6, 8, 7);
// mediasAlunos( 4, 4, 4);
// mediasAlunos(10, 10, 10);

//- Exercicio 6:

// - Raiz Quadrados:

// function raizQuadrada(a, b) {
//     let num = a;
//     let raiz = Math.sqrt(num);
//     console.log(raiz);
//     return raiz;
// }

// raizQuadrada(81)
// raizQuadrada(64)
// raizQuadrada(49)
// raizQuadrada(36)
// raizQuadrada(25)
// raizQuadrada(16)
// raizQuadrada(9)
// raizQuadrada(4)
// raizQuadrada(1)

//- Exercicio 7:
//Crie uma função de segundo grau que tenha 3 parâmetros (a, b e c). O Delta precisa ter uma raiz exata, se for igual a 0 ou negativa, retorne console.log("raiz inválida, encerrado o programa"), caso contrário, prossiga com o cálculo da função

// function segundoGrau(a, b, c) {
//     let delta = b ** 2 - 4 * a * c;
//     let deltaTemRaizPerfeita = Math.sqrt(delta) % 1 === 0;

//     if(deltaTemRaizPerfeita && delta >= 0) {
//         let raiz1 = -b + Math.sqrt(delta) / (2 * a);
//         let raiz2 = -b - Math.sqrt(delta) / (2 * a);

//         return console.log("x1: " + raiz1 + "\nx2: " + raiz2);
//     }
//     else {
//         return console.log("Raiz inválida, encerrado o programa");
//     }

// }

// segundoGrau(4, 0, -16);
// segundoGrau(4, 0, 16);

//- Exercicio 8:
// A fórmula para calcular a área de uma circunferência é definida como A = π* R² Considerando para este problema que π = 3,14159 :

// Calcule a área usando a fórmula dada na descrição do problema.

// Entrada
// A entrada contém um valor de ponto flutuante (precisão dupla), que é a variável R .

// Resultado
// Apresente a mensagem "A=" seguida do valor da variável, como no exemplo abaixo, com quatro casas após a vírgula. Use todas as variáveis ​​de precisão dupla. Como todos os problemas, não se esqueça de imprimir o final de linha após o resultado, caso contrário você receberá "Erro de apresentação".

// function areaCircunf(r) {
//   let pi = 3.14159;
//   let valorLimite = (pi * r ** 2).toFixed(4);

//   return console.log('A = ' + valorLimite);
// }

// areaCircunf(2.0);
// areaCircunf(100.64);
// areaCircunf(150.0);

// - Exercicio 9:

// Leia quatro valores inteiros chamados A, B, C e D. Calcule e imprima a diferença do produto A e B pelo produto de C e D (A * B - C * D).

// **Entrada**
// O arquivo de entrada contém 4 valores inteiros.

// **Resultado**
// Imprima DIFERENCA com todas as letras maiúsculas, conforme exemplo a seguir, com um espaço em branco antes e depois do sinal de igual.

function valueProduct(a, b, c, d) {
  let multProd = a * b - c * d;

  return console.log('DIFERENÇA: ' + multProd);
}

valueProduct(5, 6, 7, 8);
valueProduct(0, 0, 7, 8);
valueProduct(5, 6, -7, 8);
