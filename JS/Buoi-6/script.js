const cart = [
    { name: "Áo thun", price: 150000, quantity: 2 },
    { name: "Quần jean", price: 350000, quantity: 1 },
    { name: "Giày", price: 500000, quantity: 1 },
];

const total = cart.reduce((sum, product) => {
    return sum + product.price * product.quantity;
}, 0);
console.log(total);

const highestProduct = cart.map(item => {
    console.log(item)
    let tongtien = item.price * item.quantity;

    return tongtien;
})
console.log(Math.max(...highestProduct));

const quantityProduct = cart.filter(item => {
    return item.quantity > 1;
})
console.log(...quantityProduct)

const nameProduct = quantityProduct.map(item => {
    return item.name
})
console.log(nameProduct)


/* bài 2 */

const student = {
    name: "Minh",
    scores: [8, 7.5, 9, 6],
    // TODO: Viết các method dưới đây
    getAverage() {
        const total = this.scores.reduce((sum, score) => {
            return sum + score
        }, 0);
        return total / this.scores.length;
    },
    getStatus() {
        const average = this.getAverage();
        if (average >= 8) {
            return "Giỏi";
        } else if (average >= 6.5) {
            return "Khá";
        } else {
            return "Trung bình";
        }
    }
};
console.log(`${student.name} đạt loại ${student.getStatus()} với điểm trung bình ${student.getAverage().toFixed(1)}`)

/* bài 3 */
const employees = [
    { id: "E01", name: "An", department: "Sales" },
    { id: "E02", name: "Bình", department: "IT" },
    { id: "E03", name: "Chi", department: "IT" },
    { id: "E04", name: "Chi", department: "IT" },
    { id: "E05", name: "Chi", department: "IT" },
    { id: "E06", name: "Chi", department: "IT" },
];

const employeeObject = employees.reduce((result, employee) => {
    result[employee.id] = employee;
    return result
}, {})
console.log(employeeObject)

const employeeArray = Object.values(employeeObject)
console.log(employeeArray)

const employeeDepartmentCount = employeeArray.reduce((result, employee) => {
    const department = employee.department;
    if (result[department]) {
        result[department]++;
    } else {
        result[department] = 1;
    }
    return result;
}, {})
console.log(employeeDepartmentCount)

/* bài 4 */
const product = {
    name: "Bàn phím cơ",
    price: 890000,
    discount: 10, // %
    // TODO: Viết các method dưới đây
    getFinalPrice() {
        return this.price - (this.price * this.discount) / 100;
    },
    showInfo() {
        console.log(
            `${this.name}: giá gốc ${this.price}, giá sau giảm ${this.getFinalPrice()}`
        );
    }
};

product.showInfo()

product.discount = 20;

product.showInfo()

/* bài 5 */
const todos = [
    { task: "Học JavaScript", done: false },
    { task: "Làm bài tập", done: true },
    { task: "Đọc sách", done: false },
];

const notDone = todos.filter(todo => {
    return todo.done === false;
})
console.log(notDone);

const taskName = todos.map(todo => {
    return todo.task
})
console.log(taskName);

function countDone(todos) {
    const done = todos.filter(todo => {
        return todo.done === true;
    })
    return done.length;
}

console.log(countDone(todos))

function markAsDone(todos, taskName) {
    const todo = todos.find(todo => {
        return todo.task === taskName
    });
    if (todo) {
        todo.done = true;
    }
}

markAsDone(todos, "Đọc sách");

console.log(todos)
