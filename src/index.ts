// string, boolean, number, ...
let x: number = 10;
x = 20;

console.log(x);

// inference x annotation
let y = 16;

// basic types
let firstName: string = "zEus";
let age: number = 37;
const isAdmin: boolean = true;

console.log(firstName);

// object
const myNumbers: number[] = [1, 2, 3]
console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstName.toUpperCase());
myNumbers.push(5);
console.log(myNumbers.join());

// tuples
let myTuple: [number, string, string[]];
myTuple = [5, "mine", ["air", "shortness"]]
console.log(myTuple);

// type alias
type myIdType = number | string;

const userId: myIdType = 10;
const productId: myIdType = "0001";
const shirtId: myIdType = 123;

// enum
// clothes size (size average, size small)
enum Size {
  S = "Small",
  A = "Average",
  B = "Big",
}

const shirt = {
  name: "Usual Shirt",
  size: Size.B,
}

console.log(shirt);

// literal types
let test: "authenticated" | null;

test: "authenticated";
test: null;

// functions
function sum(a: number, b:number) {
  return a + b;
}

console.log(sum(7, 5));

function logger(msg: string): void {
  console.log();
}

logger("Testing!");

function greeting(name: string, greet?: string) {
    if (greet) {
      console.log(`Hello ${greet} ${name}`);
      return;
    }
    console.log(`Hello ${name}`);
}

greeting('Josè');
greeting('Wilton, Sir');

// interface
interface MathFunctionParams {
  n1: number,
  n2: number,
}
function sumNumbers(nums: MathFunctionParams) {
  return nums.n1 + nums.n2
}

console.log(sumNumbers({n1: 1, n2: 2}));

// narrowing
// type checking
function doSomething(info: number | boolean) {
  if (typeof info === "number") {
    console.log(`The number is ${info}`);
    return;
  }
  console.log("Not a number");
}
doSomething(8);
doSomething(true);

// generics
function showArrayItems<T>(arr: T[]) {
  arr.forEach((item) => {
    console.log(`Item: $(item)`);
  });
}

const a1 = [1, 2, 3];
const a2 = ["A", "B", "C"];

showArrayItems(a1);
showArrayItems(a2);

// classes
class User {
  name
  role
  isApproved

  constructor(name: string, role: string, isApproved: boolean) {
    this.name = name
    this.role = role
    this.isApproved = isApproved
  }

  showUserName() {
    console.log(`The name of the user is: ${this.name}`)
  }
}

const Rugger = new User("Rugger", "Admin", true);

console.log(Rugger);
Rugger.showUserName();

// interfaces in classes
interface IVehicle {
  brand: string
  showBrand(): void
}

class Car implements IVehicle {
  brand
  wheels

  constructor(brand: string, wheels: number) {
    this.brand = brand
    this.wheels = wheels
  }

  showBrand(): void {
      console.log(`The car brand is ${this.brand}`);
  }
}

const fusion = new Car("Ford", 4)

fusion.showBrand();

// heritage
class SuperCar extends Car {
  engine

  constructor(brand: string, wheels: number, engine: number) {
    super(brand, wheels)
    this.engine = engine
  }
}

const a4 = new SuperCar("Audi", 4, 2.0);

console.log(a4);

// decorators
function BaseParameters() {
  return function <T extends {new (...args: any[]): {}}>(constructor: T) {
    return class extends constructor {
      id = Math.random();
      createdAt = new Date();
    };
  };
}

@BaseParameters()
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const sam = new Person("Sam");
console.log(sam);
