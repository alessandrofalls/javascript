//Common function

function sum(a, b = 10) {
    return a + b;
}
const sumValue1 = sum(2);
console.log(sumValue1);

//Arrow function
const sumArrow = (a, b = 10) => {
    return a + b;
};
//mesma coisa que acima
const sumArrow2 = (a, b = 10) => a + b;

const sumValue = sumArrow2(2);
console.log(sumValue);