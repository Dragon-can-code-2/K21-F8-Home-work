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