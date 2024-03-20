const lista = ["Felipe", "João", "Júlia", 10, false];

//Add item at the end of list
lista.push("Pedro");

//Add item at the begin of list
lista.unshift("Thiago");

//remove first item of list
lista.shift();

//Remove the last item of list
lista.pop();

console.log(`Primeiro item da lista é ${lista[0]}`);
console.log(`Toda a lista: ${lista}`);

//Find the index of item
console.log(`A posição do nome João é: ${lista.indexOf("João")}`);

//Ordenar lista
const ordenarLista = lista.sort();
console.log(`Lista ordenada: ${lista}`);

//Quantidade de itens na lista(
console.log(`Quantidade de itens na lista: ${lista.length}`);

//Verificar se uma variável é uma lista
const listaIsAray = Array.isArray(lista);
console.log(`A variável lista é um array? ${listaIsAray}`);