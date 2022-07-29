function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number) {
    console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

printResult(add(5,12));

//let combineValues: Function;
let combineValues: (a: number, b: number) => number; //esta era linea 12,esto sirve para decirle a TS que la variable va a recibir una function con estos detalles.

combineValues = add; //esto se puede hacer, aunque es absurdo, pero solo se usa para demo
//combineValues = 5; //lamentablemente esto tambien. Una vez decimos que combineValues: Function, ya no se puede hacer
//combineValues = printResult; //al hacer lo de la linea 12, ya esta linea no sirve, por lo que logramos nuestro cometido
console.log(combineValues(8,8));

addAndHandle(10,20, (result) => {
    console.log(result);
})