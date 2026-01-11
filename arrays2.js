// Arrays

let numero = 10 

console.log(numero)

// Array vazio
let vazio = [];

// Array com elementos homogêneos (mesmo tipo)
let numeros = [10, 20, 30, 40];

// Array com tipos mistos (heterogêneo)
let misto = [42, 'texto', true, null, { chave: 'valor' }];

// Usando o construtor Array (menos comum, mas útil para arrays de tamanho fixo)
let fixo = new Array(5); // Cria array com 5 posições vazias (undefined)
let preenchido = new Array('a', 'b', 'c');

// Array de objetos
let pessoas = [
  { nome: 'João', idade: 25 },
  { nome: 'Maria', idade: 30 }
];

// Array de funções (avançado)
let funcoes = [
  () => console.log('Função 1'),
  () => console.log('Função 2')
];

// Array 2D (matriz)
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Acessando elementos: matriz[linha][coluna]
console.log(matriz[0][0]); // 1
console.log(matriz[1][2]); // 6

// Iterando sobre uma matriz
matriz.forEach(linha => {
  linha.forEach(elemento => console.log(elemento));
});

// Array 3D (cubo)
let cubo = [
  [
    [1, 2],
    [3, 4]
  ],
  [
    [5, 6],
    [7, 8]
  ]
];
console.log(cubo[0][1][0]); // 3

let frutas = ['maçã', 'banana', 'laranja', 'uva'];

// find() e findIndex(): Encontrar elementos
let frutaEncontrada = frutas.find(fruta => fruta.startsWith('b')); // 'banana'
let indice = frutas.findIndex(fruta => fruta === 'laranja'); // 2

// some() e every(): Verificar condições
let temBanana = frutas.some(fruta => fruta === 'banana'); // true
let todasMaiorQue3 = frutas.every(fruta => fruta.length > 3); // false (uva tem 3)

// reduce(): Reduzir array a um valor único
let somaComprimentos = frutas.reduce((total, fruta) => total + fruta.length, 0); // 5 + 6 + 7 + 3 = 21

// sort(): Ordenar (modifica o array original)
let frutasOrdenadas = [...frutas].sort(); // ['banana', 'laranja', 'maçã', 'uva'] (cópia para não modificar original)

// reverse(): Inverter ordem
frutas.reverse(); // ['uva', 'laranja', 'banana', 'maçã']

// includes(): Verificar se contém elemento
console.log(frutas.includes('maçã')); // true

// indexOf() e lastIndexOf(): Índices
console.log(frutas.indexOf('banana')); // 2 (após reverse)
console.log(frutas.lastIndexOf('banana')); // 2 (mesmo, pois único)

// join(): Converter para string
let stringFrutas = frutas.join(', '); // 'uva, laranja, banana, maçã'

// split() (não é método de array, mas complemento): Converter string para array
let arrayDeString = 'a,b,c'.split(','); // ['a', 'b', 'c']

// for...of (itera valores)
for (let num of numeros) {
  console.log(num); // 10, 20, 30, 40
}

// for...in (itera índices)
for (let i in numeros) {
  console.log(i, numeros[i]); // 0 10, 1 20, etc.
}

// map() com transformação complexa
let quadrados = numeros.map(num => num ** 2); // [100, 400, 900, 1600]

// filter() com múltiplas condições
let paresMaioresQue20 = numeros.filter(num => num % 2 === 0 && num > 20); // [30, 40]

// reduce() para objetos
let estatisticas = frutas.reduce((acc, fruta) => {
  acc.totalLetras += fruta.length;
  acc.contagem++;
  return acc;
}, { totalLetras: 0, contagem: 0 });
// { totalLetras: 21, contagem: 4 }
