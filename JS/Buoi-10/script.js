/*
  BÀI TẬP: VALIDATE FORM ĐĂNG KÝ
  ---------------------------------
  Xem đầy đủ yêu cầu trong file de-bai.md.
  chỉ cần code trong file này. KHÔNG cần sửa index.html / style.css.

  Các id có sẵn trong HTML mà em sẽ cần dùng tới:
    - Input:        fullname, username, email, phone, password, confirm
    - Field (cha):   field-fullname, field-username, field-email,
                      field-phone, field-password, field-confirm
    - Form:          registerForm
    - Kết quả:       result
*/

// ========== BƯỚC 1: Lấy phần tử ==========
// TODO: Lấy thẻ <form id="registerForm"> và thẻ <div id="result">
// const form = ...
// const resultBox = ...

const form = document.querySelector("#registerForm")
const resultBox = document.querySelector("#result")

// ========== BƯỚC 2: Hàm hiển thị lỗi / hết lỗi ==========

// TODO: Viết hàm showError(fieldName, message)
// - Tìm div cha có id = "field-" + fieldName
// - Thêm class "error" vào div đó, xoá class "success" (nếu có)
// - Set nội dung text cho phần tử ".error-msg" bên trong div đó = message
function showError(fieldName, message) {
  const field = document.getElementById("field-" + fieldName)

  field.classList.add("error");
  field.classList.remove("success");

  const errorMsg = field.querySelector(".error-msg")
  errorMsg.textContent = message
}



// TODO: Viết hàm showSuccess(fieldName)
// - Tìm div cha có id = "field-" + fieldName
// - Xoá class "error", thêm class "success"
function showSuccess(fieldName) {
  const field = document.getElementById("field-" + fieldName)
  field.classList.remove("error");
  field.classList.add("success");
}

// ========== BƯỚC 3: Các hàm validate từng ô ==========
// Mỗi hàm: đọc giá trị input tương ứng, kiểm tra theo quy tắc trong de-bai.md,
// gọi showError() hoặc showSuccess() phù hợp, và PHẢI return true / false.

function validateFullname() {
  // TODO
  // Gợi ý: const value = document.getElementById('fullname').value.trim();
  const value = document.getElementById('fullname').value.trim()
  if (value === "") {
    showError("fullname", "Họ và tên không được để trống")
    return false;
  }

  if (value.length < 2) {
    showError("fullname", "Họ và tên tối thiểu 2 ký tự")
    return false;
  }

  showSuccess('fullname')
  return true;
}

function validateUsername() {
  // TODO
  const value = document.getElementById('username').value.trim()
  if (value === "") {
    showError("username", "Tên đăng nhập không được để trống")
    return false;
  }

  if (value.length < 4 || value.length > 16) {
    showError("username", "Tên đăng nhập phải chứa 4 đến 16 ký tự")
    return false;
  }

  const usernameRegex = /^[a-zA-Z0-9_]{4,16}$/
  if (!usernameRegex.test(value)) {
    showError("username", "Tên đăng nhập chỉ bao gồm chữ, osf, dấu gạch dưới")
    return false;
  }

  showSuccess('username')
  return true;
}

function validateEmail() {
  const value = document.getElementById('email').value.trim()
  if (value === "") {
    showError("email", "Email không được để trống")
    return false;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) {
    showError('email', 'Không đúng định dạng email')
    return false
  }

  showSuccess('email')
  return true;
}

function validatePhone() {
  const value = document.getElementById('phone').value.trim()
  if (value === "") {
    showError("phone", "Số điện thoại không được để trống")
    return false;
  }

  const phoneRegex = /^0[0-9]{9}$/
  if (!phoneRegex.test(value)) {
    showError("phone", "Số điện thoại phải bắt đầu từ 0 và đủ 10 số")
    return false;
  }

  showSuccess('phone')
  return true;
}

function validatePassword() {
  const value = document.getElementById('password').value.trim()
  if (value === "") {
    showError("password", "Mật khẩu không được để trống")
    return false;
  }
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/
  if (!passwordRegex.test(value)) {
    showError("password", "Tối thiểu 8 ký tự, có ít nhất 1 chữ và 1 số")
    return false;
  }

  showSuccess('password')
  return true;
}

function validateConfirm() {
  const password = document.getElementById('password').value;
  const confirm = document.getElementById('confirm').value;

  if (confirm === "") {
    showError("confirm", "Xác nhận mật khẩu không được để trống")
    return false;
  }

  if (password !== confirm) {
    showError("confirm", "Xác nhận mật khẩu và mật khẩu không trùng khớp")
    return false;
  }
  // Lưu ý: cần lấy giá trị của CẢ 2 ô "password" và "confirm" để so sánh
  showSuccess('confirm')
  return true; // sửa lại cho đúng
}

// ========== BƯỚC 4: Gắn sự kiện blur ==========
// TODO: Với mỗi input, lắng nghe sự kiện "blur" (mất focus)
// và gọi hàm validate tương ứng.
//
// Gợi ý:
// document.getElementById('fullname').addEventListener('blur', validateFullname);
// (làm tương tự cho 5 ô còn lại)
document
  .getElementById('fullname')
  .addEventListener('blur', validateFullname);
document
  .getElementById('username')
  .addEventListener('blur', validateUsername);
document
  .getElementById('email')
  .addEventListener('blur', validateEmail);
document
  .getElementById('phone')
  .addEventListener('blur', validatePhone);
document
  .getElementById('password')
  .addEventListener('blur', validatePassword);
document
  .getElementById('confirm')
  .addEventListener('blur', validateConfirm);


// ========== BƯỚC 5: Gắn sự kiện submit ==========
// TODO:
// 1. Lắng nghe sự kiện "submit" trên form
// 2. Gọi event.preventDefault() để chặn hành vi mặc định
// 3. Gọi TẤT CẢ 6 hàm validate (không dùng && liên tiếp — xem lý do trong de-bai.md)
// 4. Nếu tất cả đều true -> hiện #result với class "show ok" và nội dung phù hợp
// 5. Nếu có ít nhất 1 false -> hiện #result với class "show fail" và nội dung phù hợp
//
// Gợi ý cấu trúc:


form.addEventListener('submit', function (e) {
  e.preventDefault();
  const checks = [
    validateFullname(),
    validateUsername(),
    validateEmail(),
    validatePhone(),
    validatePassword(),
    validateConfirm()
  ];
  const isValid = checks.every(Boolean);

  if (isValid === true) {
    resultBox.className = "show ok";
    resultBox.textContent =
      "✔ Hợp lệ! Dữ liệu sẵn sàng để gửi lên server.";
  } else {
    resultBox.className = "show fail";
    resultBox.textContent =
      "✔ Không hợp lệ! Vui lòng điền đầy đủ thông tin.";
  }
});

