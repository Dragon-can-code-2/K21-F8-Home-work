const ownerName: string = "BẢO LONG"
const kwh: number = 120

function calculateBill(kwh: number): number {
    if (kwh <= 50) {
        return kwh * 1800
    }
    if (kwh <= 100) {
        return 50 * 1800 + (kwh - 50) * 2000;
    }
    return (
        50 * 1800 +
        50 * 2000 +
        (kwh - 100) * 2500
    );
}

function isHighUsage(kwh: number): boolean {
    return kwh > 200;
}

const bill: number = calculateBill(kwh);
const highUsage: boolean = isHighUsage(kwh);

console.log(`Chủ hộ: ${ownerName}`);
console.log(`Số điện: ${kwh} kWh`);
console.log(`Tiền điện: ${bill} đ`);
console.log(`Dùng nhiều điện: ${highUsage ? "có" : "không"}`);

calculateBill(kwh)