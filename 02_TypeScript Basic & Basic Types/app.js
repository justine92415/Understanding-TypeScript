"use strict";
let userInput;
let userNmae;
userInput = 5;
userInput = 'Justine';
// unknow比any還嚴格，他必須做類型檢查
if (typeof userInput === 'string') {
    userNmae = userInput;
}
function generateError(message, code) {
    // never用於永遠不會有返回值的情況，例如拋錯或是死循環的情況
    throw { message: message, errorCode: code };
}
const result = generateError('An error occured', 500);
console.log(result); // 此函式拋出錯誤後就立即中止，並不會返回任何值，包含undefined
