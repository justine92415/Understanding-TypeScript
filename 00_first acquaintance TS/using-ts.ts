window.addEventListener('load', function () {
    const btn = document.querySelector('.btn')!;
    // !驚嘆號告訴ts這個元素永遠不會得到null的結果
    const input1 = document.querySelector('#num1')! as HTMLInputElement;
    const input2 = document.querySelector('#num2')! as HTMLInputElement;

    function add(num1: number, num2: number) {
        return num1 + num2;
    }

    btn.addEventListener('click', function () {
        console.log(add(+input1.value, +input2.value));
    });
});
