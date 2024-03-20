// &&  condicional E
// ||  condicional O

const sum = 1 + 5;

let number = sum === 2 ? 2 : 4;
console.log(number);

let number1 = sum ===2 ? "Igual a dois" : "Náo é igual";
console.log(number1);

const car = "Fusca";
switch (car) {
    case "Mercedes":
        console.log("Mercedes is beautiful");
        break;
    case "Ferrari":
        console.log("Ferrari is very red");
        break;
    case "Tesla":
        console.log("Tesla is very smart");
        break;
    default:
        console.log(`Nenhum carro padrão selecionado, verifique: ${car}`)
}