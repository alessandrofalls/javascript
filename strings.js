const firstName = 'Chico';
const surName = 'Bento da Silva';

const nomes = 'Chico, José, Pedro, João';

console.log(`Meu nome é ${firstName.toLocaleUpperCase()} ${surName.toLowerCase()}`);

console.log(`O tamanho do nome é: ${firstName.length}`);
console.log(`O tamanho do sobrenome é: ${surName.length}`);

console.log(`Os nomes da lista são: ${nomes.split(",")}`);

console.log(`String Reference Guide: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String`) ;