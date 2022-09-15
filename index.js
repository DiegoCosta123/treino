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

// function valueProduct(a, b, c, d) {
//   let multProd = a * b - c * d;

//   return console.log('DIFERENÇA: ' + multProd);
// }

// valueProduct(5, 6, 7, 8);
// valueProduct(0, 0, 7, 8);
// valueProduct(5, 6, -7, 8);

//  - Novo Exemplo do Objeto:
// let pessoa = {
//   nome: 'Diego',
//   cidade: 'Teresópolis',
//   idade: 23,
//   estado: 'RJ',
// };

// pessoa.nome = 'José';
// console.log(pessoa.nome);

// pessoa.cidade = 'Rio de Janeiro';
// console.log(pessoa.cidade);

// pessoa.idade = 150;
// console.log(pessoa.idade);

// pessoa.estado = 'RJ';
// console.log(pessoa.estado);

// - Exercicio 10:

// o professor tem as seguintes propriedades: nome, sobrenome profissão e matéria (qual matéria ele dá).
// o aluno tem as seguintes propriedades: nome, idade sobrenome, ano (qual ano ele está, por exemplo, ensino médio, ensino fundamental ou jardim).

// no final, vc vai ter que printar em um console.log para cada um a seguinte informacao:
// console.log("O aluno (objeto.nome) (objeto.sobrenome) tem (objeto.idade) anos e está no (objeto.ano)").
// console.log("(objeto.nome) (objeto.sobrenome) tem (objeto.idade) anos, é professor de (objeto.matéria)").

// let professor = {
//   nome: 'Eugênio',
//   sobrenome: 'Silva',
//   idade: 45,
//   profissao: 'professor',
//   disciplina: 'Inteligencia Artificial',
// };

// console.log(
//   professor.nome +
//     ' ' +
//     professor.sobrenome +
//     ' tem ' +
//     professor.idade +
//     ' anos, é professor de ' +
//     professor.disciplina
// );

// let aluno = {
//   nome: 'Diego',
//   sobrenome: 'Costa',
//   idade: '23',
//   periodo: 8,
// };

// console.log(
//   'O aluno ' +
//     aluno.nome +
//     ' ' +
//     aluno.sobrenome +
//     ' tem ' +
//     aluno.idade +
//     ' anos e está no ' +
//     aluno.periodo +
//     'º periodos'
// );

//  - Exemplo Objeto com Função:

// let pessoa = {
//   idade: function idadePessoa() {
//     let anoAtual = 2022;
//     let anoNasc = 1999;

//     let result = anoAtual - anoNasc;
//     return result;
//   },
// };

// console.log(pessoa.idade());

//

// - Exercicios 11:

// cria uma nova propriedade que calcula o peso da pessoa
// a fórmula é  IMC = peso / (altura x altura).

// let pessoa = {
//   idade: function idadePessoa() {
//     let anoAtual = 2022;
//     let anoNasc = 1999;

//     let result = anoAtual - anoNasc;
//     return result;
//   },

//   calculoImc: function calculoDoPeso(peso, altura) {
//     let imc = (peso / (altura * altura)).toFixed(2);

//     if (imc < 18.5) {
//       console.log('Magreza: ' + imc);
//       return imc;
//     } else if (imc >= 18.5 && imc <= 24.9) {
//       console.log('Peso normal: ');
//       return imc;
//     } else if (imc > 25 && imc <= 29.9) {
//       console.log('Sobrepeso: ');
//       return imc;
//     } else if (imc > 30 && imc <= 34.9) {
//       console.log('Obesidade grau I: ');
//       return imc;
//     } else if (imc > 35 && imc <= 40) {
//       console.log('Obesidade grau II: ');
//       return imc;
//     } else {
//       console.log('Obesidade grau III: ');
//       return imc;
//     }
//   },
// };
// //                           peso    altura
// console.log(pessoa.calculoImc(80.5, 1.8));


// - Exercicios 12:

// Em uma loja um aparelho de som que custava R$ 800,00 teve um desconto de 17% para pagamento à vista. O cliente que decidir comprar o equipamento nestas condições pagará quanto?

// function productWithDiscount() {
//   let percent = 17 / 100;
//   let discount = percent * 800;
//   let price = (800 - discount).toFixed(2);
//   return console.log("R$" + price);
// }

// productWithDiscount();


// function productWithDiscount(percentage, price) {
//   let percent = percentage / 100;
//   let discount = percent * price;
//   let result = (price - discount).toFixed(2);
//   return console.log("R$" + result);
// }

// //            porcento /  preço
// productWithDiscount(29, 1800);


// let lojaSom = {
//   desconto: function descontoPreco() {
//     let desc = 17 / 100;
//     let price = desc * 800;
//     console.log("O promoção foi: ");
//     return price;
//   }

// }

// console.log(lojaSom.desconto());


// - Exercícios 13:
// Neste último domingo, Caio saiu para andar de bicicleta e decidiu ir até à casa de seu amigo José, percorrendo 1,5 km.
// De lá, os dois pedalaram até a casa de Sabrina, que ficava no quarteirão ao lado, 3 hm depois.
// Os três amigos decidiram ir até o alto da serra da cidade, pedalando mais 4 km. De casa, até o alto da serra, Caio pedalou quantos metros?

// function pedalTheDistance() {
//   let totalMeters = 1500 + 300 + 4000;

//   return console.log("Metros: " + totalMeters + "m");
// }

// pedalTheDistance()


// - Exercícios 14:
//                                                                   a     b    c
// Utilizando a fórmula de Bhaskara, determine as raízes da equação: 2x² - 7x + 3 = 0

// function bhaskara() {
//   let potency = 7**2
//   let equation = potency - 4 * 2 * 3;
//   let deltaSquareRoot = Math.sqrt(equation);

//   let x1 = (- (-7) + deltaSquareRoot) / (2 * 2);
//   let x2 = (- (-7) - deltaSquareRoot) / (2 * 2);

//   return console.log("X¹ = " + x1 + "\nX² = " + x2);
// }

// bhaskara();

//          a     b    c
// equação: 2x² - 7x + 3 = 0

// function bhaskara(a, b, c) {
//   let potency = b ** 2
//   let equation = potency - 4 * a * c;
//   let deltaSquareRootPerfect = Math.sqrt(equation) % 1 === 0;

//   if (deltaSquareRootPerfect && equation >= 0) {
//     let x1 = (- b + deltaSquareRootPerfect) / (2 * a);
//     let x2 = (- b - deltaSquareRootPerfect) / (2 * a);

//     return console.log("X¹ = " + x1 + "\nX² = " + x2);
//   }
//   else {
//     return console.log("Raiz inválido");
//   }
// }

// bhaskara(2, -7, 3);
// bhaskara(-2, -7, 3);


// - Exercicios 14.1
// Qual a medida da diagonal do bloco retangular cujas medidas são 35 centímetros de altura, 20 centímetros de largura e 15 centímetros de comprimento?

// function rectangularDiagonal() {
//   let calc = (35 ** 2) + (20 ** 2) + (15 ** 2);
//   let squareRoot = (Math.sqrt(calc)).toFixed(2);

//   return console.log("O comprimento igual é: " + squareRoot + " cm");
// }

// rectangularDiagonal();

// function rectangularDiagonal(h, a, b) {
//   let calc = (h ** 2) + (a ** 2) + (b ** 2);
//   let squareRoot = (Math.sqrt(calc)).toFixed(2);

//   return console.log("O comprimento igual é: " + squareRoot + " cm");
// }

// rectangularDiagonal(35, 20, 15);

// - Área e Perímetro:
// Qual a área e o perímetro de um campo de futebol, de base 25 m e altura 5 m?

// Resposta: A= 125 m², P= 60 m

