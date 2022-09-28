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


// Nivel temperatura grau do tempo clima:

// function temperatureDegrees(c) {

//     let grau = (c).toFixed(1);

//     if (grau >= -15 && grau < 1) {
//         return console.log(grau + "°C" + " - Extremamente frio");
//     }
//     else if (grau >= 1 && grau < 14) {
//         return console.log(grau + "°C" + " - Muito frio");
//     }
//     else if (grau >= 14 && grau < 17) {
//         return console.log(grau + "°C" + " - Frio");
//     }
//     else if (grau >= 17 && grau < 21) {
//         return console.log(grau + "°C" + " - Morno");
//     }
//     else if (grau >= 21 && grau < 30) {
//         return console.log(grau + "°C" + " - Calor");
//     }
//     else if (grau >= 30 && grau < 35) {
//         return console.log(grau + "°C" + " - Muito calor");
//     }
//     else {
//         return console.log(c + "°C" + " - Super calor");
//     }
// }

// temperatureDegrees(52.8)


// - Exercícios:
// cria uma função para fazer a conversão de graus celcius para Fahrenheit

// function celciusToFahrenheitConverter(celcius) {
//     let fahrenhe = ((celcius * 1.8) + 32).toFixed(1);

//     console.log(celcius + "°C" + " Converter para " + fahrenhe + "°F");

//     if (fahrenhe >= 32 && fahrenhe < 59) {
//         return console.log("Muito frio");
//     }
//     else if (fahrenhe >= 59 && fahrenhe < 69) {
//         return console.log("Morno");
//     }
//     else if (fahrenhe >= 69.8 && fahrenhe < 87) {
//         return console.log("Calor");
//     }
//     else {
//         return console.log("Muito Calor");
//     }

// }

// celciusToFahrenheitConverter(35);


// cria uma função para fazer a conversão de graus Fahrenheit para Celsius

// function fahrenheToCelciusitConverter(fahrenheit) {
//     let celsius = ((fahrenheit - 32) / 1.8).toFixed(1);

//     console.log(fahrenheit + "°F" + " Converter para " + celsius + "°C");

//     if (celsius >= -30 && celsius < 15) {
//         return console.log("Muito frio");
//     }
//     else if (celsius >= 15 && celsius < 20) {
//         return console.log("Morno");
//     }
//     else if (celsius >= 20.8 && celsius < 31) {
//         return console.log("Calor");
//     }
//     else {
//         return console.log("Muito Calor");
//     }

// }

// fahrenheToCelciusitConverter(105);


// Conversão de graus celsius para kelvin:

// function celciusToKelvinitConverter(celcius) {
//     let kelvin = (celcius + 273.15).toFixed(1);

//     console.log(celcius + "°C" + " Converter para " + kelvin + "°K");

//     if (kelvin >= -273 && kelvin < 288) {
//         return console.log("Muito frio");
//     }
//     else if (kelvin >= 288 && kelvin < 293) {
//         return console.log("Morno");
//     }
//     else if (kelvin >= 293 && kelvin < 304) {
//         return console.log("Calor");
//     }
//     else {
//         return console.log("Muito Calor");
//     }

// }

// celciusToKelvinitConverter(25);


// Conversão de graus celsius para kelvin:

// function fahrenheToCelciusitConverter(kelvin) {
//     let celsius = (kelvin - 273.15).toFixed(1);

//     console.log(kelvin + "°k" + " Converter para " + celsius + "°C");

//     if (celsius >= -30 && celsius < 15) {
//         return console.log("Muito frio");
//     }
//     else if (celsius >= 15 && celsius < 20) {
//         return console.log("Morno");
//     }
//     else if (celsius >= 20.8 && celsius < 31) {
//         return console.log("Calor");
//     }
//     else {
//         return console.log("Muito Calor");
//     }

// }

// fahrenheToCelciusitConverter(295);


// Numero maior:

// function highestValue(a, b) {
//     if (a > b) {
//         return console.log("Número maior é: " + a);
//     }
// else if (a === b) {
//     return console.log("Número é igual");
// }
//     else if (b > a) {
//         return console.log("Número maior é: " + b);
//     }
//     else {
//         console.log("Menor");
//     }
// }

// highestValue(50, 52);


// function highestValue(a, b, c) {
//     if (a > b && a > c) {
//         return console.log("Número maior é: " + a);
//     }
//     else if (b > a && b > c) {
//         return console.log("Número maior é: " + b);
//     }
//     else if (c > a && c > b) {
//         return console.log("Número maior é: " + c);
//     }
//     else if (a === b || b === c || c === a) {
//         return console.log("Número é igual");
//     }
//     else {
//         console.log("Menor");
//     }
// }

