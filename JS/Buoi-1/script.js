console.log("hello world");

/* bài 1 */

let a = 10;
let b = 3;

console.log("Tổng:", a + b);
console.log("Hiệu:", a - b);
console.log("Tích:", a * b);
console.log("Thương:", a / b);

/* bài 2 */

let chieuDai = 10;
let chieuRong = 5;

console.log("Diện tích:", chieuDai * chieuRong);
console.log("Chu vi:", (chieuDai + chieuRong) * 2);

/* bài 3 */

let soN = 7;
console.log("số dư của 7 / 2 là", soN % 2);

/* bài 4 */
let doC = 25;
console.log(doC + " " + "độ C đổi sang độ F là:", (doC * 9) / 5 + 32, "độ F");
doC += 5;
console.log("sau khi tăng 5 độ C, kết quả là: ", doC);
console.log(doC + " " + "độ C đổi sang độ F là:", (doC * 9) / 5 + 32, "độ F");

/* bài 5 */
let soKwh = 150;
let soTien100sodau = 100 * 1500;
let soTientren100so = (soKwh - 100) * 2000;
console.log("tổng tiền 100 số điện là: ", soTien100sodau);
console.log("tổng tiền trên 100 số điện là: ", soTientren100so);
console.log("tổng số tiền điện 150 số là: ", soTien100sodau + soTientren100so);