// function perimeterArea(base, height) {
//     let A = base * height;
//     let P = base + height + base + height;

//     return console.log("Multiplicar a base pela altura: A = " + A + "m²" + "\nO perímetro é a soma de todos os lados: P = " + P + "m");
// }

// perimeterArea(25, 5);

//Calcule a área e o perímetro da figura a baixo:
//Na figura temos um trapézio, para calcular sua área devemos somar a base maior com a base menor e multiplicar pela altura e dividir por dois.

// function perimeter(B, b, h, H) {
//     let A = ((B + b) * h) / 2;
//     let P = B + b + H + H;

//     return console.log("A = " + A + "cm²" + "\nP = " + P + " cm");
// }

// perimeter(10, 5, 6, 12);


// Uma coroa circular é a região limitada por dois círculos concêntricos com raios de medidas distintas. Qual é a área de uma coroa circular cujos raios medem 10 cm e 20 cm?
// Resposta: 942 cm2.

// A = πR2 – πr2
// A = π(R2 – r2)


// function circularCrown() {
//     let pi = 3.14;
//     let potency1 = 20 ** 2;
//     let potency2 = 10 ** 2;

//     let A = pi * (potency1 - potency2);

//     return console.log("A = " + A + " cm²");
// }

// circularCrown();

// function circularCrown(R, r) {
//     let pi = 3.14;

//     let A = pi * ((R ** 2) - (r ** 2));

//     return console.log("A = " + A + " cm²");
// }

// circularCrown(20, 10);


// Exercícios sobre Geometria Plana:

// Uma praça será construída no formato de um círculo de diâmetro medindo 12 metros.
// Para preservação da área verde da cidade, a prefeitura determinou que 60% dessa praça deve ser composta por área verde.
// Utilizando π= 3,1, podemos afirmar que a área verde da praça mede, em metros quadrados, aproximadamente:

// Resposta: aproximamente 67 m².

// function planeGeometry(r, prc) {
//     let pi = 3.14;
//     let potencyR = r ** 2;

//     let A = pi * potencyR;
//     let percent = (A * (prc / 100)).toFixed(0);

//     return console.log("Área verde é de aproximamente: " + percent + " m²");
// }

// planeGeometry(5, 50);


// Analise a forma geométrica a seguir, sabendo que a medida dos lados dessa figura foi dada em centímetros. Medidas base 12cm e altura 16 cm.

// Resposta: A=96 cm2

// function geometryCentimeters() {
//     let altura = 16;
//     let base = 12;

//     let A = (altura * base) / 2;

//     return console.log("A = " + A + " cm²");
// }

// geometryCentimeters();

// function geometryCentimeters(a, b) {
//     let A = (a * b) / 2;

//     return console.log("A = " + A + " cm²");
// }

// geometryCentimeters(20, 15);


// Número de PAR e IMPAR:

// function numberParAndImpar(numero) {
//     if (numero % 2 == 0) {
//         return console.log("Par: " + numero);
//     }
//     else {
//         return console.log("Impar: " + numero);
//     }
// }

// numberParAndImpar(130)


// Exercícios sobre o algoritmo da subtração:
// Um piloto de avião está no meio de uma viagem internacional de 6 mil quilômetros. Se já havia passado 4.589 quilômetros, quanto ainda falta para percorrer?

// function algoritmoSubtração(kmTotal, kmAtual) {
//     let faltaPercorrer = kmTotal - kmAtual;

//     return console.log("Ainda faltam: " + faltaPercorrer + " Km");
// }

// algoritmoSubtração(6000, 4589);


// A área de serviço de um clube possui formato de retângulo. Nessa área, será colocado um cano para a passagem de esgoto, passando pela diagonal do terreno.
// O cano passará pela região que está pontilhada, portanto o comprimento mínimo desse cano, em metros, deve ser de:

// function pythagorasRectangle(h, b) {
//     let straight = (h ** 2) + (b ** 2);
//     let root = Math.sqrt(straight);

