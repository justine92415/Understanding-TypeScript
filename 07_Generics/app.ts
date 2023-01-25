/* const names: Array<string> = ['Justine', 'Ann']; // 相當於 string[]

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done !');
    }, 2000);
});

promise.then((data) => {
    data.split(' '); // ❌ 'data' 的類型為 'unknown'，因為 TypeScript 並不知道解析的結果為什麼類型
}); */

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

// const mergeObj = merge({ name: 'Justine' }, 26); // ❌ 類型 'number' 的引數不可指派給類型 'object' 的參數。
const mergeObj = merge({ name: 'Justine' }, { age: 26 });
console.log(mergeObj); // {name: 'Justine', age: 26}

interface Lengthy {
    length: number;
}

function countAndDescription<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value';
    if (element.length === 1) {
        descriptionText = 'Got 1 element';
    } else if (element.length > 1) {
        descriptionText = `Got ${element.length} elements`;
    }
    return [element, descriptionText];
}

console.log(countAndDescription([1, 3]));

/* function extractAndConvert(obj: object, key: string) {
    return 'Value: ' + obj[key];
} */

function extractAndConvert<T extends object, U extends keyof T>(
    obj: T,
    key: U
) {
    return 'Value: ' + obj[key];
}

console.log(extractAndConvert({ name: 'Justine' }, 'name')); // 'Value: Justine'
// console.log(extractAndConvert({ name: 'Justine' }, 'age')); // ❌ 此物件沒有名為 'age' 的key

class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return;
        }

        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Justine');
textStorage.addItem('Max');
textStorage.removeItem('Max');
console.log(textStorage.getItems());

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(
    title: string,
    description: string,
    date: Date
): CourseGoal {
    let CourseGoal: Partial<CourseGoal> = {};
    CourseGoal.title = title;
    CourseGoal.description = description;
    CourseGoal.completeUntil = date;
    return CourseGoal as CourseGoal;
    // 在使用 Partial 後類型就會變為 Partial<CourseGoal> 透過類型轉換來修正回來
}

const names: Readonly<string[]> = ['Justine', 'Ann'];
// names.push('QQ');
