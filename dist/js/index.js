"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// string, boolean, number, ...
let x = 10;
x = 20;
console.log(x);
// inference x annotation
let y = 16;
// basic types
let firstName = "zEus";
let age = 37;
const isAdmin = true;
console.log(firstName);
// object
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstName.toUpperCase());
myNumbers.push(5);
console.log(myNumbers.join());
// tuples
let myTuple;
myTuple = [5, "mine", ["air", "shortness"]];
console.log(myTuple);
const userId = 10;
const productId = "0001";
const shirtId = 123;
// enum
// clothes size (size average, size small)
var Size;
(function (Size) {
    Size["S"] = "Small";
    Size["A"] = "Average";
    Size["B"] = "Big";
})(Size || (Size = {}));
const shirt = {
    name: "Usual Shirt",
    size: Size.B,
};
console.log(shirt);
// literal types
let test;
test: "authenticated";
test: null;
// functions
function sum(a, b) {
    return a + b;
}
console.log(sum(7, 5));
function logger(msg) {
    console.log();
}
logger("Testing!");
function greeting(name, greet) {
    if (greet) {
        console.log(`Hello ${greet} ${name}`);
        return;
    }
    console.log(`Hello ${name}`);
}
greeting('Josè');
greeting('Wilton, Sir');
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
// narrowing
// type checking
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`The number is ${info}`);
        return;
    }
    console.log("Not a number");
}
doSomething(8);
doSomething(true);
// generics
function showArrayItems(arr) {
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
    name;
    role;
    isApproved;
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`The name of the user is: ${this.name}`);
    }
}
const Rugger = new User("Rugger", "Admin", true);
console.log(Rugger);
Rugger.showUserName();
class Car {
    brand;
    wheels;
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`The car brand is ${this.brand}`);
    }
}
const fusion = new Car("Ford", 4);
fusion.showBrand();
// heritage
class SuperCar extends Car {
    engine;
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 2.0);
console.log(a4);
// decorators
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            id = Math.random();
            createdAt = new Date();
        };
    };
}
let Person = class Person {
    name;
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParameters(),
    __metadata("design:paramtypes", [String])
], Person);
const sam = new Person("Sam");
console.log(sam);
