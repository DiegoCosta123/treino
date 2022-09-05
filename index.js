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


//Crie uma função de segundo grau que tenha 3 parâmetros (a, b e c). O Delta precisa ter uma raiz exata, se for igual a 0 ou negativa, retorne console.log("raiz inválida, encerrado o programa"), caso contrário, prossiga com o cálculo da função

