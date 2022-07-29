let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Jose';
if (typeof userInput === 'string') {
    userName = userInput;
}

function generateError(message: string, code: number): never {
    throw { message, errorCode: code};
    //while (true) {} //en casos infinitos como este, tambien arroja never 
}

generateError('An error occurred!', 500);