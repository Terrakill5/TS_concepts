"use strict";
let userInput;
let userName;
userInput = 5;
userInput = 'Jose';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message, errorCode: code };
    //while (true) {} //en casos infinitos como este, tambien arroja never 
}
generateError('An error occurred!', 500);
