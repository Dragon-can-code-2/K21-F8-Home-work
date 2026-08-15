
function Product(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

Product.prototype.getTotal = function () {
    return this.price * this.quantity;
}

const product1 = new Product("Bàn phím", 890000, 2);
const product2 = new Product("Chuột", 500000, 3);

console.log(product1.getTotal())
console.log(product2.getTotal())

console.log(product1.getTotal === product2.getTotal)


/* bài 2 */
class Employee {
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary
    }
}

class Manager extends Employee {
    constructor(name, baseSalary, bonus) {
        super(name, baseSalary);
        this.bonus = bonus;
    }

    getSalary() {
        return this.baseSalary + this.bonus
    }
}

const manager = new Manager("long", 15000000, 5000000);

console.log(manager.getSalary());


/* bài 3 */
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };

function deepEqual(objA, objB) {

}

// console.log(deepEqual(obj1, obj2))


/* bài 4 */
const original = {
    name: "Alice",
    address: {
        city: "Hanoi",
        zip: "10000"
    }
};

const shallowCopy = { ...original }
shallowCopy.address.city = "Sai Gon"
console.log(shallowCopy)
console.log(original)


const deepCopy = structuredClone(original)
deepCopy.address.city = "Nha Trang";

console.log(deepCopy);
console.log(original);

/* bài 5 */
const user = {
    id: 1,
    name: "Bình",
    age: 23,
    contact: {
        email: "binh@example.com",
        phone: "0909123456"
    },
    hobbies: ["reading", "coding", "gaming"]
};


const { name, contact: { email, phone } } = user

console.log(name, email, phone)

const { age = 18 } = user

console.log(age)

const [hobby1, hobby2, ...restHobbies] = user.hobbies;
console.log(restHobbies)