type Combinable = number | string; //se usa para hacer una palabra reservada que describa los tipos de datos que se van a unir
type ConversionDescriptor = 'as-number' | 'as-text'; //tambien se puede usar de esta manera
function combine(
  input1: Combinable,
  input2: Combinable,
  resultType: ConversionDescriptor,
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number" || resultType === 'as-number') {
    result = +input1 + +input2; //aqui le decimos a TS que solo trabaje con numeros
  } else {
    result = input1.toString() + input2.toString(); //aca solo con strings, de lo contrario se quejara.
}

  return result;
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Jose", "Rosa", "as-text");
console.log(combinedNames);
