function add(n1: number,n2: number, showResult: boolean, phrase: string) {
   /*  if(typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error ('Incorrect input');
    } */
    const result = n1 + n2; /*Es necesario hacer esto para que solo numeros esten involucrados en una concatenacion y aca se puedan resolver matematicamente */
    if (showResult) {
        console.log(phrase + result); /* Si se combina un string con varios numeros, el resultado sera un String, por lo que se usa la variable result para separar los numeros involucrados y que no cause la concatenacion n1 + n2 */
    } else {
        return result;
    }
}

const numer1 = 5;
const numer2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";

add(numer1, numer2, printResult, resultPhrase);
