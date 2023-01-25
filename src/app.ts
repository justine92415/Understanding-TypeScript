// 想使用裝飾器需要在 tsconfig.json 開啟 experimentalDecorators

// 裝飾器是一個函式，通常名字開頭以大寫表示
// 在類前面加上 @ 符號，符號後方加上裝飾器的名字
// 當類被定義的時候，裝飾器就會執行，不需要實例化類
// 可以有多個裝飾器，裝飾器的執行順序是由下往上執行

// 類、方法、訪問裝飾器可以返回值，而屬性、參數也可返回值但TypeScript會忽略它

/* function Logger(constructor: Function) {
    console.log('Logging...');
    console.log(constructor);
} */
function Logger(logString: string) {
    return function (constructor: any) {
        console.log(logString);
        console.log(constructor);
    };
}

function WithTemplate(template: string, hookId: string) {
    console.log('TEMPLATE FACTORY');
    return function (constructor: any) {
        console.log('Rendering template');
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name;
        }
    };
}

// 112
/* function WithTemplate(template: string, hookId: string) {
    console.log('TEMPLATE FACTORY');
    // 該函式接受一個泛型 T，限定 T 是一個具有建構函式的類，並且建構函式的返回類型必須具有一個名為 name 的字串屬性
    return function <T extends { new (...args: any[]): { name: string } }>(
        originalConstructor: T
    ) {
        // 這個函式會定義一個新類，繼承自原始建構函式 T，
        return class extends originalConstructor {
            constructor(..._: any[]) {
                super();
                console.log('Rendering template');
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1')!.textContent = this.name;
                }
            }
        };
    };
} */

// @Logger('LOGGING - PERSON')
@Logger('LOGGING')
// @WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
    name = 'Justine';

    constructor() {
        console.log('Creating person object...');
    }
}

const pers = new Person();
console.log(pers);

// ---

// 也可以在屬性上使用裝飾器，target > 原型 name > 屬性名稱
function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator!');
    console.log('Property', target);
    console.log('Property', propertyName);
}

// 也可以在 accessor (geeter/seeter)使用裝飾器，target > 原型 name > (get/set)名稱 descriptor > 屬性描述器
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator!');
    console.log('accessor', target);
    console.log('accessor', name);
    console.log('accessor', descriptor);
}

// 也可以在方法中使用裝飾器，target > 原型 name > (get/set)名稱 descriptor > 屬性描述器
function Log3(
    target: any,
    name: string | Symbol,
    descriptor: PropertyDescriptor
) {
    console.log('Method decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

// 也可以在參數使用裝飾器，target > 原型 name > 參數名稱 position > 參數的位置
function Log4(target: any, name: string | Symbol, position: number) {
    console.log('P decorator!');
    console.log(target);
    console.log(name);
    console.log(position);
}

@Logger('LOGGING')
class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error('Invalid price - should be positive!');
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}

// 113

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    console.log('@@@@@', descriptor);

    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        },
    };
    return adjDescriptor;
}

class Printer {
    message = 'This works !';

    @Autobind
    showMessage() {
        console.log(this.message);
    }
}

const p = new Printer();

const btn = document.querySelector('button')!;

btn.addEventListener('click', p.showMessage);

// 115、116

interface ValidatorConfig {
    [property: string]: {
        [validateProp: string]: string[]; // ['required','positive']
    };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ['required'],
    };

    console.log(target);
}

function PositiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ['positive'],
    };
    console.log(target);
}

function validate(obj: any) {
    const objValitorConfig = registeredValidators[obj.constructor.name];
    console.log(`##`, objValitorConfig);
    if (!objValitorConfig) {
        return true;
    }
    let isValid = true;
    for (const prop in objValitorConfig) {
        for (const validator of objValitorConfig[prop]) {
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}

class Course {
    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(t: string, n: number) {
        this.title = t;
        this.price = n;
    }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;

    const createCourse = new Course(title, price);

    if (!validate(createCourse)) {
        alert('Invalid input please try again!');
        return;
    }

    console.log(createCourse);
});
