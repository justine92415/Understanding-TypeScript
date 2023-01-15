function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, callback: (num: number) => void) {
    const result = n1 + n2;
    callback(result);
}

printResult(add(5, 12));

// let combineValues: Function; // 任何function都適用
let combineValues: (a: number, b: number) => number; // 只能接受兩個皆為number參數並返回number的函式

combineValues = add;
// combineValues = printResult; // type Function時
// combineValues = 5; // type為any時

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
    console.log(result);
});
