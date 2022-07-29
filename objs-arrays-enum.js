"use strict";
/* const person: {
    name: string,
    age: number
} = {
const person: {
    name: string;
    age: number;
    hobbies: string[];
    rol: [number, string];
} = {
    name: 'Jose',
    age: 29,
    hobbies: ['Deportes', 'Cocinar'],
    rol: [2, 'autor'],
};*/
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: 'Jose',
    age: 29,
    hobbies: ['Deportes', 'Cocinar'],
    rol: Role.ADMIN,
};
/* person.rol.push('admin') // este caso es una excepcion, TS no reconoce que no debe agregar mas valores;
person.rol[1] = 10; //en este caso TS si reconoce que no debe agregar un numero en una posicion para un string

person.rol = [0, 'admin', 'user'];//igual en este caso se da cuenta que no puede agregar otro dato pues es solo una tupla.*/
let actividadFavorita;
actividadFavorita = ['Deportes'];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase()); //TS reconoce que es string por lo que no hay problemas
}
;
if (person.rol === Role.AUTHOR) {
    console.log('is author');
}
