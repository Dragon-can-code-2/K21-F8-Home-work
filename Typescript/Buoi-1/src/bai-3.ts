type Size = "S" | "M" | "L"

interface Drink {
    name: string,
    size: Size,
    quantity: number,
    addTopping: boolean
}


function getPriceBySize(size: Size): number {
    if (size === "S") {
        return 25000
    }
    if (size === "M") {
        return 30000
    }
    if (size === "L") {
        return 35000
    }
    return 0;
}

function calculateDrink(drink: Drink): number {
    let totalPrice: number = 0;
    const price: number = getPriceBySize(drink.size)

    totalPrice = price * drink.quantity
    if (drink.addTopping) {
        totalPrice += 5000 * drink.quantity;
    }
    return totalPrice
}

calculateDrink({
    name: "Trà sữa trân châu",
    size: "M",
    quantity: 2,
    addTopping: true
})

function formatMoney(money: number): string {
    return `${money.toLocaleString("vi-VN")} đ`;
}

function calculateOrder(drink: Drink[]): number {
    let totalOrder: number = 0;
    let discountOrder: number = 0;
    let payment: number = 0;
    for (let i: number = 0; i < drink.length; i++) {
        const totalPrice: number = calculateDrink(drink[i])
        totalOrder += totalPrice;
    }
    console.log(`Tổng hoá đơn là: ${formatMoney(totalOrder)}`)

    if (totalOrder >= 200000) {
        discountOrder = totalOrder * 10 / 100
        payment = totalOrder - discountOrder;
    } else {
        payment = totalOrder
    }

    console.log(`Giảm giá: ${formatMoney(discountOrder)}`)
    console.log(`Tổng hoá đơn sau giảm là: ${formatMoney(payment)}`)
    return payment;
}

calculateOrder([
    {
        name: "Hồng trà sữa huyền châu",
        size: "M",
        quantity: 2,
        addTopping: true
    },
    {
        name: "Trà đào hồng đài",
        size: "L",
        quantity: 1,
        addTopping: false
    },
    {
        name: "Iki Matcha Latte",
        size: "S",
        quantity: 3,
        addTopping: true
    }
])