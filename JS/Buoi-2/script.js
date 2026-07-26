console.log("hello world");

/* bài 1 */
let n = -7;
if (n == 0) {
  console.log("số 0");
} else if ((n > 0) & (n % 2 == 0)) {
  console.log("số dương chẳn");
} else if ((n > 0) & (n % 2 != 0)) {
  console.log("số dương lẻ");
} else if ((n < 0) & (n % 2 == 0)) {
  console.log("số âm chẳn");
} else {
  console.log("số âm lẻ");
}

/* bài 2 */
let a = 0;
let b = 1;
let c = "";
let d = "hello";
let e = null;
let f = undefined;
let g = NaN;
let h = " ";

if (a) {
  console.log("a là truthy");
} else {
  console.log("a là falsy");
}

if (b) {
  console.log("b là truthy");
} else {
  console.log("b là falsy");
}

if (c) {
  console.log("c là truthy");
} else {
  console.log("c là falsy");
}

if (d) {
  console.log("d là truthy");
} else {
  console.log("d là falsy");
}

if (e) {
  console.log("e là truthy");
} else {
  console.log("e là falsy");
}

if (f) {
  console.log("f là truthy");
} else {
  console.log("f là falsy");
}

if (g) {
  console.log("g là truthy");
} else {
  console.log("g là falsy");
}

if (h) {
  console.log("h là truthy");
} else {
  console.log("h là falsy");
}

/* bai 3 */
let diem = 8.5;
if (!diem) {
  console.log("Chưa có điểm");
} else if (diem < 0 || diem > 10) {
  console.log("điểm không hợp lệ");
} else if (diem >= 9 && diem <= 10) {
  console.log("Xuất sắc");
} else if (diem >= 7 && diem < 9) {
  console.log("Giỏi");
} else if (diem >= 5 && diem < 7) {
  console.log("Trung bình");
} else {
  console.log("Yếu");
}

/* bài 4 */
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

/* bài 5 */
let soNguyenToDeBaiCho = 29;
let isPrime = true;

if (soNguyenToDeBaiCho <= 1) {
  isPrime = false;
}

for (let i = 2; i < soNguyenToDeBaiCho; i++) {
  if (soNguyenToDeBaiCho % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log(soNguyenToDeBaiCho + " là số nguyên tố");
} else {
  console.log(soNguyenToDeBaiCho + " không phải là số nguyên tố");
}
