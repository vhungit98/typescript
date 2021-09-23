// ------------- Kiểu dữ liệu -------------
console.log("Hello!");
// String
var string = "Hưng";
// Number
var number = 1;
// Mảng chữ
var array_string = ["Hưng 1", "Hưng 2", "Hưng 3"];
// Mảng số
var array_number = [1, 2, 3];
// True / False
var boolean = true;
// Enum
var trangthai;
(function (trangthai) {
    trangthai["pending"] = "\u0110ang ch\u1EDD";
    trangthai["done"] = "Xong";
})(trangthai || (trangthai = {}));
// Tuple: Mảng có thể chứa nhiều kiểu dữ liệu
var tuple = ["Hưng", 23];
// Any
var x = {
    pending: "Đang chờ",
    done: "Xong"
};
// Void: Không chứa giá trị (thường dùng trong function, không return)
function tinhtoan() {
    console.log("Xin chào!");
}
tinhtoan();
// console.log(`Chào ${string}`);
// console.log(`Số ${number}`);
// console.log(`Mảng chữ: ${array_string}`);
// console.log(`Mảng số: ${array_number}`);
// console.log(`Đúng sai: ${boolean}`);
// console.log(`Enum: ${trangthai.pending}`);
// console.log(tuple);
// console.log(x);
// ------------- Ép kiểu -------------
// Note: chỉ dùng cho kiểu any
var kieu1 = "Lê Văn Hưng";
console.log(kieu1.length); // C1
console.log(kieu1.length); // C2
// ------------- 2 cách khai báo anonymous function -------------
var a = function (x, y) {
    return "Ch\u00E0o " + y + ", s\u1ED1 " + x;
};
var b = function (x, y) {
    return "Ch\u00E0o " + y + ", s\u1ED1 " + x;
};
console.log(b(23, 'Hưng'));
// ------------- Khai báo nhanh function -------------
var h = function (x) {
    return x + 1;
};
console.log(h(5));