//     return console.log("Teorema de Pitágoras é: " + root + " m");
// }

// pythagorasRectangle(8, 15);

// Um terreno possui formato de triângulo retângulo com lados perpendiculares medindo 8 e 15 metros.
// Deseja-se cercar esse terreno com arame. Para cada metro de cerca serão gastos R$ 12,00.
// Assim, o valor gasto para cercar o terreno todo será de:

// Resposta: R$ 480,00

// function rectangleTerrainSide(m1, m2, price) {
//     let hip = (m1 ** 2) + (m2 ** 2);
//     let root = Math.sqrt(hip);

//     let triangleSide = root + m2 + m1;

//     let costsExpense = (triangleSide * price).toFixed(2);

//     return console.log("Medida hipotenusa x desse triângulo: " + root + "\nA soma dos lados desse triângulo é igual: " + triangleSide + "\nO custo de gasto é: R$" + costsExpense)
// }

// rectangleTerrainSide(8, 15, 12);


//Exercícios sobre tronco de cone

// Um contêiner foi construído no formato de um tronco de cone reto, com raio maior de 4 m, raio menor de 1 m e altura de 4 m.
// Para a conservação do contêiner, foi contratado um pintor que cobra R$ 2,00 por m² para pintar a área externa.
// Diante dessa situação, qual será o valor gasto para pintar todo o contêiner? (Use π = 3,1).

// function trunkCone() {
//     let pi = 3.14;
//     let potency1 = 4 ** 2;
//     let potency2 = (4 - 1) ** 2;
//     let potency3 = 1 ** 2;

//     let generatrix = potency1 + potency2;
//     let root = Math.sqrt(generatrix);

//     let largerBase = pi * potency1; // Base maior

//     let smallerBase = pi * potency3; // Base menor

//     let sideArea = pi * root * (4 + 1); // Area Lateral

//     let totalArea = largerBase + smallerBase + sideArea; // Area total

//     let amountCharged = totalArea * 2;

//     return console.log("Encontraremos sua geratriz: " + root + "m" + "\nBase maior: " + largerBase + "m²" + "\nBase menor: " + smallerBase + "m²" + "\nÁrea Lateral: " + sideArea + "m²" + "\nÁrea Total: " + totalArea + "m²" + "\nO valor pago será: R$" + amountCharged);
// }

// trunkCone();


// - Exercícios:
// cria uma função para fazer a conversão de graus celcius para Fahrenheit

// function celciusToFahrenheitConverter(c) {
//     let f = ((c * 1.8) + 32).toFixed(1);

//     console.log(c + "°C" + " = " + f + "°F");

//     if (f >= 32 && f < 59) {
//         return console.log("Muito frio");
//     }
//     else if (f >= 59 && f < 69) {
//         return console.log("Morno");
//     }
//     else if (f >= 69.8 && f < 86) {
//         return console.log("Calor");
//     }
//     else {
//         return console.log("Muito Calor");
//     }

// }

// celciusToFahrenheitConverter(5);

// Nivel temperatura grau do tempo clima:

function temperatureDegrees(c) {

    let grau = (c).toFixed(1);

    if (grau >= -15 && grau < 1) {
        return console.log(grau + "°C" + " - Extremamente frio");
    }
    else if (grau >= 1 && grau < 14) {
        return console.log(grau + "°C" + " - Muito frio");
    }
    else if (grau >= 14 && grau < 17) {
        return console.log(grau + "°C" + " - Frio");
    }
    else if (grau >= 17 && grau < 21) {
        return console.log(grau + "°C" + " - Morno");
    }
    else if (grau >= 21 && grau < 30) {
        return console.log(grau + "°C" + " - Calor");
    }
    else if (grau >= 30 && grau < 35) {
        return console.log(grau + "°C" + " - Muito calor");
    }
    else {
        return console.log(c + "°C" + " - Super calor");
    }
}

temperatureDegrees(52.8)