// highestValue(9, 9, 9);


// A função `findTriangleType()` encontra o tipo do triângulo para os valores laterais fornecidos usando o operador “==” e “&&” em JavaScript.

// Imprima “Triângulo equilátero”. se os valores para todos os lados1, lado2 e lado3 forem iguais.
// Imprima “Triângulo isósceles”. se os valores para cada lado slide1 for igual a side2 ou side2 for igual a side3
// Senão “triângulo escaleno”. pois os valores de todos os lados não forem iguais.


// function findTriangleType(lado1, lado2, lado3) {
//     if (lado1 == lado2 && lado2 == lado3) {
//         return console.log("Triângulo equilátero");
//     }
//     else if (lado1 == lado2 || lado2 == lado3 || lado3 == lado1) {
//         return console.log("Triângulo isósceles");
//     }
//     else {
//         console.log("triângulo escaleno");
//     }
// }

// findTriangleType(2, 9, 9)


// 2. Faça um script que pede duas notas de um aluno. Em seguida ele deve calcular a média do aluno e dar o seguinte resultado:

//     A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
//     A mensagem "Reprovado", se a média for menor do que sete;
//     A mensagem "Aprovado com Distinção", se a média for igual a dez.

// function averageGrade(not1, not2) {
//     let average = (not1 + not2) / 2;

//     if (average >= 6) {
//         return console.log("Aprovado");
//     }
//     else if (average >= 4) {
//         return console.log("Recuperação");
//     }
//     else if (average < 6) {
//         return console.log("Reprovado");
//     }
// }

// averageGrade(3.5, 8.5);


// 16. Faça um script que peça um número inteiro e determine se ele é par ou ímpar.
// Dica: utilize o operador módulo (resto da divisão): %

// function evenOrOdd(num1) {
//     if (num1 % 2 === 0) {
//         return console.log("Número é Par: " + num1);
//     }
//     else {
//         return console.log("Número é Ímpar: " + num1);
//     }
// }

// evenOrOdd(10)



// function positiveOrNegative(num) {
//     if (num > 0) {
//         return console.log(num + " = Positivo");
//     }
//     else {
//         return console.log(num + " = Negativo")
//     }
// }
// positiveOrNegative(50);


// Exemplo Array:

// let numeroArray = [1, 5, 8, 20, 50, 60];
// console.log(numeroArray.length);

// Objeto Array => nome, idade,  media:


// let objeto1 = {
//     nome: "Diego",
//     idade: 23,

//     media1: function notasMedias(not1, not2) {
//         let notas = (not1 + not2) / 2;

//         if (notas >= 6) {
//             return console.log("APROVADO");
//         }
//         else if (notas >= 4) {
//             return console.log("RECUPERAÇÃO");
//         }
//         else {
//             console.log("REPROVADO");
//         }
//     }
// }

// let objeto2 = {
//     nome: "Felipe",
//     idade: 23,

//     mediaNota: function alunoMedia(nota1, nota2) {
//         let result = (nota1 + nota2) / 2;

//         if (result >= 6) {
//             return console.log("APROVADO");
//         }
//         else if (result >= 4) {
//             return console.log("RECUPERAÇÃO");
//         }
//         else {
//             return console.log("REPROVADO");
//         }
//     }
// }

// let ObjetoArray = [objeto1, objeto2];

// console.log(ObjetoArray[1].mediaNota(9.0, 8.5));


// Exemplo Loop:

// let list = [0, 5, 6, 8, 10]

// for (let index = 0; index <= list.length; index++) {
//     console.log(index);
// }


// Qual o Perímetro de um quadrado com 10 m de lado?
// a fórmula é
// P = L + L + L + L

// function sideSquare(l) {
//     let side = l + l + l + l;
//     return console.log("Lado do perímetro é: " + side + "m");
// }

// sideSquare(10);

// let ObjectSideSquare1 = {

//     square: function squareSide(l) {
//         let side = l + l + l + l
//         return console.log(side + "m lados");
//     }
// }

// let ObjectSideSquare2 = {
//     sides: function sideSquare(l, s) {
//         let square = l * s;
//         return console.log(square + "m lados");
//     }
// }

// let printSquare = [ObjectSideSquare1, ObjectSideSquare2];

// console.log(printSquare[1].sides(10, 4));



// function factorial(n) {
//     let answer = 1;
//     if (n == 0 || n == 1) {
//         return answer;
//     } else {
//         for (var i = n; i >= 1; i--) {
//             answer = answer * i;
//         }
//         return answer;
//     }
// }
// console.log(factorial(5));



// function median() {
//     let mediana = (20 * 3) + (30 * 2) + (35 * 3) + (40 * 2);
//     let divisão = 3 + 2 + 3 + 2;

