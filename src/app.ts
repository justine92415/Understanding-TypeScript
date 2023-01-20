type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    starDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Justine',
    privileges: ['create-server'],
    starDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString(); // 當有其中一個為 string 類型就做字串相加
    } else {
        return a + b; // 當兩個皆為 number 類型的話就做數字相加
    }
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformatin(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);

    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
}

class Car {
    drive() {
        console.log('Driving...');
    }
}

class Truck {
    drive() {
        console.log('Driving a truck ...');
    }

    loadCargo(amount: number) {
        console.log('Loading cargo ...' + amount);
    }
}

type Vehicle = Car | Truck;

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    /* if ('loadCargo' in vehicle) {
        vehicle.loadCargo(1000);
    } */

    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeeed;
            break;
    }
    console.log('Moving at speed: ' + speed);
}

moveAnimal({ type: 'bird', flyingSpeed: 10 }); // Moving at speed: 10

/* const userInputElement = <HTMLInputElement>(
    document.getElementById('user-input')
); */
const userInputElement = document.getElementById(
    'user-input'
) as HTMLInputElement;
userInputElement.value = 'Hi I am Justine 😀';

interface ErrorContainer {
    // { emali: 'No a valid email', username: 'Must start with a character!'}
    [key: string]: string;
}

const errorEmail: ErrorContainer = {
    email: 'Not a valid email!',
    username: 'Must start with a character!',
};

const errorPhone: ErrorContainer = {
    phone: 'Not a valid phone!',
};
