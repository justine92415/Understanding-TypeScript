// 普通寫法
/* class Department {
    public name: string; // 公共屬性，外部可存取
    private employees: string[] = []; // 私有屬性，外部不能存取，只能在Department中使用

    constructor(n: string) {
        this.name = n;
    }

    describe(this: Department) {
        console.log('Department: ', this.name);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformatin() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
} */
// 縮寫
abstract class Department {
    // private employees: string[] = [];
    protected employees: string[] = []; // protected 可將繼承此類的子類使用此屬性，同樣無法在外部存取

    // static允許將方法及屬性添加到class中，可以直接透過class調用方法會使用屬性，而不需要實例化
    // 且不能在該類的實例對象上使用
    static fiscalYear = 2020;

    // 這樣寫告訴TypeScript不僅要在constructor中用到這些參數]，還要用完全相同的名字為這個類創建屬性
    // readonly 表示屬性在初始化之後就不能再被更改
    constructor(protected readonly id: string, public name: string) {
        this.id = id;
        this.name = name;
    }

    static createEmployee(name: string) {
        return { name };
    }

    // 想強制所有基於此類的子類共享一些公共的方法或屬性
    // 可以將此類變為抽象類(abstract)，並在describe前方加上abstract修飾符，使該方法成為抽象方法
    // 抽象方法只能聲明，不能實現(不能有大括號{})，並強制在子類實現該方法(若子類沒有該方法會報錯)
    // 抽象類無法實例化，只能被繼承

    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformatin() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    constructor(id: string, public admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log('IT Department - ID: ' + this.id);
    }
}

class AccountingDepartment extends Department {
    private lastReoprt: string;
    private static instance: AccountingDepartment;

    get mostRecentReport() {
        if (this.lastReoprt) {
            return this.lastReoprt;
        }
        throw new Error('No report found.');
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error('Please pass in a valid value!');
        }
        this.addReport(value);
    }

    // 如果只想讓AccountingDepartment只有一個實例對象的話()
    // 可以將constructor加上private修飾符
    // 這樣就無法在外部使用new關鍵字來實例化對象

    // 可以在此類中新增靜態方法(getInstance())及屬性(instance)來達成實例化單一的對象

    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReoprt = reports[0];
    }

    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }

    describe() {
        console.log('Accounting Department - ID: ' + this.id);
    }

    addEmployee(name: string) {
        if (name === 'Justine') return;
        // 因為private的關係employees只能在Department中使用
        // 若想在被繼承的子類使用該屬性，將private改為protected即可
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReoprt = text;
    }

    printReports() {
        console.log(this.reports);
    }
}

const employee = Department.createEmployee('Justine');
console.log(employee, Department.fiscalYear);

const it = new ITDepartment('d1', ['Justine']);

it.addEmployee('Justine');
it.addEmployee('Ann');

// 如果不希望使用者用addEmployee以外的方法增加員工，就讓employees變為私有屬性
// accounting.employees[2] = 'Max';

it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformatin();

console.log(it);

// const accounting = new AccountingDepartment('d2', []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2);
console.log(accounting === accounting2);

accounting.mostRecentReport = 'Year End Report';
accounting.addReport('Something went wrong...');
console.log(accounting.mostRecentReport);

accounting.addEmployee('Ann');
accounting.addEmployee('Max');
accounting.printReports();
// accounting.printEmployeeInformatin();

accounting.describe();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();