//     let result = mediana / divisão;

//     return console.log("Resultado da média é: " + result);
// }

// median();


// function teorema(r, s, t) {
//     let mult = r * t;
//     let x = mult / s;

//     return console.log("O valor de x é " + x);
// }

// teorema(60, 75, 50);


// Qual o valor numérico da expressão

// (x**2 + x) / (x - y)

// para x = - 3 e y = 7?


// function algebra(x, y) {
//     let A = x ** 2;
//     let result = ((A * y) + x) / (x - y);

//     return console.log("Resultado: " + result);
// }

// algebra(-3, 7);

// ERRADOS
// let numeros = [1, 5, 6, 8, 10, 2, 3, 45, 36, 15, 10];

// function ordenacao(a, b) {
//     return a - b;
// }
// for (let i = 0; i < numeros.length; i++) {
//     console.log(numeros.sort(ordenacao));
// }

// Exemplo do Callback:

// function bemVindo() {
//     return "Diego";
// }

// ERRADO:
// let ResulSomar = (somar) => {
//     console.log(somar());
// }

// ResulSomar(function (a, b) {
//     somar = a + b;
// });


//CORREÇÃO:

// let ResulSomar = (somar) => {
//     return somar();
// };

// let somaNumeros = (a, b) => {
//     const result = a + b;
//     console.log(result);
//     return result;
// };

// ResulSomar(function () {
//     somaNumeros(10, 10);
// });

// ResulSomar(() => somaNumeros(10, 10));



// const lista = [7, 5, 9, 1, 3, 2, 4, 6, 8, 10, 15, 11, 14, 13, 12];

// const listOrdenada = lista.sort((a, b) => a - b);

// console.log(listOrdenada);


// const lista = [7, 5, 9, 1, 3, 2, 4, 6, 8, 10, 15, 11, 14, 13, 12];

// const listOrdenada = lista.sort((a, b) => a - b);
// const encontrarValor = lista.find((valor) => valor === 5);

// console.log("Numeros ordenados: " + listOrdenada + "\nEncontrar um número valor: " + encontrarValor);



// let ResulSomar = (somar) => {
//     return somar();
// };

// let somaNumeros = (a, b) => {
//     const result = a + b;
//     console.log(result);
//     return result;
// };

// ResulSomar(function () {
//     somaNumeros(10, 10);
// });

// ResulSomar(() => somaNumeros(10, 10));


// Teste Bhaskara

// const resultBhaskara = (baskara) => {
//     return baskara();
// }

// const calcBask = (a, b, c) => {
//     const potential = b ** 2;
//     const multiply = 4 * a * c;

//     const result = potential - multiply;
//     const source = Math.sqrt(result);

//     const X1 = (- b + source) / (2 * a);
//     const X2 = (- b - source) / (2 * a);

//     console.log("X1 = " + X1 + "\nX2 = " + X2);
//     return X1, X2;
// }

// resultBhaskara(() => calcBask(2, -16, -18))


// Lista smoar todo;

// let list = [0, 5, 6, 8, 10]

// for (let index = 0; index <= list.length; index++) {
//     console.log(index);
// }


// let sum = 0;
// let number = [1, 3, 6, 8, 7, 9];

// for (let i = 0; i < number.length; i++) {
//     sum = sum + number[i];
// }

// console.log(sum);



// no for loop vc tem que dizer qual número é par
// retornar os números que são par
// lembra que o for loop te ajuda pq o for loop passar número por número
// vc tem que fazer uma verificação se é par
// se tiver, vc retorna o próprio númer
// se não, retorna false:


//Exemplo basico:
// function numberParAndImpar(numero) {
//     if (numero % 2 == 0) {
//         return console.log("Par: " + numero);
//     }
//     else {
//         return console.log("Impar: " + numero);
//     }
// }

// numberParAndImpar(130)


// Resultado code:




// function pair(list) {

//     for (let i = 0; i < list.length; i++) {
//         if (list % 2 === 0) {
//             console.log("Par: " + list[i]);
//         }
//         else {
//             console.log("False " + list[i]);
//         }
//     }
// }

// pair(4);


let list = [4, 8, 6, 2, 1, 3];
let listaPar = [];
let listaImpar = [];

for (let i = 0; i < list.length; i++) {
    console.log("Index de cada elemento da lista: ", i);
    if (list[i] % 2 === 0) {
        listaPar.push(list[i]);
        // console.log("Elemento Par da lista: ", list[i]);
    }
    else {
        listaImpar.push(list[i]);
        // console.log("Elemento Impar da lista: ", list[i]);
    }
}
console.log(listaImpar);

