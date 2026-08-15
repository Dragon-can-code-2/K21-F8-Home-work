/* bài 1 */
function checkAge(age) {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            resolve("Đủ tuổi")
        } else {
            reject("Chưa đủ tuổi")
        }
    });
}

checkAge(23)
    .then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })

/* bài 2 */
function fetchUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: id,
                name: "User " + id,
            })
        }, 1000);
    });
}

fetchUser(5)
    .then((user) => {
        console.log(user);
    });

console.log("Đang chờ...");


function layDonHang(id) {
    return new Promise((resolve, reject) => {
        resolve({
            id, sanPham: "Áo thun"
        })
    })
}

function tinhTien(donHang) {
    return new Promise((resolve, reject) => {
        resolve(400000)
    })
}

function apDungGiamGia(gia) {
    return new Promise((resolve, reject) => {
        const giaSauGiam = gia - (gia * 10) / 100;
        resolve(giaSauGiam);
    })
}


layDonHang(1)
    .then((donHang) => {
        console.log("Đơn Hàng: ", donHang)
        return tinhTien(donHang)
    })
    .then((gia) => {
        console.log("Giá gốc là: " + gia)
        return apDungGiamGia(gia)
    })
    .then((giaSauGiam) => {
        console.log("Giá sau khi giảm 10% là: " + giaSauGiam.toLocaleString('vi', { style: 'currency', currency: 'VND' }))
    })

/* bài 4 */
function layDiemToan() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(8);
        }, 1000);
    });
}

function layDiemVan() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(7);
            reject();
        }, 2000);
    });
}

function layDiemAnh() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(9);
        }, 3000);
    });
}

console.time("Thời gian thực thi");

Promise.all([
    layDiemToan(),
    layDiemVan(),
    layDiemAnh(),
])
    .then((result) => {
        const [diemToan, diemVan, diemAnh] = result;

        const diemTrungBinh = (diemToan + diemVan + diemAnh) / 3;

        console.log("Điểm trung bình:", diemTrungBinh);

        console.timeEnd("Thời gian thực thi");
    });


Promise.all([
    layDiemToan(),
    layDiemVan(),
    layDiemAnh()
])
    .then((results) => {
        console.log("Promise all:", results);
    })
    .catch((error) => {
        console.log("Promise all bị lỗi:", error);
    });


Promise.allSettled([
    layDiemToan(),
    layDiemVan(),
    layDiemAnh()
])
    .then((results) => {
        console.log("Promise allSettled:", results);
    });