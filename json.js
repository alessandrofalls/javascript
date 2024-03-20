const todos =  [
    {
        id: 1,
        description: "Estudar Programação",
        iscompleted: false,
    },
    {
        id: 2,
        description: "Ler",
        iscompleted: true,
    },
    {
        id: 3,
        description: "Treinar",
        iscompleted: false,
    },
];

// converter em JSON
const  todosJSON = JSON.stringify(todos);

console.log(todosJSON);

//converter de JSON para lista
const todosList = JSON.parse(todosJSON);
console.log(todosList);