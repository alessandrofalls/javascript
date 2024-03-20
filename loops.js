const cars = ["Ferrari", "Tesla", "Mercedes"];

for (let car of cars){
    console.log(car);
}

cars.forEach(function (car, index) {
    console.log(index);
    console.log(car);
});

let index = 0;

while (index < 10) {
    console.log(`Index é menor que 10, valor atual: ${index}`);
    index++;
}